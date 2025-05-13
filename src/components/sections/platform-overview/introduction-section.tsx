import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { BlurFade } from "@/components/ui/blur-fade";

export function PlatformIntroductionSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            {/* left aligned AnimatedShinyText */}
            <BlurFade delay={0.25 * 0} inView>
              <div className="mb-6">
                <AnimatedShinyText className="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
                  Meet RubiCore: Your Unified Platform for Secure, Adaptive, and Explainable Agentic AI
                </AnimatedShinyText>
              </div>
            </BlurFade>
            
            <BlurFade delay={0.25 * 1} inView>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                RubiCore is a <strong>unified, enterprise-grade Agentic AI platform</strong> designed to empower organizations to build, deploy, manage, and govern an intelligent &quot;AI workforce.&quot;
              </p>
            </BlurFade>

            <BlurFade delay={0.25 * 2} inView>
              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Specialized & Autonomous Agents</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Create specialized, autonomous, and collaborative agents capable of perceiving multi-modal information, reasoning, planning, acting, and continuously learning. These agents automate complex tasks and augment human capabilities, all under your strict governance and with full explainability.
              </p>
            </BlurFade>

            <BlurFade delay={0.25 * 3} inView>
              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Comprehensive Platform Pillars</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Unlike single-purpose chatbots, RubiCore agents execute sophisticated multi-step processes and securely interact with your enterprise systems. The platform includes:
              </p>
              <ul className="list-disc list-inside text-lg text-muted-foreground leading-relaxed space-y-1 mb-4">
                <li><strong>Low-Code Studio & Pro-Code SDKs:</strong> For intuitive agent creation and customization.</li>
                <li><strong>Intelligent Orchestration Engine:</strong> To manage complex multi-agent and human-AI workflows.</li>
                <li><strong>Secure & Dynamic Integration Hub:</strong> To seamlessly connect with your existing tech stack.</li>
                <li><strong>Advanced Analytics & Continuous Learning:</strong> For monitoring outcomes and driving improvements.</li>
                <li><strong>Robust Human-AI Collaboration Interfaces:</strong> Fostering seamless teamwork.</li>
              </ul>
            </BlurFade>
            
            <BlurFade delay={0.25 * 4} inView>
              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Adaptive Multi-Agent Collaboration</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our innovative <strong>Adaptive Multi-Agent Collaboration Framework</strong> enables sophisticated agent teams that distribute work by specialization, share context dynamically, learn collectively, and achieve outcomes beyond the reach of individual agents.
              </p>
            </BlurFade>
          </div>
          <BlurFade delay={0.25 * 5} inView className="flex justify-center items-center">
            {/* Placeholder for High-level architecture diagram - using RubiCoreSolutionVisual for now */}
            {/* <RubiCoreSolutionVisual className="w-full max-w-lg" /> */}
            <Card className="w-full max-w-md bg-muted/40 border-dashed">
              <CardHeader>
                <CardTitle className="text-center text-muted-foreground">Conceptual Platform Visual</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center h-64 md:h-80 lg:h-96">
                <p className="text-muted-foreground text-center">High-level conceptual diagram of the RubiCore platform and its interconnected components.</p>
              </CardContent>
            </Card>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
