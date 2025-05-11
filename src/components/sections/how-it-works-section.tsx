import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HowItWorksInfographic } from "@/components/visuals/HowItWorksInfographic"; // Import the new visual

interface Step {
  id: number; // Will be used as 'number' for the visual
  title: string;
  description: React.ReactNode; 
}

const stepsData: Step[] = [ // Renamed to stepsData to avoid conflict if visual prop is named 'steps'
  {
    id: 1,
    title: "Design & Build",
    description: "Define agent roles, goals, and tasks in the Low-Code Studio or Python SDK. Connect knowledge sources and set ethical boundaries.",
  },
  {
    id: 2,
    title: "Integrate & Equip",
    description: "Connect RubiCore to your systems and equip agents with tools, APIs, and permissions via RBAC. Enable MCP for adaptive capabilities.",
  },
  {
    id: 3,
    title: "Orchestrate & Collaborate",
    description: "Design multi-agent and human-AI workflows. Set triggers, configure HITL approvals, and apply compliance rules.",
  },
  {
    id: 4,
    title: "Deploy & Govern",
    description: "Deploy agents securely (On-Premise, Cloud, Hybrid, Edge). Enforce policies, monitor compliance, and leverage XAI.",
  },
  {
    id: 5,
    title: "Monitor, Learn & Optimize",
    description: "Track performance and ROI via dashboards. Use learning loops and feedback to refine agent capabilities.",
  },
];

// Placeholder for the 5-step infographic - will be removed
// const InfographicPlaceholder = () => (
//   <div className="w-full h-48 bg-primary/10 rounded-lg flex items-center justify-center p-4 my-8 md:my-12">
//     <p className="text-primary/50 text-center">[5-Step Infographic Placeholder]</p>
//   </div>
// );

interface HowItWorksSectionProps {
  className?: string;
}

export function HowItWorksSection({ className }: HowItWorksSectionProps) {
  const headline = "Design, Deploy, Govern & Continuously Evolve Your AI Workforce with Confidence";
  const cta = {
    text: "See it in Action (Request a Demo)",
    href: "/contact", 
  };

  const infographicSteps = stepsData.map(s => ({ number: s.id, title: s.title }));

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

        <div className="my-8 md:my-12">
          <HowItWorksInfographic steps={infographicSteps} />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8"> {/* Adjusted grid for 5 items */}
          {stepsData.map((step) => (
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
