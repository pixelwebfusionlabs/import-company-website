"use client";

import { faqs } from "@/lib/content/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Container,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/shared/section";
import { ButtonLink } from "@/components/shared/button-link";

export function FaqPreview() {
  const items = faqs.slice(0, 5);

  return (
    <Section>
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Answers before you ask"
          description="Quick clarity on timelines, customs, quality, and how we engage."
          align="center"
        />
        <Reveal>
          <Accordion className="w-full">
            {items.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger className="py-4 text-left text-base font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
        <div className="mt-10 text-center">
          <ButtonLink href="/faq" variant="outline">
            View all FAQs
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
