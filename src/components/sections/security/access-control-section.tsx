import { Users, KeyRound, ShieldCheck, ListChecks } from "lucide-react"; // Example icons

const accessControlFeatures = [
  {
    icon: <Users className="w-10 h-10 text-ruby-600 dark:text-ruby-500" />,
    title: "Role-Based Access Control (RBAC)",
    description:
      "Define custom roles with specific permissions for platform features, agent management, data access, and integration configuration. Enforce least-privilege principles.",
  },
  {
    icon: <KeyRound className="w-10 h-10 text-ruby-600 dark:text-ruby-500" />,
    title: "SAML 2.0 SSO Integration",
    description:
      "Seamlessly integrate with your enterprise identity provider (e.g., Okta, Azure AD) for single sign-on and centralized identity management.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-ruby-600 dark:text-ruby-500" />,
    title: "API & Agent Credentials",
    description:
      "Manage API keys with detailed scopes. Treat agents as service accounts with defined data access, blocking out-of-scope attempts.",
  },
  {
    icon: <ListChecks className="w-10 h-10 text-ruby-600 dark:text-ruby-500" />,
    title: "Audit Trails & Alerts",
    description:
      "Log every user login, agent execution, integration call, or data access. Configure alerts for unusual activity for security team response.",
  },
];

export default function AccessControlSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Granular Control: Ensuring the Right Access, Always.
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            RubiCore provides fine-grained control over who (or what) can do
            what, ensuring robust security and compliance across your AI
            workforce.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {accessControlFeatures.map((feature) => (
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
