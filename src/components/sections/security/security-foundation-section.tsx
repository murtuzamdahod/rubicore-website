import { ShieldAlert, Layers, CheckCircle } from "lucide-react"; // Example icons

export default function SecurityFoundationSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Security & Governance: Embedded, Not Bolted On.
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            In the era of generative AI, robust security and auditable
            compliance are non-negotiable. RubiCore integrates enterprise-grade
            security principles and governance capabilities{" "}
            <strong>throughout</strong> the platform. From secure data handling
            and granular access control to deployment models that keep data on
            your turf and comprehensive audit logs, we provide the tools to
            operate your AI workforce responsibly. Every action an agent takes
            can be tracked; every integration is controlled. This means you can
            embrace AI automation while{" "}
            <strong>
              meeting stringent regulatory requirements and internal policies
            </strong>{" "}
            – no trade-offs needed.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center p-6 border border-gray-200 rounded-lg dark:border-gray-700">
            <ShieldAlert className="w-12 h-12 text-ruby-600 dark:text-ruby-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Security by Design
            </h3>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-400 text-center">
              Security principles are integrated into every layer of the
              platform architecture.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 border border-gray-200 rounded-lg dark:border-gray-700">
            <Layers className="w-12 h-12 text-ruby-600 dark:text-ruby-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Layered Defense
            </h3>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-400 text-center">
              Multiple layers of security controls protect your data and AI
              models.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 border border-gray-200 rounded-lg dark:border-gray-700">
            <CheckCircle className="w-12 h-12 text-ruby-600 dark:text-ruby-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Auditable Compliance
            </h3>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-400 text-center">
              Comprehensive logging and auditing features to meet regulatory
              requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
