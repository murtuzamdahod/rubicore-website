import { Server, Cloud, Combine, CheckSquare, ShieldCheck, DatabaseZap } from "lucide-react"; // Example icons

const benefits = [
  {
    icon: <Server className="w-8 h-8 text-ruby-600 dark:text-ruby-500" />,
    title: "Maximum Data Sovereignty",
    description: "All data and computations can remain in-house.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-ruby-600 dark:text-ruby-500" />,
    title: "Reduced Attack Surface",
    description: "No external dependencies means fewer vulnerabilities.",
  },
  {
    icon: <CheckSquare className="w-8 h-8 text-ruby-600 dark:text-ruby-500" />,
    title: "Simplified Compliance",
    description: "Aligns with strict data regulations and internal audit requirements.",
  },
  {
    icon: <Combine className="w-8 h-8 text-ruby-600 dark:text-ruby-500" />,
    title: "Flexible Hybrid Options",
    description: "Use on-prem for critical pieces and connect to cloud services securely.",
  },
  {
    icon: <DatabaseZap className="w-8 h-8 text-ruby-600 dark:text-ruby-500" />,
    title: "Control Over AI Models",
    description: "Run open-source models on-prem or restrict cloud model access.",
  },
];

export default function OnPremiseHybridSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Your Data, Your Infrastructure, Your Rules.
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            For organizations demanding maximum control over data residency,
            privacy, and security, RubiCore offers{" "}
            <strong>full on-premise deployment</strong>. Install and run the
            entire platform within your own data centers or private cloud.
            Alternatively, leverage our <strong>secure hybrid model</strong> to
            balance control with cloud-based scale. No matter the model,{" "}
            <strong>you decide where your data lives and how it’s used</strong>.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex items-start">
              <div className="flex-shrink-0">{benefit.icon}</div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {benefit.title}
                </h3>
                <p className="mt-1 text-base text-gray-600 dark:text-gray-400">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
            {/* Placeholder for a visual element: Data center graphic alongside cloud/hybrid icons */}
            <div className="w-full max-w-2xl h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">Visual: On-Premise, Cloud, Hybrid Icons</p>
            </div>
        </div>
      </div>
    </section>
  );
}
