"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Handshake, Users, BookOpen, ExternalLink, Building, Cloud } from "lucide-react"; // Example icons

// Placeholder for partner logos - replace with actual SVGs or Image components
const PartnerLogoPlaceholder = ({ name, icon }: { name: string, icon?: React.ReactNode }) => (
  <div className="flex flex-col items-center justify-center p-6 bg-gray-100 dark:bg-gray-700 rounded-lg h-32 w-full text-center">
    {icon || <Building className="w-8 h-8 text-gray-500 dark:text-gray-400 mb-2" />}
    <p className="text-sm text-gray-600 dark:text-gray-300">{name}</p>
  </div>
);

const partnerCategories = [
  {
    name: "Technology Partners",
    description: "Integrating with leading cloud providers, data platforms, and AI model developers to enhance our platform's capabilities.",
    icon: <Cloud className="w-10 h-10 text-ruby-600 dark:text-ruby-500 mb-3" />,
    logos: [
      { name: "AWS Placeholder", icon: <Cloud className="w-8 h-8 text-blue-500 dark:text-blue-400 mb-2" /> },
      { name: "Azure Placeholder", icon: <Cloud className="w-8 h-8 text-sky-500 dark:text-sky-400 mb-2" /> },
      { name: "GCP Placeholder", icon: <Cloud className="w-8 h-8 text-green-500 dark:text-green-400 mb-2" /> },
    ]
  },
  {
    name: "System Integrators & Solution Providers",
    description: "Working with expert consultants and integrators to deliver tailored RubiCore solutions to enterprises globally.",
    icon: <Handshake className="w-10 h-10 text-ruby-600 dark:text-ruby-500 mb-3" />,
  },
  {
    name: "Academic & Research Institutions",
    description: "Engaging with researchers to stay at the forefront of AI innovation and ethical best practices.",
    icon: <BookOpen className="w-10 h-10 text-ruby-600 dark:text-ruby-500 mb-3" />,
  },
  {
    name: "Our Growing Developer Community",
    description: "Fostering an ecosystem where developers can build, share, and enhance agentic capabilities.",
    icon: <Users className="w-10 h-10 text-ruby-600 dark:text-ruby-500 mb-3" />,
  },
];

export default function PartnersEcosystemSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Collaborating to Advance Enterprise Agentic AI
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            RubiCore believes in the power of partnership to drive innovation and deliver comprehensive solutions. We collaborate with:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {partnerCategories.map((category) => (
            <div key={category.name} className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg flex flex-col items-center text-center">
              <div className="mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {category.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                {category.description}
              </p>
              {category.logos && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full mb-4">
                  {category.logos.map(logo => <PartnerLogoPlaceholder key={logo.name} name={logo.name} icon={logo.icon} />)}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild className="mr-4">
            {/* Placeholder link - update when actual partner program page exists */}
            <Link href="/partners"> 
              Become a RubiCore Partner
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            {/* Placeholder link - update when marketplace exists */}
            <Link href="/marketplace"> 
              Explore our Agent & Skill Marketplace <span className="ml-1 text-xs">(Coming Soon)</span> <ExternalLink className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
