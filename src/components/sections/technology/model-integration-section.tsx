import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, LockKeyhole, Settings2, Share } from "lucide-react"; // Example icons

const modelIntegrationFeatures = [
  {
    title: "Broad LLM Support",
    description: "Connectors for OpenAI, Anthropic, Google, Azure OpenAI, and more.",
    icon: Cpu,
  },
  {
    title: "Pluggable Model Adapter",
    description: "Easily add support for new providers or on-prem model servers.",
    icon: Settings2,
  },
  {
    title: "Centralized Model Management",
    description: "Choose and update models per agent/task without redeploying agents.",
    icon: Share, // Using Share as a metaphor for distribution/management
  },
  {
    title: "Governed Usage Policies",
    description: "Define data handling rules (e.g., which data can go to external APIs vs. internal models).",
    icon: LockKeyhole,
  },
];

export function ModelIntegrationSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl mb-4">
              Leverage Any LLM, Securely and Responsibly.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              RubiCore embraces <strong>model agnosticism</strong> for maximum flexibility and future-proofing. Seamlessly integrate with leading large language models from providers like <strong>OpenAI (GPT-4, etc.)</strong>, <strong>Anthropic (Claude)</strong>, <strong>Google (PaLM/Gemini)</strong> – or leverage open-source models (Llama 2, etc.) on your own infrastructure. Our architecture allows you to <strong>bring your own models</strong> or connect to external ones via secure API, without changing your agent logic.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Crucially, all model interactions are managed within RubiCore’s governance framework: prompts and responses can be logged (or encrypted) as needed, and you can impose rules (e.g., mask sensitive data before sending to an external API). This means you get the benefit of the best AI models on the market while <strong>maintaining control and compliance</strong>.
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
            {/* Placeholder for Diagram showing RubiCore connecting to various LLM providers */}
            <Card className="w-full max-w-lg bg-muted/40 border-dashed">
              <CardHeader>
                <CardTitle className="text-center text-muted-foreground">Visual Placeholder</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center h-80">
                <Cpu className="w-16 h-16 text-primary mb-2" />
                <div className="flex space-x-2 mb-4">
                    <Badge variant="secondary">OpenAI</Badge>
                    <Badge variant="secondary">Anthropic</Badge>
                    <Badge variant="secondary">Google</Badge>
                </div>
                <p className="text-muted-foreground text-center">LLM providers connecting through a governance layer</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
