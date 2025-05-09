import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  // CardDescription, // Removed unused import
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, BookOpen, FileText, Users, Presentation } from "lucide-react"; // Added Presentation

interface ResourceItem {
  icon: React.ElementType;
  type: string;
  title: string;
  link: string;
}

const featuredContent: ResourceItem[] = [
  {
    icon: BookOpen,
    type: "Blog",
    title: "Orchestrating Success: Moving Beyond Task Automation with Governed, Collaborative Agentic AI",
    link: "/resources/blog/orchestrating-success-collaborative", 
  },
  {
    icon: FileText,
    type: "Whitepaper",
    title: "The ROI of Trust: Achieving Value with Secure, Explainable, On-Premise AI Agents",
    link: "/resources/whitepapers/roi-of-trust-xai", 
  },
  {
    icon: Users,
    type: "Case Study",
    title: "How a Global Financial Institution Enhanced Fraud Detection and Compliance with RubiCore's Multi-Agent System",
    link: "/resources/case-studies/financial-institution-fraud-detection", 
  },
  {
    icon: Presentation,
    type: "Webinar",
    title: "Human-Agent Teaming: Best Practices for Collaborative Intelligence in the Enterprise",
    link: "/resources/webinars/human-agent-teaming",
  },
  {
    icon: BookOpen, // Using BookOpen again for another blog post
    type: "Blog",
    title: "Multi-Agent Collaboration & Swarm Intelligence: The Future of Enterprise AI in 2025",
    link: "/resources/blog/multi-agent-collaboration-swarm",
  },
];

interface ResourcesInsightsSectionProps {
  className?: string;
}

export function ResourcesInsightsSection({
  className,
}: ResourcesInsightsSectionProps) {
  const headline = "Insights on Secure, Ethical & Effective Enterprise Agentic AI";
  const cta = {
    text: "Explore All Resources",
    href: "/resources", 
  };

  return (
    <section
      className={cn("bg-muted/30 text-foreground py-16 md:py-24", className)}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {headline}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredContent.map((item) => (
            <Card key={item.title} className="flex flex-col bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center text-primary mb-3">
                  <item.icon className="w-6 h-6 mr-2" />
                  <span className="text-sm font-semibold">{item.type}</span>
                </div>
                <CardTitle className="text-xl leading-tight">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                {/* Optional: Add a short excerpt here if available */}
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="text-primary p-0 h-auto">
                  <Link href={item.link}>
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <Button asChild variant="default" size="lg" className="shadow-md">
            <Link href={cta.href}>
              {cta.text} <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
