import Image from "next/image";
import { notFound } from "next/navigation";
import { getIndustryBySlug, industries } from "@/lib/content/industries";
import { PageHero, CtaBand } from "@/components/shared/page-hero";
import { Container, Reveal, Section } from "@/components/shared/section";
import { IconBadge } from "@/components/shared/icon-badge";
import { createMetadata } from "@/lib/seo/metadata";
import { ButtonLink } from "@/components/shared/button-link";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};
  return createMetadata({
    title: `${industry.title} Imports`,
    description: industry.shortDescription,
    path: `/industries/${industry.slug}`,
    image: industry.image,
  });
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  return (
    <>
      <PageHero
        eyebrow="Industry"
        title={industry.title}
        description={industry.shortDescription}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
          { label: industry.title },
        ]}
      />
      <Section>
        <Container className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image src={industry.image} alt={industry.title} fill className="object-cover" sizes="50vw" priority />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <IconBadge name={industry.icon} />
            <p className="mt-6 text-lg text-muted-foreground">{industry.description}</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <h2 className="font-display text-xl">Challenges</h2>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {industry.challenges.map((c) => (
                    <li key={c}>· {c}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-display text-xl">Our solutions</h2>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {industry.solutions.map((s) => (
                    <li key={s}>· {s}</li>
                  ))}
                </ul>
              </div>
            </div>
            <ButtonLink href="/contact" variant="gradient" className="mt-8">
              Talk industry with us
            </ButtonLink>
          </Reveal>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
