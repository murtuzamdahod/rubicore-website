import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Cloud, Combine, ContainerIcon, RefreshCw, CloudCog, Router, Globe } from "lucide-react"; // Added CloudCog, Router, Globe
import Link from "next/link";

const deploymentOptions = [
  {
    title: "Full On-Premise",
    description: "Install the entire RubiCore platform within your data centers or on air-gapped networks for maximum control, security, and data sovereignty. Ideal for highly regulated industries.",
    icon: Server,
  },
  {
    title: "Private Cloud (VPC)",
    description: "Deploy into your existing virtual private cloud environments on AWS, Azure, GCP, or other providers, maintaining network isolation and control.",
    icon: CloudCog, // Icon for Private Cloud
  },
  {
    title: "Managed Public Cloud",
    description: "A secure, multi-tenant or single-tenant managed RubiCore instance, handling uptime, scaling, and updates, allowing you to focus on building and deploying agents.",
    icon: Cloud,
  },
  {
    title: "Hybrid Model",
    description: "Strategically combine on-premise/private cloud components (e.g., for sensitive data processing, custom model hosting) with cloud-based services through secure, encrypted connections.",
    icon: Combine,
  },
  {
    title: "Edge Deployment",
    description: "Deploy lightweight agent runtimes or specific specialized agents to edge devices or local servers for low-latency processing, offline capabilities, or localized data interaction. [NEW - capabilities Coming Soon]",
    icon: Router, // Icon for Edge
  },
  {
    title: "Kubernetes Native",
    description: "Designed for and deployable on Kubernetes clusters (EKS, AKS, GKE, OpenShift, or self-managed K8s), leveraging Helm charts for easy installation, configuration, and management. Supports auto-scaling.",
    icon: ContainerIcon,
  },
  {
    title: "Global & Regional Deployment",
    description: "Support for deploying in specific geographic regions to meet data residency requirements and minimize latency.",
    icon: Globe, // Icon for Global
  },
  {
    title: "Continuous Delivery & Updates",
    description: "Streamlined update processes for both cloud and on-premise deployments, ensuring access to the latest features, performance improvements, and security patches with minimal disruption.",
    icon: RefreshCw,
  },
];

export function DeploymentArchitectureSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-ruby sm:text-4xl">
            Deploy Your Way, Scale with Confidence: On-Premise, Cloud, Hybrid, and Edge.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            RubiCore’s containerized, microservices-based architecture offers unparalleled deployment flexibility and scalability:
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
          {/* Updated CTA text and link target (assuming /contact handles sales inquiries) */}
          <Button asChild size="lg">
            <Link href="/contact?subject=Deployment Needs">Discuss Your Deployment Needs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
