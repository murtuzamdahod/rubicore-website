import IntegrationPhilosophySection from "@/components/sections/integrations/integration-philosophy-section";
import NativeConnectorsSection from "@/components/sections/integrations/native-connectors-section";
import ExtensibilityCustomIntegrationSection from "@/components/sections/integrations/extensibility-custom-integration-section";
import GrowingIntegrationEcosystemSection from "@/components/sections/integrations/growing-integration-ecosystem-section";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Secure Enterprise AI Integrations & Dynamic Tooling | RubiCore Agentic AI Platform",
  description:
    "Connect RubiCore AI agents securely and dynamically with your enterprise systems. Native connectors, robust API/SDK, MCP support for automated tool discovery, and a growing ecosystem for CRM, ITSM, ERP, data platforms, and custom applications – all with built-in governance and security.",
};

export default function IntegrationsPage() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Connect Your AI Workforce Securely & Adaptively Across Your Entire Enterprise Ecosystem
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl md:text-2xl">
          RubiCore integrates deeply and dynamically within your existing technology landscape, enabling governed AI agents to securely access data, discover tools, and automate tasks across your critical business applications – on-premise, in the cloud, or at the edge.
        </p>
      </div>
      <IntegrationPhilosophySection />
      <NativeConnectorsSection />
      <ExtensibilityCustomIntegrationSection />
      <GrowingIntegrationEcosystemSection />
      {/* TODO: Add a final CTA section if needed, similar to other pages */}
    </main>
  );
}
