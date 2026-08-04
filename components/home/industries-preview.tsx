import Image from "next/image";
import Link from "next/link";
import { industries } from "@/lib/content/industries";
import {
  Container,
  Section,
  SectionHeading,
  Stagger,
  StaggerItem,
} from "@/components/shared/section";

export function IndustriesPreview() {
  const featured = industries.slice(0, 8);

  return (
    <Section className="bg-secondary/40">
      <Container>
        <SectionHeading
          eyebrow="Industries"
          title="Built for the sectors that keep economies moving"
          description="Specialized playbooks for retail, hospitality, manufacturing, healthcare, and more."
          align="center"
        />
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((industry) => (
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
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="font-display text-2xl">{industry.title}</h3>
                  <p className="mt-1 line-clamp-2 text-sm text-white/75">
                    {industry.shortDescription}
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
