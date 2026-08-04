import Image from "next/image";
import { company } from "@/lib/content/company";
import {
  Container,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/shared/section";
import { ButtonLink } from "@/components/shared/button-link";

export function IntroSection() {
  return (
    <Section>
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="Who we are"
            title="International import, distribution, and installation"
            description={company.longDescription}
          />
          <ButtonLink href="/about" variant="outline">
            About SN Factory
          </ButtonLink>
        </Reveal>
        <Reveal delay={0.1} className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem]">
            <Image
              src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&h=900&fit=crop"
              alt="Container shipping at port"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
