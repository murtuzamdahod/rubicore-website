import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Briefcase, Users, Lightbulb } from "lucide-react"; // Example icons

const companyValues = [
    { name: "Innovation", icon: <Lightbulb className="w-6 h-6 text-ruby-500" /> },
    { name: "Customer Obsession", icon: <Users className="w-6 h-6 text-ruby-500" /> },
    { name: "Integrity & Trust", icon: <Briefcase className="w-6 h-6 text-ruby-500" /> },
];

export default function CareersSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
                Join Our Team
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                We&apos;re looking for passionate individuals to help us shape the future of AI. Explore our open positions and discover how you can make an impact at RubiCore.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button size="xl" asChild>
                  <Link href="/company/careers">View Open Positions</Link>
                </Button>
              </div>
            </div>
            <div className="mt-8">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Our Values:</h4>
                <div className="flex flex-wrap gap-4">
                    {companyValues.map(value => (
                        <div key={value.name} className="flex items-center p-3 bg-white dark:bg-gray-700 rounded-md shadow">
                            {value.icon}
                            <span className="ml-2 text-gray-700 dark:text-gray-300">{value.name}</span>
                        </div>
                    ))}
                </div>
            </div>
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
