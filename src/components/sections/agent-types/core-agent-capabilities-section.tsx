import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, Search, FileText, Code, DatabaseZap, Workflow } from "lucide-react"; // Example icons

const agentProfiles = [
  {
    title: "Deep Research Agent",
    headline: "Autonomous Research & Insight Generation",
    description: "Executes multi-step research strategies autonomously. Plans an approach, gathers information from web and scholarly sources, evaluates and synthesizes data, and produces a structured report or recommendation.",
    features: [
      "Autonomous planning & tool use",
      "Multi-source web/academic search",
      "Critical reasoning for synthesis",
      "Report generation with citations",
      "Configurable search scope",
      "Governed data access",
    ],
    useCases: "Market & competitive intelligence, product research, scientific literature reviews, due diligence reporting.",
    differentiator: "Unlike a generic AI Q&A, this agent proactively gathers information like an analyst – a capability similar to (and inspired by) top research agent tools on the market, but with enterprise control.",
    icon: Search,
    link: "/platform/agent-types#deep-research" // Placeholder link
  },
  {
    title: "Knowledge Q&A Agent (RAG)",
    headline: "Trusted Answers from Your Enterprise Knowledge",
    description: "Uses Retrieval-Augmented Generation to answer questions using your internal knowledge bases (wikis, SharePoint, PDFs, database records). It retrieves relevant documents (via vector search in Weaviate) and formulates an answer with references.",
    features: [
      "Vector search across documents",
      "Natural language query understanding",
      "Source attribution",
      "Real-time indexing of new data",
      "Strict adherence to providing answers only from allowed content",
    ],
    useCases: "Employee help desk (IT or HR knowledge), customer self-service FAQ, policy compliance queries, sales enablement.",
    differentiator: "Delivers auditable answers – each answer can be traced back to a source document, addressing the accuracy and trust issues many enterprise buyers have with AI.",
    icon: FileText,
    link: "/platform/agent-types#knowledge-qa"
  },
  {
    title: "Code Intelligence Agent",
    headline: "Semantic Codebase Assistant for Developers",
    description: "Helps developers query and understand a codebase in natural language. It indexes your repositories and uses code parsing plus AI understanding to answer questions or locate code.",
    features: [
      "Semantic code search",
      "Language-aware (Python, Java, etc.)",
      "Cross-repo search",
      "Version control integration (Git)",
      "Summarized explanations of code sections",
    ],
    useCases: "Onboarding new developers, accelerating code reviews, impact analysis for changes, troubleshooting by finding relevant code faster.",
    differentiator: "Boosts engineering productivity by acting like a knowledgeable team mentor who’s read the entire codebase. This is a cutting-edge capability.",
    icon: Code,
    link: "/platform/agent-types#code-intelligence"
  },
  {
    title: "SQL Data Agent",
    headline: "Democratize Access to Data Insights",
    description: "Enables business users to query databases using natural language and get results or visualizations without writing SQL. It translates a question into optimized SQL, runs it on connected databases, and returns the answer with context.",
    features: [
      "Supports popular databases (PostgreSQL, SQL Server, etc.)",
      "Understands database schemas",
      "Permission-aware query execution",
      "Can generate charts for certain query types",
      "Handles follow-up questions contextually",
    ],
    useCases: "Ad-hoc reporting, ops metrics tracking, inventory queries, financial analysis by non-technical staff.",
    differentiator: "Pairs the power of data science with a friendly interface – similar to emerging NL-to-SQL tools but integrated into your AI workforce.",
    icon: DatabaseZap,
    link: "/platform/agent-types#sql-data"
  },
  {
    title: "Process Automation Agent",
    headline: "Orchestrate Repetitive Processes End-to-End",
    description: "Automates multi-step business workflows by interacting with various systems through APIs or RPA. For example, a Purchase Order Processing Agent might read incoming emails, extract order data, enter it into an ERP, and update a spreadsheet, all autonomously.",
    features: [
      "Workflow designer to define task sequence",
      "Connectors to enterprise apps (ERP, CRM, ITSM)",
      "Conditional logic and branching",
      "Error handling and notifications",
      "Optional human approval steps for critical points",
    ],
    useCases: "Employee onboarding, invoice processing, support ticket triage and resolution.",
    differentiator: "Combines AI reasoning with traditional automation. If a step requires understanding unstructured data, the agent uses AI; for structured tasks, it uses deterministic actions.",
    icon: Workflow,
    link: "/platform/agent-types#process-automation"
  }
];

export function CoreAgentCapabilitiesSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/20">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Core Agent Capabilities
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Detailed profiles of our specialized AI agents.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {agentProfiles.map((agent) => (
            <Card key={agent.title} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-3">
                  <agent.icon className="h-8 w-8 text-primary mr-3 flex-shrink-0" />
                  <CardTitle className="text-xl font-semibold">{agent.title}</CardTitle>
                </div>
                <h3 className="text-lg font-medium text-foreground">{agent.headline}</h3>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground mb-4">{agent.description}</p>
                <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                <ul className="space-y-1.5 mb-4">
                  {agent.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <h4 className="text-sm font-semibold text-foreground mb-2">Use Cases:</h4>
                <p className="text-sm text-muted-foreground mb-4">{agent.useCases}</p>
                <h4 className="text-sm font-semibold text-foreground mb-2">Differentiator:</h4>
                <p className="text-sm text-muted-foreground">{agent.differentiator}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link href={agent.link}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
