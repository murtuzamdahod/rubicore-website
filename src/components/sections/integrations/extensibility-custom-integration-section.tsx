import { Code2, Terminal, Share2, KeyRound } from "lucide-react"; // Example icons
import { Button } from "@/components/ui/button";
import Link from "next/link";

const extensibilityFeatures = [
  {
    name: "Well-Documented REST API",
    description:
      "Expose all core functionalities via secure APIs. Integrate RubiCore into your microservice architecture or call it from your own applications.",
    icon: <Code2 className="w-10 h-10 mb-4 text-ruby-600 dark:text-ruby-500" />,
  },
  {
    name: "Python SDK",
    description:
      "Our Python SDK offers an idiomatic way to interact with RubiCore. Build custom agent tools, script batch tasks, or create new agent types.",
    icon: <Terminal className="w-10 h-10 mb-4 text-ruby-600 dark:text-ruby-500" />,
  },
  {
    name: "Webhooks & Events",
    description:
      "Emit events and consume incoming webhooks to trigger workflows. Integrate with third-party automation services like Zapier.",
    icon: <Share2 className="w-10 h-10 mb-4 text-ruby-600 dark:text-ruby-500" />,
  },
  {
    name: "Secure Authentication Methods",
    description:
      "API keys with role scopes, OAuth integration options, and support for custom auth flows ensure secure custom integrations.",
    icon: <KeyRound className="w-10 h-10 mb-4 text-ruby-600 dark:text-ruby-500" />,
  },
];

export default function ExtensibilityCustomIntegrationSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Unlimited Connectivity with Our Robust API & SDK
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Have a proprietary system or niche application? Need something
            custom? RubiCore provides a comprehensive REST API and Python SDK
            for developers to extend the platform’s reach.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {extensibilityFeatures.map((feature) => (
            <div
              key={feature.name}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex"
            >
              <div className="flex-shrink-0 mr-6">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.name}
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg" className="mr-4">
            <Link href="/docs/api">View API Docs</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/docs/sdk">Explore SDK Guides</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
