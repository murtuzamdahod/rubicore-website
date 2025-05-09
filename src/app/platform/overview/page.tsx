import { PlatformIntroductionSection } from "@/components/sections/platform-overview/introduction-section";
import { CorePlatformCapabilitiesSection } from "@/components/sections/platform-overview/core-capabilities-section";
import { ArchitectureTechnologySection } from "@/components/sections/platform-overview/architecture-technology-section";
import { PlatformGetStartedSection } from "@/components/sections/platform-overview/get-started-section";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "RubiCore Agentic AI Platform | Build, Orchestrate & Govern",
  description: "RubiCore’s end-to-end platform lets you create an AI workforce with specialized autonomous agents. Visually orchestrate multi-agent workflows, integrate with any system, and maintain full security & compliance control. Low-code, on-prem or cloud, and enterprise-ready.",
};

export default function PlatformOverviewPage() {
  return (
    <div>
      <PlatformIntroductionSection />
      <CorePlatformCapabilitiesSection />
      <ArchitectureTechnologySection />
      <PlatformGetStartedSection />
    </div>
  );
}
