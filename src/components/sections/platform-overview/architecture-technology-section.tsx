import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Zap, Brain, Code, Layers, DatabaseZap, ShieldAlert, PackageOpen, ServerCog } from "lucide-react"; // Added more specific icons
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { BlurFade } from "@/components/ui/blur-fade";
import { RubiCoreSolutionVisual } from "@/components/visuals/RubiCoreSolutionVisual";

const techHighlights = [
  {
    title: "LLM Agnostic & Multi-Model Support",
    description: "Integrate OpenAI, Anthropic, Google, Cohere, or open-source LLMs (Llama, Mixtral, etc.). Deploy your own custom or fine-tuned models securely on-premise or in your private cloud. RubiCore's model integration is secure, flexible, and governed, allowing you to choose the best model (or combination of models) for each task.",
    icon: Cpu,
  },
  {
    title: "Dynamic Tool Integration & Creation",
    description: "Easily add new tools/skills for agents (web browsers, RPA bots, database connectors, custom enterprise APIs). Agents intelligently decide when and how to use these tools, with capabilities for self-correction if a tool fails or returns unexpected results. New Model Context Protocol (MCP) Support and automated tool discovery from OpenAPI specs/other sources enable dynamic runtime adaptation. Developers can use the SDK to create and register custom tools.",
    icon: Zap,
  },
  {
    title: "Enterprise AI Safety & Ethics",
    description: "Robust sandboxing, rate limiting, and permissioning for agent actions. Fallback flows and configurable confidence thresholds for AI outputs. Integrated evaluation frameworks (e.g., for bias, robustness, accuracy) and XAI tools for testing and validating agent behavior before and during production. New Confidence Calibration System ensures agents accurately assess their knowledge limitations and appropriately escalate or seek human input. Proactive monitoring for anomalous agent behavior.",
    icon: ShieldAlert, // More specific
  },
  {
    title: "Advanced Agent Memory & Agentic RAG Systems",
    description: "Our state-of-the-art contextual understanding and retrieval systems provide agents with unmatched precision and intelligence. This multi-layered architecture includes: Short-Term Working Memory, Long-Term Episodic & Semantic Memory, Structured Knowledge Memory, Procedural Memory, Consensus Memory, Agentic Retrieval Augmented Generation, Universal File Type Processing, and Agent Context Awareness.",
    icon: Brain,
  },
  {
    title: "Developer-Centric Extensibility",
    description: "Comprehensive Python SDK, REST/GraphQL APIs, CLI tools, and detailed documentation empower developers to build custom agents, tools, workflows, and integrations. Access to simulation environments for testing and a community hub for collaboration and sharing best practices.",
    icon: Code,
  },
];

export function ArchitectureTechnologySection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="text-center mb-10 md:mb-16">
          <AnimatedShinyText className="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl mb-4 block">
            Modern, Modular, and Extensible Architecture
          </AnimatedShinyText>
          <BlurFade delay={0.25} inView>
            <p className="mt-2 text-xl text-muted-foreground">
              Built for Enterprise Scale & Trust
            </p>
          </BlurFade>
        </div>

        <BlurFade delay={0.50} inView>
          <div className="bg-muted/30 p-6 sm:p-8 rounded-lg shadow mb-12">
            <h3 className="text-2xl font-semibold text-primary mb-4 text-center sm:text-left">Core Architectural Principles</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 text-muted-foreground">
              <li className="flex items-start"><Layers className="h-5 w-5 text-primary mr-2.5 mt-1 flex-shrink-0" /><span><strong>Backend:</strong> Python (FastAPI) for high-performance, async APIs.</span></li>
              <li className="flex items-start"><ServerCog className="h-5 w-5 text-primary mr-2.5 mt-1 flex-shrink-0" /><span><strong>Design:</strong> Modular, event-driven microservices.</span></li>
              <li className="flex items-start"><Brain className="h-5 w-5 text-primary mr-2.5 mt-1 flex-shrink-0" /><span><strong>AI Core:</strong> Leverages LangChain & cutting-edge agentic frameworks.</span></li>
              <li className="flex items-start"><DatabaseZap className="h-5 w-5 text-primary mr-2.5 mt-1 flex-shrink-0" /><span><strong>Memory:</strong> Multi-layered (Vector DBs, Knowledge Graphs, PostgreSQL, Redis).</span></li>
              <li className="flex items-start"><PackageOpen className="h-5 w-5 text-primary mr-2.5 mt-1 flex-shrink-0" /><span><strong>Frontend:</strong> Next.js/TypeScript for responsive UIs.</span></li>
              <li className="flex items-start"><Cpu className="h-5 w-5 text-primary mr-2.5 mt-1 flex-shrink-0" /><span><strong>Deployment:</strong> Docker & Kubernetes for portability (On-prem, Cloud, Hybrid).</span></li>
            </ul>
            <p className="mt-6 text-center text-sm text-muted-foreground/80">
              Key innovations include Hierarchical Agent Memory Systems, Resource-Aware Execution, self-correction in tool use, and advanced inter-agent communication protocols, ensuring a powerful, extensible, and maintainable platform.
            </p>
          </div>
        </BlurFade>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-6">
            {techHighlights.map((highlight, index) => (
              <BlurFade delay={0.25 * (index + 3)} inView key={highlight.title}>
                <Card className="bg-muted/20 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="flex flex-row items-start space-x-4 pb-3 pt-5">
                    <highlight.icon className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <CardTitle className="text-xl font-semibold text-primary leading-tight">{highlight.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">{highlight.description}</p>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>

          <BlurFade delay={0.25 * (techHighlights.length + 3)} inView className="flex flex-col justify-center items-center mt-8 md:mt-0 sticky top-24">
             <h3 className="text-2xl font-semibold text-primary mb-4 text-center">Platform Workflow Visualized</h3>
            <RubiCoreSolutionVisual className="w-full max-w-lg shadow-xl rounded-lg border border-border/50" />
            <p className="text-sm text-muted-foreground mt-3 text-center italic">Illustrative diagram of RubiCore&apos;s interconnected components and data flow.</p>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
