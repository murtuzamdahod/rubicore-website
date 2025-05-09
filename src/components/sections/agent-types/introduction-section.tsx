import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react"; // Example Icon

export function AgentTypesIntroductionSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-6">
              Purpose-Built Expertise for Reliable Automation
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Generic AI models struggle with the nuances and complexities of enterprise tasks. RubiCore provides <strong>specialized agents</strong>, each optimized with <strong>advanced reasoning engines</strong>, the right tools, and secure data access for specific domains (research, coding, analytics, etc.). This specialization ensures higher accuracy, better performance, and more reliable <strong>governed automation</strong> compared to one-size-fits-all bots. Build your AI workforce with <strong>experts by design</strong> to tackle your enterprise’s toughest challenges.
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
                <p className="text-muted-foreground text-center">Diverse agent icons interacting within a governed environment</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
