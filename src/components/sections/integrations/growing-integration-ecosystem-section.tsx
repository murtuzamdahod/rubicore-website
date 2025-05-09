import { Zap, Puzzle, Users, ShoppingBag } from "lucide-react"; // Example icons
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FeatureStatusBadge } from "@/components/ui/feature-status-badge"; // Import the badge

// Placeholder logos - replace with actual SVGs or image components
const PlaceholderLogo = ({ name }: { name: string }) => (
  <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center text-xs text-gray-500 dark:text-gray-400">
    {name}
  </div>
);

const currentIntegrations = [
  { name: "Salesforce", logo: <PlaceholderLogo name="SFDC" /> },
  { name: "ServiceNow", logo: <PlaceholderLogo name="SNOW" /> },
  { name: "Slack", logo: <PlaceholderLogo name="Slack" /> },
  { name: "OneDrive", logo: <PlaceholderLogo name="OneDrive" /> },
  { name: "PostgreSQL", logo: <PlaceholderLogo name="PGSql" /> },
  { name: "HubSpot", logo: <PlaceholderLogo name="HubSpot" /> },
];

const upcomingIntegrations = [
  { name: "SAP S/4HANA", logo: <PlaceholderLogo name="SAP" /> },
  { name: "Workday", logo: <PlaceholderLogo name="Workday" /> },
  { name: "Zendesk", logo: <PlaceholderLogo name="Zendesk" /> },
  { name: "Google Drive", logo: <PlaceholderLogo name="GDrive" /> },
  { name: "Jira", logo: <PlaceholderLogo name="Jira" /> },
  { name: "MS Teams", logo: <PlaceholderLogo name="Teams" /> },
];

export default function GrowingIntegrationEcosystemSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Connecting to <span className="text-ruby-600 dark:text-ruby-500">All</span> Your Essential Tools
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Beyond the native connectors available today, RubiCore is
            continuously expanding its integration ecosystem. Our roadmap
            includes connectors for major systems across CRM, ERP, HRIS,
            customer support, cloud drives, and more.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Currently Available
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
            {currentIntegrations.map((integration) => (
              <div
                key={integration.name}
                className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
              >
                {integration.logo}
                <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  {integration.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Coming Soon
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {upcomingIntegrations.map((integration) => (
              <div
                key={integration.name}
                className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-sm opacity-75"
              >
                {integration.logo}
                <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                  {integration.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            We’re also working closely with technology partners to build
            certified integrations and plan to launch an{" "}
            <strong className="text-ruby-600 dark:text-ruby-500">
              Integration & Agent Marketplace
            </strong>
            <FeatureStatusBadge status="Coming Soon" className="ml-2 align-middle"/>
            {" "}
            where third-party vendors and the community can publish connectors
            and agent templates.
          </p>
          <Button asChild size="lg">
            <Link href="/partners">Partner with Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
