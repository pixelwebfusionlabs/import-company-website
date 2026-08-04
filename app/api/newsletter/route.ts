import { NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validations/contact";
import { rateLimit } from "@/lib/rate-limit";
import { sanitizeEmail } from "@/lib/sanitize";
import { sendEmail } from "@/lib/email/send";
import { company } from "@/lib/content/company";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    const limited = rateLimit(`newsletter:${ip}`, 8, 60_000);
    if (!limited.success) {
      return NextResponse.json({ error: "Too many requests." }, { status: 429 });
    }

    const body = await request.json();
    if (body.website) {
      return NextResponse.json({ ok: true });
    }

    const parsed = newsletterSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Enter a valid email" }, { status: 400 });
    }

    const email = sanitizeEmail(parsed.data.email);
    const contactEmail = process.env.CONTACT_EMAIL || company.email;

    const result = await sendEmail({
      to: contactEmail,
      subject: `[SN Factory] Newsletter signup: ${email}`,
      html: `<p>New newsletter subscriber: <strong>${email}</strong></p>`,
      replyTo: email,
    });

    if (!result.ok) {
      return NextResponse.json({ error: "Subscription failed" }, { status: 502 });
    }

    await sendEmail({
      to: email,
      subject: `Welcome to ${company.name} updates`,
      html: `<p>Thanks for subscribing. You will receive occasional trade insights from ${company.name}.</p>`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Newsletter API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
