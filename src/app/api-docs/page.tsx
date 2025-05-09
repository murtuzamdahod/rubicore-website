import { Terminal, Puzzle, Zap, ShieldCheck, HardHat } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "API & SDK Reference | RubiCore",
  description: "Explore the upcoming RubiCore API and SDK for extending and integrating our Agentic AI platform.",
};

const features = [
  {
    icon: <Terminal className="w-8 h-8 text-ruby-600 dark:text-ruby-500" />,
    name: "Comprehensive REST API",
    description: "Programmatically manage agents, workflows, data, and more. Integrate RubiCore into your existing services and applications.",
  },
  {
    icon: <Puzzle className="w-8 h-8 text-ruby-600 dark:text-ruby-500" />,
    name: "Python SDK (Coming Soon)",
    description: "An intuitive Python SDK to simplify interactions, build custom tools, and script complex automations with ease.",
  },
  {
    icon: <Zap className="w-8 h-8 text-ruby-600 dark:text-ruby-500" />,
    name: "Build Custom Agent Skills",
    description: "Extend agent capabilities by creating custom tools and actions that connect to your proprietary systems or third-party services.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-ruby-600 dark:text-ruby-500" />,
    name: "Secure & Governed",
    description: "All API and SDK interactions adhere to RubiCore's robust security and governance framework, ensuring safe and controlled extensions.",
  },
];

export default function ApiDocsPage() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="text-center">
          <HardHat className="w-20 h-20 text-ruby-500 mx-auto mb-6" />
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            RubiCore API & SDK
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-400">
            Unlock the full potential of the RubiCore platform by integrating and extending its capabilities with our powerful developer tools.
          </p>
          <p className="mt-4 text-2xl font-semibold text-ruby-600 dark:text-ruby-500">
            Coming Soon!
          </p>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-8 sm:text-3xl">
            Advantages & Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div key={feature.name} className="flex items-start p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <div className="flex-shrink-0 mr-4 pt-1">{feature.icon}</div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">{feature.name}</h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
         <div className="mt-16 text-center">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Our comprehensive API and Python SDK are under active development and will be released soon.
                <br />
                Stay tuned for detailed documentation and guides.
            </p>
          <Button size="lg" asChild>
            <Link href="/resources#newsletter">Subscribe for Updates</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
