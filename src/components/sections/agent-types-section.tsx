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
    description: "Delivers accurate, context-aware answers drawn solely from your internal documents, databases, and structured/unstructured knowledge sources, with verifiable source citations and traceable reasoning paths for each answer. Features multi-document reasoning, complex query decomposition, conflicting information resolution with justification, and proactive knowledge discovery to suggest relevant information. Ability to update knowledge graphs and learn from user feedback to improve accuracy and relevance continuously.",
    benefit: "Trusted, explainable answers from your enterprise knowledge, on-demand, with continuous improvement.",
    idealFor: "Internal policy Q&A, compliance and SOP lookup, expert assistance, customer support knowledge base.",
    learnMoreLink: "/platform/agent-types#knowledge",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Strategic Decision Agent",
    description: "Leverages hybrid reasoning frameworks (combining neural and symbolic approaches) with causal inference, game theory modeling, multi-criteria decision analysis, and dynamic Bayesian networks to evaluate complex options against dynamic criteria, weigh trade-offs, and recommend data-informed decisions with clear justifications, risk assessments, and alternative scenario analyses. Features dynamic planning and re-planning capabilities that adapt to changing conditions, scenario modeling with probabilistic outcomes, and ethical consideration frameworks to align with organizational values. Meta-cognition capabilities for self-assessment of reasoning quality, real-time belief updating with human feedback, and integration with confidence calibration to prevent decision overconfidence.",
    benefit: "Faster, more consistent, and transparent decision-making with full accountability and ethical alignment.",
    idealFor: "Resource allocation, risk assessment & management, investment prioritization, strategic planning, supply chain optimization, policy impact analysis.",
    learnMoreLink: "/platform/agent-types#strategic-decision",
  },
  {
    icon: <Paintbrush className="h-6 w-6" />,
    title: "Creative & Content Generation Agent",
    description: "Combines ideation frameworks with domain knowledge and multi-modal inputs to generate innovative solutions, designs, and content. Enables collaborative creativity between humans and AI across content creation (text, image, basic video concepts), design exploration, and innovation workshops. Personalized content adaptation based on audience segments, brand voice consistency checkers, and intellectual property compliance assistance.",
    benefit: "Accelerated ideation and multi-format content creation while maintaining brand consistency and compliance.",
    idealFor: "Marketing campaigns, product design, UX/UI development, personalized communication, innovation initiatives.",
    learnMoreLink: "/platform/agent-types#creative-content",
  },
  {
    icon: <WorkflowIcon className="h-6 w-6" />,
    title: "Workflow & Process Automation Agent",
    description: "Orchestrates and automates complex, multi-step business workflows by interacting with various enterprise systems through APIs, RPA (via integration), or direct system interaction. Features intelligent task routing, exception handling with learning capabilities, and dynamic resource allocation. Predictive process optimization, self-healing workflows that adapt to system changes, and proactive identification of automation opportunities.",
    benefit: "Streamlined end-to-end processes, reduced operational costs, improved efficiency, and continuous process improvement.",
    idealFor: "Cross-departmental workflows, intelligent document processing, automated compliance checks, resource management.",
    learnMoreLink: "/platform/agent-types#workflow-automation",
  },
  {
    icon: <AreaChart className="h-6 w-6" />,
    title: "Simulation & Foresight Agent",
    description: "Creates dynamic models of business processes, market conditions, or complex systems to test hypotheses, explore \"what-if\" scenarios, and predict potential outcomes of different strategies. Can be used to train other agents in a safe, virtual environment with agent-in-the-loop simulation feedback. Digital twin creation for complex assets and processes, reinforcement learning environments for training autonomous agents, stress-testing for rare events, and Monte Carlo simulations with confidence bands.",
    benefit: "Reduced risk in decision-making, optimized strategies through virtual experimentation, and enhanced preparedness for future uncertainties.",
    idealFor: "Strategic planning, risk management, operational optimization, training AI systems, stress-testing business continuity.",
    learnMoreLink: "/platform/agent-types#simulation-foresight",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Deep Research & Analysis Agent",
    description: "Autonomously plans and conducts multi-source, multi-modal research (text, image, data) to generate strategic insights. It scans the web (Tavily, Perplexity, Google), specialized databases (ArXiv, PubMed, financial data), and internal knowledge troves, then critically synthesizes findings into comprehensive, evidence-backed reports with explainable conclusions and confidence scoring. Self-correcting research strategies based on interim findings, hypothesis generation and validation, anomaly detection in research findings, and predictive trend forecasting with confidence intervals.",
    benefit: "Actionable market and competitive intelligence with deeper insights, in hours, not weeks.",
    idealFor: "Market analysis, R&D exploration, competitive intelligence, due diligence.",
    learnMoreLink: "/platform/agent-types#deep-research",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Agentic Identity & Credential Management Agent",
    description: "Handles secure provisioning, monitoring, and governance of AI agent identities and credentials across enterprise systems. Manages cryptographically secured service accounts, temporary secrets for cross-system operations, automatic credential rotation, and comprehensive audit controls. Zero-trust security model for agent operations, real-time anomaly detection in agent behavior patterns, and secure vault integration (HashiCorp, Azure Key Vault, etc.).",
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
  const introText = "RubiCore equips your business with a diverse team of AI agents, easily built and customized in our Low-Code Agent Studio (or selected from our comprehensive library of 200+ pre-built, industry-specific templates for faster time-to-value). Each agent leverages advanced cognitive frameworks with hybrid reasoning capabilities, delivering sophisticated planning, execution, and continuous learning tailored for specific, high-value functions across departments. Agents can be trained on your Standard Operating Procedures (SOPs) to ensure perfect alignment with your organization's unique workflows. Our 2025 platform expansion introduces next-generation specialized agents that harness the latest advancements in cognitive architectures, multi-modal understanding, self-correction, and secure multi-agent collaboration—with 25% of GenAI adopters piloting agentic AI this year, and 50% expected by 2027 (Deloitte). For example:";

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
            (Additional agent types like <strong>Data Analytics & BI Agents</strong>, <strong>Customer Experience Agents</strong>, <strong>Cybersecurity Operations Agents</strong>, <strong>HR & Talent Management Agents</strong>, and more are available on the Agent Types page, each with specialized capabilities for tasks such as advanced data visualization, personalized customer journey orchestration, threat hunting, and employee lifecycle management.)
          </p>
        </div>
      </div>
    </section>
  );
}

export default AgentTypesSection;
