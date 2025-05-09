import { Users, Zap, Brain } from "lucide-react"; // Example icons

export default function CareersIntroSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Join a Team of Innovators and Problem Solvers
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            At RubiCore, we're not just building software; we're crafting the
            future of enterprise AI. We believe in fostering a culture of
            collaboration, continuous learning, and impactful work. If
            you're driven by challenges and passionate about making a
            difference with cutting-edge technology, you'll find your place
            here.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center p-6 text-center">
            <Zap className="w-12 h-12 text-ruby-600 dark:text-ruby-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Make an Impact
            </h3>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
              Contribute to solutions that solve real-world problems for leading enterprises.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 text-center">
            <Users className="w-12 h-12 text-ruby-600 dark:text-ruby-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Collaborative Culture
            </h3>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
              Work alongside talented individuals in a supportive and dynamic team environment.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 text-center">
            <Brain className="w-12 h-12 text-ruby-600 dark:text-ruby-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Grow & Learn
            </h3>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
              Expand your skills and knowledge in the rapidly evolving field of Agentic AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
