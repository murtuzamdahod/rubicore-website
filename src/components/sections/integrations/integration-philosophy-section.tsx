import { LockKeyhole, ShieldCheck } from "lucide-react"; // Example icons

export default function IntegrationPhilosophySection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Seamless & Secure Integration: Breaking Down Silos, Not Security.
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Effective enterprise automation demands seamless data flow{" "}
            <em>and</em> robust security. RubiCore’s integration capabilities
            ensure your AI agents become integral parts of your operational
            fabric –{" "}
            <strong>without creating new security risks or data silos</strong>.
            Agents can securely connect to data sources, trigger actions in
            other applications, and orchestrate workflows that span your entire
            tech stack, all while respecting your security posture. Every
            integration is authenticated and governed, so you maintain full
            control over what agents can see and do in other systems.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center p-6 border border-gray-200 rounded-lg dark:border-gray-700">
            <ShieldCheck className="w-12 h-12 text-ruby-600 dark:text-ruby-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Security First
            </h3>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-400 text-center">
              Integrations are designed with security as a core principle,
              ensuring data protection and compliance.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 border border-gray-200 rounded-lg dark:border-gray-700">
            <LockKeyhole className="w-12 h-12 text-ruby-600 dark:text-ruby-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Governed Access
            </h3>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-400 text-center">
              Maintain full control with authenticated and governed
              integrations, defining what agents can access and perform.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 border border-gray-200 rounded-lg dark:border-gray-700 md:col-span-2 lg:col-span-1">
            {/* Placeholder for a visual element or another key point */}
            <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">
                Visual: Secure Connections
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
