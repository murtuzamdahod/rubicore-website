import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { LightbulbIcon, LineChartIcon, Settings2Icon } from 'lucide-react'; // Example icons

export const McpUseCasesSection: React.FC = () => {
  const useCases = [
    {
      icon: <LineChartIcon className="h-8 w-8 text-primary" />,
      title: 'Real-time Financial Data Analysis',
      description: 'A RubiCore Financial Agent could dynamically discover and use an MCP-enabled tool providing real-time stock market data to enhance its analysis and reporting, without needing a pre-built, specific integration.',
    },
    {
      icon: <Settings2Icon className="h-8 w-8 text-primary" />,
      title: 'Adaptive IT Operations',
      description: 'An IT Operations Agent could use MCP to query a newly deployed monitoring system (exposed via an MCP server) to diagnose issues, adapting its troubleshooting steps based on the tools discovered.',
    },
    {
      icon: <LightbulbIcon className="h-8 w-8 text-primary" />,
      title: 'Extending Custom Capabilities',
      description: 'Your internal development team could expose a proprietary algorithm or internal database as an MCP service, allowing authorized RubiCore agents to leverage this unique capability securely.',
    },
  ];

  return (
    <section id="mcp-use-cases" className="py-16 md:py-24 lg:py-32 bg-muted/40">
      <div className="container mx-auto px-4 md:px-6"> {/* Added mx-auto */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            MCP in Action: Potential Use Cases
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            MCP enables powerful, adaptive scenarios by allowing agents to interact dynamically with a wide range of tools and data sources. (Capabilities Planned for 2025)
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                {useCase.icon}
                <CardTitle className="text-xl font-semibold">{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{useCase.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
