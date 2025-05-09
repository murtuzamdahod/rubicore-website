import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Zap, // Intelligent Orchestration
  Puzzle, // Low-Code Agent Studio
  ShieldCheck, // Built-in Governance & Security
  Network, // Seamless Integration Hub
  Settings2, // Deep Customization & Control
  BarChart3, // Performance Analytics & Monitoring
  Scaling, // Scalable & Reliable
  ArrowRight,
} from "lucide-react";

interface Pillar {
  icon: React.ElementType;
  title: string;
  description: string;
}

const pillars: Pillar[] = [
  {
    icon: Zap,
    title: "Intelligent Orchestration",
    description:
      "Visually design, manage, and monitor complex, multi-agent workflows across your enterprise systems.",
  },
  {
    icon: Puzzle,
    title: "Low-Code Agent Studio",
    description:
      "Rapidly build, train, and customize agents using intuitive drag-and-drop tools or jumpstart with pre-built agent templates, accelerating time-to-value.",
  },
  {
    icon: ShieldCheck,
    title: "Built-in Governance & Security",
    description:
      "Operate responsibly with granular RBAC, SAML/SSO, audit logs, PII handling, and compliance guardrails. Every action is auditable and controllable.",
  },
  {
    icon: Network,
    title: "Seamless Integration Hub",
    description:
      "Connect effortlessly with native connectors (OneDrive, SQL databases, etc.), a rich API/SDK, and extensive integration possibilities. 50+ out-of-the-box integrations and rapidly expanding.",
  },
  {
    icon: Settings2,
    title: "Deep Customization & Control",
    description:
      "Configure agent behavior, build custom tools, tailor prompts, and define Human-in-the-Loop (HITL) checkpoints for critical decisions and oversight.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics & Monitoring",
    description:
      "Track agent effectiveness, monitor usage, measure ROI, and gain insights for continuous improvement. Get real-time dashboards.",
  },
  {
    icon: Scaling,
    title: "Scalable & Reliable",
    description:
      "Architected for high availability and performance to meet demanding enterprise workloads, deployable on-premise, cloud, or hybrid.",
  },
];

interface PlatformPillarsSectionProps {
  className?: string;
}

export function PlatformPillarsSection({
  className,
}: PlatformPillarsSectionProps) {
  const headline =
    "The Complete Platform for Building, Orchestrating & Governing Your AI Workforce";
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
