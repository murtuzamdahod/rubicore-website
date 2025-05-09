import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function PlatformIntroductionSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-6">
              Meet RubiCore: Your Unified Platform for Secure, Adaptive, and Explainable Agentic AI
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              RubiCore is a <strong>unified, enterprise-grade Agentic AI platform</strong> that allows organizations to <strong>build, deploy, manage, and govern an &quot;AI workforce&quot; of specialized, autonomous, and collaborative agents</strong>. Each agent can perceive multi-modal information, reason, plan, act, learn, and adapt to automate complex tasks and augment human capabilities – <strong>all under your strict governance and with full explainability</strong>. Unlike single-purpose chatbots or black-box AI, RubiCore agents can carry out sophisticated multi-step processes, coordinate dynamically with each other and human team members, and securely interact with your enterprise applications and data. The platform provides a comprehensive suite of tools: a <strong>Low-Code Studio and Pro-Code SDKs</strong> to create and configure agents, an <strong>Intelligent Orchestration Engine</strong> to manage complex workflows and collaboration, a <strong>Secure & Dynamic Integration Hub</strong> to link to your tech stack, an <strong>Advanced Analytics & Continuous Learning suite</strong> to monitor outcomes and drive improvement, and robust <strong>Human-AI Collaboration interfaces</strong>. Our <strong>Adaptive Multi-Agent Collaboration Framework</strong> enables sophisticated agent teams that can distribute work based on specializations, share context dynamically, learn from collective experience, and deliver outcomes that exceed what any single agent or uncoordinated group could accomplish alone.
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
