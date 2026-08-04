import Image from "next/image";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { getServiceBySlug, services } from "@/lib/content/services";
import { PageHero, CtaBand } from "@/components/shared/page-hero";
import { Container, Reveal, Section } from "@/components/shared/section";
import { IconBadge } from "@/components/shared/icon-badge";
import { createMetadata } from "@/lib/seo/metadata";
import { ButtonLink } from "@/components/shared/button-link";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return createMetadata({
    title: service.title,
    description: service.shortDescription,
    path: `/services/${service.slug}`,
    image: service.image,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.title}
        description={service.shortDescription}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />
      <Section>
        <Container className="grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <IconBadge name={service.icon} />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {service.description}
            </p>
            <h2 className="mt-8 font-display text-2xl">Features</h2>
            <ul className="mt-4 space-y-3">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 text-brand-pink" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <h2 className="mt-8 font-display text-2xl">Benefits</h2>
            <ul className="mt-4 space-y-3">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 text-brand-orange" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <ButtonLink href="/contact" variant="gradient" className="mt-8">
              Discuss this service
            </ButtonLink>
          </Reveal>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
