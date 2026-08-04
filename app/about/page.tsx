import Image from "next/image";
import {
  awards,
  certificates,
  company,
  leadership,
  timeline,
  values,
} from "@/lib/content/company";
import { PageHero, CtaBand } from "@/components/shared/page-hero";
import {
  Container,
  Reveal,
  Section,
  SectionHeading,
  Stagger,
  StaggerItem,
} from "@/components/shared/section";
import { IconBadge } from "@/components/shared/icon-badge";
import { createMetadata, breadcrumbJsonLd } from "@/lib/seo/metadata";
import { Award, BadgeCheck } from "lucide-react";

export const metadata = createMetadata({
  title: "About Us",
  description: `Learn about ${company.name} — our mission, vision, history, leadership, and commitment to import excellence.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
            ]),
          ),
        }}
      />
      <PageHero
        eyebrow="About"
        title="Trusted import, distribution & installation"
        description={company.longDescription}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />

      <Section>
        <Container className="grid gap-10 md:grid-cols-2">
          <Reveal className="rounded-3xl border border-border bg-card p-8">
            <p className="text-xs font-semibold tracking-[0.16em] text-brand-pink uppercase">
              Mission
            </p>
            <p className="mt-4 font-display text-2xl md:text-3xl">{company.mission}</p>
          </Reveal>
          <Reveal delay={0.1} className="rounded-3xl border border-border bg-card p-8">
            <p className="text-xs font-semibold tracking-[0.16em] text-brand-orange uppercase">
              Vision
            </p>
            <p className="mt-4 font-display text-2xl md:text-3xl">{company.vision}</p>
          </Reveal>
        </Container>
      </Section>

      <Section dark>
        <Container>
          <SectionHeading
            eyebrow="History"
            title="A decade of disciplined growth"
            light
          />
          <div className="relative space-y-8 before:absolute before:top-2 before:bottom-2 before:left-[11px] before:w-px before:bg-white/15 md:before:left-1/2">
            {timeline.map((event, i) => (
              <Reveal
                key={event.year}
                className={`relative grid gap-4 md:grid-cols-2 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}
              >
                <div className={`${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <p className="text-brand-orange font-semibold">{event.year}</p>
                  <h3 className="mt-1 font-display text-2xl text-brand-cream">{event.title}</h3>
                  <p className="mt-2 text-brand-cream/65">{event.description}</p>
                </div>
                <div className="absolute top-2 left-0 size-6 rounded-full border-2 border-brand-pink bg-surface-dark md:left-1/2 md:-translate-x-1/2" />
                <div />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading eyebrow="Values" title="What we refuse to compromise" />
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <StaggerItem key={value.title} className="rounded-3xl border border-border p-6">
                <IconBadge name={value.icon} />
                <h3 className="mt-4 font-display text-xl">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section className="bg-secondary/40">
        <Container>
          <SectionHeading eyebrow="Leadership" title="The people behind the partnership" />
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((person) => (
              <StaggerItem key={person.name} className="overflow-hidden rounded-3xl border border-border bg-card">
                <div className="relative aspect-square">
                  <Image src={person.image} alt={person.name} fill className="object-cover" sizes="25vw" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl">{person.name}</h3>
                  <p className="text-sm text-brand-pink">{person.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{person.bio}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Certificates" title="Compliance you can audit" />
            <ul className="space-y-3">
              {certificates.map((cert) => (
                <li key={cert} className="flex items-start gap-3 rounded-2xl border border-border p-4">
                  <BadgeCheck className="mt-0.5 size-5 text-brand-pink" />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Awards" title="Recognition from the trade community" />
            <ul className="space-y-3">
              {awards.map((award) => (
                <li key={award.title} className="flex items-start gap-3 rounded-2xl border border-border p-4">
                  <Award className="mt-0.5 size-5 text-brand-orange" />
                  <div>
                    <p className="font-semibold">{award.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {award.issuer} · {award.year}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
