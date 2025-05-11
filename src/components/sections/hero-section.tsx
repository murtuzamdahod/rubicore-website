"use client"; // Added to make this a Client Component

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Glow } from "@/components/ui/glow";
import Link from "next/link";
import Image from 'next/image';
import { HeroInterconnectedVisual } from "./hero/hero-interconnected-visual";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { ShimmerButton } from "@/components/ui/shimmer-button"; // Re-adding ShimmerButton
import { Badge } from "@/components/ui/badge"; // Will re-add Badge related props and JSX later if this is stable
import { ArrowRightIcon } from "lucide-react"; // For Badge

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
  badgeText?: string;
  badgeActionText?: string;
  badgeActionHref?: string;
}

export function HeroSection({
  className,
  title: propTitle,
  badgeText = "✨ New: Enterprise Agentic AI", // Default badge text
  badgeActionText = "Learn More",
  badgeActionHref = "/platform/overview",
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
      "Deploy RubiCore, the enterprise-grade Agentic AI platform, on-premise, cloud, or hybrid. Automate complex workflows and empower teams with specialized AI agents.";
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
        "overflow-hidden", // Keep overflow hidden for AnimatedGridPattern
        className
      )}
    >
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.3} // Adjusted for subtlety     
        duration={3}
        className={cn(
          "[mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]",
          "inset-0 z-0"
        )}
      />
      <div className="relative mx-auto max-w-screen-xl flex flex-col gap-12 lg:gap-16 items-center z-10"> {/* Ensure content is above grid */}
        <div className="relative z-10 flex flex-col items-center gap-6 text-center lg:gap-8">
          {/* Badge */}
          {badgeText && (
            <Badge variant="outline" className="animate-appear gap-2 border-primary text-primary">
              <span className="text-foreground">{badgeText}</span>
              {badgeActionText && badgeActionHref && (
                <Link href={badgeActionHref} className="flex items-center gap-1 hover:underline">
                  {badgeActionText}
                  <ArrowRightIcon className="h-3 w-3" />
                </Link>
              )}
            </Badge>
          )}
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
            <ShimmerButton className="shadow-lg">
              <Link href={primaryCta.href} className="flex h-full w-full items-center justify-center px-8 py-3 text-sm font-medium">
                {primaryCta.text}
              </Link>
            </ShimmerButton>

            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" onClick={() => window.location.href=secondaryCta.href}>
              {secondaryCta.text} {/* Use secondaryCta prop */}
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

      {/* Background Glow - Retained for now, can be removed if grid is sufficient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10"> {/* Ensure glow is behind grid */}
        <Glow className="opacity-10" color="var(--ruby-500)" /> 
      </div>
    </section>
  );
}
