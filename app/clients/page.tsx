import { clients } from "@/lib/content/site";
import { PageHero, CtaBand } from "@/components/shared/page-hero";
import { Container, Section, Stagger, StaggerItem } from "@/components/shared/section";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "Clients",
  description: "Brands and organizations that trust SN Factory with their import programs.",
  path: "/clients",
});

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Clients"
        title="Companies that ship with confidence"
        description="A sample of retailers, manufacturers, hospitals, and project teams we support."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Clients" }]}
      />
      <Section>
        <Container>
          <Stagger className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {clients.map((client) => (
              <StaggerItem
                key={client}
                className="flex h-28 items-center justify-center rounded-3xl border border-border bg-card px-4 text-center font-semibold text-muted-foreground transition hover:border-brand-pink/40 hover:text-foreground"
              >
                {client}
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
