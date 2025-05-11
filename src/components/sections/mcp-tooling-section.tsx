import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react"; // Example icons
import { McpInteractionVisual } from "@/components/visuals/McpInteractionVisual"; // Import the new visual

interface McpToolingSectionProps {
  className?: string;
}

export function McpToolingSection({ className }: McpToolingSectionProps) {
  const headline = "Revolutionize AI Integration with Model Context Protocol & Dynamic Tooling";
  const bodyText = 
      "RubiCore leverages Model Context Protocol (MCP) for dynamic tool discovery and real-time context sharing. This enables AI agents to adaptively use tools, APIs, and data sources, fostering a composable AI ecosystem and reducing integration overhead. RubiCore acts as both an MCP client and server, allowing seamless interaction with other MCP-compliant systems and exposing its capabilities securely.";
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
          <McpInteractionVisual />
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
