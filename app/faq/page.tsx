import { faqs } from "@/lib/content/site";
import { PageHero, CtaBand } from "@/components/shared/page-hero";
import { Container, Section } from "@/components/shared/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { createMetadata, faqJsonLd } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "FAQ",
  description: "Frequently asked questions about SN Factory vehicle parts, elevators, hoists, home accessories, installation, and maintenance.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />
      <PageHero
        eyebrow="FAQ"
        title="Questions we hear most often"
        description="Straight answers on process, cost, quality, and how to get started."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
      />
      <Section>
        <Container className="max-w-3xl">
          <Accordion className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`}>
                <AccordionTrigger className="py-4 text-left text-base font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
