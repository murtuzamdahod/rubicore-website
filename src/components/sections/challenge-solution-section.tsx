import { cn } from "@/lib/utils";

// Placeholder for the split visual
const SplitVisualPlaceholder = () => (
  <div className="w-full h-64 md:h-80 bg-primary/10 rounded-lg flex items-center justify-center p-4">
    <p className="text-primary/50 text-center">
      [Visual: Tangled Processes vs. Streamlined RubiCore Workflow]
    </p>
  </div>
);

interface ChallengeSolutionSectionProps {
  className?: string;
}

export function ChallengeSolutionSection({
  className,
}: ChallengeSolutionSectionProps) {
  const headline =
    "Stop Patching Processes. Start Orchestrating Governed Intelligence.";
  const challengeText =
    "Today's enterprises demand more than basic chatbots or siloed automation. You need secure, controllable AI that understands your complex end-to-end workflows, integrates deeply with your entire tech stack, and operates with built-in governance. Generic solutions lack the depth, security, orchestration capabilities, and customization required for mission-critical tasks – often creating new silos and compliance risks.";
  const solutionText =
    "RubiCore provides the complete platform to build, deploy, orchestrate, and manage specialized AI agents tailored to your unique enterprise needs. Move beyond simple task automation to intelligent, multi-step process execution with advanced reasoning, deep research, and secure data interaction – all deployable on-premise for maximum control or with hybrid flexibility. Every agent operates within robust security and compliance guardrails, with performance monitoring and human oversight as needed, delivering automation that is powerful and trustworthy.";

  return (
    <section
      className={cn("bg-background text-foreground py-16 md:py-24", className)}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16">
          {headline}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-4">The Challenge</h3>
            <p className="text-muted-foreground leading-relaxed">{challengeText}</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-4">The RubiCore Solution</h3>
            <p className="text-muted-foreground leading-relaxed">{solutionText}</p>
          </div>
        </div>

        <SplitVisualPlaceholder />
      </div>
    </section>
  );
}
