import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DotPattern } from "@/components/ui/dot-pattern"; // Restoring DotPattern
import { BusinessChallengesVisual } from "@/components/visuals/BusinessChallengesVisual"; // Import the new visual
import { RubiCoreSolutionVisual } from "@/components/visuals/RubiCoreSolutionVisual"; // Import the new solution visual

// const ChallengeVisualPlaceholder = () => (
//   <Card className="w-full h-64 md:h-80 bg-destructive/5 border-destructive/20 flex flex-col items-center justify-center p-4">
//     <CardHeader>
//       <CardTitle className="text-destructive/80 text-center">Tangled Processes</CardTitle>
//     </CardHeader>
//     <CardContent>
//       <p className="text-destructive/50 text-center text-sm">
//         [Visual representing complexity, silos, inefficiency]
//       </p>
//     </CardContent>
//   </Card>
// );

// const SolutionVisualPlaceholder = () => (
//   <Card className="w-full h-64 md:h-80 bg-primary/5 border-primary/20 flex flex-col items-center justify-center p-4">
//     <CardHeader>
//       <CardTitle className="text-primary/80 text-center">Streamlined RubiCore Workflow</CardTitle>
//     </CardHeader>
//     <CardContent>
//       <p className="text-primary/50 text-center text-sm">
//         [Visual representing clarity, orchestration, efficiency with RubiCore]
//       </p>
//     </CardContent>
//   </Card>
// );


interface ChallengeSolutionSectionProps {
  className?: string;
}

export function ChallengeSolutionSection({
  className,
}: ChallengeSolutionSectionProps) {
  const headline =
    "Stop Patching Processes. Start Orchestrating Governed, Collaborative Intelligence.";
  // Shortened for brevity in card
  const challengeSummary = "Enterprises face complex, siloed workflows, lacking secure, controllable, and deeply integrated AI for mission-critical tasks.";
  const solutionSummary = "RubiCore offers a unified platform for building, deploying, and governing specialized AI agents with robust security and dynamic collaboration.";

  return (
    <section
      className={cn("relative bg-background text-foreground py-16 md:py-24 overflow-hidden", className)}
    >
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "absolute inset-0 z-0 h-full w-full [mask-image:linear-gradient(to_bottom_right,white,transparent_50%,transparent)]",
        )}
      />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16">
          {headline}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mb-12 md:mb-16"> {/* Main grid for columns, items-start for top alignment */}
          {/* Column 1: Challenge Text + Challenge Visual */}
          <div className="flex flex-col gap-8 md:gap-12">
            <Card className="bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-primary">The Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">{challengeSummary}</p>
                <p className="text-muted-foreground leading-relaxed text-sm">Generic solutions often create new silos, compliance risks, and trust deficits, failing to orchestrate heterogeneous multi-agent teams effectively.</p>
                <Button asChild variant="link" className="text-primary px-0 mt-4">
                  <Link href="/solutions">Learn More about Challenges</Link>
                </Button>
              </CardContent>
            </Card>
            <BusinessChallengesVisual className="h-full" />
          </div>

          {/* Column 2: Solution Text + Solution Visual */}
          <div className="flex flex-col gap-8 md:gap-12">
            <Card className="bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-primary">The RubiCore Solution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">{solutionSummary}</p>
                <p className="text-muted-foreground leading-relaxed text-sm">Our Context-Aware Orchestration Engine enables dynamic agent collaboration within robust security and ethical AI frameworks, delivering powerful, trustworthy automation.</p>
                <Button asChild variant="link" className="text-primary px-0 mt-4">
                  <Link href="/platform/overview">Discover the Platform</Link>
                </Button>
              </CardContent>
            </Card>
            <RubiCoreSolutionVisual className="h-[550px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
