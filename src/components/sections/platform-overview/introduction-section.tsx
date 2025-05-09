import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function PlatformIntroductionSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-6">
              Meet RubiCore: Your All-in-One Platform for Secure Agentic AI
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              RubiCore is a <strong>unified Agentic AI platform</strong> that allows enterprises to <strong>build an “AI workforce” of specialized agents</strong>. Each agent can perceive, reason, and act to automate complex tasks – <strong>all under your strict governance</strong>. Unlike single-purpose chatbots, RubiCore agents can carry out multi-step processes, coordinate with each other, and directly interact with your enterprise applications and data. The platform provides everything needed to operationalize these agents at scale: a Low-Code Studio to create and configure agents, an Intelligent Orchestration Engine to manage workflows and collaboration between agents (and humans when needed), a Secure Integration Hub to link to your tech stack, and an Analytics suite to monitor outcomes.
            </p>
          </div>
          <div className="flex justify-center items-center">
            {/* Placeholder for High-level architecture diagram */}
            <Card className="w-full max-w-md bg-muted/40 border-dashed">
              <CardHeader>
                <CardTitle className="text-center text-muted-foreground">Visual Placeholder</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center h-64">
                <p className="text-muted-foreground">High-level architecture diagram</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
