"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

// Dummy data - replace with actual data or fetch from API
const contentTypes = [
  "All",
  "Blog",
  "Case Study",
  "Whitepaper",
  "Guide",
  "Webinar",
  "Event Recording",
  "Documentation",
  "API Reference",
  "SDK Tutorials",
  "Community Post",
  "Glossary Term",
];
const topics = [
  "All",
  "Platform Features",
  "Agent Types", // "Agent Types (Specific)" can be simplified to this for filter
  "Orchestration",
  "Security & Governance",
  "XAI & Ethics",
  "On-Premise Deployment",
  "Integrations",
  "MCP",
  "Human-AI Collaboration",
  "Developer Tools",
  "Use Cases", // "Use Cases (Sales, IT, Finance, etc.)" can be simplified
  "AI Trends",
  "Getting Started",
  "ROI & Value",
];
const industries = [
  "All",
  "Finance",
  "Healthcare",
  "Manufacturing",
  "Retail",
  "Technology",
  "Government",
];
const technicalLevels = [
  "All",
  "Business User",
  "Technical Evaluator",
  "Developer (Beginner/Advanced)",
];

export default function ResourceFilteringSection() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedContentType, setSelectedContentType] = React.useState(contentTypes[0]);
  const [selectedTopic, setSelectedTopic] = React.useState(topics[0]);
  const [selectedIndustry, setSelectedIndustry] = React.useState(industries[0]);
  const [selectedTechnicalLevel, setSelectedTechnicalLevel] = React.useState(technicalLevels[0]);

  const handleSearch = () => {
    // Implement search logic here based on searchTerm and selected filters
    console.log({ searchTerm, selectedContentType, selectedTopic, selectedIndustry, selectedTechnicalLevel });
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedContentType(contentTypes[0]);
    setSelectedTopic(topics[0]);
    setSelectedIndustry(industries[0]);
    setSelectedTechnicalLevel(technicalLevels[0]);
    // Potentially re-trigger search or clear results
  };

  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-2xl font-semibold text-primary dark:text-primary sm:text-3xl">
                Find What You Need, Faster: Explore Our Curated Resources.
            </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5 items-end p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"> {/* Adjusted lg:grid-cols-5 for new filter */}
          <div className="lg:col-span-2">
            <label htmlFor="search-resources" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Search Resources
            </label>
            <div className="relative">
                <Input
                    id="search-resources"
                    type="text"
                    placeholder="Search by keyword..."
                    value={searchTerm}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                    className="pr-10"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <Search className="h-5 w-5 text-gray-400" />
                </div>
            </div>
          </div>
          <div>
            <label htmlFor="content-type-filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Content Type
            </label>
            <Select value={selectedContentType} onValueChange={setSelectedContentType}>
              <SelectTrigger id="content-type-filter">
                <SelectValue placeholder="Select Type" />
              </SelectTrigger>
              <SelectContent>
                {contentTypes.map((type) => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="topic-filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Topic
            </label>
            <Select value={selectedTopic} onValueChange={setSelectedTopic}>
              <SelectTrigger id="topic-filter">
                <SelectValue placeholder="Select Topic" />
              </SelectTrigger>
              <SelectContent>
                {topics.map((topic) => (
                  <SelectItem key={topic} value={topic}>{topic}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="industry-filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Industry
            </label>
            <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
              <SelectTrigger id="industry-filter">
                <SelectValue placeholder="Select Industry" />
              </SelectTrigger>
              <SelectContent>
                {industries.map((industry) => (
                  <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="technical-level-filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Technical Level
            </label>
            <Select value={selectedTechnicalLevel} onValueChange={setSelectedTechnicalLevel}>
              <SelectTrigger id="technical-level-filter">
                <SelectValue placeholder="Select Level" />
              </SelectTrigger>
              <SelectContent>
                {technicalLevels.map((level) => (
                  <SelectItem key={level} value={level}>{level}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex space-x-2 md:col-span-2 lg:col-span-5 lg:justify-end"> {/* Adjusted col-span and alignment for buttons */}
            <Button onClick={handleSearch} className="w-full sm:w-auto">
              <Search className="w-4 h-4 mr-2" /> Apply Filters
            </Button>
            <Button variant="outline" onClick={clearFilters} className="w-full md:w-auto">
              <X className="w-4 h-4 mr-2" /> Clear
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
