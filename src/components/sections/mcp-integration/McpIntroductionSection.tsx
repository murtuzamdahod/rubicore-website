import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const McpIntroductionSection: React.FC = () => {
  return (
    <section id="mcp-introduction" className="py-16 md:py-24 lg:py-32 bg-muted/40">
      <div className="container mx-auto px-4 md:px-6"> {/* Added mx-auto */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl mb-4">
              MCP: Dynamic, Secure Connectivity for Your AI Workforce
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              The Model Context Protocol (MCP) is a vital standard enabling AI agents to securely and dynamically connect with external tools, data sources, and services. It addresses the critical challenge of integrating AI adaptively within complex enterprise environments while maintaining strict governance and control.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              RubiCore leverages MCP (capabilities Planned for 2025) to empower agents with real-time context, the ability to discover and use necessary tools on the fly, and seamless integration into a composable AI ecosystem. This unlocks unprecedented levels of automation, adaptability, and future-proofing for your AI initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="#mcp-core-concepts">Explore Core Concepts</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/platform/integrations">View All Integrations</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            {/* Placeholder for a visual diagram */}
            <Card className="w-full max-w-md bg-background shadow-lg">
              <CardHeader>
                <CardTitle className="text-center">MCP Conceptual Diagram</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center h-64">
                <p className="text-muted-foreground">[Visual Placeholder: Diagram showing RubiCore connecting via MCP to external tools/data]</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
