import { Button } from "@/components/ui/button";
import Link from "next/link";

export function PlatformGetStartedSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/20">
      <div className="container mx-auto max-w-screen-md text-center px-4 md:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
          Ready to Build Your Governed, High-ROI AI Workforce?
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          RubiCore combines state-of-the-art AI capabilities with enterprise rigor. Whether you’re looking to augment your customer support, streamline IT operations, or drive innovation in R&D, our platform adapts to your needs. <strong>Talk to us</strong> about your goals – our team of experts will help design a solution that delivers quick wins and long-term value.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/contact?subject=Demo Request">Request a Demo</Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
            <Link href="/contact?subject=Team Inquiry">Contact Our Team</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
