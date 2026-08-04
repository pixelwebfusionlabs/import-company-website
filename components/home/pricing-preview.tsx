import { pricingTiers } from "@/lib/content/site";
import {
  Container,
  Section,
  SectionHeading,
  Stagger,
  StaggerItem,
} from "@/components/shared/section";
import { ButtonLink } from "@/components/shared/button-link";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function PricingPreview() {
  return (
    <Section dark>
      <Container>
        <SectionHeading
          eyebrow="Engagement models"
          title="Flexible ways to work together"
          description="From one-off project imports to multi-year enterprise partnerships."
          align="center"
          light
        />
        <Stagger className="grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <StaggerItem
              key={tier.name}
              className={cn(
                "rounded-3xl border p-7",
                tier.highlighted
                  ? "border-transparent bg-gradient-brand text-white shadow-2xl shadow-brand-pink/30"
                  : "border-white/10 bg-white/5 text-brand-cream",
              )}
            >
              <p className="text-xs font-semibold tracking-[0.16em] uppercase opacity-80">
                {tier.name}
              </p>
              <p className="mt-3 font-display text-3xl">{tier.price}</p>
              <p className={cn("mt-2 text-sm", tier.highlighted ? "text-white/85" : "text-brand-cream/65")}>
                {tier.description}
              </p>
              <ul className="mt-6 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <ButtonLink
                href="/contact"
                variant={tier.highlighted ? "primary" : "outline"}
                className={cn(
                  "mt-8 w-full",
                  tier.highlighted
                    ? "bg-white text-brand-ink hover:bg-white/90"
                    : "border-white/20 text-white hover:bg-white/10",
                )}
              >
                {tier.cta}
              </ButtonLink>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
