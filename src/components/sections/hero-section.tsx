import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Mockup } from "@/components/ui/mockup";
import { Glow } from "@/components/ui/glow";
import Link from "next/link";
import { HeroInterconnectedVisual } from "./hero/hero-interconnected-visual"; // Import the new visual

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  const title = "Build, Orchestrate & Govern Your Secure AI Workforce.";
  const description =
    "Deploy RubiCore, the enterprise-grade Agentic AI platform, on-premise or cloud. Autonomously automate complex end-to-end workflows with advanced reasoning, unlock critical insights, and empower your teams with specialized, controllable AI agents built rapidly for faster ROI in our intuitive Low-Code Agent Studio.";
  const primaryCta = {
    text: "Request a Demo",
    href: "/request-demo", // Placeholder link
  };
  const secondaryCta = {
    text: "Explore the Platform",
    href: "/platform", // Placeholder link
  };

  return (
    <section
      className={cn(
        "relative bg-background text-foreground",
        "py-16 px-4 md:py-24 lg:py-32",
        "overflow-hidden",
        className
      )}
    >
      <div className="relative mx-auto max-w-screen-xl flex flex-col gap-12 lg:gap-16 items-center">
        <div className="relative z-10 flex flex-col items-center gap-6 text-center lg:gap-8">
          {/* Heading */}
          <h1
            className={cn(
              "text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl",
              "leading-tight",
              "text-transparent bg-clip-text bg-gradient-to-b from-primary via-primary/90 to-foreground"
            )}
          >
            {title}
          </h1>

          {/* Description */}
          <p
            className={cn(
              "max-w-3xl",
              "text-base sm:text-lg md:text-xl",
              "text-muted-foreground font-medium"
            )}
          >
            {description}
          </p>

          {/* CTAs */}
          <div className="relative z-10 flex flex-wrap justify-center gap-4 mt-4">
            <Button asChild size="lg" className="shadow-lg">
              <Link href={primaryCta.href}>{primaryCta.text}</Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link href={secondaryCta.href}>{secondaryCta.text}</Link>
            </Button>
          </div>
        </div>
        
        {/* Interconnected Agents Visual */}
        <div className="relative w-full max-w-4xl pt-8 md:pt-12">
          {/* <Mockup> */} {/* Mockup might not be needed if the visual is self-contained */}
            <HeroInterconnectedVisual />
          {/* </Mockup> */}
        </div>
      </div>

      {/* Background Glow - Optional, can be refined */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Glow className="opacity-30" color="var(--ruby-500)" /> 
      </div>
    </section>
  );
}
