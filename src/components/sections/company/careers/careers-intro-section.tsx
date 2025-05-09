import { Users, Zap, Brain } from "lucide-react"; // Example icons

export default function CareersIntroSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            <span className="block">Shape the Future of AI With Us</span>
            <span className="block text-ruby-600 dark:text-ruby-500">Join the RubiCore Team</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-400">
            At RubiCore, we&apos;re not just building an AI platform; we&apos;re creating a new paradigm for how businesses will operate. We believe in the power of collaboration, innovation, and pushing the boundaries of what&apos;s possible.
          </p>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            If you&apos;re passionate about agentic AI, secure enterprise solutions, and want to be part of a team that&apos;s making a real impact, you&apos;ve come to the right place. Explore our current openings and find your next great adventure.
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
