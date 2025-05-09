"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Sparkles, Brain, Database, Code } from "lucide-react"; // Using lucide-react for icons
import { motion } from "framer-motion";
import React, { useState } from "react";

interface AgentInfo {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefit: string;
  idealFor: string;
  learnMoreLink: string;
}

const agents: AgentInfo[] = [
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Deep Research Agent",
    description:
      "Autonomously plans and conducts multi-source research to generate strategic insights. It scans the web (Tavily, Perplexity, Google) and specialized databases (ArXiv, PubMed), then critically synthesizes findings into comprehensive reports.",
    benefit: "Actionable market and competitive intelligence in hours, not weeks.",
    idealFor: "Market analysis, R&D exploration, competitive intelligence.",
    learnMoreLink: "/platform/agent-types#deep-research",
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Knowledge Agent (Advanced RAG)",
    description:
      "Delivers accurate, context-aware answers drawn *solely* from your internal documents and databases, with verifiable source citations for each answer.",
    benefit: "Trusted answers from your enterprise knowledge, on-demand.",
    idealFor:
      "Internal policy Q&A, compliance and SOP lookup, customer support knowledge base.",
    learnMoreLink: "/platform/agent-types#knowledge",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Code Intelligence Agent",
    description:
      "Understands your codebase to assist developers. It answers complex questions about system logic, finds relevant functions/classes across repositories, and explains legacy code.",
    benefit: "Boost developer productivity and accelerate onboarding.",
    idealFor:
      "Developer support, codebase onboarding, architecture knowledge management.",
    learnMoreLink: "/platform/agent-types#code-intelligence",
  },
];

interface AgentTypesSectionProps {
  className?: string;
}

// Custom animated agent icon component
const AgentIcon = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/40 to-primary/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
      <div className="relative flex items-center justify-center w-14 h-14 bg-background border border-border rounded-full shadow-sm group-hover:border-primary/50 transition-all duration-300">
        <div className="text-primary group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Sparkles className="w-3 h-3 text-primary/70 absolute top-0 right-0" />
      </div>
    </div>
  );
};

// Custom animated card component
const AnimatedAgentCard = ({ agent }: { agent: AgentInfo }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={cn(
        "relative flex flex-col h-full bg-card border border-border transition-all duration-300",
        "hover:shadow-[0_0_15px_rgba(225,29,72,0.15)] hover:-translate-y-1 hover:border-primary/40"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card decorator corners */}
      <span className="absolute -left-px -top-px block h-2 w-2 border-l-2 border-t-2 border-primary/60"></span>
      <span className="absolute -right-px -top-px block h-2 w-2 border-r-2 border-t-2 border-primary/60"></span>
      <span className="absolute -bottom-px -left-px block h-2 w-2 border-b-2 border-l-2 border-primary/60"></span>
      <span className="absolute -bottom-px -right-px block h-2 w-2 border-b-2 border-r-2 border-primary/60"></span>

      <CardHeader>
        <div className="mb-4">
          <AgentIcon icon={agent.icon} />
        </div>
        <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
          {agent.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-grow space-y-4">
        <p className="text-muted-foreground">{agent.description}</p>

        <div className="space-y-1 pt-2">
          <h4 className="font-semibold text-foreground">Benefit:</h4>
          <p className="text-sm text-foreground/80">{agent.benefit}</p>
        </div>

        <div className="space-y-1">
          <h4 className="font-semibold text-foreground">Ideal for:</h4>
          <p className="text-sm text-foreground/80">{agent.idealFor}</p>
        </div>
      </CardContent>

      <CardFooter className="pt-2">
        <Button
          asChild
          variant="ghost"
          className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent group"
        >
          <Link href={agent.learnMoreLink} className="flex items-center">
            <span>Learn More</span>
            <ArrowRight
              className={cn(
                "ml-2 h-4 w-4 transition-transform duration-300",
                isHovered ? "translate-x-1" : ""
              )}
            />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export function AgentTypesSection({ className }: AgentTypesSectionProps) {
  const headline = "Deploy Purpose-Built Agents for Complex Enterprise Workflows";
  const introText =
    "RubiCore equips your business with a diverse team of AI agents, easily built and customized in our Low-Code Agent Studio (or selected from our growing library of pre-built templates for faster time-to-value). Each agent leverages advanced reasoning and is designed for specific, high-value functions. For example:";

  return (
    <section
      className={cn(
        "bg-muted/30 text-foreground py-16 md:py-24 relative overflow-hidden",
        className
      )}
    >
      {/* Subtle background gradient effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(225,29,72,0.05),transparent_50%)] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
            {headline}
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">{introText}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent) => (
            <AnimatedAgentCard key={agent.title} agent={agent} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground max-w-3xl mx-auto">
            (Additional agent types like Process Automation Agents, Data Analysis Agents etc., are available on the Agent Types page, each with specialized capabilities for tasks such as workflow orchestration, natural language SQL queries, document processing, and more.)
          </p>
        </div>
      </div>
    </section>
  );
}

export default AgentTypesSection;
