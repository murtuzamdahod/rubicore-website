import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { cn } from "@/lib/utils";
import { HeroSection } from "@/components/sections/hero-section";
// import { TrustedBySection } from "@/components/sections/trusted-by-section"; // Hidden
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
      <div className="relative flex min-h-screen w-full flex-col items-stretch overflow-hidden">
        <InteractiveGridPattern
          width={30}
          height={30}
          squares={[24, 24]} // Corrected: [horizontalCount, verticalCount]
          className={cn(
            "absolute inset-0 -z-10 h-full w-full fill-[hsl(var(--border))]/10 stroke-[hsl(var(--border))]/30 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"  // Made grid lighter
          )}
          squaresClassName="hover:fill-ruby/20 transition-colors"
        />
        {/* Content needs to be above the grid pattern */}
        <div className="z-0 flex flex-col items-stretch"> 
          <HeroSection />
          {/* <TrustedBySection /> */} {/* Hidden */}
          <ChallengeSolutionSection />
          <AgentTypesSection />
          <OnPremiseImperativeSection />
          <PlatformPillarsSection />
          <McpToolingSection /> {/* Add new section here */}
          <HowItWorksSection />
          <ResourcesInsightsSection />
          <FinalCtaSection />
        </div>
      </div>
    </main>
  );
}
