import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FinalCtaSection() {
  return (
    <section className="py-16 sm:py-24 w-full bg-gradient-to-r from-ruby-600 via-red-600 to-pink-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
          Ready to Transform Your Operations with Secure Agentic AI?
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-ruby-100 sm:text-xl">
          Discuss your specific business challenges and use cases with our
          enterprise AI experts. Discover how RubiCore&apos;s specialized agents
          and secure, governable platform can deliver measurable ROI and a
          significant competitive advantage.
        </p>
        <div className="mt-10 flex justify-center space-x-4">
          <Button size="xl" variant="outlineWhite" asChild>
            <Link href="/contact?subject=Demo%20Request">Request a Personalized Demo</Link>
          </Button>
          <Button size="xl" variant="solidWhite" asChild>
            <Link href="/contact?subject=Expert%20Consultation%20Request">Talk to an Expert</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
