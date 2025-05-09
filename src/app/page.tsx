import { HeroSection } from "@/components/sections/hero-section";
import { TrustedBySection } from "@/components/sections/trusted-by-section";
import { ChallengeSolutionSection } from "@/components/sections/challenge-solution-section";
import { AgentTypesSection } from "@/components/sections/agent-types-section";
import { OnPremiseImperativeSection } from "@/components/sections/on-premise-imperative-section";
import { PlatformPillarsSection } from "@/components/sections/platform-pillars-section";
import { McpToolingSection } from "@/components/sections/mcp-tooling-section"; // Import new section
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { ResourcesInsightsSection } from "@/components/sections/resources-insights-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";

export default function HomePage() {
  return (
    <main className="flex flex-col items-stretch"> {/* Changed items-center to items-stretch for full-width sections */}
      <HeroSection />
      <TrustedBySection />
      <ChallengeSolutionSection />
      <AgentTypesSection />
      <OnPremiseImperativeSection />
      <PlatformPillarsSection />
      <McpToolingSection /> {/* Add new section here */}
      <HowItWorksSection />
      <ResourcesInsightsSection />
      <FinalCtaSection />
    </main>
  );
}
