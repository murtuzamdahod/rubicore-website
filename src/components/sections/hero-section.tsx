import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Glow } from "@/components/ui/glow";
import Link from "next/link";
import Image from 'next/image';
import { HeroInterconnectedVisual } from "./hero/hero-interconnected-visual";

interface HeroSectionProps {
  className?: string;
  title?: string;
  description?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export function HeroSection({
  className,
  title: propTitle,
  description: propDescription,
  imageSrc: propImageSrc,
  imageAlt: propImageAlt,
  primaryCtaText: propPrimaryCtaText,
  primaryCtaHref: propPrimaryCtaHref,
  secondaryCtaText: propSecondaryCtaText,
  secondaryCtaHref: propSecondaryCtaHref,
}: HeroSectionProps) {
  const title = propTitle || "Build, Orchestrate, Govern & Collaborate with Your Secure AI Workforce.";
  const description =
    propDescription || 
      "Deploy RubiCore, the enterprise-grade Agentic AI platform, on-premise, cloud, or hybrid. Autonomously automate complex end-to-end workflows with advanced multi-modal reasoning and planning, unlock critical insights, and empower your teams with specialized, explainable, and continuously learning AI agents. Build rapidly for faster ROI in our intuitive Low-Code Agent Studio or extend with our comprehensive Developer SDKs. Our adaptive multi-agent collaboration architecture, integrated Human-AI teaming workflows, and Model Context Protocol (MCP) capabilities enable seamless coordination across your enterprise systems while maintaining complete governance, security, and ethical AI standards.";
  const primaryCta = {
    text: propPrimaryCtaText || "Request a Demo",
    href: propPrimaryCtaHref || "/request-demo",
  };
  const secondaryCta = {
    text: propSecondaryCtaText || "Explore the Platform",
    href: propSecondaryCtaHref || "/platform",
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
        
        {/* Visual Element */}
        <div className="relative w-full max-w-4xl pt-8 md:pt-12">
          {propImageSrc && propImageAlt ? (
            <Image 
              src={propImageSrc} 
              alt={propImageAlt} 
              width={1200} 
              height={675} 
              className="rounded-lg shadow-2xl object-cover"
              priority
            />
          ) : (
            <HeroInterconnectedVisual />
          )}
        </div>
      </div>

      {/* Background Glow - Optional, can be refined */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Glow className="opacity-30" color="var(--ruby-500)" /> 
      </div>
    </section>
  );
}
