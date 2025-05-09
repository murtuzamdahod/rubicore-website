import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Cpu, Database, Layers, Zap } from "lucide-react"; // Example icons

const techHighlights = [
  {
    title: "LLM Agnostic",
    description: "Integrate OpenAI, Anthropic, Google, or open-source LLMs – even deploy your own custom models. RubiCore’s model integration is secure and flexible, so you can choose the best model for each task while keeping data governed.",
    icon: Cpu,
  },
  {
    title: "Tool Integrations",
    description: "Easily add new tools/skills for agents (e.g., web browsers, RPA bots, database connectors). Agents intelligently decide when to use these tools to achieve goals – similar to how human employees use different software.",
    icon: Zap,
  },
  {
    title: "Enterprise AI Safety",
    description: "Robust sandboxing and rate limiting for agent actions, fallback flows if AI outputs are uncertain, and evaluation frameworks for testing agent behavior before production.",
    icon: CheckCircle, // Using CheckCircle as a generic safety icon
  },
];

export function ArchitectureTechnologySection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Architecture & Technology
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Modern, Modular Architecture Built for Scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              RubiCore’s backend is built in <strong>Python (FastAPI)</strong> for high-performance APIs, with a modular microservices-inspired design. We leverage <strong>LangChain</strong> concepts to manage complex agent reasoning and tool usage, and use a <strong>vector database (Weaviate)</strong> for semantic search to power our Knowledge agents. Data is stored securely in <strong>PostgreSQL</strong> and cached in <strong>Redis</strong> for efficiency. The frontend is built with <strong>Next.js/TypeScript</strong> for a smooth, responsive user experience in the Agent Studio. Everything runs in <strong>Docker containers</strong> for portability – enabling one-click deployment on your infrastructure or ours.
            </p>
            <div className="space-y-4">
              {techHighlights.map((highlight) => (
                <Card key={highlight.title} className="bg-muted/20">
                  <CardHeader className="flex flex-row items-center space-x-3 pb-3">
                    <highlight.icon className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl">{highlight.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center mt-8 md:mt-0">
            {/* Placeholder for Simplified technical architecture diagram */}
            <Card className="w-full max-w-lg bg-muted/40 border-dashed">
              <CardHeader>
                <CardTitle className="text-center text-muted-foreground">Visual Placeholder</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center h-80">
                <p className="text-muted-foreground">Simplified technical architecture diagram</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
