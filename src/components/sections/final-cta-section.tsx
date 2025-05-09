import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface FinalCtaSectionProps {
  className?: string;
}

export function FinalCtaSection({ className }: FinalCtaSectionProps) {
  const headline = "Ready to Build, Orchestrate, and Govern Your AI Workforce?";
  const subText =
    "Get started on your enterprise AI journey today. Our experts will help you identify high-impact use cases and outline a solution tailored to your business.";
  const primaryCta = {
    text: "Request a Demo",
    href: "/request-demo", // Placeholder
  };
  const secondaryCta = {
    text: "Contact Sales",
    href: "/contact-sales", // Placeholder
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
          <Button
            asChild
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg"
          >
            <Link href={primaryCta.href}>{primaryCta.text}</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <Link href={secondaryCta.href}>{secondaryCta.text}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
