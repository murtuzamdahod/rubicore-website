import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Zap, // Intelligent Orchestration
  Puzzle, // Low-Code Agent Studio
  ShieldCheck, // Built-in Governance & Security
  Network, // Seamless Integration Hub
  // Settings2, // Deep Customization & Control - Unused
  BarChart3, // Performance Analytics & Monitoring
  // Scaling, // Scalable & Reliable - Unused
  ArrowRight,
  Eye, // XAI
  Users, // Human-AI Collaboration
  ServerCog, // Technology Backbone
  Recycle, // Lifecycle Management
} from "lucide-react";

interface Pillar {
  icon: React.ElementType;
  title: string;
  description: React.ReactNode; // Changed to React.ReactNode to allow JSX
}

const pillars: Pillar[] = [
  {
    icon: Zap,
    title: "Intelligent & Adaptive Orchestration",
    description: "Visually design, manage, monitor, and optimize complex, multi-agent workflows and human-agent teams across your enterprise systems. Our Collaborative Orchestration Engine enables dynamic task allocation, goal-driven agent coordination, context sharing, failure recovery, and emergent behavior management. Support for swarm intelligence concepts for specific problem types and hierarchical agent team structures.",
  },
  {
    icon: Puzzle,
    title: "Unified Low-Code & Pro-Code Agent Studio",
    description: "Rapidly build, train, test, and customize agents using intuitive drag-and-drop tools, visual debugging, or jumpstart with pre-built agent templates. Extend capabilities with our comprehensive Python SDK and APIs. New Advanced Reasoning Designer lets you define sophisticated cognitive processes (e.g., chain-of-thought, tree-of-thought, ReAct, self-critique) without deep coding. Agent simulation environment for pre-deployment testing and behavior validation.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Security & Agent Governance",
    description: "Operate with industry-leading governance through our Zero-Trust Agent Architecture, which enforces granular RBAC, agent identity management, and comprehensive isolation between agents. Features full chain-of-custody audit trails that track every data access, reasoning step, and decision with cryptographic verification. The Policy-Based Governance Engine enables dynamic rule enforcement with compliance guardrails that adapt to different regulatory domains. Our unique Agent Guardian system continuously monitors for anomalous behavior, unauthorized access attempts, and policy violations with real-time alerts and automated remediation. Data is protected with quantum-resistant encryption (at rest, in transit, in use) with confidential computing support and advanced key management. Federated agent attestation for cross-organizational collaboration, behavior watermarking for agent action verification, and Constitutional AI guardrails with customizable ethical boundaries.",
  },
  {
    icon: Eye,
    title: "Explainable & Ethical AI (XAI) Framework",
    description: "Our comprehensive XAI suite provides unparalleled transparency into agent operation with multi-level explainability tailored to different stakeholders (technical teams, business users, regulators, customers). Features real-time explainability dashboards with LIME/SHAP visualizations, decision trees, and counterfactual analysis showing alternative paths not taken. The integrated Bias Detection & Mitigation Suite continuously monitors for unfair patterns across protected attributes with automated remediation recommendations. Our Ethical Impact Assessment tool helps evaluate potential unintended consequences before deployment. Explainable memory traces that visualize how agent memory influenced decisions, stakeholder-specific explanations that adapt to technical expertise levels, and cross-agent reasoning visualizations for multi-agent systems.",
  },
  {
    icon: Network,
    title: "Seamless & Dynamic Integration Hub",
    description: "Connect effortlessly with 50+ native connectors (OneDrive, SQL databases, Salesforce, ServiceNow, SAP, etc.), a rich API/SDK supporting standard protocols (REST, GraphQL, Webhooks, gRPC), and extensive integration possibilities. Rapidly expanding to 100+ connectors. Supports integration platforms like Zapier and MuleSoft, and provides capabilities for custom connector development and automated tool discovery. Our new Model Context Protocol (MCP) support enables dynamic tool discovery and real-time context sharing with external systems. Ability for agents to dynamically compose and chain API calls based on task requirements.",
  },
  {
    icon: Users,
    title: "Human-AI Collaboration & Oversight",
    description: "Design intelligent workflows with seamless Human-in-the-Loop (HITL) checkpoints for critical decisions, review, and approval. Features cutting-edge collaborative workspaces with real-time visibility into agent reasoning and operations. Our calibrated confidence system ensures agents appropriately escalate decisions when uncertainty thresholds are reached, while providing context-aware explainable outputs tailored to different stakeholder needs (technical, business, compliance). New Cognitive Ergonomics Framework optimizes information presentation to reduce human cognitive load during joint decision-making. Revolutionary Adaptive Control Framework balances autonomy with governance by dynamically adjusting agent permissions and human oversight levels based on task sensitivity, agent performance, confidence scoring, and historical success rates. Bi-directional learning loops where humans and agents mutually improve through structured feedback, embedded co-pilot interfaces that integrate directly within existing enterprise tools (Microsoft 365, Google Workspace, Salesforce, etc.), and team performance analytics that measure the combined effectiveness of human-AI teams over time.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics, Monitoring & Continuous Learning",
    description: "Track agent effectiveness, monitor usage, measure ROI, and gain insights for continuous improvement via real-time, customizable dashboards with predictive forecasting. Get detailed logs and regression analysis for root-cause diagnostics with comprehensive telemetry. Our Advanced Learning Framework features Reinforcement Learning from Human Feedback (RLHF), outcome-based learning, and belief updating mechanisms that ensure agent capabilities continuously adapt and improve through multi-modal feedback channels. New Attention Analysis tools identify exactly where agents focus during complex reasoning tasks, revealing opportunities for optimization. Performance Decomposition Analytics that break down agent tasks into measurable sub-components for targeted improvement, AI Workforce Simulator to predict optimal agent staffing and resource allocation, and intelligent cost management that automatically balances performance and resource usage in real-time.",
  },
  {
    icon: ServerCog,
    title: "Scalable, Resilient & Efficient Technology Backbone",
    description: "Architected using a modern microservices approach for high availability, modularity, and independent scaling. Supports containerization (Docker, Kubernetes) for flexible deployment. Features distributed task processing, advanced multi-layered agent memory systems (short-term, long-term, episodic, semantic, procedural - leveraging vector databases, knowledge graphs, and traditional DBs), robust tool use/function calling with self-correction, and flexible LLM integration (supporting various models, including fine-tuning and private model hosting capabilities). Our new Resource-Aware Execution Engine dynamically optimizes computational resources. Support for edge deployments for specific agents requiring low latency or offline capabilities.",
  },
  {
    icon: Recycle,
    title: "Comprehensive Agent Lifecycle Management",
    description: "Manage the entire lifecycle of your AI agents from design, development, testing (including sandboxed simulation environments), deployment, versioning, and retirement. Includes features for prompt engineering and management, agent skill versioning, and rollback capabilities. Benefit: Ensures robust management, control, and evolution of your AI workforce.",
  },
];

interface PlatformPillarsSectionProps {
  className?: string;
}

export function PlatformPillarsSection({
  className,
}: PlatformPillarsSectionProps) {
  const headline =
    "The Complete, Governed Platform for Your Evolving AI Workforce";
  const ctaLink = {
    text: "Explore the Full Platform Capabilities",
    href: "/platform/overview", // Placeholder link
  };

  return (
    <section
      className={cn("bg-muted/30 text-foreground py-16 md:py-24", className)}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {headline}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="bg-card p-6 rounded-lg shadow-sm">
              <pillar.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <Button asChild variant="link" size="lg" className="text-primary text-lg">
            <Link href={ctaLink.href}>
              {ctaLink.text} <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
