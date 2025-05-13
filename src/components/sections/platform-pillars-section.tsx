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
    description: "Visually design, manage, and optimize complex multi-agent workflows and human-agent teams. Enables dynamic task allocation, goal-driven coordination, and context sharing.",
  },
  {
    icon: Puzzle,
    title: "Unified Low-Code & Pro-Code Agent Studio",
    description: "Build, train, and customize agents with intuitive visual tools or extend with our Python SDK. Features an Advanced Reasoning Designer and simulation environment.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Security & Agent Governance",
    description: "Operate with Zero-Trust Architecture, RBAC, and full audit trails. Policy-Based Governance Engine ensures dynamic rule enforcement and compliance.",
  },
  {
    icon: Eye,
    title: "Explainable & Ethical AI (XAI) Framework",
    description: "Provides transparency with multi-level explainability, bias detection, and ethical impact assessment tools. Supports stakeholder-specific explanations.",
  },
  {
    icon: Network,
    title: "Seamless & Dynamic Integration Hub",
    description: "Connect with 50+ native connectors, APIs/SDKs, and MCP support for dynamic tool discovery. Enables agents to compose and chain API calls.",
  },
  {
    icon: Users,
    title: "Human-AI Collaboration & Oversight",
    description: "Design workflows with HITL checkpoints and collaborative workspaces. Calibrated confidence system ensures appropriate decision escalation.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics, Monitoring & Continuous Learning",
    description: "Track agent effectiveness, ROI, and gain insights via real-time dashboards. Advanced Learning Framework enables continuous agent improvement.",
  },
  {
    icon: ServerCog,
    title: "Scalable, Resilient & Efficient Technology Backbone",
    description: "Microservices architecture for high availability and scaling. Supports containerization, distributed task processing, and advanced agent memory systems.",
  },
  {
    icon: Recycle,
    title: "Comprehensive Agent Lifecycle Management",
    description: "Manage the entire agent lifecycle: design, development, testing, deployment, versioning, and retirement. Ensures robust control and evolution.",
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
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
