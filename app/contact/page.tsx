import { PageHero } from "@/components/shared/page-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactMap } from "@/components/contact/contact-map";
import { Container, Section } from "@/components/shared/section";
import { createMetadata } from "@/lib/seo/metadata";
import { company } from "@/lib/content/company";

export const metadata = createMetadata({
  title: "Contact",
  description: `Contact ${company.name} for sourcing, logistics, customs, and distribution inquiries.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you need to import"
        description="Share your product, origin preference, and timeline. We respond within one business day with a clear next step."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <Section>
        <Container className="grid gap-10 lg:grid-cols-5">
          <div className="rounded-3xl border border-border bg-card p-6 md:p-8 lg:col-span-3">
            <h2 className="font-display text-3xl">Send an inquiry</h2>
            <p className="mt-2 mb-8 text-muted-foreground">
              All fields marked through validation are required for a complete quote.
            </p>
            <ContactForm />
          </div>
          <div className="lg:col-span-2">
            <ContactMap />
          </div>
        </Container>
      </Section>
    </>
  );
}
