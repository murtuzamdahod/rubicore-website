import SecurityFoundationSection from "@/components/sections/security/security-foundation-section";
import OnPremiseHybridSection from "@/components/sections/security/on-premise-hybrid-section";
import AccessControlSection from "@/components/sections/security/access-control-section";
import DataProtectionSection from "@/components/sections/security/data-protection-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Enterprise AI Security & Compliance | On-Premise Ready | RubiCore",
  description:
    "Explore RubiCore’s enterprise-grade security: Secure on-premise & hybrid deployment, RBAC and SSO for access control, end-to-end encryption, audit logs, and compliance readiness (SOC 2, GDPR, HIPAA) – ensuring your AI agents are governed and trustworthy.",
};

export default function SecurityPage() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            <span className="block">Secure, Compliant, and Governed AI</span>
            <span className="block text-ruby-600 dark:text-ruby-500">
              for the Enterprise
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 sm:text-xl md:text-2xl">
            RubiCore is architected with a security-first approach, providing
            the robust controls, governance features, and flexible deployment
            options essential for sensitive enterprise environments and
            regulated industries.
          </p>
        </div>
      </div>
      <SecurityFoundationSection />
      <OnPremiseHybridSection />
      <AccessControlSection />
      <DataProtectionSection />
      <section className="py-16 bg-gray-50 dark:bg-gray-800 sm:py-24 w-full">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl mb-6">
            Learn More About Our Security
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Download our comprehensive datasheet for detailed information on our security architecture, controls, and compliance measures.
          </p>
          <Button size="lg" asChild>
            <Link href="/resources/security-datasheet.pdf"> {/* TODO: Update link if necessary */}
              Download Security Datasheet
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
