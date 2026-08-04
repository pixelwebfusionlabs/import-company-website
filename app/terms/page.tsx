import { company } from "@/lib/content/company";
import { PageHero } from "@/components/shared/page-hero";
import { Container, Section } from "@/components/shared/section";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "Terms of Service",
  description: `Terms of service for ${company.name}.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="Terms governing use of the SN Factory website and inquiries submitted through it."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms" }]}
      />
      <Section>
        <Container className="max-w-3xl space-y-6 text-muted-foreground">
          <p>Last updated: March 1, 2026</p>
          <div>
            <h2 className="font-display text-2xl text-foreground">Acceptance</h2>
            <p className="mt-2">
              By accessing this website you agree to these terms. If you do not agree, please do not use the site.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-foreground">Website content</h2>
            <p className="mt-2">
              Content is provided for general information. Service descriptions and case results are illustrative and do not constitute a binding offer until confirmed in a written agreement.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-foreground">Inquiries</h2>
            <p className="mt-2">
              Submitting a form does not create a contract. Quotes, timelines, and landed costs are estimates until formalized.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-foreground">Limitation of liability</h2>
            <p className="mt-2">
              To the fullest extent permitted by law, {company.legalName} is not liable for indirect or consequential damages arising from use of this website.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-foreground">Contact</h2>
            <p className="mt-2">
              For questions about these terms, email{" "}
              <a href={`mailto:${company.email}`} className="text-brand-pink">
                {company.email}
              </a>
              .
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
