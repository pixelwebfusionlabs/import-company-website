import { whyUs } from "@/lib/content/site";
import { IconBadge } from "@/components/shared/icon-badge";
import {
  Container,
  Section,
  SectionHeading,
  Stagger,
  StaggerItem,
} from "@/components/shared/section";
import { ButtonLink } from "@/components/shared/button-link";

export function WhyUsPreview() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Why SN Factory"
          title="Why businesses and homeowners choose us"
          description="International sourcing, professional installation, and reliable after-sales — in one partner."
        />
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.slice(0, 6).map((item) => (
            <StaggerItem
              key={item.title}
              className="rounded-3xl border border-border bg-card p-6 transition hover:border-brand-orange/40"
            >
              <IconBadge name={item.icon} />
              <h3 className="mt-4 font-display text-xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
        <div className="mt-10">
          <ButtonLink href="/why-us" variant="outline">
            Why choose us
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
