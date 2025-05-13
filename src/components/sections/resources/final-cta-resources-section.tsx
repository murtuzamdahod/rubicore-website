import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HelpCircle } from "lucide-react";

export default function FinalCtaResourcesSection() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900 sm:py-24">
      <div className="container mx-auto px-4 text-center">
        <HelpCircle className="w-12 h-12 text-ruby-600 dark:text-ruby-500 mx-auto mb-4" />
        <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
          Have Questions, Need Specific Information, or Want to Contribute?
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-lg text-gray-600 dark:text-gray-400">
          Our team is ready to help you explore how RubiCore can address your unique enterprise challenges. If you have specific resource needs or are interested in contributing to our community or content, let us know.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Button size="lg" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/developer-hub">Explore Developer Hub</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
