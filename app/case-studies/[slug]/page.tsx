import Image from "next/image";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudyBySlug } from "@/lib/content/case-studies";
import { PageHero, CtaBand } from "@/components/shared/page-hero";
import { Container, Reveal, Section } from "@/components/shared/section";
import { createMetadata } from "@/lib/seo/metadata";
import { ButtonLink } from "@/components/shared/button-link";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};
  return createMetadata({
    title: study.title,
    description: study.summary,
    path: `/case-studies/${study.slug}`,
    image: study.image,
  });
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  return (
    <>
      <PageHero
        eyebrow={`${study.client} · ${study.year}`}
        title={study.title}
        description={study.summary}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Case Studies", href: "/case-studies" },
          { label: study.client },
        ]}
      />
      <Section>
        <Container>
          <Reveal>
            <div className="relative mb-12 aspect-[21/9] overflow-hidden rounded-3xl">
              <Image src={study.image} alt={study.title} fill className="object-cover" sizes="100vw" priority />
            </div>
          </Reveal>
          <div className="grid gap-10 lg:grid-cols-3">
            <Reveal className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-3xl">Challenge</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{study.challenge}</p>
              </div>
              <div>
                <h2 className="font-display text-3xl">Solution</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{study.solution}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="rounded-3xl border border-border bg-card p-6 h-fit">
              <p className="text-xs font-semibold tracking-[0.16em] text-brand-pink uppercase">Results</p>
              <ul className="mt-6 space-y-5">
                {study.results.map((r) => (
                  <li key={r.label}>
                    <p className="font-display text-3xl text-gradient-brand">{r.value}</p>
                    <p className="text-sm text-muted-foreground">{r.label}</p>
                  </li>
                ))}
              </ul>
              <ButtonLink href="/contact" variant="gradient" className="mt-8 w-full">
                Get similar results
              </ButtonLink>
            </Reveal>
          </div>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
