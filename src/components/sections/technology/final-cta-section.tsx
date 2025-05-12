import { Button } from "@/components/ui/button";
import Link from "next/link";

export function TechFinalCtaSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/20">
      <div className="container mx-auto max-w-screen-md text-center px-4 md:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
          Engineered for Enterprise Demands: Scalability, Security, Extensibility, and Trustworthy AI
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Dive deeper into the robust architecture and cutting-edge technology that power the RubiCore Agentic AI platform. Our engineers and solution architects are available to provide detailed technical presentations, architecture reviews, and discuss how RubiCore can integrate seamlessly and securely within your existing enterprise landscape. <strong>Request a technical deep-dive session or explore our developer resources.</strong>
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/contact?subject=Technical Deep Dive Request">Request a Technical Deep Dive</Link>
          </Button>
          {/* Updated secondary CTA to link to Developer Hub as per markdown */}
          <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
            <Link href="/platform/developer-hub">Explore Developer Hub</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
