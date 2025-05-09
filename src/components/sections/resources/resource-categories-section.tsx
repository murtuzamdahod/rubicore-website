"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, ExternalLink, Rss, Newspaper, FileSpreadsheet, Presentation } from "lucide-react";

// Dummy data - replace with actual data or fetch from API
const categories = [
  {
    name: "Blog",
    description: "Stay updated on Agentic AI trends, RubiCore news, and expert insights.",
    icon: <Rss className="w-8 h-8 mb-4 text-ruby-600 dark:text-ruby-500" />,
    link: "/blog",
    cta: "View All Blog Posts",
    items: [ // Example items - these would be fetched dynamically
      { id: "shipping-industry-knowledge-agent", title: "Navigating the Tides of Information: How a RubiCore Knowledge Agent Revolutionizes the Shipping Industry", icon: <Newspaper className="w-12 h-12 text-gray-600 dark:text-gray-400" />, link: "/blog/shipping-industry-knowledge-agent" },
      { id: "blog-2", title: "The Future of On-Premise AI", icon: <Newspaper className="w-12 h-12 text-gray-600 dark:text-gray-400" />, link: "/blog/future-on-prem-ai" },
      { id: "blog-3", title: "Top 5 Use Cases for Agentic AI in Finance", icon: <Newspaper className="w-12 h-12 text-gray-600 dark:text-gray-400" />, link: "/blog/agentic-ai-finance" },
    ]
  },
  {
    name: "Case Studies",
    description: "See how enterprises achieve measurable ROI with RubiCore.",
    icon: <FileText className="w-8 h-8 mb-4 text-ruby-600 dark:text-ruby-500" />,
    link: "/resources/case-studies",
    cta: "View All Case Studies",
    items: [
      { id: "cs-2", title: "Healthcare Provider Enhances Patient Intake", icon: <FileSpreadsheet className="w-12 h-12 text-gray-600 dark:text-gray-400" />, link: "/resources/case-studies/healthcare-intake" },
    ]
  },
  {
    name: "Whitepapers & Guides",
    description: "In-depth analysis and practical guidance on enterprise AI.",
    icon: <BookOpen className="w-8 h-8 mb-4 text-ruby-600 dark:text-ruby-500" />,
    link: "/resources/whitepapers",
    cta: "View All Guides",
    items: [
        { id: "wp-2", title: "The CISO's Guide to Secure AI Deployment", icon: <FileText className="w-12 h-12 text-gray-600 dark:text-gray-400" />, link: "/resources/whitepapers/ciso-guide-ai" },
    ]
  },
  {
    name: "Webinars & Events",
    description: "Watch on-demand expert sessions and product deep dives.",
    icon: <Presentation className="w-8 h-8 mb-4 text-ruby-600 dark:text-ruby-500" />,
    link: "/resources/webinars",
    cta: "View All Webinars",
    items: [
        { id: "webinar-1", title: "Deep Dive: RubiCore Orchestration Engine", icon: <Presentation className="w-12 h-12 text-gray-600 dark:text-gray-400" />, link: "/resources/webinars/orchestration-deep-dive" },
    ]
  },
  {
    name: "Documentation",
    description: "Comprehensive technical guides for platform setup and administration.",
    icon: <ExternalLink className="w-8 h-8 mb-4 text-ruby-600 dark:text-ruby-500" />,
    link: "/docs", // Assuming external link
    cta: "Visit Documentation Portal",
    isExternal: true,
  },
  {
    name: "API & SDK Reference",
    description: "Detailed reference for developers integrating with RubiCore.",
    icon: <ExternalLink className="w-8 h-8 mb-4 text-ruby-600 dark:text-ruby-500" />,
    link: "/api-docs", // Assuming external link
    cta: "Explore API & SDK Docs",
    isExternal: true,
  },
  // {
  //   name: "Community Forum",
  //   description: "Connect with other RubiCore users and share best practices.",
  //   icon: <Users className="w-8 h-8 mb-4 text-ruby-600 dark:text-ruby-500" />,
  //   link: "/community", // Assuming external link
  //   cta: "Join the Community",
  //   isExternal: true,
  // },
];

export default function ResourceCategoriesSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Explore by Category
          </h2>
        </div>
        <div className="space-y-16">
          {categories.map((category) => (
            <div key={category.name}>
              <div className="flex flex-col items-center text-center mb-8 md:flex-row md:items-end md:justify-between md:text-left">
                <div className="flex items-center mb-4 md:mb-0">
                  {category.icon}
                  <div className="ml-4">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">{category.description}</p>
                  </div>
                </div>
                <Button variant="link" asChild className="text-ruby-600 dark:text-ruby-500 hover:underline">
                  <Link href={category.link} target={category.isExternal ? "_blank" : "_self"}>
                    {category.cta} <ExternalLink className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </div>
              {category.items && category.items.length > 0 && (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {category.items.map((item) => (
                    <Link key={item.id} href={item.link} className="block group">
                      <div className="overflow-hidden rounded-lg shadow-md bg-white dark:bg-gray-700 hover:shadow-lg transition-shadow duration-200">
                        <div className="relative h-40 w-full">
                          <div className="relative h-40 w-full flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                            {item.icon}
                          </div>
                        </div>
                        <div className="p-4">
                          <h4 className="text-md font-semibold text-gray-900 dark:text-white group-hover:text-ruby-600 dark:group-hover:text-ruby-500">
                            {item.title}
                          </h4>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
