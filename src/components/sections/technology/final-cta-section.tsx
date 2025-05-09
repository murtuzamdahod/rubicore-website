import { Button } from "@/components/ui/button";
import Link from "next/link";

export function TechFinalCtaSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/20">
      <div className="container mx-auto max-w-screen-md text-center px-4 md:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
          Built for Enterprise Scale, Security, and Flexibility
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Dive deeper into the robust architecture and technology stack that powers the RubiCore Agentic AI platform. If your IT architects or security officers have questions, we’re here to provide answers – from encryption standards to integration patterns. <strong>Experience an architecture demo or whiteboard session with our engineers</strong> to see how RubiCore can fit into your enterprise.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/contact?subject=Technical Deep Dive Request">Request a Technical Deep Dive</Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
            <Link href="/platform/security">Explore Security & Compliance</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
