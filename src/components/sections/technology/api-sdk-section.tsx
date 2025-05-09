import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeXml, TerminalSquare, Puzzle } from "lucide-react"; // Example icons
import Link from "next/link";
import { FeatureStatusBadge } from "@/components/ui/feature-status-badge"; // Import the badge

const extensibilityFeatures = [
  {
    title: "Comprehensive REST API",
    description: "Programmatically manage agents, trigger workflows, fetch audit logs, and integrate RubiCore into your existing microservice architecture.",
    icon: CodeXml,
  },
  {
    title: "Python SDK",
    description: "Conveniently interact with RubiCore, build custom tools, script batch tasks, or create new agent types using Python.",
    icon: TerminalSquare, // Representing SDK/CLI
    status: "Coming Soon",
  },
  {
    title: "Custom Skills & Tools",
    description: "Add new 'tools' for agents to interact with proprietary systems or internal APIs, making agent capabilities limitless.",
    icon: Puzzle,
  },
];

export function ApiSdkSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/20">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Extend, Integrate, and Innovate with Developer Tools
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We know enterprise solutions often need to fit into a bigger puzzle. RubiCore offers rich developer tools so you can integrate or extend the platform to meet any requirement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {extensibilityFeatures.map((feature) => (
            <Card key={feature.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl font-semibold flex items-center justify-center">
                  {feature.title}
                  {feature.status && <FeatureStatusBadge status={feature.status as "Coming Soon" | "Roadmap"} className="ml-2" />}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-2">
            We encourage developers to share extensions or interesting uses of the API/SDK.
          </p>
          <p className="text-muted-foreground mb-6">
             Check out our GitHub examples and join the community forum for tips.
          </p>
          <Button asChild size="lg" variant="outline">
            <Link href="/api-docs">View API Documentation & SDK Guides</Link> 
            {/* Placeholder link, update when actual docs are available */}
          </Button>
        </div>
      </div>
    </section>
  );
}
