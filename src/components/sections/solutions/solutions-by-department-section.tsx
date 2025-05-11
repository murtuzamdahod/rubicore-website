"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Brain, Code, DollarSign, Users, BarChart3, Search } from "lucide-react"; // Example icons

const departments = [
  {
    id: "rd-strategy",
    name: "R&D / Strategy",
    icon: <Brain className="w-5 h-5 mr-2" />,
    headline: "Accelerate Innovation, Strategic Insight, and Product Development with AI-Powered Foresight",
    useCases: [
      {
        title: "Automated Market & Competitive Intelligence with Predictive Insights",
        challenge: "Manually gathering, filtering, synthesizing, and deriving predictive insights from vast, multi-modal market data, competitor activities, patent landscapes, and customer feedback is slow, resource-intensive, and often reactive.",
        solution: "Deploy a team of agents: The Deep Research & Analysis Agent autonomously scans targeted web sources, news, financial reports, patent databases (e.g., USPTO, EPO), and academic publications (ArXiv, PubMed). It extracts and synthesizes multi-modal data. A Data Analytics Agent identifies trends, patterns, and anomalies. A Strategic Decision Agent uses this synthesized information to generate SWOT analyses, identify emerging opportunities/threats, and provide basic predictive modeling on market shifts or competitor strategies, with explainable outputs.",
        benefits: "Proactive, actionable insights in hours, not weeks, reduced manual effort, comprehensive and consistent analysis, stronger data-driven strategic planning, early warning for disruptive trends.",
        agentLink: "/platform/agent-types#deep-research",
      },
      {
        title: "Accelerated Scientific Discovery & IP Management",
        challenge: "R&D teams struggle to stay current with the rapidly growing volume of scientific papers, patents, and technical documents, identify novel connections, and manage intellectual property effectively.",
        solution: "Utilize a Deep Research & Analysis Agent with tools for ArXiv, PubMed, chemical databases, etc., to monitor domains, summarize papers based on complex criteria, and identify key findings or conflicting results. A Knowledge Agent trained on internal IP and prior art can assist in identifying novelty or potential infringements. A Creative Agent can help brainstorm new research hypotheses based on synthesized literature.",
        benefits: "Accelerate R&D cycles and innovation, identify relevant studies and white spaces efficiently, reduce redundant research, enhance IP protection and discovery.",
        agentLink: "/platform/agent-types#deep-research",
      },
    ],
  },
  {
    id: "sales-marketing",
    name: "Sales & Marketing",
    icon: <BarChart3 className="w-5 h-5 mr-2" />,
    headline: "Drive Revenue Growth and Customer Engagement with AI-Powered Personalization and Efficiency",
    useCases: [
      {
        title: "Hyper-Personalized Prospecting & Automated Lead Lifecycle Management",
        challenge: "SDRs and marketing teams spend excessive time on manual research, generic outreach, and inefficient lead nurturing, leading to low conversion rates.",
        solution: "A Deep Research Agent gathers deep insights on target accounts and key decision-makers. A Creative Agent drafts highly personalized outreach messages (emails, LinkedIn messages) based on this research and your brand voice. A Process Automation Agent orchestrates the outreach sequence, updates the CRM (Salesforce, HubSpot via connectors), schedules follow-ups, and routes warm leads to sales reps with full context. A Knowledge Agent can handle initial FAQ responses from prospects.",
        benefits: "Dramatically reduce manual research, significantly improve lead quality and conversion rates, enable hyper-personalized engagement at scale, boost SDR/marketing productivity, shorten sales cycles.",
        agentLink: "/platform/agent-types#deep-research",
      },
      {
        title: "AI-Driven Content Strategy, Creation & Optimization",
        challenge: "Consistently creating high-quality, engaging, and SEO-optimized content across multiple channels that resonates with different audience segments is a major bottleneck.",
        solution: "A Deep Research Agent identifies trending topics and keywords. A Creative Agent generates draft content (blog posts, social media updates, ad copy, video scripts) in various formats, leveraging multi-modal capabilities. A Knowledge Agent ensures brand voice consistency and factual accuracy based on your internal guidelines. A Data Analytics Agent can analyze content performance to suggest optimizations.",
        benefits: "Increase content velocity and quality, scale personalization, improve SEO performance, maintain brand consistency, optimize content for engagement and conversion.",
        agentLink: "/platform/agent-types#creative-agent",
      },
      { // Existing third use case, retained as draft doesn't remove it
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
    headline: "Enhance Developer Velocity, Automate IT Operations, and Bolster Cybersecurity",
    useCases: [
        {
            title: "AI-Augmented Software Development Lifecycle (SDLC)",
            challenge: "Development teams face pressure to deliver faster while maintaining code quality, security, and managing complex legacy systems.",
            solution: "The Code & Software Intelligence Agent assists developers with code understanding, generation, debugging, and automated testing. It integrates with CI/CD pipelines for automated code reviews, security vulnerability scanning (SAST principles), and dependency analysis. A Process Automation Agent can automate build and deployment processes.",
            benefits: "Accelerate development cycles, improve code quality and security, reduce developer toil, streamline onboarding, facilitate easier maintenance of complex systems.",
            agentLink: "/platform/agent-types#code-intelligence",
        },
        {
            title: "Intelligent IT Support & Autonomous Operations (AIOps)",
            challenge: "IT helpdesks are overwhelmed with repetitive requests, and IT operations struggle with alert fatigue and proactive incident resolution.",
            solution: "An Enterprise Knowledge Agent, trained on IT SOPs and knowledge bases, provides instant L1 support via chat/portals. A Process Automation Agent, integrated with ITSM (ServiceNow, Jira via connectors), automates ticket creation, routing, and resolution for common issues (password resets, access provisioning). A Data Analytics Agent can perform log analysis for anomaly detection, feeding insights to a Decision Agent for proactive incident prediction and automated remediation actions.",
            benefits: "Instant resolution for common IT issues 24/7, significantly reduce helpdesk load and cost, improve employee satisfaction, enable proactive AIOps, free up IT staff for strategic projects.",
            agentLink: "/platform/agent-types#knowledge-agent",
        }
    ],
  },
  {
    id: "operations-finance",
    name: "Operations & Finance",
    icon: <DollarSign className="w-5 h-5 mr-2" />,
    headline: "Streamline Complex Operations, Enhance Financial Control, and Build Resilient Supply Chains",
    useCases: [
        {
            title: "Autonomous Financial Operations & Intelligent Document Processing",
            challenge: "Manual data entry, reconciliation, and validation from invoices, purchase orders, contracts, and financial statements are slow, error-prone, and costly.",
            solution: "Process Automation Agents, equipped with advanced OCR and NLU capabilities (often via the Knowledge Agent trained on document schemas), automatically extract, validate, and input data into ERP/accounting systems (SAP, Oracle via connectors). A Data Analytics Agent can perform automated reconciliation and flag discrepancies for review by a Decision Agent or human expert.",
            benefits: "Massively reduce manual data entry and errors, improve data accuracy, accelerate critical financial processes (AP, AR, month-end close), ensure compliance, reduce operational costs.",
            agentLink: "/platform/agent-types#process-agent",
        },
        {
            title: "Intelligent Supply Chain Optimization & Risk Management",
            challenge: "Managing complex global supply chains with demand volatility, supplier risks, and logistical disruptions requires real-time visibility and adaptive decision-making.",
            solution: "A Data Analytics Agent monitors real-time data from IoT sensors, logistics providers, and market feeds. A Deep Research Agent assesses geopolitical or environmental risks affecting suppliers. A Simulation Agent models different supply chain scenarios and stress tests. A Decision Agent uses these inputs to recommend optimal inventory levels, alternative sourcing strategies, or re-routing shipments, triggering Process Automation Agents to execute changes.",
            benefits: "Improved supply chain visibility and resilience, optimized inventory costs, reduced disruptions, faster response to changing conditions, enhanced supplier risk management.",
            agentLink: "/platform/agent-types#sql-data-agent",
        }
    ],
  },
  {
    id: "hr",
    name: "Human Resources",
    icon: <Users className="w-5 h-5 mr-2" />,
    headline: "Enhance Employee Experience, Optimize Talent Acquisition, and Streamline HR Operations",
    useCases: [
        {
            title: "AI-Powered Employee Self-Service & HR Support Automation",
            challenge: "HR departments spend significant time answering repetitive employee queries and managing routine administrative tasks.",
            solution: "An Enterprise Knowledge Agent, trained on HR policies, benefits information, and employee handbooks, provides instant 24/7 answers to employee questions via chatbots or internal portals. Process Automation Agents handle routine tasks like leave requests, benefits enrollment changes, and onboarding document processing, integrating with HRIS (Workday, SuccessFactors via connectors).",
            benefits: "Improve employee self-service and satisfaction, significantly reduce HR administrative burden, ensure consistent and compliant information delivery, free up HR professionals for strategic initiatives.",
            agentLink: "/platform/agent-types#knowledge-agent",
        },
        {
            title: "Intelligent Talent Acquisition & Candidate Experience",
            challenge: "Sourcing, screening, and engaging top talent efficiently while ensuring a positive candidate experience is a major hurdle.",
            solution: "A Deep Research Agent can identify and source potential candidates from various platforms. A Custom Agent can perform initial resume screening against job requirements (ensuring fairness and bias checks). A Creative Agent can help draft personalized outreach to candidates. A Process Automation Agent can schedule interviews and manage candidate communication.",
            benefits: "Accelerate time-to-hire, improve quality of candidates, reduce screening bias, enhance candidate engagement, allow recruiters to focus on strategic relationship building.",
            agentLink: "/platform/agent-types#deep-research",
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
