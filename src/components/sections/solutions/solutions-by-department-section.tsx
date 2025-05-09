"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Brain, Briefcase, Code, DollarSign, Users, BarChart3, FileText, Search, Settings } from "lucide-react"; // Example icons

const departments = [
  {
    id: "rd-strategy",
    name: "R&D / Strategy",
    icon: <Brain className="w-5 h-5 mr-2" />,
    headline: "Accelerate Innovation and Strategic Insight Generation",
    useCases: [
      {
        title: "Automated Market & Competitive Intelligence",
        challenge:
          "Manually gathering, filtering, and synthesizing vast amounts of market data is slow and resource-intensive.",
        solution:
          "Deploy the Deep Research Agent to autonomously scan sources, synthesize findings into structured reports, highlighting trends and opportunities.",
        benefits:
          "Actionable insights in hours, reduced manual effort, comprehensive analysis, stronger data-driven planning.",
        agentLink: "/platform/agent-types#deep-research",
      },
      {
        title: "Efficient Scientific & Technical Literature Review",
        challenge:
          "R&D teams struggle to stay current with the rapidly growing volume of scientific papers and technical documents.",
        solution:
          "Utilize the Deep Research Agent with specialized tools for ArXiv, PubMed, etc., to monitor domains and summarize relevant papers.",
        benefits:
          "Accelerate R&D cycles, stay ahead of the curve, identify relevant studies efficiently, reduce redundant research.",
        agentLink: "/platform/agent-types#deep-research",
      },
    ],
  },
  {
    id: "sales-marketing",
    name: "Sales & Marketing",
    icon: <BarChart3 className="w-5 h-5 mr-2" />,
    headline: "Drive Revenue Growth with AI-Powered Efficiency",
    useCases: [
      {
        title: "Automated Prospect Research & Lead Enrichment",
        challenge: "SDRs spend excessive time manually researching prospects, delaying outreach.",
        solution: "Deploy a Custom Agent to automatically gather target account info, identify decision-makers, and enrich lead records in your CRM.",
        benefits: "Reduce manual research time, improve lead quality, enable personalized outreach at scale, increase SDR productivity.",
        agentLink: "/platform/agent-types#custom-agent",
      },
      {
        title: "Personalized Content Generation at Scale",
        challenge: "Crafting personalized emails and marketing collateral for different segments is time-consuming.",
        solution: "Utilize Custom Agents, trained on your brand voice, integrated with your Knowledge Agent and CRM data to generate tailored content.",
        benefits: "Scale personalization, increase content velocity, maintain brand consistency, improve engagement.",
        agentLink: "/platform/agent-types#custom-agent",
      },
      {
        title: "Intelligent Lead Qualification & Routing",
        challenge: "Inefficiently handling inbound leads leads to slow response times and lost opportunities.",
        solution: "Deploy a Custom Agent integrated with web forms/marketing automation to answer initial questions, qualify leads, and route them to sales.",
        benefits: "Instant lead response 24/7, faster qualification, improved conversion, ensure high-priority leads are handled promptly.",
        agentLink: "/platform/agent-types#custom-agent",
      }
    ],
  },
  {
    id: "it-development",
    name: "IT & Development",
    icon: <Code className="w-5 h-5 mr-2" />,
    headline: "Enhance Developer Velocity & Automate IT Operations",
    useCases: [
        {
            title: "Semantic Codebase Understanding & Onboarding",
            challenge: "Developers spend significant time navigating complex codebases, slowing down development.",
            solution: "Deploy the Code Intelligence Agent. Developers can ask natural language questions about the codebase and get precise answers.",
            benefits: "Reduce developer onboarding time, accelerate debugging, improve code comprehension, minimize interruptions.",
            agentLink: "/platform/agent-types#code-intelligence",
        },
        {
            title: "Automated L1/L2 IT Support & Ticket Resolution",
            challenge: "IT helpdesks are inundated with repetitive requests, leading to delays and high costs.",
            solution: "Implement a Custom Agent integrated with your ITSM and Knowledge Agent to handle L1/L2 tickets automatically.",
            benefits: "Instant resolution for common IT issues 24/7, reduce helpdesk volume, improve employee satisfaction, free up IT staff.",
            agentLink: "/platform/agent-types#custom-agent",
        }
    ],
  },
  {
    id: "operations-finance",
    name: "Operations & Finance",
    icon: <DollarSign className="w-5 h-5 mr-2" />,
    headline: "Streamline Operations & Enhance Financial Analysis",
    useCases: [
        {
            title: "Democratized Data Analysis (NL to SQL/CSV)",
            challenge: "Business teams need quick data insights but face delays due to reliance on technical teams for queries.",
            solution: "Empower non-technical users with the SQL Data Agent and CSV Data Agent to ask natural language questions to databases/spreadsheets.",
            benefits: "Democratize data access, enable faster reporting, reduce bottlenecks, empower data-driven decisions.",
            agentLink: "/platform/agent-types#sql-data-agent",
        },
        {
            title: "Automated Document Processing & Data Extraction",
            challenge: "Manually extracting data from documents like invoices or contracts is time-consuming and error-prone.",
            solution: "Deploy Process Agents integrated with the Knowledge Agent to automatically read documents, extract fields, validate, and input data into systems.",
            benefits: "Reduce manual data entry costs/errors, improve data accuracy, accelerate business processes, ensure compliance.",
            agentLink: "/platform/agent-types#process-agent",
        }
    ],
  },
  {
    id: "hr",
    name: "Human Resources",
    icon: <Users className="w-5 h-5 mr-2" />,
    headline: "Enhance Employee Experience & Optimize HR Operations",
    useCases: [
        {
            title: "Instant & Accurate Employee Policy Q&A",
            challenge: "HR departments constantly field repetitive employee questions regarding policies, diverting time from strategic initiatives.",
            solution: "Deploy a Knowledge Agent, trained on your internal HR handbook and policy documents, for employees to ask questions and get instant answers.",
            benefits: "Improve employee self-service, reduce HR workload, ensure consistent policy information, provide instant answers 24/7.",
            agentLink: "/platform/agent-types#knowledge-agent",
        },
        {
            title: "Automated Candidate Screening & Shortlisting",
            challenge: "Talent acquisition teams spend countless hours manually reviewing resumes.",
            solution: "Utilize a Custom Agent to automatically parse resumes, extract key skills, compare against requirements, and provide a ranked shortlist.",
            benefits: "Accelerate time-to-fill, reduce manual screening, allow recruiters to focus on engaging candidates, improve screening consistency.",
            agentLink: "/platform/agent-types#custom-agent",
        }
    ],
  },
];

export default function SolutionsByDepartmentSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            AI-Powered Solutions Across Your Organization
          </h2>
        </div>
        <Tabs defaultValue={departments[0].id} className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 mb-8">
            {departments.map((dept) => (
              <TabsTrigger key={dept.id} value={dept.id} className="flex items-center justify-center text-xs sm:text-sm">
                {dept.icon}
                {dept.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {departments.map((dept) => (
            <TabsContent key={dept.id} value={dept.id}>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
                <h3 className="text-2xl font-semibold text-ruby-600 dark:text-ruby-500 mb-6 text-center">
                  {dept.headline}
                </h3>
                <div className="space-y-8">
                  {dept.useCases.map((useCase) => (
                    <div key={useCase.title} className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {useCase.title}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                        <strong>Challenge:</strong> {useCase.challenge}
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                        <strong>RubiCore Solution:</strong> {useCase.solution}
                      </p>
                      <p className="text-sm text-green-600 dark:text-green-400 mb-3">
                        <strong>Benefits:</strong> {useCase.benefits}
                      </p>
                      <Button variant="link" size="sm" asChild className="p-0 h-auto text-ruby-600 dark:text-ruby-500 hover:underline">
                        <Link href={useCase.agentLink}>
                          Learn More about the Agent <Search className="w-3 h-3 ml-1"/>
                        </Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
