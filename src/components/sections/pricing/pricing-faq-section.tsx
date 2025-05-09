"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How is usage measured?",
    answer:
      "Usage is primarily measured by the number of active agents, workflow runs, and API call volume, depending on your plan. Specific limits are detailed in each plan.",
  },
  {
    question: "What happens if I exceed my plan limits?",
    answer:
      "For Free and Pro plans, you may experience service limitations or be prompted to upgrade. Enterprise plans offer custom limits and overage options can be discussed.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade your plan at any time. Downgrades are typically processed at the end of your current billing cycle. Contact support for assistance.",
  },
  {
    question: "What are the billing cycles (monthly/annual)?",
    answer:
      "We offer both monthly and annual billing cycles. Annual billing typically includes a discount compared to monthly payments.",
  },
  {
    question: "Are there discounts for annual billing?",
    answer:
      "Yes, we offer a discount for annual subscriptions. Please check the pricing details for each plan or contact sales for more information.",
  },
  {
    question: "What are the costs associated with On-Premise deployment?",
    answer:
      "On-Premise deployment is available with our Enterprise plan. Costs are custom and depend on your specific infrastructure, support, and scale requirements. Please contact sales for a quote.",
  },
  {
    question: "Do you offer custom enterprise plans?",
    answer:
      "Absolutely. Our Enterprise plan is fully customizable to meet the unique needs of large organizations, including custom features, usage limits, and support SLAs.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit cards for Free and Pro plans. For Enterprise plans, we also support bank transfers and other payment methods as agreed.",
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
