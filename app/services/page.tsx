import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/content/services";
import { PageHero, CtaBand } from "@/components/shared/page-hero";
import {
  Container,
  Section,
  Stagger,
  StaggerItem,
} from "@/components/shared/section";
import { IconBadge } from "@/components/shared/icon-badge";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "Services",
  description:
    "Global sourcing, import logistics, customs clearance, warehousing, distribution, QA, private label, and trade consulting.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Import capabilities end to end"
        description="Eight integrated services covering the full journey from manufacturer to your warehouse door."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />
      <Section>
        <Container>
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <StaggerItem key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-brand-pink/40 hover:shadow-xl"
                >
                  <IconBadge name={service.icon} />
                  <h2 className="mt-5 font-display text-2xl">{service.title}</h2>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">
                    {service.shortDescription}
                  </p>
                  <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                    {service.features.slice(0, 3).map((f) => (
                      <li key={f}>· {f}</li>
                    ))}
                  </ul>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-pink">
                    Read more <ArrowUpRight className="size-4" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
