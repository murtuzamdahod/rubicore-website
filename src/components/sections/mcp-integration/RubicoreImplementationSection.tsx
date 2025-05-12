import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { RubiCoreLogo } from '@/components/ui/rubicore-logo'; // Assuming a logo component exists
import { ArrowRightLeftIcon, LockIcon } from 'lucide-react';

export const RubicoreImplementationSection: React.FC = () => {
  return (
    <section id="rubicore-implementation" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6"> {/* Added mx-auto */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            RubiCore & MCP: Seamless Integration, Enterprise Control
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            RubiCore is designed to natively leverage the Model Context Protocol (Planned for 2025), acting as both a powerful MCP client and potentially an MCP server, all within our secure, governed framework.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-start">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
              <ArrowRightLeftIcon className="h-8 w-8 text-primary" />
              <CardTitle>Dual Role Capability</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                RubiCore agents act as MCP clients, dynamically discovering and utilizing external tools and resources. We also plan for RubiCore to function as an MCP server, securely exposing specific platform capabilities or agent skills to other compliant systems.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
              <LockIcon className="h-8 w-8 text-primary" />
              <CardTitle>Security & Governance</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                All MCP interactions initiated by or directed to RubiCore agents are subject to our robust security model, including RBAC, audit logging, and policy enforcement, ensuring secure and compliant tool usage.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="md:col-span-2 lg:col-span-1 bg-muted/40">
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
              <RubiCoreLogo className="h-8 w-8" /> {/* Adjust size/styling as needed */}
              <CardTitle>Platform Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                MCP capabilities will be seamlessly integrated into the RubiCore Agent Studio and Orchestration Engine, allowing developers and designers to easily incorporate dynamic external tools into agent workflows. (Planned for 2025)
              </CardDescription>
               <div className="mt-4 flex items-center justify-center h-32">
                 <p className="text-muted-foreground text-center p-4">[Visual Placeholder: Diagram showing MCP integrated within RubiCore Architecture]</p>
               </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
