import { Milestone, Lightbulb, ShieldCheck } from "lucide-react"; // Example icons

const milestones = [
  {
    year: "2023",
    event: "RubiCore Founded",
    description: "Identifying the critical need for secure, governable, and enterprise-ready Agentic AI.",
    icon: <Lightbulb className="w-6 h-6 text-ruby-500" />,
  },
  {
    year: "2024",
    event: "Platform Launch & First Enterprise Clients",
    description: "Initial product release focusing on core orchestration and specialized agent capabilities.",
    icon: <Milestone className="w-6 h-6 text-ruby-500" />,
  },
  {
    year: "2025",
    event: "On-Premise Deployment & Expanded Integrations",
    description: "Introducing full on-premise support and a growing ecosystem of enterprise connectors.",
    icon: <ShieldCheck className="w-6 h-6 text-ruby-500" />,
  },
  // Add more milestones as the company grows
];

export default function StorySection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Born from Enterprise Needs, Built for Enterprise Trust.
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            RubiCore was created to solve the complex challenges enterprises face
            when trying to leverage AI for meaningful automation. We understood
            that generic AI and simple chatbots weren&apos;t enough. Businesses
            needed a platform that offered robust security, deep control, and
            the ability to orchestrate sophisticated AI agents tailored to their
            unique workflows. Our journey has been driven by a consistent focus
            on these enterprise-critical pillars from day one.
          </p>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Founded in 2023 by a team of AI visionaries and enterprise software veterans, RubiCore was born from a shared belief: that the true potential of artificial intelligence could only be unlocked through a secure, governable, and collaborative framework. We saw the limitations of existing AI solutions – often siloed, difficult to integrate, and lacking the robust security and control necessary for mission-critical enterprise applications. 
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Our journey began with a commitment to building an agentic AI platform from the ground up, focusing on the core tenets of security, scalability, and seamless human-AI teaming. We envisioned a future where intelligent agents could automate complex workflows, provide deep insights, and become trusted collaborators within organizations, all while adhering to the strictest enterprise governance standards. Today, RubiCore is the culmination of that vision, empowering businesses to harness the transformative power of AI with confidence and control. We&apos;re just getting started.
          </p>
        </div>

        {/* Timeline Visual Placeholder */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-0 h-full w-1 bg-gray-200 dark:bg-gray-700 left-1/2 transform -translate-x-1/2 hidden md:block"></div>
          {milestones.map((milestone, index) => (
            <div key={index} className="mb-8 flex md:items-center w-full">
              <div className={`flex md:w-1/2 ${index % 2 === 0 ? 'md:justify-end md:pr-8' : 'md:justify-start md:pl-8 md:flex-row-reverse'}`}>
                <div className={`p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-l-4 md:border-l-0 ${index % 2 === 0 ? 'md:border-r-4 border-ruby-500' : 'md:border-l-4 border-ruby-500'} w-full`}>
                  <div className="flex items-center mb-2">
                    {milestone.icon}
                    <h3 className="ml-3 text-xl font-semibold text-gray-900 dark:text-white">{milestone.event}</h3>
                  </div>
                  <p className="text-sm font-medium text-ruby-600 dark:text-ruby-400 mb-1">{milestone.year}</p>
                  <p className="text-gray-600 dark:text-gray-400">{milestone.description}</p>
                </div>
              </div>
              <div className="hidden md:flex w-10 h-10 bg-ruby-500 rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-4 items-center justify-center text-white">
                {milestones.length - 1 - index + 1} {/* Simple counter for visual differentiation */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
