import { Button } from "@/components/ui/button";
import Link from "next/link";
// Removed Briefcase, Users, Lightbulb as companyValues will be removed

export default function CareersSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="lg:pr-8"> {/* Added padding for text block */}
            <div className="text-center lg:text-left"> {/* Adjusted text alignment for larger screens */}
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
                Join Us in Shaping the Future of Enterprise AI – Responsibly.
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0">
                We&apos;re seeking passionate, talented individuals who are excited about building the next generation of secure, ethical, and intelligent automation. Explore opportunities to make a significant impact in a dynamic, collaborative, and innovative environment where your work contributes to transformative enterprise solutions.
              </p>
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
                <Button size="xl" asChild>
                  <Link href="/company/careers">View Open Positions & Our Culture</Link>
                </Button>
              </div>
            </div>
            {/* Removed companyValues display from here */}
          </div>
          <div className="hidden lg:block">
            {/* Placeholder for an image representing company culture or teamwork */}
            <div className="aspect-video bg-gray-300 dark:bg-gray-700 rounded-lg shadow-xl flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400 text-xl">
                Visual: Teamwork / Innovation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
