"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam"; // Use existing
import { Database, Server, Globe, Cpu, Bot, Workflow } from "lucide-react";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; size?: string; label?: string }
>(({ className, children, size = "size-12", label }, ref) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div
        ref={ref}
        className={cn(
          "z-10 flex items-center justify-center rounded-full border-2 bg-background p-3 shadow-lg backdrop-blur-sm",
          size,
          className,
        )}
      >
        {children}
      </div>
      {label && <span className="mt-1.5 text-xs text-muted-foreground max-w-[70px]">{label}</span>}
    </div>
  );
});
Circle.displayName = "Circle";

interface McpInteractionVisualProps {
  className?: string;
}

const McpVisualComponent: React.FC<McpInteractionVisualProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null); // RubiCore
  const enterpriseRef = useRef<HTMLDivElement>(null); // Enterprise Systems
  const apiRef = useRef<HTMLDivElement>(null); // External APIs
  const aiPlatformsRef = useRef<HTMLDivElement>(null); // Other AI Platforms
  const mcpClientRef = useRef<HTMLDivElement>(null); // RubiCore as MCP Client
  const mcpServerRef = useRef<HTMLDivElement>(null); // RubiCore as MCP Server

  return (
    <div
      className={cn(
        "relative flex h-[350px] md:h-[400px] w-full max-w-2xl items-center justify-center overflow-hidden rounded-lg border bg-muted/50 p-6 md:p-8",
        className
      )}
      ref={containerRef}
    >
      {/* Central RubiCore Node */}
      <Circle 
        ref={centerRef} 
        className="!size-16 md:!size-20 border-4 border-primary !bg-primary/10" 
        label="RubiCore MCP Hub"
      >
        <Cpu className="h-7 w-7 md:h-8 md:w-8 text-primary" />
      </Circle>

      {/* Surrounding Nodes - Positioned using absolute positioning for responsiveness */}
      <div className="absolute" style={{ top: '20%', left: '15%', transform: 'translate(-50%, -50%)' }}>
        <Circle ref={enterpriseRef} className="border-blue-500/70 bg-blue-500/10" label="Enterprise Systems">
          <Database className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
        </Circle>
      </div>
      <div className="absolute" style={{ bottom: '20%', left: '15%', transform: 'translate(-50%, -50%)' }}>
        <Circle ref={apiRef} className="border-green-500/70 bg-green-500/10" label="External APIs">
          <Globe className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
        </Circle>
      </div>
      <div className="absolute" style={{ top: '50%', left: '5%', transform: 'translateY(-50%)' }}>
        <Circle ref={mcpClientRef} className="border-purple-500/70 bg-purple-500/10" label="MCP Client Role">
          <Workflow className="h-5 w-5 md:h-6 md:w-6 text-purple-600" />
        </Circle>
      </div>
      
      <div className="absolute" style={{ top: '20%', right: '15%', transform: 'translate(50%, -50%)' }}>
        <Circle ref={aiPlatformsRef} className="border-rose-500/70 bg-rose-500/10" label="Other AI Platforms">
          <Bot className="h-5 w-5 md:h-6 md:w-6 text-rose-600" />
        </Circle>
      </div>
      <div className="absolute" style={{ bottom: '20%', right: '15%', transform: 'translate(50%, -50%)' }}>
        <Circle ref={mcpServerRef} className="border-indigo-500/70 bg-indigo-500/10" label="MCP Server Role">
          <Server className="h-5 w-5 md:h-6 md:w-6 text-indigo-600" />
        </Circle>
      </div>

      {/* Beams */}
      <AnimatedBeam containerRef={containerRef} fromRef={enterpriseRef} toRef={centerRef} curvature={-25} gradientStartColor="#3b82f6" gradientStopColor="#f59e0b" />
      <AnimatedBeam containerRef={containerRef} fromRef={apiRef} toRef={centerRef} curvature={25} gradientStartColor="#22c55e" gradientStopColor="#f59e0b" />
      <AnimatedBeam containerRef={containerRef} fromRef={mcpClientRef} toRef={centerRef} gradientStartColor="#8b5cf6" gradientStopColor="#f59e0b" />
      
      <AnimatedBeam containerRef={containerRef} fromRef={centerRef} toRef={aiPlatformsRef} curvature={-25} reverse gradientStartColor="#f59e0b" gradientStopColor="#e11d48" />
      <AnimatedBeam containerRef={containerRef} fromRef={centerRef} toRef={mcpServerRef} curvature={25} reverse gradientStartColor="#f59e0b" gradientStopColor="#6366f1" />
    </div>
  );
};

export const McpInteractionVisual: React.FC<McpInteractionVisualProps> = ({className}) => {
  return <McpVisualComponent className={className} />;
};

export default McpInteractionVisual;
