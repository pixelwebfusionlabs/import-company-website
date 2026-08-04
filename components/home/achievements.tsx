import { awards } from "@/lib/content/company";
import {
  Container,
  Reveal,
  Section,
  Stagger,
  StaggerItem,
} from "@/components/shared/section";
import { Award } from "lucide-react";

export function AchievementsBar() {
  return (
    <Section dark className="py-14 md:py-16">
      <Container>
        <Reveal>
          <p className="mb-8 text-center text-xs font-semibold tracking-[0.2em] text-brand-orange uppercase">
            Recognition
          </p>
        </Reveal>
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {awards.map((award) => (
            <StaggerItem
              key={award.title}
              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              <Award className="mt-0.5 size-5 shrink-0 text-brand-orange" />
              <div>
                <p className="font-semibold text-brand-cream">{award.title}</p>
                <p className="text-sm text-brand-cream/60">
                  {award.issuer} · {award.year}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
