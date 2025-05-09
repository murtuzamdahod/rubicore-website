import TieredPricingSection from "@/components/sections/pricing/tiered-pricing-section";
import FeatureComparisonSection from "@/components/sections/pricing/feature-comparison-section";
import PricingFaqSection from "@/components/sections/pricing/pricing-faq-section";
import FinalCtaSection from "@/components/sections/pricing/final-cta-section"; // Assuming a similar CTA structure

export const metadata = {
  title: "RubiCore Pricing | Flexible Plans for Enterprise Agentic AI",
  description:
    "Explore RubiCore pricing plans. Choose from Free, Pro, and Enterprise tiers designed for experimentation, team collaboration, and large-scale, secure AI workforce deployment (including On-Premise).",
};

export default function PricingPage() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            <span className="block">Transparent Pricing for Your</span>
            <span className="block text-ruby-600 dark:text-ruby-500">
              Intelligent AI Workforce
            </span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400 sm:text-xl md:text-2xl">
            Find the right RubiCore plan to build, orchestrate, and govern
            your AI agents, from individual experimentation to enterprise-wide
            deployment with maximum security and control.
          </p>
        </div>
      </div>
      <TieredPricingSection />
      <FeatureComparisonSection />
      <PricingFaqSection />
      <FinalCtaSection />
    </main>
  );
}
