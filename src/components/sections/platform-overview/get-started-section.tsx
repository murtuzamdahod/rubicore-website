import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShinyButton } from "@/components/ui/shiny-button";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";

export function PlatformGetStartedSection() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-muted/30 overflow-hidden">
      <InteractiveGridPattern className="absolute inset-0 z-0 opacity-30 [mask-image:linear-gradient(to_bottom,transparent_20%,white,transparent_80%)]" />
      <div className="container relative z-10 mx-auto max-w-screen-md text-center px-4 md:px-8">
        <BlurFade delay={0.25 * 1} inView>
          <AnimatedShinyText className="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl mb-6 block">
            Ready to Build Your Governed, Adaptive, High-ROI AI Workforce?
          </AnimatedShinyText>
        </BlurFade>
        <BlurFade delay={0.25 * 2} inView>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            RubiCore combines state-of-the-art AI capabilities with enterprise rigor and a commitment to responsible innovation. Whether you&apos;re looking to augment human expertise, streamline complex operations, or drive new forms of value, our platform adapts to your needs. <strong>Talk to our AI strategists</strong> about your goals, or <strong>dive into our developer resources</strong> to start building. Our team will help design a solution that delivers quick wins and long-term strategic advantage.
          </p>
        </BlurFade>
        <BlurFade delay={0.25 * 3} inView>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <Link href="/contact?subject=Demo Request" passHref>
              <ShinyButton className="w-full sm:w-auto">
                Request a Demo
              </ShinyButton>
            </Link>
            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto text-base sm:text-lg border-2 hover:bg-primary/5">
              <Link href="/docs">Explore Developer Hub</Link> 
              {/* Updated href to /docs as /platform/developer-hub might not exist yet */}
            </Button>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
