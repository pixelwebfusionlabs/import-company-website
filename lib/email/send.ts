import { Resend } from "resend";
import nodemailer from "nodemailer";
import type { ContactFormValues } from "@/lib/validations/contact";
import { company } from "@/lib/content/company";

type MailPayload = {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
};

async function sendWithResend(payload: MailPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  const resend = new Resend(apiKey);
  const from = process.env.FROM_EMAIL || `SN Factory <noreply@snfactory.lk>`;

  const { error } = await resend.emails.send({
    from,
    to: payload.to,
    subject: payload.subject,
    html: payload.html,
    replyTo: payload.replyTo,
  });

  if (error) {
    console.error("Resend error:", error);
    return false;
  }
  return true;
}

async function sendWithNodemailer(payload: MailPayload) {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  if (!host || !user || !pass) return false;

  const transporter = nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT || 587),
    secure: Number(process.env.SMTP_PORT || 587) === 465,
    auth: { user, pass },
  });

  const from = process.env.FROM_EMAIL || user;

  await transporter.sendMail({
    from,
    to: payload.to,
    subject: payload.subject,
    html: payload.html,
    replyTo: payload.replyTo,
  });

  return true;
}

export async function sendEmail(payload: MailPayload) {
  try {
    const viaResend = await sendWithResend(payload);
    if (viaResend) return { ok: true, provider: "resend" as const };
  } catch (error) {
    console.error("Resend failed, trying SMTP:", error);
  }

  try {
    const viaSmtp = await sendWithNodemailer(payload);
    if (viaSmtp) return { ok: true, provider: "smtp" as const };
  } catch (error) {
    console.error("SMTP failed:", error);
  }

  // Dev-friendly fallback so forms work without credentials
  if (process.env.NODE_ENV !== "production") {
    console.info("[dev-mail]", payload.subject, "→", payload.to);
    return { ok: true, provider: "console" as const };
  }

  return { ok: false, provider: null };
}

export function companyNotificationHtml(data: ContactFormValues) {
  return `
    <h2>New inquiry from ${data.firstName} ${data.lastName}</h2>
    <p><strong>Company:</strong> ${data.company}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Country:</strong> ${data.country}</p>
    <p><strong>Service:</strong> ${data.service}</p>
    <p><strong>Budget:</strong> ${data.budget}</p>
    <p><strong>Timeline:</strong> ${data.timeline}</p>
    <p><strong>Subject:</strong> ${data.subject}</p>
    <p><strong>Message:</strong></p>
    <p>${data.message.replace(/\n/g, "<br/>")}</p>
    <p><strong>Newsletter:</strong> ${data.newsletter ? "Yes" : "No"}</p>
  `;
}

export function customerConfirmationHtml(data: ContactFormValues) {
  return `
    <h2>Thank you for contacting ${company.name}</h2>
    <p>Hi ${data.firstName},</p>
    <p>We received your inquiry about <strong>${data.subject}</strong> and will respond within one business day.</p>
    <p>In the meantime, explore our <a href="${process.env.NEXT_PUBLIC_SITE_URL || "https://snfactory.lk"}/services">services</a> or call us at ${company.phone}.</p>
    <p>— The ${company.name} team<br/><em>${company.tagline}</em></p>
  `;
}
