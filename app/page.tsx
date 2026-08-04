import { HeroSection } from "@/components/home/hero";
import { IntroSection } from "@/components/home/intro";
import { StatsSection } from "@/components/home/stats";
import { ServicesPreview } from "@/components/home/services-preview";
import { IndustriesPreview } from "@/components/home/industries-preview";
import { CapabilitiesPreview } from "@/components/home/capabilities-preview";
import { PortfolioPreview } from "@/components/home/portfolio-preview";
import { ProcessPreview } from "@/components/home/process-preview";
import { WhyUsPreview } from "@/components/home/why-us-preview";
import { AchievementsBar } from "@/components/home/achievements";
import { TestimonialsPreview } from "@/components/home/testimonials-preview";
import { ClientsPreview } from "@/components/home/clients-preview";
import { PricingPreview } from "@/components/home/pricing-preview";
import { FaqPreview } from "@/components/home/faq-preview";
import { CtaBand } from "@/components/shared/page-hero";
import { createMetadata } from "@/lib/seo/metadata";
import { company } from "@/lib/content/company";

export const metadata = createMetadata({
  title: `${company.name} | Import, Distribution & Installation`,
  description: company.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <StatsSection />
      <ServicesPreview />
      <IndustriesPreview />
      <CapabilitiesPreview />
      <PortfolioPreview />
      <PortfolioPreview
        limit={3}
        offset={3}
        eyebrow="Recent projects"
        title="Latest programs delivered"
      />
      <ProcessPreview />
      <WhyUsPreview />
      <AchievementsBar />
      <TestimonialsPreview />
      <ClientsPreview />
      <PricingPreview />
      <FaqPreview />
      <CtaBand />
    </>
  );
}
