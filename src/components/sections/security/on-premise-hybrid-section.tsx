import { Server, Combine, CheckSquare, ShieldCheck, DatabaseZap, Cloud } from "lucide-react"; // Example icons

const benefits = [
  {
    icon: Server,
    title: "Maximum Data & Model Sovereignty & Control",
    description: "All data, computations, and AI models can remain in-house or within your designated secure zones.",
  },
  {
    icon: ShieldCheck,
    title: "Reduced Attack Surface & Enhanced Security Posture",
    description: "Minimized external dependencies for core operations.",
  },
  {
    icon: CheckSquare,
    title: "Simplified & Verifiable Compliance",
    description: "Aligns with strict data regulations, audit requirements, and supports industry-specific certifications (e.g., working towards FedRAMP, HITRUST).",
  },
  {
    icon: Combine,
    title: "Flexible Hybrid & Edge Architectures",
    description: "Optimize for performance, cost, and compliance by strategically placing components.",
  },
  {
    icon: DatabaseZap, // Consider a more specific icon for "Model Control" if available
    title: "Control Over AI Models & Intellectual Property",
    description: "Run open-source or proprietary models on-prem, restrict cloud model access, and protect your sensitive IP developed through AI.",
  },
  {
    icon: Cloud, // Placeholder for Resilience
    title: "Resilience & Business Continuity",
    description: "Architectures designed for high availability and disaster recovery.",
  },
];

export default function OnPremiseHybridSection() {
  return (
    <section className="py-16 bg-muted/20 dark:bg-gray-800/20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Your Data, Your Infrastructure, Your AI Models, Your Rules – Deployed Anywhere.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            For organizations demanding maximum control over data residency, privacy, AI model management, and security, RubiCore offers <strong>full on-premise deployment</strong> and <strong>private cloud options</strong>. Install and run the entire platform within your own data centers or trusted private cloud – ensuring data and models never leave your governed environment. This provides unparalleled control, simplifying compliance with regulations like GDPR, HIPAA, CCPA, and supporting data localization mandates.
            Alternatively, leverage our <strong>secure, certified public cloud offerings</strong> or a <strong>flexible hybrid model</strong> to balance control with cloud-based scale and innovation (e.g., keep sensitive data and custom models on-prem while allowing agents to securely leverage vetted cloud AI services via encrypted channels). Support for <strong>edge deployments</strong> allows specific agents to run closer to data sources or where low-latency decisions are critical. No matter the model, <strong>you decide where your data lives, which models are used (including private/local LLMs), and how everything is processed and secured.</strong>
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex items-start">
              <div className="flex-shrink-0">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-1 text-base text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
            <div className="w-full max-w-2xl h-64 bg-muted/30 rounded-lg flex items-center justify-center p-4 border border-dashed">
                <p className="text-muted-foreground text-center">[Visual: Data center graphic, private cloud icon, public cloud icon (with security attestations), hybrid connections, and an edge device icon, all interconnected securely.]</p>
            </div>
        </div>
      </div>
    </section>
  );
}
