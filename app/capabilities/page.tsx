import { capabilities } from "@/lib/content/site";
import { PageHero, CtaBand } from "@/components/shared/page-hero";
import { Container, Section, SectionHeading, Stagger, StaggerItem } from "@/components/shared/section";
import { IconBadge } from "@/components/shared/icon-badge";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "Capabilities",
  description: "SN Factory capabilities across automotive parts, lift systems, industrial hoists, home accessories, and installation services.",
  path: "/capabilities",
});

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="The operating system behind every import"
        description="Networks, modes, compliance, and visibility — engineered for reliable trade."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Capabilities" }]}
      />
      <Section>
        <Container>
          <SectionHeading title="What we bring to every engagement" />
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <StaggerItem key={item.name} className="rounded-3xl border border-border p-6">
                <IconBadge name={item.icon} />
                <p className="mt-4 text-xs tracking-wider text-brand-pink uppercase">{item.category}</p>
                <h2 className="mt-1 font-display text-2xl">{item.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
