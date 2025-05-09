import { Database, Cable, Cloud, MessageSquare, Briefcase } from "lucide-react"; // Example icons
import { Button } from "@/components/ui/button";
import Link from "next/link";

const nativeConnectors = [
  {
    name: "Microsoft OneDrive / SharePoint",
    description:
      "Enable agents to securely read, write, and analyze documents stored in your Microsoft 365 environment. Powers Knowledge Agents (RAG) and document-based automations.",
    icon: <Cloud className="w-10 h-10 mb-4 text-ruby-600 dark:text-ruby-500" />,
  },
  {
    name: "SQL Databases (PostgreSQL, MySQL, etc.)",
    description:
      "Allow Data Agents to directly query and retrieve information from your structured databases using natural language, respecting database permissions.",
    icon: <Database className="w-10 h-10 mb-4 text-ruby-600 dark:text-ruby-500" />,
  },
  {
    name: "ServiceNow (ITSM)",
    description:
      "Let IT support agents create, update, or resolve tickets. Auto-resolve L1 incidents or route them with full context.",
    icon: <Briefcase className="w-10 h-10 mb-4 text-ruby-600 dark:text-ruby-500" />,
  },
  {
    name: "Salesforce (CRM)",
    description:
      "Connect Sales or Support agents to Salesforce to read and update records. Enrich leads or personalize support responses.",
    icon: <Cable className="w-10 h-10 mb-4 text-ruby-600 dark:text-ruby-500" />,
  },
  {
    name: "Slack & Microsoft Teams",
    description:
      "Deploy conversational agents into your daily chat platforms. Answer questions or perform tasks via chat commands.",
    icon: <MessageSquare className="w-10 h-10 mb-4 text-ruby-600 dark:text-ruby-500" />,
  },
];

export default function NativeConnectorsSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Secure, Out-of-the-Box Connectivity for Core Systems
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Accelerate deployment with built-in, secure connectors for
            essential enterprise data sources and services. Each connector is
            built with security in mind (OAuth 2.0, API tokens, scoping) to
            ensure agents only access what they’re supposed to.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {nativeConnectors.map((connector) => (
            <div
              key={connector.name}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              {connector.icon}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {connector.name}
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-400">
                {connector.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/contact-sales">Explore All Connectors</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
