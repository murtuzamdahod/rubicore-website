import CareersIntroSection from "@/components/sections/company/careers/careers-intro-section";
import OpenPositionsSection from "@/components/sections/company/careers/open-positions-section";
import LifeAtRubiCoreSection from "@/components/sections/company/careers/life-at-rubicore-section";
import HowToApplySection from "@/components/sections/company/careers/how-to-apply-section";
import ResumeSubmissionSection from "@/components/sections/company/careers/resume-submission-section";

export const metadata = {
  title: "Careers at RubiCore | Join Our Team",
  description:
    "Explore exciting career opportunities at RubiCore. Join us in shaping the future of enterprise AI and work on cutting-edge Agentic AI solutions.",
};

export default function CareersPage() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            <span className="block">Shape the Future of AI</span>
            <span className="block text-ruby-600 dark:text-ruby-500">
              Work at RubiCore
            </span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400 sm:text-xl md:text-2xl">
            Be part of a passionate team dedicated to building the next
            generation of secure, governable, and effective enterprise AI
            solutions.
          </p>
        </div>
      </div>
      <CareersIntroSection />
      <OpenPositionsSection />
      <LifeAtRubiCoreSection />
      <ResumeSubmissionSection />
      <HowToApplySection />
    </main>
  );
}
