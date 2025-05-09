import { HardHat } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Documentation | RubiCore",
  description: "Comprehensive documentation for the RubiCore Agentic AI Platform - Coming Soon.",
};

export default function DocsPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]"> {/* Adjust min-h as needed */}
      <div className="container mx-auto px-4 py-16 text-center">
        <HardHat className="w-24 h-24 text-ruby-500 mx-auto mb-8" />
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
          Documentation Coming Soon
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 sm:text-xl md:text-2xl">
          We are working hard to bring you comprehensive documentation for the
          RubiCore platform. This will include detailed guides, API references,
          and tutorials to help you get the most out of our Agentic AI solutions.
        </p>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 sm:text-xl md:text-2xl">
          Please check back soon!
        </p>
        <div className="mt-10">
          <Button size="lg" asChild>
            <Link href="/">Return to Homepage</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
