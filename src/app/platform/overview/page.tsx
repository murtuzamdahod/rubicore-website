import { PlatformIntroductionSection } from "@/components/sections/platform-overview/introduction-section";
import { CorePlatformCapabilitiesSection } from "@/components/sections/platform-overview/core-capabilities-section";
import { ArchitectureTechnologySection } from "@/components/sections/platform-overview/architecture-technology-section";
import { McpToolingSection } from "@/components/sections/mcp-tooling-section";
import { PlatformGetStartedSection } from "@/components/sections/platform-overview/get-started-section";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "RubiCore Agentic AI Platform | Build, Orchestrate, Govern & Collaborate with Your Enterprise AI Workforce | XAI & Continuous Learning",
  description: "RubiCore's end-to-end platform lets you create an AI workforce with specialized autonomous agents that learn and adapt. Visually orchestrate multi-agent and human-AI workflows, integrate with any system, and maintain full security, governance, and explainability. Low-code/Pro-code, on-prem/cloud/hybrid, and enterprise-ready.",
};

export default function PlatformOverviewPage() {
  return (
    <div>
      <PlatformIntroductionSection />
      <CorePlatformCapabilitiesSection />
      <ArchitectureTechnologySection />
      <McpToolingSection />
      <PlatformGetStartedSection />
    </div>
  );
}
