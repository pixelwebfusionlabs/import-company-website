import { company } from "@/lib/content/company";
import { PageHero } from "@/components/shared/page-hero";
import { Container, Section } from "@/components/shared/section";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${company.name}.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How we collect, use, and protect personal information submitted through this website."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />
      <Section>
        <Container className="prose prose-neutral dark:prose-invert max-w-3xl">
          <p>Last updated: March 1, 2026</p>
          <h2 className="font-display text-2xl">Who we are</h2>
          <p>
            {company.legalName} (“SN Factory”, “we”, “us”) operates this website and processes inquiries submitted through our contact and newsletter forms.
          </p>
          <h2 className="font-display mt-8 text-2xl">Information we collect</h2>
          <p>
            When you contact us, we may collect your name, company, email, phone number, country, project details, and any files you choose to upload. Newsletter signups collect your email address.
          </p>
          <h2 className="font-display mt-8 text-2xl">How we use information</h2>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
            <li>To respond to inquiries and provide quotes</li>
            <li>To operate and improve our services</li>
            <li>To send optional newsletters you subscribe to</li>
            <li>To protect against spam and abuse</li>
          </ul>
          <h2 className="font-display mt-8 text-2xl">Sharing</h2>
          <p>
            We do not sell personal data. We may share information with service providers who help us operate email delivery, hosting, and analytics — under appropriate confidentiality obligations.
          </p>
          <h2 className="font-display mt-8 text-2xl">Retention</h2>
          <p>
            Inquiry records are retained as needed for business and legal purposes. You may request access or deletion by emailing {company.email}.
          </p>
          <h2 className="font-display mt-8 text-2xl">Contact</h2>
          <p>
            Questions about this policy:{" "}
            <a href={`mailto:${company.email}`} className="text-brand-pink">
              {company.email}
            </a>
          </p>
        </Container>
      </Section>
    </>
  );
}
