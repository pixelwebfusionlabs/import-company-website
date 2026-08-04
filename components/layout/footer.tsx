"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Loader2, Share2 } from "lucide-react";
import { company } from "@/lib/content/company";
import { navigation } from "@/lib/content/site";
import { toast } from "sonner";

const socialLinks = [
  { href: company.socials.linkedin, label: "LinkedIn" },
  { href: company.socials.facebook, label: "Facebook" },
  { href: company.socials.instagram, label: "Instagram" },
  { href: company.socials.twitter, label: "X / Twitter" },
] as const;

export function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website: honeypot }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      toast.success("You are subscribed. Welcome aboard.");
      setEmail("");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Subscription failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <footer className="border-t border-border bg-surface-dark text-brand-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-20">
        <div className="lg:col-span-4">
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src={company.logo}
              alt={`${company.name} logo`}
              width={48}
              height={48}
              className="size-12 rounded-lg bg-white object-contain p-1"
            />
            <div>
              <span className="font-display block text-xl">SN Factory</span>
              <span className="text-xs tracking-[0.18em] text-brand-cream/60 uppercase">
                {company.tagline}
              </span>
            </div>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-brand-cream/70">
            {company.description}
          </p>
          <div className="mt-6 flex gap-3">
            {socialLinks.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 transition hover:bg-white/10"
              >
                <Share2 className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3 lg:col-span-5">
          <div>
            <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-brand-orange uppercase">
              Company
            </p>
            <ul className="space-y-2.5 text-sm text-brand-cream/75">
              {navigation.company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-brand-orange uppercase">
              Services
            </p>
            <ul className="space-y-2.5 text-sm text-brand-cream/75">
              {navigation.services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-brand-orange uppercase">
              Contact
            </p>
            <ul className="space-y-2.5 text-sm text-brand-cream/75">
              <li>{company.address.full}</li>
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-white">
                  {company.email}
                </a>
              </li>
              <li>
                <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:text-white">
                  {company.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-3">
          <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-brand-orange uppercase">
            Newsletter
          </p>
          <p className="mb-4 text-sm text-brand-cream/70">
            Trade insights, sourcing tips, and logistics updates — no spam.
          </p>
          <form onSubmit={onSubmit} className="space-y-3">
            <label className="sr-only" htmlFor="footer-email">
              Email
            </label>
            <input
              id="footer-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="h-11 w-full rounded-full border border-white/15 bg-white/5 px-4 text-sm outline-none placeholder:text-brand-cream/40 focus:border-brand-pink"
            />
            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
            />
            <button
              type="submit"
              disabled={loading}
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-gradient-brand text-sm font-semibold text-white disabled:opacity-60"
            >
              {loading ? <Loader2 className="size-4 animate-spin" /> : null}
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-brand-cream/55 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
