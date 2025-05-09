import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react"; // Example icons

interface McpToolingSectionProps {
  className?: string;
}

export function McpToolingSection({ className }: McpToolingSectionProps) {
  const headline = "Revolutionize AI Integration with Model Context Protocol & Dynamic Tooling";
  const bodyText = 
      "RubiCore fully embraces the Model Context Protocol (MCP) and other dynamic integration standards, transforming how AI systems interact with enterprise data, tools, and even other AI agents. Instead of brittle, point-to-point integrations, MCP and dynamic discovery enable a fluid, adaptive ecosystem where: " +
      "AI agents can discover and utilize tools, APIs, and data sources at runtime – eliminating hardcoded dependencies and enabling seamless adaptation to new capabilities or changing environments. " +
      "Rich context flows intelligently between systems and agents – creating personalized, informed experiences based on real-time enterprise data and agent interactions. " +
      "Security and governance are intrinsic – with unified authentication, granular access controls, and comprehensive audit capabilities for all dynamic interactions. " +
      "Inter-agent communication and collaboration are enhanced – allowing RubiCore agents to potentially interact with agents from other MCP-compliant platforms, fostering a broader AI ecosystem. " +
      "RubiCore functions as both an MCP client and server: " +
      "As an MCP client, RubiCore agents can dynamically discover and utilize tools and data from any MCP-compatible server or other discoverable enterprise endpoints. " +
      "As an MCP server, RubiCore can expose its agent capabilities, data, and custom tools to other authorized systems and agents within your organization. " +
      "This dual-mode implementation, combined with automated tool discovery from sources like OpenAPI specifications, creates a flexible, future-proof architecture that grows with your needs, prevents AI silos, and significantly reduces integration overhead.";
  const cta = {
    text: "Learn More About MCP & Dynamic Integration",
    href: "/platform/mcp-integration", // Assuming this page will be created
  };

  return (
    <section
      className={cn("bg-background text-foreground py-16 md:py-24", className)}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {headline}
          </h2>
        </div>
        
        {/* Visual Placeholder - Could be a diagram */}
        <div className="mb-12 md:mb-16 flex justify-center">
          <div className="w-full max-w-2xl h-64 bg-muted/30 rounded-lg flex items-center justify-center p-4">
            <p className="text-muted-foreground text-center">
              [Visual: RubiCore as both MCP client and server, dynamically discovering and interacting with various enterprise systems, APIs, and even other agentic platforms.]
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="prose dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
            {bodyText}
          </div>
        </div>

        <div className="text-center mt-12 md:mt-16">
          <Button asChild variant="link" size="lg" className="text-primary text-lg">
            <Link href={cta.href}>
              {cta.text} <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
