import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"; 
import { Code2, Database, Layers, Brain, Container, GitBranch, Server, BarChartHorizontalBig } from "lucide-react"; // Added Server, BarChartHorizontalBig

const techStackItems = [
  {
    name: "Python & FastAPI",
    description: "High-performance, asynchronous APIs. Internal communication leverages gRPC and message queues (e.g., Kafka/RabbitMQ) for resilient, scalable event-driven interactions.",
    icon: Code2,
    category: "Backend"
  },
  {
    name: "Agent Cognitive Architecture (LangChain, LlamaIndex, etc.)",
    description: "Incorporates agentic AI frameworks and research for orchestrating LLM calls, dynamic tool use, multi-step reasoning (planning, reflection, self-critique), and managing complex agent behaviors.",
    icon: Brain,
    category: "AI/ML"
  },
  {
    name: "Advanced Agent Memory Systems",
    description: "Multi-layered memory: Short-Term/Working (Redis), Long-Term Episodic & Semantic (Vector DBs like Weaviate, Pinecone, Milvus), Structured Knowledge (Knowledge Graphs like Neo4j), Procedural Memory, Buffer/Scratchpad.",
    icon: Database, // Representing diverse data stores
    category: "Data & AI"
  },
  {
    name: "Data Persistence (PostgreSQL)",
    description: "For structured configuration data, audit logs, and relational metadata.",
    icon: Server, // Using Server as a more generic DB icon here
    category: "Data"
  },
  {
    name: "Next.js & TypeScript",
    description: "Responsive, intuitive web applications for the Agent Studio & User Interfaces.",
    icon: Layers,
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
    description: "Comprehensive logging, monitoring, and alerting.",
    icon: BarChartHorizontalBig, // Representing monitoring
    category: "DevOps"
  },
  {
    name: "APIs (REST/GraphQL) & SDKs (Python)",
    description: "Comprehensive APIs (REST and GraphQL) and a primary Python SDK (others planned) enable deep integration and extensibility.",
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
