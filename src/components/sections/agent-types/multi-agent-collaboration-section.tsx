import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Share2, Zap, Users, Brain, DatabaseZap, CheckCircle } from "lucide-react"; // Example icons
import Link from "next/link";

interface MultiAgentCollaborationSectionProps {
  className?: string;
}

export function MultiAgentCollaborationSection({ className }: MultiAgentCollaborationSectionProps) {
  const headline = "Unlock Unprecedented Power Through Dynamic Multi-Agent Systems & Emergent Intelligence";
  const bodyText =
      "The true power of agentic AI emerges when specialized agents collaborate dynamically within sophisticated multi-agent systems (MAS) to solve complex problems—mirroring (and sometimes exceeding) the capabilities of expert human teams. With Deloitte predicting that " +
      "25% of GenAI adopters will pilot agentic AI in 2025, rising to 50% by 2027, multi-agent orchestration is becoming the new frontier for enterprise AI. RubiCore's " +
      "Advanced Multi-Agent Collaboration Framework & Orchestration Engine draws inspiration from cutting-edge frameworks like Microsoft AutoGen and CrewAI to enable:";

  const collaborationFeatures = [
    {
      title: "Dynamic Task & Goal Decomposition",
      description: "Complex objectives are broken down and distributed to the most suitable agents through goal-driven coordination and autonomous planning.",
      icon: Zap,
    },
    {
      title: "Adaptive Role Allocation",
      description: "Agents can take on different roles based on situational needs, with dynamic capability assessment determining optimal assignments in real-time.",
      icon: Users,
    },
    {
      title: "Sophisticated Communication & Negotiation Protocols",
      description: "Agents share information, negotiate resources, resolve conflicts, and align on strategies using standardized protocols with belief updating and consensus models.",
      icon: Share2,
    },
    {
      title: "Unified Data Foundation",
      description: "MCP-compatible infrastructure creates a robust agentic MDM solution, enabling agents to operate from a consistent data reality while reducing hallucinations by up to 40%.",
      icon: DatabaseZap, // Re-using, consider a more specific one if available
    },
    {
      title: "Shared Context & Knowledge",
      description: "A common operational picture and consensus memory allow agents to build on each other's work effectively through Model Context Protocol (MCP) infrastructure.",
      icon: Brain, // Re-using
    },
    {
      title: "Emergent Behavior Management",
      description: "While fostering innovation, our Policy-Based Governance Engine provides guardrails and monitoring for unexpected behaviors, balancing autonomy with security.",
      icon: CheckCircle, // Re-using
    },
    {
      title: "Hierarchical & Heterogeneous Teams",
      description: "Support for configurable team structures including manager-worker hierarchies, peer-to-peer collaborations, and swarm intelligence approaches for different problem types.",
      icon: Users, // Re-using
    },
  ];

  const exampleText =
      "For example: " +
      "Strategic Product Launch: A Deep Research Agent identifies market opportunities and monitors competitor movements in real-time. A Simulation Agent creates digital twin models for potential market responses to different product features. A Decision Agent with calibrated confidence scoring evaluates this data to finalize product strategy. Creative Agents generate multi-modal marketing assets with brand consistency verification. Process Automation Agents coordinate the launch logistics across systems with self-healing workflows, while a Knowledge Agent ensures all communications are compliant with dynamic regulatory checks. " +
      "Our Dynamic Task Allocation Engine and Context Sharing Protocol ensure seamless information flow and intelligent work distribution. This orchestrated intelligence approach enables end-to-end automation and problem-solving for sophisticated workflows that would be impossible for a single agent or statically configured team, all while maintaining comprehensive governance and explainability.";

  const cta = {
    text: "Explore Multi-Agent Systems & Orchestration",
    href: "/platform/overview#orchestration",
  };

  return (
    <section className={cn("py-12 md:py-16 lg:py-20 bg-background", className)}>
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {headline}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed mb-8">
          {bodyText}
        </div>
        
        {/* Visual Placeholder */}
        <div className="mb-12 md:mb-16 flex justify-center">
          <div className="w-full max-w-3xl h-72 bg-muted/30 rounded-lg flex items-center justify-center p-4">
            <p className="text-muted-foreground text-center">
              [Visual: Multiple specialized agents collaborating dynamically on a complex workflow, with information, goals, and context flowing between them, possibly showing emergent strategies or solutions, all managed by the Orchestration Engine with Microsoft AutoGen and CrewAI-inspired frameworks visualized.]
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {collaborationFeatures.map((feature) => {
            const Icon = feature.icon || CheckCircle;
            return (
              <div key={feature.title} className="p-6 bg-muted/30 rounded-lg">
                <Icon className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto text-muted-foreground leading-relaxed mb-12">
          {exampleText}
        </div>

        <div className="text-center">
          <Button asChild variant="link" size="lg" className="text-primary text-lg">
            <Link href={cta.href}>
              {cta.text} <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
