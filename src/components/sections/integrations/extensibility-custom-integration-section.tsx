import { Code2, Terminal, Share2, KeyRound, Zap, Settings2, Construction, Network } from "lucide-react"; // Example icons

const extensibilityFeatures = [
  {
    name: "Well-Documented REST & GraphQL APIs",
    description: "Expose all core functionalities for programmatic control over agents, workflows, monitoring, and platform management.",
    icon: Code2,
  },
  {
    name: "Comprehensive Python SDK (and other languages forthcoming)",
    description: "Offers an idiomatic way to interact with RubiCore, build custom agent tools, script complex tasks, or embed RubiCore capabilities into other applications.",
    icon: Terminal,
  },
  {
    name: "Model Context Protocol (MCP) Support",
    description: "RubiCore acts as both an MCP client and server, allowing agents to dynamically discover and utilize tools from any MCP-compatible system, and expose RubiCore capabilities as MCP resources. This fosters a composable AI ecosystem.",
    icon: Network,
  },
  {
    name: "Automated Tool Discovery",
    description: "Beyond MCP, agents can discover and understand how to use tools based on OpenAPI specifications or other registered service descriptions, reducing manual integration effort.",
    icon: Zap,
  },
  {
    name: "Agent-Driven API Composition",
    description: "Agents can intelligently plan and execute sequences of API calls, potentially across multiple services, to achieve complex goals, adapting to an evolving API landscape.",
    icon: Settings2,
  },
  {
    name: "Custom Connector SDK",
    description: "A dedicated SDK and framework for developing, testing, and deploying new connectors, enabling partners and customers to easily integrate their own systems.",
    icon: Construction,
  },
  {
    name: "Webhooks & Event-Driven Architecture",
    description: "Emit and consume events to integrate with third-party automation services (Zapier, Make, etc.) or trigger/be triggered by enterprise event buses.",
    icon: Share2,
  },
  {
    name: "Secure Authentication & Authorization",
    description: "Robust support for API keys, OAuth 2.0, OpenID Connect, and custom auth flows ensures all integrations adhere to enterprise security standards.",
    icon: KeyRound,
  },
];

export default function ExtensibilityCustomIntegrationSection() {
  return (
    <section className="py-16 bg-muted/20 dark:bg-gray-800/20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Unlimited Connectivity with Our Robust API, SDK, and Dynamic Tooling Capabilities
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            RubiCore provides a comprehensive suite for developers to extend the platform’s reach to any proprietary system, niche application, or evolving enterprise need:
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {extensibilityFeatures.map((feature) => (
            <div
              key={feature.name}
              className="bg-background dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex"
            >
              <div className="flex-shrink-0 mr-6">
                <feature.icon className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.name}
                </h3>
                <p className="text-base text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* CTA buttons removed as per draft */}
      </div>
    </section>
  );
}
