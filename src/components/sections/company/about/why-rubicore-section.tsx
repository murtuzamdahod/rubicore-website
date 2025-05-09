import { ShieldCheck, Cog, GitFork, CheckSquare, Zap } from "lucide-react"; // Example icons

const differentiators = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-ruby-600 dark:text-ruby-500" />,
    title: "Security & Control First",
    description: "Unparalleled deployment flexibility including robust On-Premise options for maximum data sovereignty and compliance.",
  },
  {
    icon: <GitFork className="w-10 h-10 text-ruby-600 dark:text-ruby-500 transform rotate-90" />,
    title: "Intelligent Orchestration",
    description: "Go beyond single tasks; automate complex, multi-agent, cross-functional workflows.",
  },
  {
    icon: <Cog className="w-10 h-10 text-ruby-600 dark:text-ruby-500" />,
    title: "Deep Customization",
    description: "Build agents and tools tailored precisely to your unique business processes with our Low-Code Studio.",
  },
  {
    icon: <CheckSquare className="w-10 h-10 text-ruby-600 dark:text-ruby-500" />,
    title: "Built-in Governance",
    description: "Operate responsibly with integrated security features, audit trails, RBAC, and compliance guardrails.",
  },
  {
    icon: <Zap className="w-10 h-10 text-ruby-600 dark:text-ruby-500" />,
    title: "Enterprise-Grade Performance",
    description: "Scalable architecture designed for reliability and demanding workloads.",
  },
];

export default function WhyRubiCoreSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            The Enterprise Advantage: Security, Control, and Performance.
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            RubiCore stands apart by focusing exclusively on the demands of the
            enterprise, delivering a platform that is powerful, flexible, and
            trustworthy.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item) => (
            <div
              key={item.title}
              className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
