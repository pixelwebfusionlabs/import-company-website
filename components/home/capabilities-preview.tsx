import { capabilities } from "@/lib/content/site";
import { IconBadge } from "@/components/shared/icon-badge";
import {
  Container,
  Section,
  SectionHeading,
  Stagger,
  StaggerItem,
} from "@/components/shared/section";
import { ButtonLink } from "@/components/shared/button-link";

export function CapabilitiesPreview() {
  const items = capabilities.slice(0, 8);

  return (
    <Section dark>
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Capabilities"
            title="The infrastructure behind every shipment"
            description="Supplier networks, freight modes, quality systems, and digital tracking — purpose-built for import excellence."
            light
          />
          <ButtonLink href="/capabilities" variant="outline" className="mb-16 border-white/20 text-white hover:bg-white/10">
            All capabilities
          </ButtonLink>
        </div>
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <StaggerItem
              key={item.name}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
            >
              <IconBadge name={item.icon} className="size-10 rounded-xl" />
              <p className="mt-4 text-xs tracking-wider text-brand-orange uppercase">
                {item.category}
              </p>
              <h3 className="mt-1 font-display text-xl text-brand-cream">{item.name}</h3>
              <p className="mt-2 text-sm text-brand-cream/65">{item.description}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
