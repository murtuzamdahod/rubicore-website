import { AgentTypesIntroductionSection } from "@/components/sections/agent-types/introduction-section";
import { CoreAgentCapabilitiesSection } from "@/components/sections/agent-types/core-agent-capabilities-section";
import { AgentCustomizationSection } from "@/components/sections/agent-types/customization-section";
import { PlatformGetStartedSection } from "@/components/sections/platform-overview/get-started-section"; // Re-using this CTA section
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Specialized AI Agents with Advanced Reasoning | RubiCore Platform",
  description: "Explore RubiCore’s specialized AI agents: Deep Research, Knowledge (RAG) Agent, Code Intelligence, SQL/CSV Data Analysis, Process Automation, and more – including custom agents built for your unique workflows. Each agent is equipped with domain-specific tools and governed by enterprise controls.",
};

export default function AgentTypesPage() {
  return (
    <div>
      <AgentTypesIntroductionSection />
      <CoreAgentCapabilitiesSection />
      <AgentCustomizationSection />
      <PlatformGetStartedSection /> {/* Using the same CTA as Platform Overview */}
    </div>
  );
}
