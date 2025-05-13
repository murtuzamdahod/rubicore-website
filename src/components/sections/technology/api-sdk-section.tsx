import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeXml, TerminalSquare, Puzzle, Settings, TestTubeDiagonal, BookOpen, Users, GitFork, ArrowRight } from "lucide-react"; // Example icons
import Link from "next/link";

const extensibilityFeatures = [
  {
    title: "Comprehensive REST & GraphQL APIs",
    description: "Programmatic access to nearly all platform capabilities – agent creation and management, workflow orchestration, data integration, monitoring, governance controls, etc. Enables CI/CD for agentic applications (AI-as-Code).",
    icon: CodeXml,
  },
  {
    title: "Rich Python SDK (Primary)",
    description: "An intuitive, well-documented SDK for Python developers to build custom agents, complex reasoning logic, new tools/skills, and automation scripts. (SDKs for other languages like Java, C#, Node.js are on the roadmap - capabilities Coming Soon).", // Added annotation
    icon: TerminalSquare,
  },
  {
    title: "Agentic Skill Builder & Custom Tool Framework",
    description: "Define reusable skills (Agentic Skill Builder capabilities Coming Soon) and easily integrate custom tools (e.g., proprietary algorithms, internal APIs, legacy system interfaces) that agents can discover and utilize.", // Added annotation
    icon: Puzzle,
  },
  {
    title: "CLI Tool",
    description: "A command-line interface for managing agents, workflows, and platform configurations, facilitating automation and scripting for DevOps. [NEW - capabilities Coming Soon]", // Added annotation
    icon: Settings, // Using Settings as a placeholder for CLI
  },
  {
    title: "Simulation & Testing Environment",
    description: "A sandboxed environment to simulate agent behaviors, test multi-agent interactions, validate workflows, and assess the impact of changes before production deployment. Supports synthetic data generation for testing. [NEW - capabilities Coming Soon]", // Added annotation
    icon: TestTubeDiagonal,
  },
  {
    title: "Developer Portal & Documentation",
    description: "Extensive documentation, tutorials, API references, SDK guides, and best practice articles.",
    icon: BookOpen,
  },
  {
    title: "Community Hub & Support",
    description: "A dedicated forum for developers to ask questions, share solutions, contribute to an evolving library of community-created tools and agent templates, and interact with the RubiCore engineering team. [NEW - capabilities Coming Soon]", // Added annotation
    icon: Users,
  },
  {
    title: "Version Control Integration",
    description: "Best practices and tools for managing agent configurations, prompts, and custom code in conjunction with standard version control systems like Git. [New - capabilities Coming Soon]", // Added annotation
    icon: GitFork,
  },
];

export function ApiSdkSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/20">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Empowering Developers to Extend, Integrate, and Innovate with a Rich Toolset
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We understand that enterprise AI solutions must be adaptable and deeply integrated. RubiCore offers a comprehensive suite of developer tools:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {extensibilityFeatures.map((feature) => (
            <Card key={feature.title} className="flex flex-col text-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-background text-primary">
              <CardHeader className="pb-4">
                <feature.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                <CardTitle className="text-lg font-semibold text-primary">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-x-4">
          <Button asChild size="lg">
            <Link href="/platform/developer-hub">Visit Developer Hub</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/api-docs">Explore API Docs <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
           {/* Placeholder for SDK Guides link if different from Developer Hub */}
        </div>
      </div>
    </section>
  );
}
