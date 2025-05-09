import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"; 
import { Code2, Database, Layers, Brain, Container, GitBranch, Search } from "lucide-react"; 

const techStackItems = [
  {
    name: "Python & FastAPI",
    description: "Robust backend with high-performance asynchronous I/O for snappy and reliable APIs.",
    icon: Code2,
    category: "Backend"
  },
  {
    name: "LangChain Concepts",
    description: "Orchestrating LLM calls, tool usage, and multi-step reasoning for intelligent agent workflows.",
    icon: Brain,
    category: "AI/ML"
  },
  {
    name: "PostgreSQL & Redis",
    description: "Transactional integrity for config/logs (PostgreSQL) and caching/ephemeral memory (Redis).",
    icon: Database,
    category: "Data"
  },
  {
    name: "Weaviate (Vector DB)",
    description: "Lightning-fast semantic searches for Knowledge Agent capabilities.",
    icon: Search, 
    category: "Data"
  },
  {
    name: "Next.js & TypeScript",
    description: "Smooth, responsive user experience for the Agent Studio and Admin UI.",
    icon: Layers, 
    category: "Frontend"
  },
  {
    name: "Docker & Kubernetes",
    description: "Consistency across environments and simple scaling for on-prem or cloud deployments.",
    icon: Container,
    category: "DevOps"
  },
  {
    name: "REST APIs & Python SDK",
    description: "Comprehensive APIs and SDKs for easy extension and integration.",
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
            Built on Proven, Cutting-Edge Technologies
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We chose a tech stack that balances innovation with stability.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {techStackItems.map((item) => (
            <Card key={item.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
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
