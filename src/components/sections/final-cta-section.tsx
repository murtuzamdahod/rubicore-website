import { cn } from "@/lib/utils";
import Link from "next/link";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ShinyButton } from "@/components/ui/shiny-button";

interface FinalCtaSectionProps {
  className?: string;
}

export function FinalCtaSection({ className }: FinalCtaSectionProps) {
  const headline = "Build Your Future-Ready AI Workforce";
  const subText =
    "Transform your enterprise with secure, explainable, and continuously learning intelligent automation. Our experts help design solutions for sustainable ROI.";
  const primaryCta = {
    text: "Request a Demo",
    href: "/request-demo", // Placeholder
  };
  const secondaryCta = {
    text: "Talk to an AI Strategist", // New Title
    href: "/contact-sales", // Placeholder - Assuming link might be similar or updated later
  };

  return (
    <section
      className={cn("bg-primary text-primary-foreground py-16 md:py-24", className)}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          {headline}
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
          {subText}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {/* "Request a Demo" - Secondary on this dark background, using ShinyButton for subtle effect */}
          <ShinyButton
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg px-8 py-3 text-lg" // Adjusted padding and text size to match Button size="lg"
            style={{ '--primary': 'var(--colors-ruby-light)' } as React.CSSProperties} // Use a ruby color for the shine
          >
            <Link href={primaryCta.href} className="flex h-full w-full items-center justify-center">
              {primaryCta.text}
            </Link>
          </ShinyButton>
          
          {/* "Talk to an AI Strategist" - Primary on this dark background, using ShimmerButton */}
          <ShimmerButton
            background="var(--primary-foreground)" // Button bg is primary-foreground (Off-white)
            shimmerColor="var(--colors-ruby-light)" // Shimmer with light ruby
            className="text-primary shadow-lg px-8 py-3 text-lg" // Text color is primary (Ruby), adjusted padding
          >
            <Link href={secondaryCta.href} className="flex h-full w-full items-center justify-center">
              {secondaryCta.text}
            </Link>
          </ShimmerButton>
        </div>
      </div>
    </section>
  );
}
