import { Lock, EyeOff, Globe, FileCheck2 } from "lucide-react"; // Example icons

const dataProtectionFeatures = [
  {
    icon: <Lock className="w-10 h-10 text-ruby-600 dark:text-ruby-500" />,
    title: "Encryption",
    description:
      "All data is encrypted in transit (TLS 1.3) and at rest. Sensitive fields can be additionally encrypted at the application layer.",
  },
  {
    icon: <EyeOff className="w-10 h-10 text-ruby-600 dark:text-ruby-500" />,
    title: "PII Handling",
    description:
      "The platform can automatically mask or redact personally identifiable information from AI prompts and responses, preventing unintended exposure.",
  },
  {
    icon: <Globe className="w-10 h-10 text-ruby-600 dark:text-ruby-500" />,
    title: "Data Residency & Retention",
    description:
      "Choose where your data (and AI model outputs) are stored. Confine data to specific geographic servers and control retention policies.",
  },
  {
    icon: <FileCheck2 className="w-10 h-10 text-ruby-600 dark:text-ruby-500" />,
    title: "Certifications & Standards",
    description:
      "Built to comply with SOC 2 Type II requirements, with ongoing pursuit of certifications like ISO 27001, FedRAMP, etc.",
  },
];

export default function DataProtectionSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Protecting Your Data at Every Step
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            RubiCore implements robust data protection measures to ensure your
            sensitive information is always secure and handled responsibly. Your
            data remains yours – we never use it to train our models or share it
            with third parties.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {dataProtectionFeatures.map((feature) => (
            <div
              key={feature.title}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex"
            >
              <div className="flex-shrink-0 mr-6">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
