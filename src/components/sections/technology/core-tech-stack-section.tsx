import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Brain, Container, GitBranch, Server } from "lucide-react";
// Import specific icons
import { NextjsIcon, GrafanaIcon } from "@/components/icons"; // Assuming GrafanaIcon represents Monitoring stack

const techStackItems = [
  {
    name: "Python & FastAPI",
    description: "High-performance, asynchronous APIs. Internal communication leverages gRPC and message queues (e.g., Kafka/RabbitMQ) for resilient, scalable event-driven interactions.",
    icon: Code2,
    category: "Backend"
  },
  {
    name: "Agent Cognitive Architecture (LangChain, LlamaIndex, etc.)",
    description: "Incorporates LangChain, LlamaIndex, and other agentic AI frameworks and research for orchestrating LLM calls, dynamic tool use, multi-step reasoning (planning, reflection, self-critique (all capabilities Coming Soon)), and managing complex agent behaviors.", // Enhanced description
    icon: Brain,
    category: "AI/ML"
  },
  {
    name: "Advanced Agent Memory & Agentic RAG Systems",
    description: "Our state-of-the-art contextual understanding and retrieval systems provide agents with unmatched precision and intelligence. This multi-layered memory architecture includes: Short-Term/Working Memory (Redis), Long-Term Episodic & Semantic Memory (Vector DBs like Weaviate, Pinecone, Milvus), Structured Knowledge Memory (Knowledge Graphs like Neo4j), Procedural Memory (Planned for 2025), Consensus Memory (Planned for 2025), Buffer/Scratchpad Memory. Agentic Retrieval Augmented Generation (RAG) dynamically retrieves context-rich content. Universal File Type Processing feeds into memory systems. Agent Context Awareness enables accurate decision-making and aims to reduce hallucinations.", // Detailed description from markdown
    icon: Database, // Keep generic Database icon for now
    category: "Data & AI"
  },
  {
    name: "Data Persistence (PostgreSQL)",
    description: "For structured configuration data, audit logs, and relational metadata supporting the overall memory and operational framework.", // Updated description
    icon: Server,
    category: "Data"
  },
  {
    name: "Next.js & TypeScript",
    description: "Responsive, intuitive web applications for the Agent Studio & User Interfaces.",
    icon: NextjsIcon, // Use specific icon
    category: "Frontend"
  },
  {
    name: "Docker & Kubernetes (K8s)",
    description: "Containerized applications orchestrated with Kubernetes, enabling consistent deployments across environments and robust scaling. Helm charts provided.",
    icon: Container,
    category: "DevOps"
  },
  {
    name: "Monitoring & Observability (Prometheus, Grafana, ELK)",
    description: "Comprehensive logging, monitoring, and alerting via integration with tools like Prometheus, Grafana, and the ELK Stack.", // Slightly updated description
    icon: GrafanaIcon, // Use specific icon as representative
    category: "DevOps"
  },
  {
    name: "APIs (REST/GraphQL) & SDKs (Python)",
    description: "Comprehensive REST and GraphQL APIs, along with a primary Python SDK (others planned) enable deep integration and extensibility.", // Slightly updated description
    icon: GitBranch,
    category: "Extensibility"
  }
];

export function CoreTechStackSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/20">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built on Proven, Cutting-Edge Technologies for Advanced Agentic Functionality
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our tech stack balances innovation with enterprise-grade stability and performance:
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {techStackItems.map((item) => (
            <Card key={item.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-background">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <item.icon className="h-10 w-10 text-primary" />
                  <Badge variant="outline">{item.category}</Badge>
                </div>
                <CardTitle className="text-xl font-semibold">{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
