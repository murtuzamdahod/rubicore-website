import { AgentTypesIntroductionSection } from "@/components/sections/agent-types/introduction-section";
import { CoreAgentCapabilitiesSection } from "@/components/sections/agent-types/core-agent-capabilities-section";
import { MultiAgentCollaborationSection } from "@/components/sections/agent-types/multi-agent-collaboration-section";
import { AgentCustomizationSection } from "@/components/sections/agent-types/customization-section";
import { PlatformGetStartedSection } from "@/components/sections/platform-overview/get-started-section"; // Re-using this CTA section
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Specialized AI Agents with Advanced Reasoning, Learning & Collaboration | RubiCore Platform",
  description: "Explore RubiCore's specialized AI agents: Deep Research, Knowledge (RAG+), Code Intelligence, SQL/Data Analysis, Process Automation, Decision, Creative, Simulation Agents, and more – including custom agents built for your unique workflows. Each agent is equipped with domain-specific tools, advanced memory, learning capabilities, and governed by enterprise controls with XAI features.",
};

export default function AgentTypesPage() {
  return (
    <div>
      <AgentTypesIntroductionSection />
      <CoreAgentCapabilitiesSection />
      <MultiAgentCollaborationSection />
      <AgentCustomizationSection />
      <PlatformGetStartedSection /> {/* Using the same CTA as Platform Overview */}
    </div>
  );
}
