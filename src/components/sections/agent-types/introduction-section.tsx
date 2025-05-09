import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react"; // Example Icon

export function AgentTypesIntroductionSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-6">
              Purpose-Built Expertise & Collaborative Intelligence for Reliable, Adaptive Automation
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Generic AI models struggle with the nuances, complexities, and governance demands of enterprise tasks. RubiCore provides <strong>specialized agents</strong>, each optimized with <strong>advanced multi-modal reasoning engines, sophisticated memory systems, the right tools, adaptive learning capabilities, and secure data access</strong> for specific domains (research, coding, analytics, decision support, etc.). This specialization, combined with <strong>explainable AI (XAI) principles</strong>, ensures higher accuracy, better performance, enhanced trust, and more reliable <strong>governed automation</strong> compared to one-size-fits-all solutions. We&apos;ve expanded our agent ecosystem with <strong>next-generation specialized capabilities, robust multi-agent collaboration frameworks, and built-in continuous learning mechanisms</strong> that enable agent teams to work together on complex challenges—just like human experts—and improve over time. Build your AI workforce with <strong>experts by design that learn and adapt</strong> to tackle your enterprise&apos;s toughest challenges with transparency and control.
            </p>
          </div>
          <div className="flex justify-center items-center">
            {/* Placeholder for Graphic showing diverse agent icons */}
            <Card className="w-full max-w-md bg-muted/40 border-dashed">
              <CardHeader>
                <CardTitle className="text-center text-muted-foreground">Visual Placeholder</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center h-64">
                <BrainCircuit className="w-24 h-24 text-primary mb-4" />
                <p className="text-muted-foreground text-center">Diverse agent icons, unique toolsets, data streams, collaborating on complex tasks, with learning loops and XAI elements, within a governed environment.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
