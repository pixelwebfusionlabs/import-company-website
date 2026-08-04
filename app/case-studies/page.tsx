import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/lib/content/case-studies";
import { PageHero, CtaBand } from "@/components/shared/page-hero";
import { Container, Section, Stagger, StaggerItem } from "@/components/shared/section";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "Case Studies",
  description: "Client success stories from SN Factory import and distribution engagements.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Outcomes our clients measure"
        description="Real programs. Clear challenges. Documented results."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Case Studies" }]}
      />
      <Section>
        <Container>
          <Stagger className="grid gap-6 lg:grid-cols-2">
            {caseStudies.map((study) => (
              <StaggerItem key={study.slug}>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="group grid overflow-hidden rounded-3xl border border-border bg-card transition hover:shadow-xl md:grid-cols-2"
                >
                  <div className="relative aspect-[4/3] md:aspect-auto">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="50vw"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <p className="text-xs font-semibold tracking-wider text-brand-pink uppercase">
                      {study.industry} · {study.year}
                    </p>
                    <h2 className="mt-2 font-display text-2xl">{study.title}</h2>
                    <p className="mt-3 text-sm text-muted-foreground">{study.summary}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
