import { Users, KeyRound, ShieldCheck, ListChecks } from "lucide-react"; // Example icons

const accessControlFeatures = [
  {
    icon: Users,
    title: "Role-Based Access Control (RBAC)",
    description:
      "Define custom roles with specific permissions for platform features, agent development, deployment, data access, tool usage, and integration configuration. Enforce least-privilege principles rigorously for both human users and AI agents.",
  },
  {
    icon: KeyRound,
    title: "SAML 2.0 / OpenID Connect SSO Integration",
    description:
      "Seamlessly integrate with your enterprise identity provider (e.g., Okta, Azure AD, Ping Identity) for federated single sign-on and multi-factor authentication (MFA) enforcement.",
  },
  {
    icon: ShieldCheck, // Using ShieldCheck as a generic icon for Agent Identity
    title: "Agent Identity & Secure Credentials Management",
    description:
      "Each AI agent possesses a unique, manageable identity. Securely manage API keys, tokens, and other credentials used by agents to interact with internal and external systems, with support for secrets management vaults (e.g., HashiCorp Vault, Azure Key Vault).",
  },
  {
    icon: Users, // Re-using Users icon for Fine-Grained Permissions
    title: "Fine-Grained Permissions for Agents",
    description:
      "Control exactly what data sources, tools, APIs, and other agents an individual agent or agent group can access and what actions they can perform.",
  },
  {
    icon: ListChecks,
    title: "Comprehensive Audit Trails & Real-Time Alerts",
    description:
      "Every user action, agent execution, API call, data access, permission change, and system event is logged immutably. Configure real-time alerts for suspicious activity, policy violations, or critical system events, integrated with your SIEM.",
  },
];

export default function AccessControlSection() {
  return (
    <section className="py-16 bg-muted/20 dark:bg-gray-800/20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
            Granular, Unified Control: Ensuring the Right Access for Humans and Agents, Always.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            RubiCore provides fine-grained, centralized control over all access:
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"> {/* Adjusted for potentially 5 items */}
          {accessControlFeatures.map((feature) => (
            <div
              key={feature.title}
              className="bg-background dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex"
            >
              <div className="flex-shrink-0 mr-6">
                <feature.icon className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-base text-muted-foreground">
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
