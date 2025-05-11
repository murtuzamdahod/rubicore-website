"use client";

import { Lock, Users, SearchCheck, UserCheck, ThumbsUp, Landmark, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const principles = [
  {
    name: "Security & Privacy by Design",
    description: "Engineering our platform to protect data and ensure user privacy rigorously.",
    icon: <Lock className="w-8 h-8 text-ruby-600 dark:text-ruby-500" />,
  },
  {
    name: "Fairness & Inclusivity",
    description: "Developing tools and promoting practices to mitigate harmful bias and foster equitable outcomes.",
    icon: <Users className="w-8 h-8 text-ruby-600 dark:text-ruby-500" />,
  },
  {
    name: "Transparency & Explainability (XAI)",
    description: "Providing capabilities to understand how our AI agents make decisions and operate (Advanced XAI capabilities Planned for 2025).",
    icon: <SearchCheck className="w-8 h-8 text-ruby-600 dark:text-ruby-500" />,
  },
  {
    name: "Accountability & Human Oversight",
    description: "Ensuring that AI systems remain under meaningful human control and that there are clear lines of responsibility.",
    icon: <UserCheck className="w-8 h-8 text-ruby-600 dark:text-ruby-500" />,
  },
  {
    name: "Reliability & Robustness",
    description: "Building AI systems that perform consistently and safely as intended.",
    icon: <ThumbsUp className="w-8 h-8 text-ruby-600 dark:text-ruby-500" />,
  },
  {
    name: "Compliance & Governance",
    description: "Adhering to legal and regulatory requirements and providing our customers with tools to do the same.",
    icon: <Landmark className="w-8 h-8 text-ruby-600 dark:text-ruby-500" />,
  },
];

export default function ResponsibleAiSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          {/* Optional: A representative icon for the whole section */}
          {/* <Scale className="w-16 h-16 text-ruby-600 dark:text-ruby-500 mx-auto mb-6" /> */}
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Building a Future with AI You Can Trust.
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            At RubiCore, Responsible AI is not just a feature; it&apos;s a foundational principle that guides our product development, business practices, and company culture. We are committed to:
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {principles.map((principle) => (
            <div key={principle.name} className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4 mt-1">{principle.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {principle.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {principle.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button size="lg" variant="outline" asChild>
            {/* Placeholder link - update when actual policy page/document exists */}
            <Link href="/responsible-ai-policy"> 
              Read Our Responsible AI Framework <ExternalLink className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
