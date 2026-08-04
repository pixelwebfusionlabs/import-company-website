import { processSteps } from "@/lib/content/site";
import { IconBadge } from "@/components/shared/icon-badge";
import {
  Container,
  Section,
  SectionHeading,
  Stagger,
  StaggerItem,
} from "@/components/shared/section";
import { ButtonLink } from "@/components/shared/button-link";

export function ProcessPreview() {
  return (
    <Section className="bg-secondary/40">
      <Container>
        <SectionHeading
          eyebrow="Process"
          title="From inquiry to installation — five clear stages"
          description="A clear path from quote to delivery, install, and after-sales support."
          align="center"
        />
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step) => (
            <StaggerItem key={step.step} className="relative text-center lg:text-left">
              <div className="mx-auto mb-4 flex size-10 items-center justify-center rounded-full bg-gradient-brand text-sm font-bold text-white lg:mx-0">
                {step.step}
              </div>
              <IconBadge name={step.icon} className="mx-auto lg:mx-0" />
              <h3 className="mt-4 font-display text-xl">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
            </StaggerItem>
          ))}
        </Stagger>
        <div className="mt-12 text-center">
          <ButtonLink href="/process" variant="outline">
            See the full process
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
