"use client";

import Link from "next/link";
import Image from "next/image"; // For placeholder images
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Dummy data - replace with actual data or fetch from API
const featuredResources = [
  {
    id: "blog-1",
    type: "Blog Post",
    title: "Orchestrating Success: Moving Beyond Task Automation",
    description: "Discover how governed Agentic AI can transform complex enterprise workflows.",
    imageUrl: "/images/placeholder-blog-1.jpg", // Replace with actual image path
    link: "/blog/orchestrating-success",
    date: "May 5, 2025",
  },
  {
    id: "whitepaper-1",
    type: "Whitepaper",
    title: "Achieving ROI with Secure, On-Premise AI Agents",
    description: "An in-depth guide to deploying AI agents securely within your infrastructure.",
    imageUrl: "/images/placeholder-whitepaper-1.jpg", // Replace with actual image path
    link: "/resources/whitepapers/on-premise-ai-roi",
    date: "April 28, 2025",
  },
  {
    id: "case-study-1",
    type: "Case Study",
    title: "Global Bank Automates Compliance with RubiCore",
    description: "Learn how a leading financial institution streamlined compliance workflows.",
    imageUrl: "/images/placeholder-case-study-1.jpg", // Replace with actual image path
    link: "/resources/case-studies/global-bank-compliance",
    date: "April 15, 2025",
  },
];

export default function FeaturedResourcesSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Featured Insights
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredResources.map((resource) => (
            <div
              key={resource.id}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300"
            >
              <Link href={resource.link} className="block">
                <div className="relative h-48 w-full">
                  <Image
                    src={resource.imageUrl}
                    alt={resource.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
              </Link>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm font-medium text-ruby-600 dark:text-ruby-400">
                  {resource.type}
                </p>
                <Link href={resource.link} className="block mt-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white hover:text-ruby-600 dark:hover:text-ruby-500">
                    {resource.title}
                  </h3>
                </Link>
                <p className="mt-3 text-base text-gray-600 dark:text-gray-400 flex-grow">
                  {resource.description}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-sm text-gray-500 dark:text-gray-400">{resource.date}</p>
                  <Button variant="link" asChild className="p-0 text-ruby-600 dark:text-ruby-500 hover:underline">
                    <Link href={resource.link}>
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
