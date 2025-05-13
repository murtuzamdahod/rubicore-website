"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, ExternalLink, Rss, Presentation, Users, Library, BookMarked } from "lucide-react"; // Added Users, Library, BookMarked

// Dummy data - replace with actual data or fetch from API
const categories = [
  {
    name: "Blog & Articles",
    description: "Stay updated on the latest Agentic AI trends, RubiCore platform innovations, expert opinions, practical implementation tips, and discussions on ethical AI and governance.",
    icon: <Rss className="w-8 h-8 mb-4 text-ruby-600 dark:text-ruby-500" />,
    link: "/blog", // Assuming main blog page lists articles
    cta: "View All Blog Posts",
    isExternal: false,
  },
  {
    name: "Case Studies & Success Stories",
    description: "See how leading enterprises are achieving measurable results, transformative ROI, and enhanced operational excellence by deploying RubiCore's secure, collaborative AI workforce. Filter by industry and solution.",
    icon: <FileText className="w-8 h-8 mb-4 text-ruby-600 dark:text-ruby-500" />,
    link: "/resources/case-studies", // Assuming a page listing case studies
    cta: "View All Case Studies",
    isExternal: false,
  },
  {
    name: "Whitepapers, Guides & eBooks",
    description: "In-depth analysis, strategic frameworks, and practical guidance on designing, implementing, governing, and maximizing the value of enterprise agentic AI. Topics include XAI, On-Premise AI, Multi-Agent Systems, Ethical AI, and more.",
    icon: <BookOpen className="w-8 h-8 mb-4 text-ruby-600 dark:text-ruby-500" />,
    link: "/resources/whitepapers", // Assuming a page listing whitepapers
    cta: "View All Guides",
    isExternal: false,
  },
  {
    name: "Webinars, Events & Workshops",
    description: "Watch on-demand recordings of expert sessions, product deep dives, and interactive workshops. Find out about upcoming live events, webinars, and opportunities to engage with RubiCore experts and the community.",
    icon: <Presentation className="w-8 h-8 mb-4 text-ruby-600 dark:text-ruby-500" />,
    link: "/resources/webinars", // Assuming a page listing webinars/events
    cta: "View All Webinars & Events",
    isExternal: false,
  },
  {
    name: "Developer Hub (Documentation, APIs, SDKs)",
    description: "Comprehensive technical guides, API references, SDK documentation (Python and others), tutorials, code samples, and best practices for building, integrating, and extending the RubiCore platform. Includes information on agent development, tool creation, and simulation environments.",
    icon: <Library className="w-8 h-8 mb-4 text-ruby-600 dark:text-ruby-500" />,
    link: "/developer-hub", 
    cta: "Visit Developer Hub",
    isExternal: false, 
  },
  {
    name: "Community Forum & Knowledge Base",
    description: "Connect with other RubiCore users, developers, and partners. Ask questions, share best practices, find solutions to common challenges, contribute to discussions, and access a growing knowledge base of community-generated content.",
    icon: <Users className="w-8 h-8 mb-4 text-ruby-600 dark:text-ruby-500" />,
    link: "/community", 
    cta: "Join the RubiCore Community",
    isExternal: false, // Assuming internal page, draft says "Coming Soon"
  },
  {
    name: "Glossary of Agentic AI Terms",
    description: "A comprehensive A-Z glossary defining key terms and concepts in the rapidly evolving field of Agentic AI, from \"Autonomous Agents\" to \"Zero-shot Learning.\"",
    icon: <BookMarked className="w-8 h-8 mb-4 text-ruby-600 dark:text-ruby-500" />,
    link: "/glossary",
    cta: "Explore the AI Glossary",
    isExternal: false, // Assuming internal page, draft says "Coming Soon"
  },
];

export default function ResourceCategoriesSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
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
                    <h3 className="text-2xl font-semibold text-primary">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">{category.description}</p>
                  </div>
                </div>
                <Button variant="link" asChild className="text-ruby-600 dark:text-ruby-500 hover:underline">
                  <Link href={category.link} target={category.isExternal ? "_blank" : "_self"}>
                    {category.cta} {category.isExternal && <ExternalLink className="w-4 h-4 ml-1" />}
                  </Link>
                </Button>
              </div>
              {/* Removed category.items rendering logic to align with draft's focus for this overview section */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
