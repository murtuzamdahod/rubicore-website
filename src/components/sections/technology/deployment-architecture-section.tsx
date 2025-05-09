import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Cloud, Combine, ContainerIcon, RefreshCw } from "lucide-react"; // Example icons
import Link from "next/link";

const deploymentOptions = [
  {
    title: "Full On-Premise",
    description: "Install the entire platform in your environment for absolute control. Ideal for highly regulated industries.",
    icon: Server,
  },
  {
    title: "Managed Cloud",
    description: "Let us host and manage RubiCore for you in our secure, enterprise-grade cloud.",
    icon: Cloud,
  },
  {
    title: "Hybrid Model",
    description: "Mix and match: e.g., run orchestration in your cloud, call cloud LLMs, or keep core data processing on-prem.",
    icon: Combine,
  },
  {
    title: "Kubernetes Support",
    description: "Deploy RubiCore on Kubernetes clusters using Helm charts for easy integration into existing infrastructure.",
    icon: ContainerIcon,
  },
  {
    title: "Continuous Updates",
    description: "Frequent updates with new features. Seamless for cloud, streamlined for on-prem with versioned releases.",
    icon: RefreshCw,
  },
];

export function DeploymentArchitectureSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Deploy Your Way: On-Premise, Cloud, or Hybrid.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            RubiCore’s containerized architecture offers unparalleled deployment flexibility to meet your IT and compliance needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {deploymentOptions.map((option) => (
            <Card key={option.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-3">
                  <option.icon className="h-8 w-8 text-primary mr-3 flex-shrink-0" />
                  <CardTitle className="text-xl font-semibold">{option.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{option.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/contact?subject=Deployment Options">Discuss Deployment Options</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
