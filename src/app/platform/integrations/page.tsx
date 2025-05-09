import IntegrationPhilosophySection from "@/components/sections/integrations/integration-philosophy-section";
import NativeConnectorsSection from "@/components/sections/integrations/native-connectors-section";
import ExtensibilityCustomIntegrationSection from "@/components/sections/integrations/extensibility-custom-integration-section";
import GrowingIntegrationEcosystemSection from "@/components/sections/integrations/growing-integration-ecosystem-section";

export const metadata = {
  title: "Secure Enterprise AI Integrations | RubiCore Agentic AI Platform",
  description:
    "Connect RubiCore AI agents securely with your enterprise systems. Native OneDrive & SQL DB support, robust API/SDK for custom connections, and a growing ecosystem of connectors for CRM, ITSM, ERP, and more – all with built-in governance.",
};

export default function IntegrationsPage() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            <span className="block">Connect Your AI Workforce Securely</span>
            <span className="block text-ruby-600 dark:text-ruby-500">
              Across Your Enterprise
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 sm:text-xl md:text-2xl">
            RubiCore integrates deeply and securely within your existing
            technology ecosystem, enabling governed AI agents to access data and
            automate tasks across your critical business applications – whether
            on-premise or in the cloud.
          </p>
        </div>
      </div>
      <IntegrationPhilosophySection />
      <NativeConnectorsSection />
      <ExtensibilityCustomIntegrationSection />
      <GrowingIntegrationEcosystemSection />
      {/* TODO: Add a final CTA section if needed, similar to other pages */}
    </main>
  );
}
