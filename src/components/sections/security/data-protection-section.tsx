import { Lock, EyeOff, Globe, FileCheck2, ShieldQuestion, Activity, DatabaseBackup, ShieldBan, ShieldCheck, ShieldAlert, CheckSquare } from "lucide-react"; // Example icons
import { Button } from "@/components/ui/button";
import Link from "next/link";

const dataProtectionFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description:
      "All data is encrypted in transit (TLS 1.3+) and at rest (AES-256) with industry-standard protocols. Support for confidential computing principles for encrypting data while in use for select sensitive operations.",
  },
  {
    icon: EyeOff,
    title: "PII Discovery, Masking & Redaction",
    description:
      "Automated tools to identify, classify, and protect personally identifiable information (PII) and other sensitive data within datasets, prompts, and agent responses.",
  },
  {
    icon: Globe, // Re-using Globe for Data Minimization
    title: "Data Minimization & Purpose Limitation",
    description:
      "Tools and guidance to help adhere to principles of collecting and using only necessary data for defined agent tasks.",
  },
  {
    icon: Globe,
    title: "Data Residency & Sovereignty Controls",
    description:
      "Choose where your data (including logs and AI model outputs) is stored and processed to meet local regulations and organizational policies, with complete EU-hosted options available.",
  },
  {
    icon: ShieldCheck, // Using ShieldCheck as a generic icon
    title: "Your Data Remains Yours",
    description:
      "RubiCore never uses your proprietary data to train its core models or for any other purpose without your explicit consent and control.",
  },
  {
    icon: ShieldQuestion, // Using ShieldQuestion for XAI
    title: "Explainable AI (XAI) & Transparency",
    description:
      "Integrated tools and methodologies (e.g., LIME, SHAP for compatible models, decision tree visualizations) to provide insights into how agents make decisions or arrive at conclusions. Clear documentation of agent logic and data sources.",
  },
  {
    icon: ShieldBan, // Using ShieldBan for Bias Detection
    title: "Bias Detection & Mitigation",
    description:
      "Tools to help identify potential biases in training data, agent behavior, and model outputs, along with strategies to mitigate unfair bias and promote equitable outcomes.",
  },
  {
    icon: Activity, // Using Activity for Ethical AI Framework
    title: "Ethical AI Framework & Governance",
    description:
      "RubiCore provides a framework and tools to help implement and enforce your organization's ethical AI principles, including configurable guardrails, review processes for high-risk agents, and support for \"Constitutional AI\" approaches.",
  },
  {
    icon: FileCheck2, // Re-using FileCheck2 for Data Lineage
    title: "Data Lineage & Traceability",
    description:
      "Track the origin, transformations, and usage of data throughout the AI lifecycle, crucial for audits, debugging, and building trust.",
  },
  {
    icon: DatabaseBackup,
    title: "Automatic Data Backup",
    description:
      "Enterprise-grade backup protocols ensure all data users share is backed up and maintained for a configurable retention period.",
  },
  {
    icon: ShieldAlert, // Using ShieldAlert for Breach Handling
    title: "Comprehensive Breach Handling",
    description:
      "Well-defined incident response procedures and notification protocols ensure rapid containment and transparent communication in the event of a security incident.",
  },
  {
    icon: CheckSquare, // Using CheckSquare for Security Testing
    title: "Regular Security Testing",
    description:
      "Continuous penetration testing, vulnerability scanning, and security assessments conducted by independent third parties to validate our security controls.",
  },
  {
    icon: FileCheck2,
    title: "Certifications & Standards Adherence",
    description:
      "SOC 2 Type II certified, GDPR compliant, HIPAA compliant, and ISO 27001 certified, with additional certifications in progress. Designed to support customers in meeting industry-specific regulations and standards like CCPA, PCI DSS, FedRAMP, and HITRUST.",
  },
];

export default function DataProtectionSection() {
  return (
    <section className="py-16 bg-background sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
            Protecting Your Data, Ensuring Privacy, and Promoting Ethical AI at Every Step.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            RubiCore implements enterprise-grade security controls, privacy-enhancing technologies (PETs), and ethical AI safeguards:
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"> {/* Adjusted for more items */}
          {dataProtectionFeatures.map((feature) => (
            <div
              key={feature.title}
              className="bg-muted/20 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex"
            >
              <div className="flex-shrink-0 mr-6">
                <feature.icon className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-base text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/resources/security-whitepaper">Download our Security & Responsible AI Whitepaper</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
