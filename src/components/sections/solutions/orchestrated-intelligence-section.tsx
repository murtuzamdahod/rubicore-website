import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Users, CheckCircle, FileText, Search, GitFork } from "lucide-react"; // Removed Brain, Share2

// Placeholder for a more dynamic visual
const OrchestrationVisual = () => (
  <div className="mt-12 aspect-[16/9] w-full max-w-4xl mx-auto bg-gray-200 dark:bg-gray-700 rounded-lg shadow-xl flex flex-col items-center justify-center p-8">
    <div className="flex space-x-4 mb-6">
      <div className="flex flex-col items-center p-3 bg-white dark:bg-gray-600 rounded-md shadow">
        <Search className="w-8 h-8 text-ruby-500" />
        <p className="text-xs mt-1">Research Agent</p>
      </div>
      <GitFork className="w-8 h-8 text-gray-400 dark:text-gray-500 self-center transform rotate-90 md:rotate-0" />
      <div className="flex flex-col items-center p-3 bg-white dark:bg-gray-600 rounded-md shadow">
        <Users className="w-8 h-8 text-ruby-500" />
        <p className="text-xs mt-1">Sales Agent</p>
      </div>
      <GitFork className="w-8 h-8 text-gray-400 dark:text-gray-500 self-center transform rotate-90 md:rotate-0" />
      <div className="flex flex-col items-center p-3 bg-white dark:bg-gray-600 rounded-md shadow">
        <FileText className="w-8 h-8 text-ruby-500" />
        <p className="text-xs mt-1">Process Agent</p>
      </div>
       <GitFork className="w-8 h-8 text-gray-400 dark:text-gray-500 self-center transform rotate-90 md:rotate-0" />
      <div className="flex flex-col items-center p-3 bg-white dark:bg-gray-600 rounded-md shadow">
        <CheckCircle className="w-8 h-8 text-green-500" />
        <p className="text-xs mt-1">HITL Approval</p>
      </div>
    </div>
    <p className="text-gray-700 dark:text-gray-300 text-center text-lg">
      Visual: Multi-Agent Orchestration Flow
    </p>
     <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
      (Deep Research Agent identifies trend → Sales Agent enriches leads → Process Agent generates proposals → Human approves)
    </p>
  </div>
);

export default function OrchestratedIntelligenceSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
            Beyond Silos: Achieve Transformative End-to-End Automation and Insight with Orchestrated Multi-Agent Systems.
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            The true transformative potential of RubiCore is realized when specialized AI agents are orchestrated into collaborative multi-agent systems to tackle complex, cross-functional enterprise challenges. Imagine a scenario:
            1. A Deep Research Agent identifies a nascent market trend and potential competitive threats.
            2. A Simulation Agent models the potential impact of this trend on your business under various response scenarios.
            3. This data is fed to a Strategic Decision Agent, which, collaborating with human strategists via the Human-AI Collaboration Interface, formulates a strategic response (e.g., develop a new product feature).
            4. A Code & Software Intelligence Agent assists developers in rapidly prototyping and building the new feature.
            5. Simultaneously, Creative Agents develop marketing materials, while a Knowledge Agent ensures all product information is accurate and consistent across channels.
            6. Process Automation Agents then coordinate the updated product rollout, inventory adjustments, and sales enablement training, integrating with ERP, CRM, and learning management systems.
            7. Throughout this process, Data Analytics Agents monitor progress, identify bottlenecks, and provide performance feedback, allowing the entire system (agents and humans) to learn and optimize.
            RubiCore&apos;s Intelligent Orchestration Engine and Adaptive Multi-Agent Collaboration Framework make these sophisticated, governed, end-to-end intelligent automation workflows a reality, breaking down departmental silos, fostering emergent solutions, and driving unprecedented levels of efficiency, agility, and innovation.
          </p>
        </div>
        <OrchestrationVisual />
        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link href="/platform/overview#orchestration">
              Learn About Intelligent Orchestration & Multi-Agent Systems
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
