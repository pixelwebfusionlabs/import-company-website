"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/content/site";
import {
  Container,
  Section,
  SectionHeading,
  Stagger,
  StaggerItem,
} from "@/components/shared/section";
import { ButtonLink } from "@/components/shared/button-link";

export function TestimonialsPreview() {
  return (
    <Section className="bg-secondary/40">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by operators who cannot afford delays"
          align="center"
        />
        <Stagger className="grid gap-6 md:grid-cols-2">
          {testimonials.slice(0, 4).map((t) => (
            <StaggerItem
              key={t.id}
              className="rounded-3xl border border-border bg-card p-6 md:p-8"
            >
              <div className="mb-4 flex gap-1 text-brand-orange">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <p className="text-base leading-relaxed text-foreground/90 md:text-lg">
                “{t.quote}”
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="size-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <div className="mt-10 text-center">
          <ButtonLink href="/testimonials" variant="outline">
            More reviews
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
