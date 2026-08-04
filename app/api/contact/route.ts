import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations/contact";
import { rateLimit } from "@/lib/rate-limit";
import { sanitizeEmail, sanitizeText } from "@/lib/sanitize";
import {
  companyNotificationHtml,
  customerConfirmationHtml,
  sendEmail,
} from "@/lib/email/send";

export const runtime = "nodejs";

async function verifyRecaptcha(token?: string) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) return true; // optional in development
  if (!token) return false;

  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token }),
  });
  const data = (await res.json()) as { success?: boolean; score?: number };
  return Boolean(data.success);
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    const limited = rateLimit(`contact:${ip}`, 5, 60_000);
    if (!limited.success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again shortly." },
        { status: 429 },
      );
    }

    const body = await request.json();

    // Honeypot — silent success for bots
    if (body.website) {
      return NextResponse.json({ ok: true });
    }

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data", issues: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const captchaOk = await verifyRecaptcha(parsed.data.recaptchaToken);
    if (!captchaOk) {
      return NextResponse.json({ error: "Captcha verification failed" }, { status: 400 });
    }

    const data = {
      ...parsed.data,
      firstName: sanitizeText(parsed.data.firstName, 80),
      lastName: sanitizeText(parsed.data.lastName, 80),
      company: sanitizeText(parsed.data.company, 120),
      email: sanitizeEmail(parsed.data.email),
      phone: sanitizeText(parsed.data.phone, 30),
      country: sanitizeText(parsed.data.country, 80),
      service: sanitizeText(parsed.data.service, 80),
      budget: sanitizeText(parsed.data.budget, 80),
      timeline: sanitizeText(parsed.data.timeline, 80),
      subject: sanitizeText(parsed.data.subject, 160),
      message: sanitizeText(parsed.data.message, 5000),
    };

    const contactEmail = process.env.CONTACT_EMAIL || "hello@snfactory.lk";

    const notify = await sendEmail({
      to: contactEmail,
      subject: `[SN Factory] Inquiry: ${data.subject}`,
      html: companyNotificationHtml(data),
      replyTo: data.email,
    });

    if (!notify.ok) {
      return NextResponse.json(
        { error: "Unable to send email. Please try again or call us." },
        { status: 502 },
      );
    }

    await sendEmail({
      to: data.email,
      subject: "We received your inquiry — SN Factory",
      html: customerConfirmationHtml(data),
    });

    return NextResponse.json({
      ok: true,
      message: "Inquiry received",
      provider: notify.provider,
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
