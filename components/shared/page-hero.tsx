import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Reveal } from "@/components/shared/section";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
}) {
  return (
    <div className="relative overflow-x-hidden border-b border-border bg-brand-cream pt-24 pb-12 dark:bg-background sm:pt-28 sm:pb-16 md:pt-36 md:pb-20">
      <div className="bg-grid-fade pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-gradient-brand opacity-20 blur-3xl" />
      <Container className="relative">
        {breadcrumbs ? (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.label} className="flex items-center gap-2">
                  {i > 0 ? <span aria-hidden>/</span> : null}
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-foreground">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-foreground">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        <Reveal>
          {eyebrow ? (
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-brand-pink uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="font-display max-w-4xl text-3xl leading-tight sm:text-4xl md:text-6xl">{title}</h1>
          {description ? (
            <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:mt-5 sm:text-lg">{description}</p>
          ) : null}
        </Reveal>
      </Container>
    </div>
  );
}

export function CtaBand({
  title = "Ready to work with SN Factory?",
  description = "Request a quote for vehicle parts, lifts, hoists, home accessories, or installation support. We respond within one business day.",
  primaryHref = "/contact",
  primaryLabel = "Request a Quote",
  secondaryHref = "/contact",
  secondaryLabel = "Contact Us",
  className,
}: {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden py-20 md:py-28", className)}>
      <div className="absolute inset-0 bg-gradient-brand opacity-95" />
      <div className="bg-grid-fade pointer-events-none absolute inset-0 opacity-20" />
      <Container className="relative text-center text-white">
        <Reveal>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/85 sm:text-base">{description}</p>
          <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link
              href={primaryHref}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-ink transition hover:scale-[1.02]"
            >
              {primaryLabel}
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href={secondaryHref}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {secondaryLabel}
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
