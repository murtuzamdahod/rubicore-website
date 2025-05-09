import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Send, FileText, UserCheck } from "lucide-react"; // Example icons

const steps = [
  {
    icon: <FileText className="w-10 h-10 text-ruby-600 dark:text-ruby-500" />,
    title: "Find Your Role",
    description: "Browse our current openings and find a position that matches your skills and aspirations.",
  },
  {
    icon: <Send className="w-10 h-10 text-ruby-600 dark:text-ruby-500" />,
    title: "Submit Your Application",
    description: "Prepare your resume and cover letter, then apply through our online portal for the selected role.",
  },
  {
    icon: <UserCheck className="w-10 h-10 text-ruby-600 dark:text-ruby-500" />,
    title: "Interview Process",
    description: "If your profile matches, our talent team will reach out to schedule interviews and assessments.",
  },
];

export default function HowToApplySection() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Ready to Join Us?
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Our application process is designed to be straightforward and
            transparent. Here’s how to get started on your journey with
            RubiCore.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-ruby-100 dark:bg-ruby-700/50 p-3 rounded-full">
                    {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Step {index + 1}: {step.title}
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="xl" asChild>
            <Link href="#open-positions">View Current Openings</Link> 
            {/* Assuming an ID "open-positions" on the OpenPositionsSection for smooth scroll */}
          </Button>
        </div>
      </div>
    </section>
  );
}
