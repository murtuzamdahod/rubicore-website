import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Step {
  id: number;
  title: string;
  description: React.ReactNode; // Changed to React.ReactNode
}

const steps: Step[] = [
  {
    id: 1,
    title: "Design & Build",
    description: "Define agent roles, goals, reasoning processes, and tasks in the Low-Code Agent Studio or using our Python SDK. Securely connect knowledge sources, configure specialized skills, and define ethical boundaries.",
  },
  {
    id: 2,
    title: "Integrate & Equip",
    description: "Connect RubiCore to your systems (OneDrive, databases, CRM, ITSM, Slack, ERP, etc.), and equip agents with necessary tools, APIs, and permissions via RBAC. Enable MCP and dynamic tool discovery for adaptive capabilities.",
  },
  {
    id: 3,
    title: "Orchestrate & Collaborate",
    description: "Design multi-agent and human-AI collaborative workflows. Set triggers, configure HITL approval steps, apply compliance rules, and define communication protocols between agents.",
  },
  {
    id: 4,
    title: "Deploy & Govern",
    description: "Deploy agents securely (On-Premise, Cloud, Hybrid, or Edge). Enforce security policies, monitor for compliance, and leverage XAI features for transparency and auditability.",
  },
  {
    id: 5,
    title: "Monitor, Learn & Optimize",
    description: "Track performance, ROI, and ethical alignment via dashboards. Review audit logs, analyze results, and utilize automated learning loops (RLHF, outcome-based learning) and human feedback to continuously refine and improve agent capabilities and efficiency.",
  },
];

// Placeholder for the 5-step infographic
const InfographicPlaceholder = () => (
  <div className="w-full h-48 bg-primary/10 rounded-lg flex items-center justify-center p-4 my-8 md:my-12">
    <p className="text-primary/50 text-center">[5-Step Infographic Placeholder]</p>
  </div>
);

interface HowItWorksSectionProps {
  className?: string;
}

export function HowItWorksSection({ className }: HowItWorksSectionProps) {
  const headline = "Design, Deploy, Govern & Continuously Evolve Your AI Workforce with Confidence";
  const cta = {
    text: "See it in Action (Request a Demo)",
    href: "/request-demo", // Placeholder link
  };

  return (
    <section
      className={cn("bg-background text-foreground py-16 md:py-24", className)}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {headline}
          </h2>
        </div>

        <InfographicPlaceholder />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center p-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-6 shadow-lg">
                {step.id}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <Button asChild size="lg" className="shadow-lg">
            <Link href={cta.href}>{cta.text}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
