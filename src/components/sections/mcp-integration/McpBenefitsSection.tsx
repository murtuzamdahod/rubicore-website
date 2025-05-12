import React from 'react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { ZapIcon, SettingsIcon, InfinityIcon, BrainCircuitIcon, PuzzleIcon, ShieldCheckIcon } from 'lucide-react'; // Example icons

export const McpBenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <ZapIcon className="h-8 w-8 text-primary mb-4" />,
      title: 'Dynamic Tool Utilization',
      description: 'Agents can discover and use the right tools at runtime, adapting to changing needs and available services without manual reconfiguration.',
    },
    {
      icon: <SettingsIcon className="h-8 w-8 text-primary mb-4" />,
      title: 'Reduced Integration Effort',
      description: 'Standardized protocols significantly lower the complexity and time required to connect AI agents to diverse enterprise systems and APIs.',
    },
    {
      icon: <InfinityIcon className="h-8 w-8 text-primary mb-4" />,
      title: 'Future-Proofing',
      description: 'Easily incorporate new tools, services, or data sources as they become available, ensuring your AI ecosystem remains adaptable and up-to-date.',
    },
    {
      icon: <BrainCircuitIcon className="h-8 w-8 text-primary mb-4" />,
      title: 'Enhanced Agent Capabilities',
      description: 'Access to real-time data and a wider range of tools empowers agents to perform more complex tasks and make more informed decisions.',
    },
    {
      icon: <PuzzleIcon className="h-8 w-8 text-primary mb-4" />,
      title: 'Composable AI Ecosystem',
      description: 'Build modular AI solutions by combining agents and services from different providers that adhere to the MCP standard.',
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8 text-primary mb-4" />,
      title: 'Improved Security & Governance',
      description: 'MCP facilitates granular, user-approved access control and centralized auditing for all agent-tool interactions.',
    },
  ];

  return (
    <section id="mcp-benefits" className="py-16 md:py-24 lg:py-32 bg-muted/40">
      <div className="container mx-auto px-4 md:px-6"> {/* Added mx-auto */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Why MCP Matters for Your Enterprise AI
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Integrating with the Model Context Protocol unlocks significant advantages for building adaptive, scalable, and secure AI solutions.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center p-6">
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <CardTitle className="text-xl font-semibold mb-2">{benefit.title}</CardTitle>
              <CardContent className="text-muted-foreground">
                {benefit.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
