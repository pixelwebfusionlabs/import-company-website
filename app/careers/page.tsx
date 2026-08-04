import Image from "next/image";
import { careers } from "@/lib/content/site";
import { PageHero, CtaBand } from "@/components/shared/page-hero";
import { Container, Section, SectionHeading, Stagger, StaggerItem } from "@/components/shared/section";
import { createMetadata } from "@/lib/seo/metadata";
import { ArrowRight, MapPin } from "lucide-react";
import { ButtonLink } from "@/components/shared/button-link";

export const metadata = createMetadata({
  title: "Careers",
  description: "Join SN Factory — careers in automotive supply, lift installation, maintenance, and sourcing.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build the future of supply and installation with us"
        description="We are looking for people who care about quality products, safe installation, and excellent customer service."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
      />
      <Section>
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            {[
              "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=800&fit=crop",
              "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=800&fit=crop",
              "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=800&fit=crop",
              "https://images.unsplash.com/photo-1542744173-8e2bd26481bb?w=800&h=800&fit=crop",
            ].map((src, i) => (
              <div
                key={src}
                className={`relative overflow-hidden rounded-2xl sm:rounded-3xl ${i % 2 === 1 ? "mt-4 sm:mt-6" : ""} aspect-square`}
              >
                <Image src={src} alt="SN Factory team culture" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
              </div>
            ))}
          </div>
          <div>
            <SectionHeading
              eyebrow="Open roles"
              title="Grow with a team that delivers"
              description="Email your CV to careers@snfactory.lk with the role title in the subject line."
            />
            <Stagger className="space-y-4">
              {careers.map((role) => (
                <StaggerItem
                  key={role.id}
                  className="rounded-3xl border border-border bg-card p-5 transition hover:border-brand-pink/40"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h2 className="font-display text-2xl">{role.title}</h2>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {role.department} · {role.type}
                      </p>
                      <p className="mt-1 inline-flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="size-3.5" />
                        {role.location}
                      </p>
                    </div>
                    <ButtonLink href="/contact" variant="outline" size="sm">
                      Apply <ArrowRight className="size-3.5" />
                    </ButtonLink>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{role.description}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Container>
      </Section>
      <CtaBand
        title="Do not see the right role?"
        description="Send us a speculative application — we are always interested in exceptional talent."
        primaryLabel="Contact careers"
      />
    </>
  );
}
