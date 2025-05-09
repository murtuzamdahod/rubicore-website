import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const capabilities = [
  {
    value: "studio",
    title: "Low-Code Agent Studio",
    description: "Empower your team to create and customize AI agents without extensive coding.",
    features: [
      "Visual workflow editor for agent logic",
      "Prompt and tool configuration UI",
      "Template library for common agent types",
      "Versioning and testing tools",
    ],
    icon: "LayoutPanelLeft", // Placeholder, replace with actual icon component if available
  },
  {
    value: "orchestration",
    title: "Intelligent Orchestration",
    description: "Coordinate multiple agents and processes seamlessly.",
    features: [
      "Orchestration canvas to map multi-agent workflows",
      "Event triggers and schedulers",
      "Parallel task management",
      "Human-in-the-loop injection points",
    ],
    icon: "Network", // Placeholder
  },
  {
    value: "integration",
    title: "Integration & Extensibility",
    description: "Connect RubiCore everywhere it needs to be.",
    features: [
      "50+ pre-built connectors (databases, SaaS, internal APIs)",
      "Webhooks and event listeners",
      "Zapier integration for quick wins",
      "Comprehensive REST API & Python SDK",
    ],
    icon: "PlugZap", // Placeholder
  },
  {
    value: "security",
    title: "Security & Compliance",
    description: "Enterprise-grade governance baked in.",
    features: [
      "Role-Based Access Control (RBAC)",
      "SSO (Okta, Azure AD)",
      "End-to-end encryption (in transit and at rest)",
      "Audit trails for every agent action",
      "Content filtering & data masking",
      "On-prem deployment option",
    ],
    icon: "ShieldCheck", // Placeholder
  },
  {
    value: "analytics",
    title: "Monitoring & Analytics",
    description: "Insights for continuous improvement.",
    features: [
      "Real-time dashboards of agent activity and success rates",
      "ROI calculators (time saved, tickets resolved, etc.)",
      "Error alerting and debugging logs",
      "Usage heatmaps by department",
    ],
    icon: "BarChartBig", // Placeholder
  },
];

// A simple mapping for placeholder icons to Lucide icons
const IconMap: { [key: string]: React.ElementType } = {
  LayoutPanelLeft: CheckCircle, // Replace with actual icons later
  Network: CheckCircle,
  PlugZap: CheckCircle,
  ShieldCheck: CheckCircle,
  BarChartBig: CheckCircle,
};


export function CorePlatformCapabilitiesSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/20">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Core Platform Capabilities
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover the powerful features that make RubiCore the leading Agentic AI platform.
          </p>
        </div>

        <Tabs defaultValue={capabilities[0].value} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mb-8">
            {capabilities.map((cap) => (
              <TabsTrigger key={cap.value} value={cap.value} className="text-xs sm:text-sm">
                {/* Icon can be added here if small icons are desired in tabs */}
                {cap.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {capabilities.map((cap) => {
            const IconComponent = IconMap[cap.icon] || CheckCircle;
            return (
              <TabsContent key={cap.value} value={cap.value}>
                <Card className="shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center mb-2">
                      <IconComponent className="h-8 w-8 text-primary mr-3" />
                      <CardTitle className="text-2xl font-semibold">{cap.title}</CardTitle>
                    </div>
                    <CardDescription className="text-md">{cap.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {cap.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
