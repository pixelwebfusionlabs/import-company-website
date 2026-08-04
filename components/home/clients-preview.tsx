import { clients } from "@/lib/content/site";
import {
  Container,
  Section,
  SectionHeading,
  Stagger,
  StaggerItem,
} from "@/components/shared/section";
import { ButtonLink } from "@/components/shared/button-link";

export function ClientsPreview() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Clients"
          title="Trusted by ambitious companies"
          description="Retailers, hotels, manufacturers, hospitals, and project teams across Sri Lanka."
          align="center"
        />
        <Stagger className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((client) => (
            <StaggerItem
              key={client}
              className="flex h-20 items-center justify-center rounded-2xl border border-border bg-card px-3 text-center text-sm font-semibold text-muted-foreground transition hover:border-brand-pink/30 hover:text-foreground"
            >
              {client}
            </StaggerItem>
          ))}
        </Stagger>
        <div className="mt-10 text-center">
          <ButtonLink href="/clients" variant="outline">
            View clients
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
