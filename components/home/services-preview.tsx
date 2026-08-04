import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/content/services";
import { IconBadge } from "@/components/shared/icon-badge";
import {
  Container,
  Section,
  SectionHeading,
  Stagger,
  StaggerItem,
} from "@/components/shared/section";
import { ButtonLink } from "@/components/shared/button-link";

export function ServicesPreview() {
  return (
    <Section>
      <Container>
        <div className="mb-4 flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Services"
            title="Everything between factory and shelf"
            description="Eight integrated capabilities so you never juggle a chain of disconnected vendors."
          />
          <ButtonLink href="/services" variant="outline" className="mb-16">
            View all services
          </ButtonLink>
        </div>
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-brand-pink/40 hover:shadow-xl hover:shadow-brand-pink/10"
              >
                <IconBadge name={service.icon} />
                <h3 className="mt-5 font-display text-xl">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.shortDescription}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-pink">
                  Read more
                  <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
