"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam"; // Use existing
import { Database, Code, Zap, Workflow, Cpu, Server } from "lucide-react";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; size?: string }
>(({ className, children, size = "size-12" }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex items-center justify-center rounded-full border-2 bg-background/80 p-3 shadow-lg backdrop-blur-sm",
        size,
        className,
      )}
    >
      {children}
    </div>
  );
});
Circle.displayName = "Circle";

interface RubiCoreSolutionVisualProps {
  className?: string;
}

const WorkflowVisualComponent: React.FC<RubiCoreSolutionVisualProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null); // Data Ingestion
  const div2Ref = useRef<HTMLDivElement>(null); // Processing
  const div3Ref = useRef<HTMLDivElement>(null); // Integration
  const div4Ref = useRef<HTMLDivElement>(null); // Orchestration (Central)
  const div5Ref = useRef<HTMLDivElement>(null); // Monitoring
  const div6Ref = useRef<HTMLDivElement>(null); // Deployment

  return (
    <div
      className={cn(
        "relative flex h-[300px] md:h-[320px] w-full items-center justify-center overflow-hidden rounded-lg border bg-primary/5 border-primary/20 p-4 md:p-6",
        className
      )}
      ref={containerRef}
    >
      {/* Central Orchestration Node */}
      <Circle ref={div4Ref} className="size-16 border-primary !bg-primary/10" size="size-14 md:size-16">
        <Workflow className="h-7 w-7 md:h-8 md:w-8 text-primary" />
      </Circle>

      {/* Surrounding Nodes - positioned absolutely for better control in smaller space */}
      <div className="absolute" style={{ top: '15%', left: '25%', transform: 'translate(-50%, -50%)' }}>
        <Circle ref={div1Ref} className="border-blue-500/50 bg-blue-500/10" size="size-10 md:size-12">
          <Database className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
        </Circle>
      </div>
      <div className="absolute" style={{ top: '35%', left: '10%', transform: 'translate(-50%, -50%)' }}>
        <Circle ref={div2Ref} className="border-green-500/50 bg-green-500/10" size="size-10 md:size-12">
          <Code className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
        </Circle>
      </div>
      <div className="absolute" style={{ bottom: '15%', left: '25%', transform: 'translate(-50%, -50%)' }}>
        <Circle ref={div3Ref} className="border-yellow-500/50 bg-yellow-500/10" size="size-10 md:size-12">
          <Zap className="h-5 w-5 md:h-6 md:w-6 text-yellow-600" />
        </Circle>
      </div>
      <div className="absolute" style={{ top: '35%', right: '10%', transform: 'translate(50%, -50%)' }}>
        <Circle ref={div5Ref} className="border-purple-500/50 bg-purple-500/10" size="size-10 md:size-12">
          <Cpu className="h-5 w-5 md:h-6 md:w-6 text-purple-600" />
        </Circle>
      </div>
      <div className="absolute" style={{ bottom: '15%', right: '25%', transform: 'translate(50%, -50%)' }}>
        <Circle ref={div6Ref} className="border-orange-500/50 bg-orange-500/10" size="size-10 md:size-12">
          <Server className="h-5 w-5 md:h-6 md:w-6 text-orange-600" />
        </Circle>
      </div>
      
      <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div4Ref} curvature={-40} gradientStartColor="#3b82f6" gradientStopColor="#8b5cf6" />
      <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div4Ref} curvature={-20} gradientStartColor="#22c55e" gradientStopColor="#8b5cf6" />
      <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div4Ref} curvature={40} gradientStartColor="#eab308" gradientStopColor="#8b5cf6" />
      <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div4Ref} curvature={20} reverse gradientStartColor="#9333ea" gradientStopColor="#8b5cf6" />
      <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div4Ref} curvature={-40} reverse gradientStartColor="#f97316" gradientStopColor="#8b5cf6" />
    </div>
  );
};

export const RubiCoreSolutionVisual: React.FC<RubiCoreSolutionVisualProps> = ({className}) => {
  return <WorkflowVisualComponent className={className} />;
};

export default RubiCoreSolutionVisual;
