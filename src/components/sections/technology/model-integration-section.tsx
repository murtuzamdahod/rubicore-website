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
    description: "Leverage models from Hugging Face, Llama series, Mixtral, Falcon, etc., deployable on your infrastructure or within RubiCore.",
    icon: Share, // Using Share for open-source
  },
  {
    title: "Custom & Fine-Tuned Models (BYOM)",
    description: "Bring Your Own Model or utilize RubiCore’s capabilities (or partner integrations) to fine-tune models on your specific data.",
    icon: Settings2,
  },
  {
    title: "Secure Credential Management",
    description: "For accessing model APIs.",
    icon: LockKeyhole,
  },
  {
    title: "Prompt Engineering & Management Suite",
    description: "Tools for crafting, versioning, and optimizing prompts.",
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
    description: "Track latency, token usage, and output quality.",
    icon: BarChart2,
  },
  {
    title: "Cost Optimization",
    description: "Tools to select cost-effective models for specific tasks and monitor overall LLM spend.",
    icon: Settings2, // Re-using Settings2 for optimization
  },
  {
    title: "Local/Private LLM Hosting Support",
    description: "Facilitate the deployment and management of LLMs entirely within your on-premise or private cloud environment.",
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
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl mb-4">
              Leverage Any LLM, Securely, Responsibly, and Efficiently.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              RubiCore embraces <strong>true model agnosticism</strong> and <strong>multi-model strategies</strong> for maximum flexibility, performance, and future-proofing. Seamlessly integrate with leading proprietary LLMs, open-source models, or bring your own custom & fine-tuned models.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our architecture allows you to <strong>assign different models to different agents or even different steps within an agent&apos;s workflow</strong>, based on cost, performance, and capability requirements. All model interactions are managed within RubiCore’s governance framework. This flexible, governed, and optimized approach ensures you get the best of all AI models while maintaining control, compliance, and cost-effectiveness.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {modelIntegrationFeatures.map((feature) => (
                <div key={feature.title} className="flex items-start space-x-3">
                  <feature.icon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
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
