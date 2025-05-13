import { ShieldCheck, Cog, Users, CheckSquare, Zap, RefreshCw, Handshake } from "lucide-react"; // Updated icons

const differentiators = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-ruby-600 dark:text-ruby-500" />,
    title: "Unparalleled Security, Control & Deployment Flexibility",
    description: "Robust On-Premise, Private Cloud, Hybrid, and Edge (capabilities Coming Soon) options for maximum data sovereignty, model control, and compliance. Security is architected in, not an afterthought.",
  },
  {
    icon: <Users className="w-10 h-10 text-ruby-600 dark:text-ruby-500" />,
    title: "Sophisticated Multi-Agent Orchestration & Human-AI Collaboration",
    description: "Go beyond single tasks to automate and optimize complex, multi-agent, cross-functional workflows with seamless human-agent teaming (Advanced collaboration frameworks Planned for 2025, advanced Human-AI teaming interfaces Planned for 2025).",
  },
  {
    icon: <Cog className="w-10 h-10 text-ruby-600 dark:text-ruby-500" />,
    title: "Deep Customization & Extensibility",
    description: "Build, adapt, and extend agents and tools tailored precisely to your unique business processes with our intuitive Low-Code Studio and powerful Pro-Code SDKs.",
  },
  {
    icon: <CheckSquare className="w-10 h-10 text-ruby-600 dark:text-ruby-500" />,
    title: "Built-in Governance, XAI & Ethical AI",
    description: "Operate responsibly with integrated security, immutable audit trails, granular RBAC, and a comprehensive suite of tools for explainability, bias mitigation, and ethical alignment (Advanced XAI and Ethical AI frameworks Planned for 2025).",
  },
  {
    icon: <RefreshCw className="w-10 h-10 text-ruby-600 dark:text-ruby-500" />,
    title: "Continuous Learning & Adaptive Performance",
    description: "Deploy agents that learn from experience, user feedback (RLHF - Planned for 2025), and changing environments to continuously improve their effectiveness and efficiency.",
  },
  {
    icon: <Zap className="w-10 h-10 text-ruby-600 dark:text-ruby-500" />,
    title: "Enterprise-Grade Performance & Scalability",
    description: "Architected for reliability, high availability, and demanding workloads, ensuring your AI workforce can scale with your business.",
  },
  {
    icon: <Handshake className="w-10 h-10 text-ruby-600 dark:text-ruby-500" />,
    title: "Dedicated Partnership & Support",
    description: "From strategic guidance to technical expertise, we partner with you to ensure your success with Agentic AI.",
  },
];

export default function WhyRubiCoreSection() {
  return (
    <section className="py-16 bg-muted/40 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
            The Enterprise Advantage: Uncompromising Security, Deep Control, Advanced Intelligence, and Responsible Innovation.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            RubiCore stands apart by focusing exclusively on the multifaceted demands of the modern enterprise, delivering a platform that is powerful, flexible, trustworthy, and built for responsible innovation.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"> {/* Adjusted grid for 7 items */}
          {differentiators.map((item) => (
            <div
              key={item.title}
              className="p-6 bg-background rounded-lg shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 h-full" // Added h-full for consistent card height
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-base text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
