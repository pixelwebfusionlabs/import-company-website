import Image from "next/image";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/content/site";
import { PageHero, CtaBand } from "@/components/shared/page-hero";
import { Container, Section, Stagger, StaggerItem } from "@/components/shared/section";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "Testimonials",
  description: "What SN Factory clients say about our sourcing, logistics, and delivery performance.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Words from operators we serve"
        description="Procurement leads, plant managers, and project teams — in their own words."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Testimonials" }]}
      />
      <Section>
        <Container>
          <Stagger className="grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <StaggerItem key={t.id} className="rounded-3xl border border-border bg-card p-8">
                <div className="mb-4 flex gap-1 text-brand-orange">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="text-lg leading-relaxed">“{t.quote}”</p>
                <div className="mt-6 flex items-center gap-3">
                  <Image src={t.image} alt={t.name} width={56} height={56} className="size-14 rounded-full object-cover" />
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
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
