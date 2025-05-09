import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Share2 } from "lucide-react"; // Example Icon for architecture

export function TechArchitectureOverviewSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Engineered for Enterprise Performance, Security & Scale
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover the robust, scalable, and secure architecture underpinning the RubiCore Agentic AI platform – designed for demanding enterprise environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl mb-4">
              Modular, Scalable, and Secure by Design.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              RubiCore is built on a modern, modular architecture designed for reliability and scalability. Key components like the Low-Code <strong>Agent Studio</strong>, the <strong>Intelligent Orchestration Engine</strong>, specialized <strong>Agent Runtimes</strong>, and the Secure <strong>Integration Hub</strong> operate independently yet cohesively, communicating via internal APIs. This separation of concerns means each part can scale horizontally under load (e.g., spawn more Agent Runtimes for parallel tasks) and can be updated or maintained with minimal impact on others. The architecture supports flexible deployment models – you can deploy everything on a single server for testing, or on a distributed cluster for production. Security is layered throughout (API gateway with auth, network segmentation for sensitive modules, etc.). The bottom line: RubiCore’s architecture delivers cloud-grade scalability and resilience, whether deployed on-prem or in the cloud.
            </p>
          </div>
          <div className="flex justify-center items-center">
            {/* Placeholder for Technical architecture diagram */}
            <Card className="w-full max-w-lg bg-muted/40 border-dashed">
              <CardHeader>
                <CardTitle className="text-center text-muted-foreground">Visual Placeholder</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center h-80">
                <Share2 className="w-24 h-24 text-primary mb-4" />
                <p className="text-muted-foreground text-center">Technical architecture diagram with security layers</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
