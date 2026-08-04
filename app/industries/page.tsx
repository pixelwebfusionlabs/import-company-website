import Image from "next/image";
import Link from "next/link";
import { industries } from "@/lib/content/industries";
import { PageHero, CtaBand } from "@/components/shared/page-hero";
import { Container, Section, Stagger, StaggerItem } from "@/components/shared/section";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "Industries",
  description:
    "Import and distribution solutions for retail, hospitality, manufacturing, healthcare, construction, and more.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Sector expertise that shows up in every shipment"
        description="We adapt sourcing, compliance, and delivery to the realities of your industry."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
      />
      <Section>
        <Container>
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <StaggerItem key={industry.slug}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group relative block aspect-[4/5] overflow-hidden rounded-3xl"
                >
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <h2 className="font-display text-3xl">{industry.title}</h2>
                    <p className="mt-2 text-sm text-white/75">{industry.shortDescription}</p>
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
