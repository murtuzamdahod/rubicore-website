import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Share2 } from "lucide-react"; // Example Icon for architecture

export function TechArchitectureOverviewSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Engineered for Enterprise Performance, Security, Scalability, and Trustworthy AI
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover the robust, scalable, secure, and transparent architecture underpinning the RubiCore Agentic AI platform – designed for demanding enterprise environments and responsible AI innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl mb-4">
              Modular, Scalable, Resilient, and Explainable by Design.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              RubiCore is built on a modern, <strong>event-driven microservices architecture</strong> designed for reliability, independent scalability of components, and maintainability. Key services like the Low-Code/Pro-Code <strong>Agent Studio</strong>, the <strong>Intelligent Orchestration Engine</strong>, specialized <strong>Agent Runtimes</strong>, the Secure <strong>Integration Hub</strong>, <strong>Governance & XAI Services</strong>, and <strong>Monitoring & Learning Services</strong> operate independently yet cohesively, communicating via optimized internal APIs (REST, gRPC) and message queues. This separation of concerns allows for horizontal scaling under load (e.g., auto-scaling Agent Runtimes), targeted updates, and high availability. The architecture supports flexible deployment models (on-premise, private/public cloud, hybrid, edge) and incorporates security and explainability at every layer. <em>This ensures RubiCore delivers cloud-native performance and resilience, with the transparency expected for enterprise AI.</em>
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
                <p className="text-muted-foreground text-center">Detailed technical architecture diagram - showing event-driven microservices, connections to databases, vector stores, knowledge graphs, external LLMs, human collaboration interfaces, and edge deployments.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
