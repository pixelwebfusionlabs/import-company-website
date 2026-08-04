import { processSteps } from "@/lib/content/site";
import { PageHero, CtaBand } from "@/components/shared/page-hero";
import { Container, Section, Stagger, StaggerItem } from "@/components/shared/section";
import { IconBadge } from "@/components/shared/icon-badge";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "Our Process",
  description: "Discover how SN Factory takes projects from inquiry to import, delivery, installation, and after-sales support.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="Clarity at every mile"
        description="A repeatable operating rhythm that keeps sourcing, freight, customs, and delivery aligned."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our Process" }]}
      />
      <Section>
        <Container>
          <Stagger className="space-y-6">
            {processSteps.map((step) => (
              <StaggerItem
                key={step.step}
                className="grid items-center gap-6 rounded-3xl border border-border bg-card p-6 md:grid-cols-[auto_1fr] md:p-8"
              >
                <div className="flex items-center gap-4">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-brand text-xl font-bold text-white">
                    {step.step}
                  </div>
                  <IconBadge name={step.icon} />
                </div>
                <div>
                  <h2 className="font-display text-3xl">{step.title}</h2>
                  <p className="mt-2 max-w-2xl text-muted-foreground">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
