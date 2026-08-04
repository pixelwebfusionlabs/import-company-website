import Image from "next/image";
import { notFound } from "next/navigation";
import { getPortfolioBySlug, portfolio } from "@/lib/content/portfolio";
import { PageHero, CtaBand } from "@/components/shared/page-hero";
import { Container, Reveal, Section } from "@/components/shared/section";
import { createMetadata } from "@/lib/seo/metadata";
import { ButtonLink } from "@/components/shared/button-link";
import { Check } from "lucide-react";

export function generateStaticParams() {
  return portfolio.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getPortfolioBySlug(slug);
  if (!item) return {};
  return createMetadata({
    title: item.title,
    description: item.description,
    path: `/portfolio/${item.slug}`,
    image: item.image,
  });
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getPortfolioBySlug(slug);
  if (!item) notFound();

  return (
    <>
      <PageHero
        eyebrow={item.category}
        title={item.title}
        description={item.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Portfolio", href: "/portfolio" },
          { label: item.title },
        ]}
      />
      <Section>
        <Container className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image src={item.image} alt={item.title} fill className="object-cover" sizes="50vw" priority />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm text-muted-foreground">Origin: {item.origin}</p>
            <p className="mt-4 text-lg text-muted-foreground">{item.longDescription}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {item.technologies.map((tech) => (
                <span key={tech} className="rounded-full bg-muted px-3 py-1 text-xs font-medium">
                  {tech}
                </span>
              ))}
            </div>
            <h2 className="mt-8 font-display text-2xl">Results</h2>
            <ul className="mt-4 space-y-3">
              {item.results.map((result) => (
                <li key={result} className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 text-brand-pink" />
                  {result}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact" variant="gradient">
                Start a similar program
              </ButtonLink>
              <ButtonLink href="/case-studies" variant="outline">
                Case studies
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
