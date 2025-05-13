"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Developer / Free",
    id: "tier-developer",
    href: "/contact?plan=free",
    price: { monthly: "$0" }, // Annually not specified in draft for free
    description: "Ideal For: Individual developers, students, learning the platform, small PoCs.",
    features: [
      "Access to Core Platform & Low-Code Agent Studio",
      "Limited Agent Creation (e.g., 2-3 agents)",
      "Limited Workflow Runs/Month (e.g., 1,000)",
      "Limited API Calls/Month",
      "Access to select Standard Agent Types (e.g., Basic Knowledge, Basic Process)",
      "Basic Integrations (e.g., OneDrive, Webhooks)",
      "Community Support",
      "Cloud Deployment Only",
      "Basic Audit Logs",
    ],
    mostPopular: false,
    cta: "Get Started Free",
  },
  {
    name: "Team",
    id: "tier-team",
    href: "/contact?plan=team", // Assuming pro is now team
    price: { monthly: "Starting at $X/month" }, // Placeholder from draft
    description: "Ideal For: Small teams, deploying agents for specific departmental use cases, building more complex PoCs.",
    features: [
      "Everything in Developer, plus:",
      "Increased Agent Creation (e.g., 10-15 agents)",
      "Increased Workflow Runs/Month (e.g., 10,000)",
      "Increased API Calls/Month",
      "Access to More Agent Types (e.g., SQL/CSV Data Agent, Code Intelligence Agent)",
      "More Standard Integration Options (e.g., Salesforce, ServiceNow basic connectors)",
      "Full API/SDK Access",
      "Standard Support (Email/Chat, defined response times)",
      "Basic Analytics & Monitoring Dashboards",
      "Cloud Deployment Only",
      "Standard RBAC",
    ],
    mostPopular: true, // Assuming this tier is most popular
    cta: "Start Team Trial / Request a Quote",
  },
  {
    name: "Business",
    id: "tier-business",
    href: "/contact?plan=business",
    price: { monthly: "Starting at $Y/month" }, // Placeholder from draft
    description: "Ideal For: Medium-sized businesses or larger departments, deploying multiple critical agent solutions, requiring more robust governance and collaboration.",
    features: [
      "Everything in Team, plus:",
      "Substantial Agent Creation & Usage Limits",
      "Access to Advanced Agent Types (e.g., Deep Research Agent, Decision Agent, Creative Agent)",
      "Advanced Integration Options (e.g., SAP, Oracle connectors)",
      "Model Context Protocol (MCP) Integration",
      "Human-AI Collaboration Features",
      "Advanced Security Features (SAML/SSO, Granular RBAC)",
      "Enhanced Audit Logs & Basic XAI features",
      "Advanced Analytics & Optimization Tools",
      "Priority Support (Dedicated channels, faster SLAs)",
      "Optional Hybrid Deployment Add-on",
      "Agent Lifecycle Management Basics",
    ],
    mostPopular: false,
    cta: "Request a Quote / Talk to Sales",
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "/contact?plan=enterprise",
    price: { monthly: "Custom Quote" }, // Annually not specified, only "Custom Quote"
    description: "Ideal For: Large organizations, complex cross-functional and multi-agent workflows, stringent security & compliance needs, maximum control, and dedicated partnership.",
    features: [
      "Everything in Business, plus:",
      "High/Custom Usage Limits (Agents, Workflows, API Calls, Data Processing)",
      "Access to All Agent Types (including Simulation Agents, Industry-Specific Vertical Agents)",
      "Full On-Premise & Hybrid Deployment Options (including Edge)",
      "Premium Security Features (e.g., Customer-managed keys, PrivateLink options)",
      "Advanced Compliance Features (e.g., support for specific industry certs like HIPAA, FedRAMP assistance)",
      "Full XAI & Explainability Suite",
      "Bias Detection & Mitigation Tools",
      "Ethical AI Framework Configuration",
      "Advanced Agent Lifecycle Management & Simulation Environments",
      "Premium Plus Support (Dedicated Technical Account Manager, Proactive Monitoring, Custom SLAs, On-site options)",
      "Custom Integration Development Support",
      "Professional Services & Strategic AI Consulting",
      "Access to Beta Programs & Roadmap Influence",
    ],
    mostPopular: false,
    cta: "Contact Sales for Enterprise Partnership",
  },
];

export default function TieredPricingSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {/* Removed the "Flexible Plans" paragraph as it's not in the draft's intro */}
          <h2 className="mt-2 text-3xl font-extrabold text-primary sm:text-4xl">
            Transparent & Flexible Pricing for Your Intelligent, Governed AI Workforce
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Find the right RubiCore plan to build, orchestrate, govern, and collaborate with your AI agents, from individual experimentation and PoCs to enterprise-wide deployment with maximum security, control, and advanced capabilities. All plans include access to the core platform features like the Low-Code Agent Studio and fundamental Orchestration Engine.
          </p>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-8 mx-auto lg:max-w-none lg:grid-cols-4"> {/* Changed to lg:grid-cols-4 for 4 tiers */}
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
                {/* Price display removed */}
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
                  <Link href={tier.href}>Contact Sales</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
