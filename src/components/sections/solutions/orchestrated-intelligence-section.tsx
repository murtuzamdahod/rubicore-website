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
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Beyond Silos: Achieve End-to-End Automation with Multi-Agent
            Orchestration.
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            The true power of RubiCore emerges when orchestrating multiple
            specialized agents to tackle complex, cross-functional business
            processes. Imagine: A Deep Research Agent identifies a new market
            trend. This triggers a Custom Sales Agent to research and enrich
            potential leads. Qualified leads are then passed to a Process Agent
            which, guided by a Knowledge Agent, generates personalized proposals
            and outreach emails, perhaps requiring Human-in-the-Loop approval.
            RubiCore&apos;s Intelligent Orchestration Engine makes these
            sophisticated, governed, end-to-end automated workflows a reality.
          </p>
        </div>
        <OrchestrationVisual />
        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link href="/platform/overview#orchestration"> {/* Ensure this anchor exists on the target page */}
              Learn About Intelligent Orchestration
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
