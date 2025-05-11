import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  CheckCircle, 
  LayoutPanelLeft, 
  Network, 
  PlugZap, 
  ShieldCheck, 
  BarChartBig, 
  Sparkles, 
  Users, 
  Recycle,
  Palette,
  GitFork,
  Link2,
  FileLock2,
  LineChart,
  BrainCircuit,
  UsersRound,
  IterationCw
} from "lucide-react";

const capabilities = [
  {
    value: "studio",
    title: "Agent Design & Development Studio", // Simplified title
    description: "Empower all skill levels to create, customize, and test sophisticated AI agents.",
    features: [
      "Visual workflow editor for agent logic",
      "Prompt engineering suite (basic capabilities available, advanced suite)",
      "Advanced reasoning designer (chain-of-thought, tree-of-thought, ReAct, self-critique)",
      "Agentic skill builder for reusable capabilities",
      "Template library for common agent types",
      "Versioning and integrated debugging tools",
      "Sandboxed simulation environment for pre-deployment testing",
      "Full Python SDK and APIs for pro-code development and extensibility",
    ],
    iconName: "Palette", // Changed from icon to iconName for clarity
  },
  {
    value: "orchestration",
    title: "Intelligent & Adaptive Orchestration",
    description: "Coordinate multiple agents, processes, and human collaborators seamlessly and dynamically.",
    features: [
      "Visual orchestration canvas to map multi-agent and human-AI workflows",
      "Event triggers and schedulers for automated processes",
      "Parallel and sequential task management",
      "Dynamic task allocation engine for optimal resource use",
      "Goal-driven coordination and conflict resolution mechanisms",
      "Human-in-the-loop injection points with clear escalation paths",
      "Context Sharing Protocol ensures agents build upon each other's work",
      "Support for hierarchical and swarm-based agent team structures",
    ],
    iconName: "GitFork",
  },
  {
    value: "integration",
    title: "Dynamic Integration & Extensibility Hub",
    description: "Connect RubiCore securely and adaptively across your entire enterprise ecosystem.",
    features: [
      "50+ pre-built connectors (databases, SaaS, internal APIs)",
      "Webhooks, event listeners, and Zapier integration",
      "Comprehensive REST API, Python SDK, and support for gRPC",
      "Model Context Protocol (MCP) Support for dynamic tool binding",
      "Automated tool discovery from OpenAPI specs and other sources",
      "Capability for agents to intelligently compose and chain API calls",
    ],
    iconName: "Link2",
  },
  {
    value: "security",
    title: "Enterprise Security, Governance & XAI", // Simplified title
    description: "Operate with trust, transparency, and control baked in.",
    features: [
      "Role-Based Access Control (RBAC), SAML/SSO (Okta, Azure AD)",
      "End-to-end encryption and immutable audit trails (data lineage, decision logs)",
      "Content filtering, data masking, and PII redaction",
      "On-premise, cloud, or hybrid deployment options",
      "Policy-Based Governance Engine for dynamic rule enforcement",
      "Integrated XAI tools (e.g., LIME/SHAP) and dashboards for decision explainability",
      "Bias detection and mitigation features",
      "Ethical AI framework with support for constitutional AI principles",
    ],
    iconName: "FileLock2",
  },
  {
    value: "analytics",
    title: "Monitoring, Analytics & Continuous Learning",
    description: "Drive continuous improvement with actionable insights and adaptive agents.",
    features: [
      "Real-time dashboards for agent activity, performance metrics, and ROI calculation",
      "Error alerting, debugging logs, and usage heatmaps",
      "Automated feedback loops via RLHF and outcome-based learning",
      "Predictive analytics for workflow and agent performance optimization",
      "Cost management and resource optimization analytics",
    ],
    iconName: "LineChart",
  },
  {
    value: "advanced-agents",
    title: "Advanced Agent Types & Specializations",
    description: "Deploy a diverse workforce of specialized intelligent agents.",
    features: [
      "Access a library of next-gen agents: Strategic Decision, Multi-Modal Creative, Code & Software Intelligence, Simulation & Foresight Agents",
      "Vertical Industry Agents (Finance, Healthcare, Legal, etc.)",
      "Domain-optimized reasoning, specialized tools, and continuous learning capabilities",
      "Governance safeguards appropriate to each agent's function",
      "Support for creating custom agent specializations",
    ],
    iconName: "BrainCircuit",
  },
  {
    value: "human-ai-collaboration",
    title: "Human-AI Collaboration Framework",
    description: "Amplify human potential with seamless agent-human teaming.",
    features: [
      "Intuitive interfaces for human oversight and intervention (HITL)",
      "Shared task management dashboards and collaborative workspaces",
      "Co-pilot integrations within existing enterprise tools",
      "Tools for humans to provide direct feedback to agents for refinement",
      "Explainable AI outputs tailored for human understanding and decision support",
      "Configurable roles and responsibilities for human and AI team members",
    ],
    iconName: "UsersRound",
  },
  {
    value: "alc",
    title: "Agent Lifecycle Management",
    description: "Comprehensive control from agent inception to retirement.",
    features: [
      "Tools for prompt engineering and versioning",
      "Agent skill and model versioning",
      "Sandboxed testing and validation environments",
      "Automated deployment pipelines (CI/CD for agents) and rollback capabilities",
      "Secure agent decommissioning processes",
      "Performance benchmarking and A/B testing frameworks for agent updates",
    ],
    iconName: "IterationCw",
  },
];

const IconMap: { [key: string]: React.ElementType } = {
  Palette,
  GitFork,
  Link2,
  FileLock2,
  LineChart,
  BrainCircuit,
  UsersRound,
  IterationCw,
  // Fallback if needed, though all should be mapped now
  LayoutPanelLeft, 
  Network, 
  PlugZap, 
  ShieldCheck, 
  BarChartBig, 
  Sparkles, 
  Users, 
  Recycle,
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
          {/* Using flex-wrap for TabsList to allow natural wrapping of items */}
          <TabsList className="flex flex-wrap w-full gap-2 sm:gap-3 mb-8 h-auto justify-center">
            {capabilities.map((cap) => (
              <TabsTrigger 
                key={cap.value} 
                value={cap.value} 
                className="text-xs sm:text-sm h-auto py-2 px-3 sm:py-2.5 sm:px-4 transition-colors duration-150 ease-in-out hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md rounded-md"
              >
                {cap.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {capabilities.map((cap) => {
            const IconComponent = IconMap[cap.iconName] || CheckCircle; // Use iconName
            return (
              <TabsContent key={cap.value} value={cap.value}>
                <Card className="shadow-lg border-border/60">
                  <CardHeader className="pb-4">
                    <div className="flex items-start sm:items-center mb-3">
                      <IconComponent className="h-7 w-7 sm:h-8 sm:w-8 text-primary mr-3 mt-1 sm:mt-0 flex-shrink-0" />
                      <CardTitle className="text-xl sm:text-2xl font-semibold leading-tight">{cap.title}</CardTitle>
                    </div>
                    <CardDescription className="text-md text-muted-foreground/90">{cap.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2.5">
                      {cap.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2.5 mt-0.5 flex-shrink-0" />
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
