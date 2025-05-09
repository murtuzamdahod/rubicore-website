import { Target, Eye, Rocket } from "lucide-react"; // Example icons

export default function MissionVisionSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Rocket className="w-16 h-16 text-ruby-600 dark:text-ruby-500 mx-auto mb-6" />
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Empowering Enterprises with Intelligent, Governed Automation.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-8 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Target className="w-10 h-10 text-ruby-600 dark:text-ruby-500 mr-4" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Our Mission
              </h3>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              To provide enterprises with the most secure, controllable, and
              effective Agentic AI platform, enabling them to automate complex
              workflows, unlock critical insights, and achieve strategic goals
              with confidence and responsibility.
            </p>
          </div>
          <div className="p-8 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Eye className="w-10 h-10 text-ruby-600 dark:text-ruby-500 mr-4" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Our Vision
              </h3>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              To be the leading platform for building and orchestrating trusted
              AI workforces that seamlessly integrate with and augment human
              potential within the enterprise.
            </p>
          </div>
        </div>
        {/* Placeholder for an inspirational image */}
        <div className="mt-16 h-64 w-full max-w-4xl mx-auto bg-gray-200 dark:bg-gray-700 rounded-lg shadow-xl flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400 text-xl">Visual: Future of Work / AI Collaboration</p>
        </div>
      </div>
    </section>
  );
}
