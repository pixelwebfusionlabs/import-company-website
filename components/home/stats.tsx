import { stats } from "@/lib/content/company";
import { Counter } from "@/components/shared/counter";
import {
  Container,
  Reveal,
  Section,
  Stagger,
  StaggerItem,
} from "@/components/shared/section";

export function StatsSection() {
  return (
    <Section dark className="overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-pink/20 via-transparent to-brand-orange/10" />
      <Container className="relative">
        <Reveal>
          <p className="mb-10 text-center text-xs font-semibold tracking-[0.2em] text-brand-orange uppercase">
            By the numbers
          </p>
        </Reveal>
        <Stagger className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-5">
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="text-center last:col-span-2 last:justify-self-center lg:last:col-span-1">
              <p className="font-display text-4xl text-brand-cream sm:text-5xl md:text-6xl">
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                />
              </p>
              <p className="mt-2 text-sm text-brand-cream/65">{stat.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
