"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Free / Developer",
    id: "tier-developer",
    href: "/contact?plan=free",
    price: { monthly: "$0", annually: "$0" },
    description: "Ideal for individual developers, testing, and learning the platform.",
    features: [
      "Access to Core Platform & Agent Studio",
      "Limited Agent Usage (e.g., 2 agents, 100 workflow runs/month)",
      "Access to select Agent Types (Knowledge, Process)",
      "Basic Integrations (e.g., OneDrive)",
      "Community Support",
      "Cloud Deployment Only",
    ],
    mostPopular: false,
    cta: "Get Started Free",
  },
  {
    name: "Pro / Team",
    id: "tier-pro",
    href: "/contact?plan=pro",
    price: { monthly: "$499", annually: "$4990" }, // Placeholder
    description: "Small teams, deploying agents for specific departmental use cases.",
    features: [
      "Everything in Free, plus:",
      "Increased Agent Usage Limits (e.g., 10 agents, 1000 workflow runs/month)",
      "More Agent Types (SQL/CSV, Code Intelligence)",
      "More Integration Options (API access)",
      "Standard Support (Email/Chat)",
      "Basic Analytics & Monitoring",
    ],
    mostPopular: true,
    cta: "Start Pro Trial",
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "/contact?plan=enterprise",
    price: { monthly: "Custom", annually: "Custom" },
    description: "Large organizations, complex workflows, stringent security & compliance needs.",
    features: [
      "Everything in Pro, plus:",
      "High/Custom Usage Limits",
      "Access to All Agent Types (Deep Research)",
      "On-Premise & Hybrid Deployment Options",
      "Advanced Security (SAML/SSO, RBAC)",
      "Advanced Compliance (Audit Logs)",
      "Premium Support (Dedicated AM, SLAs)",
      "Advanced Analytics & Optimization",
      "Custom Integration Support",
    ],
    mostPopular: false,
    cta: "Contact Sales",
  },
];

export default function TieredPricingSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-lg text-ruby-600 dark:text-ruby-500 font-semibold">
            Flexible Plans
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Choose the Right Plan for Your Needs
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Start building today or scale with advanced features and dedicated support.
          </p>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-8 mx-auto lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`flex flex-col overflow-hidden rounded-lg shadow-lg ${
                tier.mostPopular ? "border-2 border-ruby-500" : "border border-gray-200 dark:border-gray-700"
              } bg-white dark:bg-gray-800`}
            >
              <div className="px-6 py-8 sm:p-10 sm:pb-6">
                <div>
                  <h3
                    className="inline-flex px-4 py-1 text-sm font-semibold tracking-wide uppercase rounded-full text-ruby-600 bg-ruby-100 dark:text-ruby-300 dark:bg-ruby-700/50"
                    id={tier.id}
                  >
                    {tier.name}
                  </h3>
                </div>
                <div className="flex items-baseline mt-4 text-5xl font-extrabold text-gray-900 dark:text-white">
                  {tier.price.monthly}
                  {tier.price.monthly !== "Custom" && <span className="ml-1 text-xl font-medium text-gray-500 dark:text-gray-400">/mo</span>}
                </div>
                <p className="mt-5 text-base text-gray-600 dark:text-gray-400">{tier.description}</p>
              </div>
              <div className="flex flex-col justify-between flex-1 px-6 pt-6 pb-8 space-y-6 bg-gray-50 dark:bg-gray-700/50 sm:p-10 sm:pt-6">
                <ul role="list" className="space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="w-6 h-6 text-green-500" aria-hidden="true" />
                      </div>
                      <p className="ml-3 text-base text-gray-700 dark:text-gray-300">{feature}</p>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  size="lg"
                  variant={tier.mostPopular ? "default" : "outline"}
                  className="w-full"
                >
                  <Link href={tier.href}>{tier.cta}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
