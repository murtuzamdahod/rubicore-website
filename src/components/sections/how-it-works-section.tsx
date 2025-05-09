import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react"; // Icon for steps

interface Step {
  id: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Build & Customize",
    description:
      "Define agent roles and tasks in the Low-Code Agent Studio using intuitive tools or templates. Securely connect knowledge sources (documents, databases).",
  },
  {
    id: 2,
    title: "Integrate & Equip",
    description:
      "Connect RubiCore to your systems (OneDrive, databases, CRM, ITSM, Slack, etc.), and equip agents with the necessary tools and permissions via RBAC.",
  },
  {
    id: 3,
    title: "Orchestrate & Govern",
    description:
      "Design workflows, set triggers, configure HITL approval steps, apply compliance rules, and deploy agents securely (On-Premise or Cloud).",
  },
  {
    id: 4,
    title: "Monitor & Optimize",
    description:
      "Track performance and ROI via dashboards, review audit logs, analyze results, and refine agents for continuous improvement.",
  },
];

// Placeholder for the 4-step infographic
const InfographicPlaceholder = () => (
  <div className="w-full h-48 bg-primary/10 rounded-lg flex items-center justify-center p-4 my-8 md:my-12">
    <p className="text-primary/50 text-center">[4-Step Infographic Placeholder]</p>
  </div>
);

interface HowItWorksSectionProps {
  className?: string;
}

export function HowItWorksSection({ className }: HowItWorksSectionProps) {
  const headline = "Deploy & Scale Your Governed AI Workforce with Confidence";
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
