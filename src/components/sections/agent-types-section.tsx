"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Sparkles, Database, Target, Paintbrush, Workflow as WorkflowIcon, AreaChart, ShieldCheck } from "lucide-react"; // Removed Brain, Code
import React, { useState } from "react";
import { BlurFade } from "@/components/ui/blur-fade"; // Restoring BlurFade
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"; // Restoring AnimatedShinyText

interface AgentInfo {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode; 
  benefit: string;
  idealFor: string;
  learnMoreLink: string;
}

const agents: AgentInfo[] = [
  {
    icon: <Database className="h-6 w-6" />,
    title: "Enterprise Knowledge Agent (Advanced RAG+)",
    description: "Provides accurate, context-aware answers from internal knowledge sources with verifiable citations and traceable reasoning. Features multi-document reasoning and learns from user feedback.",
    benefit: "Trusted, explainable answers from your enterprise knowledge, on-demand, with continuous improvement.",
    idealFor: "Internal policy Q&A, compliance and SOP lookup, expert assistance, customer support knowledge base.",
    learnMoreLink: "/platform/agent-types#knowledge",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Strategic Decision Agent",
    description: "Utilizes hybrid reasoning to evaluate complex options, weigh trade-offs, and recommend data-informed decisions with clear justifications and risk assessments. Adapts to changing conditions.",
    benefit: "Faster, more consistent, and transparent decision-making with full accountability and ethical alignment.",
    idealFor: "Resource allocation, risk assessment & management, investment prioritization, strategic planning, supply chain optimization, policy impact analysis.",
    learnMoreLink: "/platform/agent-types#strategic-decision",
  },
  {
    icon: <Paintbrush className="h-6 w-6" />,
    title: "Creative & Content Generation Agent",
    description: "Generates innovative solutions, designs, and multi-modal content by combining ideation frameworks with domain knowledge. Facilitates collaborative creativity and ensures brand consistency.",
    benefit: "Accelerated ideation and multi-format content creation while maintaining brand consistency and compliance.",
    idealFor: "Marketing campaigns, product design, UX/UI development, personalized communication, innovation initiatives.",
    learnMoreLink: "/platform/agent-types#creative-content",
  },
  {
    icon: <WorkflowIcon className="h-6 w-6" />,
    title: "Workflow & Process Automation Agent",
    description: "Automates complex, multi-step business workflows by interacting with enterprise systems. Features intelligent task routing, exception handling, and dynamic resource allocation.",
    benefit: "Streamlined end-to-end processes, reduced operational costs, improved efficiency, and continuous process improvement.",
    idealFor: "Cross-departmental workflows, intelligent document processing, automated compliance checks, resource management.",
    learnMoreLink: "/platform/agent-types#workflow-automation",
  },
  {
    icon: <AreaChart className="h-6 w-6" />,
    title: "Simulation & Foresight Agent",
    description: "Models business processes and market conditions to test hypotheses, explore scenarios, and predict outcomes. Useful for training agents and creating digital twins.",
    benefit: "Reduced risk in decision-making, optimized strategies through virtual experimentation, and enhanced preparedness for future uncertainties.",
    idealFor: "Strategic planning, risk management, operational optimization, training AI systems, stress-testing business continuity.",
    learnMoreLink: "/platform/agent-types#simulation-foresight",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Deep Research & Analysis Agent",
    description: "Conducts multi-source, multi-modal research to generate strategic insights. Scans web, databases, and internal knowledge, synthesizing findings into evidence-backed reports.",
    benefit: "Actionable market and competitive intelligence with deeper insights, in hours, not weeks.",
    idealFor: "Market analysis, R&D exploration, competitive intelligence, due diligence.",
    learnMoreLink: "/platform/agent-types#deep-research",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Agentic Identity & Credential Management Agent",
    description: "Manages secure provisioning, monitoring, and governance of AI agent identities and credentials. Ensures least-privilege access and comprehensive identity oversight.",
    benefit: "Prevent credential sprawl, ensure least-privilege access for agents, maintain comprehensive identity oversight, and enable secure cross-system agent operations.",
    idealFor: "Security-sensitive industries, regulated environments, organizations with complex agent deployments.",
    learnMoreLink: "/platform/agent-types#identity-management",
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
  const headline = "Deploy Purpose-Built, Continuously Learning Agents for Complex Enterprise Workflows";
  const introText = "RubiCore equips your business with a diverse team of AI agents, customizable in our Low-Code Agent Studio or chosen from 200+ pre-built templates. Agents leverage advanced cognitive frameworks for planning, execution, and continuous learning, aligning with your SOPs. Our 2025 platform expansion brings next-gen agents with enhanced capabilities.";

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
          <AnimatedShinyText className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {headline}
          </AnimatedShinyText>
          <p className="text-muted-foreground text-lg md:text-xl">{introText}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <BlurFade key={agent.title} delay={0.25 + index * 0.1} inView>
              <AnimatedAgentCard agent={agent} />
            </BlurFade>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground max-w-3xl mx-auto">
            (Additional agent types like <strong>Data Analytics & BI Agents</strong>, <strong>Customer Experience Agents</strong>, <strong>Cybersecurity Operations Agents</strong>, <strong>HR & Talent Management Agents</strong>, and more are available on the Agent Types page, each with specialized capabilities for tasks such as advanced data visualization, personalized customer journey orchestration, threat hunting, and employee lifecycle management.)
          </p>
        </div>
      </div>
    </section>
  );
}

export default AgentTypesSection;
