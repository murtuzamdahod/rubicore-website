import { Target, Eye, Rocket, ShieldCheck, Lightbulb, Scale, Users, RefreshCw } from "lucide-react"; // Example icons, added new ones

const coreValues = [
  {
    name: "Trust & Transparency",
    description: "Building solutions with integrity, security, and explainability at their core.",
    icon: <ShieldCheck className="w-8 h-8 text-ruby-600 dark:text-ruby-500" />,
  },
  {
    name: "Customer-Centric Innovation",
    description: "Solving real-world enterprise problems with practical, impactful AI.",
    icon: <Lightbulb className="w-8 h-8 text-ruby-600 dark:text-ruby-500" />,
  },
  {
    name: "Responsible AI Leadership",
    description: "Championing ethical development, deployment, and governance of AI.",
    icon: <Scale className="w-8 h-8 text-ruby-600 dark:text-ruby-500" />,
  },
  {
    name: "Collaborative Excellence",
    description: "Fostering teamwork between humans and AI, and within our own organization and partnerships.",
    icon: <Users className="w-8 h-8 text-ruby-600 dark:text-ruby-500" />,
  },
  {
    name: "Continuous Learning & Adaptation",
    description: "Embracing evolution in our technology and our approach.",
    icon: <RefreshCw className="w-8 h-8 text-ruby-600 dark:text-ruby-500" />,
  },
];

export default function MissionVisionSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Rocket className="w-16 h-16 text-ruby-600 dark:text-ruby-500 mx-auto mb-6" />
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Empowering Enterprises with Intelligent, Governed, and Collaborative Automation.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="p-8 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Target className="w-10 h-10 text-ruby-600 dark:text-ruby-500 mr-4" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Our Mission
              </h3>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              To provide enterprises with the world&apos;s most secure, controllable, explainable, and
              effective Agentic AI platform, enabling them to automate complex
              workflows, unlock critical insights, augment human potential, and achieve strategic goals
              with unwavering confidence and responsibility.
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
              To be the leading and most trusted platform for building, orchestrating, and governing intelligent
              AI workforces that seamlessly and ethically integrate with human
              teams, fostering a future where AI amplifies human capability and drives enterprise prosperity.
            </p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white sm:text-3xl">
            Our Core Values
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {coreValues.map((value) => (
            <div key={value.name} className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                {value.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {value.name}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Placeholder for an inspirational image */}
        <div className="mt-16 h-64 w-full max-w-4xl mx-auto bg-gray-200 dark:bg-gray-700 rounded-lg shadow-xl flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400 text-xl">Visual: Future of Work / AI Collaboration</p>
        </div>
      </div>
    </section>
  );
}
