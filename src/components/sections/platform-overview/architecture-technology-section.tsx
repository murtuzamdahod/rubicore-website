import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Cpu, Zap, Brain, Code } from "lucide-react"; // Example icons

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
    icon: CheckCircle,
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
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Modern, Modular, and Extensible Architecture Built for Enterprise Scale & Trust
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            RubiCore&apos;s backend is built in <strong>Python (FastAPI)</strong> for high-performance, asynchronous APIs, with a modular, <strong>event-driven microservices design</strong>. We leverage <strong>LangChain and other cutting-edge agentic frameworks</strong> to manage complex agent reasoning, tool usage, and memory. Our <strong>multi-layered memory system</strong> includes <strong>vector databases (e.g., Weaviate, Pinecone options) for semantic search, knowledge graphs for structured relational knowledge, and traditional databases (PostgreSQL) for transactional data, all contributing to robust short-term, long-term, episodic, semantic, and procedural memory for agents.</strong> Data is cached in <strong>Redis</strong> for efficiency. The frontend is built with <strong>Next.js/TypeScript</strong> for a responsive Agent Studio and collaboration interfaces. Everything runs in <strong>Docker containers, orchestrable via Kubernetes</strong>, for portability and scalability – enabling deployment on your infrastructure, our secure cloud, or hybrid environments. Our architecture introduces <strong>Hierarchical Agent Memory Systems</strong>, <strong>Resource-Aware Execution</strong>, <strong>self-correction mechanisms in tool use</strong>, and <strong>advanced inter-agent communication protocols.</strong> This modern stack ensures the platform is powerful, extensible, maintainable, and aligns with industry-leading best practices for enterprise AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            {/* <p className="text-muted-foreground leading-relaxed mb-6">
              RubiCore’s backend is built in <strong>Python (FastAPI)</strong> for high-performance APIs, with a modular microservices-inspired design. We leverage <strong>LangChain</strong> concepts to manage complex agent reasoning and tool usage, and use a <strong>vector database (Weaviate)</strong> for semantic search to power our Knowledge agents. Data is stored securely in <strong>PostgreSQL</strong> and cached in <strong>Redis</strong> for efficiency. The frontend is built with <strong>Next.js/TypeScript</strong> for a smooth, responsive user experience in the Agent Studio. Everything runs in <strong>Docker containers</strong> for portability – enabling one-click deployment on your infrastructure or ours.
            </p> */}
            <div className="space-y-4">
              {techHighlights.map((highlight) => (
                <Card key={highlight.title} className="bg-muted/20 shadow-md">
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
