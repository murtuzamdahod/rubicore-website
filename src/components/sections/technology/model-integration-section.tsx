import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, LockKeyhole, Settings2, Share, Database, BarChart2, Wrench, Server } from "lucide-react"; // Example icons

const modelIntegrationFeatures = [
  {
    title: "Leading Proprietary LLMs",
    description: "Secure API connectors for OpenAI (GPT series), Anthropic (Claude series), Google (Gemini series), Cohere, and others.",
    icon: Cpu,
  },
  {
    title: "Open-Source Models",
    description: "Leverage models from Hugging Face&apos;s vast model hub and inference infrastructure for diverse NLP, CV, and audio tasks. Access pre-trained models or deploy fine-tuned custom solutions seamlessly.",
    icon: Share, // Using Share for open-source
  },
  {
    title: "Custom & Fine-Tuned Models (BYOM)",
    description: "Bring Your Own Model (BYOM) or utilize RubiCore’s capabilities (or integrations with partner platforms) to fine-tune models (capabilities Coming Soon) on your specific data.", // Added annotation
    icon: Settings2,
  },
  {
    title: "Secure Credential Management",
    description: "For accessing model APIs.",
    icon: LockKeyhole,
  },
  {
    title: "Prompt Engineering & Management Suite",
    description: "Tools for crafting, versioning, and optimizing prompts. [New - capabilities Coming Soon]", // Added annotation
    icon: Wrench, // Using Wrench for engineering/tools
  },
  {
    title: "Data Governance for Model Interactions",
    description: "Mask sensitive data before sending to external APIs, enforce data residency for prompts and responses.",
    icon: Database, // Using Database for data governance
  },
  {
    title: "Auditability",
    description: "Log all model inputs and outputs (configurable for privacy).",
    icon: FileCheck2, // Placeholder, replace if a better icon exists in lucide for audit
  },
  {
    title: "Model Performance Monitoring",
    description: "Track latency, token usage, and output quality. [New - capabilities Coming Soon]", // Added annotation
    icon: BarChart2,
  },
  {
    title: "Cost Optimization",
    description: "Tools to select cost-effective models for specific tasks and monitor overall LLM spend. [New - capabilities Coming Soon]", // Added annotation
    icon: Settings2, // Re-using Settings2 for optimization
  },
  {
    title: "Local/Private LLM Hosting Support",
    description: "Facilitate the deployment and management of LLMs entirely within your on-premise or private cloud environment. [New - capabilities Coming Soon]", // Added annotation
    icon: Server,
  },
  {
    title: "Amazon SageMaker Integration",
    description: "Build, train, and deploy machine learning models at scale with Amazon SageMaker. From data labeling to model hosting, SageMaker provides a comprehensive suite of tools for the entire ML lifecycle. RubiCore&apos;s architecture is designed to integrate with SageMaker for robust MLOps.",
    icon: Server,
  },
];

// Helper to import FileCheck2 if not already imported by other sections
import { FileCheck2 } from "lucide-react";


export function ModelIntegrationSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-semibold tracking-tight text-primary sm:text-3xl mb-4">
              Leverage Any LLM, Securely, Responsibly, and Efficiently.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              RubiCore embraces <strong>true model agnosticism</strong> and <strong>multi-model strategies</strong> for maximum flexibility, performance, and future-proofing. Seamlessly integrate with:
              <ul className="list-disc list-inside my-2 ml-4 text-sm">
                <li>Leading proprietary LLMs: <strong>OpenAI (GPT series), Anthropic (Claude series), Google (Gemini series), Cohere</strong>, and others via secure API connectors.</li>
                <li>Open-Source Models: Leverage models from <strong>Hugging Face, Llama series, Mixtral, Falcon, etc.</strong>, deployable on your own infrastructure or within RubiCore&apos;s managed environment.</li>
                <li>Custom & Fine-Tuned Models: <strong>Bring Your Own Model (BYOM)</strong> or utilize RubiCore&apos;s capabilities (or integrations with partner platforms) to <strong>fine-tune models (capabilities Coming Soon)</strong> on your specific data for specialized tasks, ensuring IP protection and optimized performance.</li>
              </ul>
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our architecture allows you to <strong>assign different models to different agents or even different steps within an agent&apos;s workflow</strong>, based on cost, performance, and capability requirements. All model interactions are managed within RubiCore&apos;s governance framework: Secure Credential Management, Prompt Engineering Suite, Data Governance, Auditability, Performance Monitoring, Cost Optimization, and Local/Private LLM Hosting Support. This flexible, governed, and optimized approach ensures you get the best of all AI models while maintaining control, compliance, and cost-effectiveness.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {modelIntegrationFeatures.map((feature) => (
                <div key={feature.title} className="flex items-start space-x-3">
                  <feature.icon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center items-center">
            <Card className="w-full max-w-lg bg-muted/40 border-dashed">
              <CardHeader>
                <CardTitle className="text-center text-muted-foreground">Visual Placeholder</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center h-96"> {/* Increased height for more badges */}
                <Cpu className="w-16 h-16 text-primary mb-2" />
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                    <Badge variant="secondary">OpenAI</Badge>
                    <Badge variant="secondary">Anthropic</Badge>
                    <Badge variant="secondary">Google</Badge>
                    <Badge variant="secondary">Cohere</Badge>
                    <Badge variant="secondary">Hugging Face</Badge>
                    <Badge variant="secondary">Llama</Badge>
                    <Badge variant="secondary">Mixtral</Badge>
                    <Badge variant="secondary">Falcon</Badge>
                    <Badge variant="outline">Your Private Model</Badge>
                </div>
                <p className="text-muted-foreground text-center">RubiCore connecting to various LLM providers, open-source models, and local/private models through a governance, security, and optimization layer.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
