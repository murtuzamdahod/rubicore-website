import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { McpInteractionVisual } from "@/components/visuals/McpInteractionVisual";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShinyButton } from "@/components/ui/shiny-button";


interface McpToolingSectionProps {
  className?: string;
}

export function McpToolingSection({ className }: McpToolingSectionProps) {
  const headline = "Revolutionize AI Integration with Model Context Protocol & Dynamic Tooling";
  const bodyText = 
      "RubiCore leverages Model Context Protocol (MCP) for dynamic tool discovery and real-time context sharing. This enables AI agents to adaptively use tools, APIs, and data sources, fostering a composable AI ecosystem and reducing integration overhead. RubiCore acts as both an MCP client and server, allowing seamless interaction with other MCP-compliant systems and exposing its capabilities securely.";
  const cta = {
    text: "Learn More About MCP & Dynamic Integration",
    href: "/platform/integrations", // Updated href to existing integrations page
  };

  return (
    <section
      className={cn("bg-background text-foreground py-16 md:py-24", className)}
    >
      <div className="container mx-auto px-4">
        <BlurFade delay={0.25 * 1} inView>
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <AnimatedShinyText className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 block">
              {headline}
            </AnimatedShinyText>
          </div>
        </BlurFade>
        
        <BlurFade delay={0.25 * 2} inView>
          <div className="mb-12 md:mb-16 flex justify-center">
            <McpInteractionVisual className="w-full max-w-2xl lg:max-w-3xl shadow-xl rounded-lg border border-border/50" />
          </div>
        </BlurFade>

        <BlurFade delay={0.25 * 3} inView>
          <div className="max-w-3xl mx-auto"> {/* Centered the text more */}
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              {bodyText}
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.25 * 4} inView>
          <div className="text-center mt-12 md:mt-16">
            <Link href={cta.href} passHref>
              <ShinyButton>
                {cta.text} <ArrowRight className="ml-2 h-5 w-5" />
              </ShinyButton>
            </Link>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
