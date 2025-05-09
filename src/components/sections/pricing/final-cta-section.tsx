import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FinalCtaSection() {
  return (
    <section className="py-16 sm:py-24 w-full bg-gradient-to-r from-ruby-600 via-red-600 to-pink-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
          Ready to Empower Your Enterprise with Agentic AI?
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-ruby-100 sm:text-xl">
          Let&apos;s discuss your specific requirements and find the optimal
          RubiCore plan to achieve your automation goals securely and
          efficiently.
        </p>
        <div className="mt-10 flex justify-center space-x-4">
          <Button size="xl" variant="solidWhite" asChild>
            <Link href="/contact?plan=enterprise">Contact Sales for a Custom Quote</Link>
          </Button>
          <Button size="xl" variant="outlineWhite" asChild>
            <Link href="/contact?demo=true">Request a Demo</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
