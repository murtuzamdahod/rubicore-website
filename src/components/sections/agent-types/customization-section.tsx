import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Puzzle } from "lucide-react"; // Example Icon
import Link from "next/link";
import { FeatureStatusBadge } from "@/components/ui/feature-status-badge"; // Import the badge

export function AgentCustomizationSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto max-w-screen-lg px-4 md:px-8">
        <div className="text-center mb-10 md:mb-12">
          <Puzzle className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Build Your Own Agent – Tailored to Your Needs
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-center">
            While RubiCore offers many ready-to-use agents, you can create custom agents from scratch or by combining capabilities. Our Low-Code Agent Studio and SDK allow you to define an agent’s <strong>role</strong>, its available <strong>tools/actions</strong>, and its workflow in responding to tasks. For instance, if you need an “Expense Report Auditor” agent: you could equip it with access to expense submissions (Excel or PDF), give it rules for policy compliance, and integrate it with your approval system. In RubiCore, this is done through a guided wizard – no heavy coding required (though developers can use Python for fine-tuning logic if desired).
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-center">
            We’re also fostering a community-driven <strong>Agent Template Marketplace</strong> <FeatureStatusBadge status="Coming Soon" className="ml-2"/> where you can share and acquire agent blueprints created by other users and partners – accelerating development and promoting best practices.
          </p>
          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/platform/agent-types#custom-agent-builder">Explore the Agent Library & Builder</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
