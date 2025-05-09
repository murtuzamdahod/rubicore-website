import SolutionsIntroSection from "@/components/sections/solutions/solutions-intro-section";
import SolutionsByDepartmentSection from "@/components/sections/solutions/solutions-by-department-section";
import OrchestratedIntelligenceSection from "@/components/sections/solutions/orchestrated-intelligence-section";
import FinalCtaSection from "@/components/sections/solutions/final-cta-section"; // Assuming a similar CTA structure

export const metadata = {
  title: "Enterprise AI Solutions & Use Cases | RubiCore Agentic AI Platform",
  description:
    "Automate complex workflows and solve critical business challenges across Sales, R&D, IT, HR, and Operations with RubiCore's secure, specialized AI agents.",
};

export default function SolutionsPage() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            <span className="block">Tailored AI Solutions</span>
            <span className="block text-ruby-600 dark:text-ruby-500">
              For Your Industry&apos;s Unique Challenges
            </span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400 sm:text-xl md:text-2xl">
            See how RubiCore&apos;s secure AI workforce automates complex
            processes, accelerates critical tasks, and unlocks new value across
            your organization, from R&D to Operations.
          </p>
        </div>
      </div>
      <SolutionsIntroSection />
      <SolutionsByDepartmentSection />
      <OrchestratedIntelligenceSection />
      <FinalCtaSection />
    </main>
  );
}
