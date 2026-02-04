import { HeroSection } from "~/components/sections/hero";
import { StatsSection } from "~/components/sections/stats";
import { ServicesSection } from "~/components/sections/services";
import { CaseStudiesPreviewSection } from "~/components/sections/case-studies-preview";
import { WhyChooseUsSection } from "~/components/sections/why-choose-us";
import { ProcessSection } from "~/components/sections/process";
import { IndustriesSection } from "~/components/sections/industries";
import { TestimonialsSection } from "~/components/sections/testimonials";
import { FAQSection } from "~/components/sections/faq";
import { CTASection } from "~/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <CaseStudiesPreviewSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <IndustriesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
