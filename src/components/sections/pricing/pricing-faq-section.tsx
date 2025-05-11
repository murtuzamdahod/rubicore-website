"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How is \"Agent Usage\" or \"Workflow Run\" specifically defined and measured?",
    answer:
      "Core usage is typically measured by a combination of: Active Agents (number of agents concurrently deployed and operational), Computational Resources / Agent Hours (processing time and resources consumed by agents), Workflow Executions / Transactions (number of times workflows are run or key transactions are processed), Data Throughput / Storage (amount of data processed by agents and stored within the platform), and API Call Volume (for integrations and platform interactions). Specifics are detailed in your plan.",
  },
  {
    question: "What happens if I exceed my plan limits? Are there overage charges or do I need to upgrade?",
    answer:
      "This depends on your plan. Some plans may have service limitations upon exceeding limits, while others might offer overage options or prompt an upgrade. Enterprise plans typically have custom arrangements. Please refer to your plan details or contact sales.",
  },
  {
    question: "Can I change my plan (upgrade/downgrade) later?",
    answer:
      "Yes, you can typically upgrade your plan at any time. Downgrades are usually processed at the end of your current billing cycle. Contact support for specific procedures.",
  },
  {
    question: "What are the billing cycles (monthly/annual)? Are there discounts for annual commitments?",
    answer:
      "We offer both monthly and annual billing cycles. Annual commitments often come with a discount compared to monthly payments. Check specific plan details.",
  },
  {
    question: "What are the specific costs or infrastructure requirements associated with On-Premise deployment?",
    answer:
      "On-Premise deployment is part of our Enterprise offering. Costs and infrastructure requirements are custom and depend on your specific setup, scale, and support needs. Please contact sales for a detailed consultation and quote.",
  },
  {
    question: "Do you offer special pricing for startups, educational institutions, or non-profits?",
    answer:
      "We may offer special considerations for certain organizations. Please contact our sales team to discuss your specific situation.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit cards for standard plans. For Enterprise plans, we support bank transfers and other mutually agreed-upon payment methods.",
  },
  {
    question: "How does LLM usage factor into the pricing? Do I pay for LLM tokens separately?",
    answer:
      "LLM usage can be a factor depending on the plan and the models used (e.g., third-party LLM costs). Some plans might include a certain level of LLM usage, while others might have it as a separate or pass-through cost. Enterprise plans offer the most flexibility here, including support for your own private LLMs. Please discuss with sales for clarity based on your intended usage.",
  },
  {
    question: "Are there separate charges for different agent types or advanced features within a tier?",
    answer:
      "Our pricing tiers are designed to include access to a range of agent types and features appropriate for that tier. Access to more advanced agent types or specialized features is typically included in higher tiers. Specific add-ons might be available for certain functionalities. Consult your plan details or sales.",
  },
  {
    question: "How is support included and what are the typical response times for each tier?",
    answer:
      "Support levels vary by tier, from community support for free plans to dedicated technical account managers and custom SLAs for Enterprise clients. Response times are defined in the terms for each support level. Details are available on our pricing page or by contacting sales.",
  },
];

export default function PricingFaqSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Your Pricing Questions Answered
          </h2>
          {/* Intro text for usage and add-ons from draft section 3 */}
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            Our pricing is designed to scale with your needs. Core usage is typically measured by a combination of active agents, computational resources, workflow executions, data throughput, and API call volume.
          </p>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Add-ons may include dedicated model hosting, advanced security packages, premium support tiers, professional services, and additional agent/usage quotas.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-lg text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-600 dark:text-gray-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
