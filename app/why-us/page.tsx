import { whyUs } from "@/lib/content/site";
import { PageHero, CtaBand } from "@/components/shared/page-hero";
import { Container, Section, Stagger, StaggerItem } from "@/components/shared/section";
import { IconBadge } from "@/components/shared/icon-badge";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "Why Choose Us",
  description: "Why businesses choose SN Factory for vehicle parts, elevators, hoists, and home accessories.",
  path: "/why-us",
});

export default function WhyUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why SN Factory"
        title="Quality products. Professional installation. Reliable support."
        description="International sourcing, experienced technicians, and customer-first after-sales service across Sri Lanka."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Why Choose Us" }]}
      />
      <Section>
        <Container>
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((item) => (
              <StaggerItem key={item.title} className="rounded-3xl border border-border bg-card p-7">
                <IconBadge name={item.icon} />
                <h2 className="mt-5 font-display text-2xl">{item.title}</h2>
                <p className="mt-3 text-muted-foreground">{item.description}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
