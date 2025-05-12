import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CodeIcon, ArrowRightIcon } from 'lucide-react';

export const McpDeveloperCtaSection: React.FC = () => {
  return (
    <section id="mcp-developer-cta" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6"> {/* Added mx-auto */}
        <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 lg:p-16 text-center shadow-lg">
          <div className="flex justify-center mb-6">
            <CodeIcon className="h-12 w-12" />
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Extend RubiCore with MCP
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-xl mx-auto mb-8">
            Unlock new possibilities by building your own MCP servers to integrate custom tools, proprietary data sources, or unique services with the RubiCore platform. Explore our developer resources to get started. (MCP Integration Planned for 2025)
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link href="/developer-hub"> {/* Assuming /developer-hub path */}
              Visit Developer Hub
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
