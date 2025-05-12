import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ServerIcon, WrenchIcon, DatabaseIcon, SearchIcon, Share2Icon } from 'lucide-react'; // Example icons

export const McpCoreConceptsSection: React.FC = () => {
  const concepts = [
    {
      icon: <ServerIcon className="h-8 w-8 text-primary" />,
      title: 'MCP Servers',
      description: 'Secure gateways exposing enterprise systems or external services. They act as intermediaries, managing access and providing standardized capabilities.',
    },
    {
      icon: <WrenchIcon className="h-8 w-8 text-primary" />,
      title: 'Tools',
      description: 'Executable functions offered by servers, like API calls or database queries. Agents can invoke these tools to perform actions.',
    },
    {
      icon: <DatabaseIcon className="h-8 w-8 text-primary" />,
      title: 'Resources',
      description: 'Structured data streams provided by servers, such as real-time feeds or records. Agents access resources to gather information.',
    },
    {
      icon: <SearchIcon className="h-8 w-8 text-primary" />,
      title: 'Dynamic Discovery',
      description: 'The ability for AI agents (MCP clients) to automatically query servers, list available tools/resources, and understand how to use them.',
    },
    {
      icon: <Share2Icon className="h-8 w-8 text-primary" />,
      title: 'Context Sharing',
      description: 'Enables the enrichment of an agent\'s understanding by securely injecting relevant data from connected servers in real-time during interactions.',
    },
  ];

  return (
    <section id="mcp-core-concepts" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6"> {/* Added mx-auto */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Understanding the Model Context Protocol
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            MCP standardizes how AI agents interact with external systems through a few key components, enabling secure and adaptive integration.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {concepts.map((concept, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                {concept.icon}
                <CardTitle className="text-xl font-semibold">{concept.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{concept.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
           <Card className="sm:col-span-2 lg:col-span-1 lg:row-start-2 flex flex-col items-center justify-center bg-muted/40">
             <CardHeader>
               <CardTitle className="text-center">MCP Interaction Flow</CardTitle>
             </CardHeader>
             <CardContent className="flex items-center justify-center h-full">
               <p className="text-muted-foreground text-center p-4">[Visual Placeholder: Diagram illustrating Client-Server interaction, Discovery, Tool/Resource use]</p>
             </CardContent>
           </Card>
        </div>
      </div>
    </section>
  );
};
