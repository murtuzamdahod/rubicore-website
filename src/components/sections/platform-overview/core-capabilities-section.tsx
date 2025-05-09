import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const capabilities = [
  {
    value: "studio",
    title: "Agent Design & Development Studio (Low-Code & Pro-Code)",
    description: "Empower all skill levels to create, customize, and test sophisticated AI agents.",
    features: [
      "Visual workflow editor for agent logic",
      "Prompt engineering suite (basic capabilities available, advanced suite)",
      "advanced reasoning designer (chain-of-thought, tree-of-thought, ReAct, self-critique)",
      "agentic skill builder for reusable capabilities",
      "template library for common agent types",
      "versioning",
      "integrated debugging tools, and a sandboxed simulation environment for pre-deployment testing.",
      "Full Python SDK and APIs for pro-code development and extensibility.",
    ],
    icon: "LayoutPanelLeft",
  },
  {
    value: "orchestration",
    title: "Intelligent & Adaptive Orchestration",
    description: "Coordinate multiple agents, processes, and human collaborators seamlessly and dynamically.",
    features: [
      "Visual orchestration canvas to map multi-agent and human-AI workflows",
      "event triggers and schedulers",
      "parallel and sequential task management",
      "dynamic task allocation engine",
      "goal-driven coordination, conflict resolution mechanisms,",
      "and human-in-the-loop injection points with clear escalation paths.",
      "Context Sharing Protocol ensures agents build upon each other's work.",
      "Support for hierarchical and swarm-based agent team structures.",
    ],
    icon: "Network",
  },
  {
    value: "integration",
    title: "Dynamic Integration & Extensibility Hub",
    description: "Connect RubiCore securely and adaptively across your entire enterprise ecosystem.",
    features: [
      "50+ pre-built connectors (databases, SaaS, internal APIs)",
      "Webhooks, event listeners, Zapier integration",
      "Comprehensive REST API, Python SDK, and support for gRPC.",
      "New Model Context Protocol (MCP) Support and automated tool discovery mechanisms enable dynamic tool binding and real-time context sharing.",
      "Capability for agents to intelligently compose and chain API calls.",
    ],
    icon: "PlugZap",
  },
  {
    value: "security",
    title: "Enterprise Security, Governance & Explainable AI (XAI)",
    description: "Operate with trust, transparency, and control baked in.",
    features: [
      "Role-Based Access Control (RBAC), SAML/SSO (Okta, Azure AD)",
      "end-to-end encryption",
      "immutable audit trails (data lineage, decision logs)",
      "content filtering, data masking, PII redaction, on-prem/hybrid deployment.",
      "New Policy-Based Governance Engine for dynamic rule enforcement.",
      "Integrated XAI tools and dashboards (e.g., LIME/SHAP for supported models) to understand agent decisions,",
      "bias detection and mitigation features, and an Ethical AI framework with support for constitutional AI principles.",
      "Secure Multi-Party Computation principles for sensitive cross-agent operations where applicable.",
    ],
    icon: "ShieldCheck",
  },
  {
    value: "analytics",
    title: "Monitoring, Analytics & Continuous Learning",
    description: "Drive continuous improvement with actionable insights and adaptive agents.",
    features: [
      "Real-time dashboards for agent activity, performance metrics, and ROI calculation.",
      "Error alerting, debugging logs, usage heatmaps.",
      "Automated feedback loops via Reinforcement Learning from Human Feedback (RLHF) and outcome-based learning.",
      "Predictive analytics for workflow optimization and agent performance.",
      "Cost management and resource optimization analytics.",
    ],
    icon: "BarChartBig",
  },
  {
    value: "advanced-agents",
    title: "Advanced Agent Types & Specializations",
    description: "Deploy a diverse workforce of specialized intelligent agents.",
    features: [
      "Access to a growing library of next-generation agent types including Strategic Decision Agents, Multi-Modal Creative Agents, Code & Software Intelligence Agents, Simulation & Foresight Agents,",
      "and Vertical Industry Agents (Finance, Healthcare, Legal, etc.).",
      "Each features domain-optimized reasoning, specialized tools, continuous learning capabilities, and governance safeguards appropriate to their function.",
      "Support for creating custom agent specializations.",
    ],
    icon: "Sparkles", // Placeholder icon
  },
  {
    value: "human-ai-collaboration",
    title: "Human-AI Collaboration Framework",
    description: "Amplify human potential with seamless agent-human teaming.",
    features: [
      "Intuitive interfaces for human oversight and intervention (HITL).",
      "Shared task management dashboards, collaborative workspaces, and co-pilot integrations within existing enterprise tools.",
      "Tools for humans to provide direct feedback to agents for refinement.",
      "Explainable AI outputs tailored for human understanding and decision support.",
      "Configurable roles and responsibilities for human and AI team members.",
    ],
    icon: "Users", // Placeholder icon
  },
  {
    value: "alc",
    title: "Agent Lifecycle Management",
    description: "Comprehensive control from agent inception to retirement.",
    features: [
      "Tools for prompt engineering and versioning, agent skill and model versioning,",
      "sandboxed testing and validation environments, automated deployment pipelines (CI/CD for agents), rollback capabilities,",
      "and secure agent decommissioning.",
      "Performance benchmarking and A/B testing frameworks for agent updates.",
    ],
    icon: "Recycle", // Placeholder icon
  },
];

// A simple mapping for placeholder icons to Lucide icons
const IconMap: { [key: string]: React.ElementType } = {
  LayoutPanelLeft: CheckCircle,
  Network: CheckCircle,
  PlugZap: CheckCircle,
  ShieldCheck: CheckCircle,
  BarChartBig: CheckCircle,
  Sparkles: CheckCircle,
  Users: CheckCircle,
  Recycle: CheckCircle,
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
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mb-8">
            {capabilities.map((cap) => (
              <TabsTrigger key={cap.value} value={cap.value} className="text-xs sm:text-sm h-auto py-2">
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
