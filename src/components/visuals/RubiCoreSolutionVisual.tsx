"use client";

import React, { forwardRef, useRef, RefObject } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { Database, Zap, Workflow, Cpu, ShieldCheck, Rocket } from "lucide-react";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; size?: string; label?: string }
>(({ className, children, size = "size-12", label }, ref) => {
  return (
    <div className="flex flex-col items-center text-center">
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
      {label && <span className="mt-1.5 text-xs text-muted-foreground max-w-[90px]">{label}</span>}
    </div>
  );
});
Circle.displayName = "Circle";

interface RubiCoreSolutionVisualProps {
  className?: string;
}

const WorkflowVisualComponent: React.FC<RubiCoreSolutionVisualProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null); // Unified Data (Top)
  const div2Ref = useRef<HTMLDivElement>(null); // Smart Automation (Top-Right)
  const div3Ref = useRef<HTMLDivElement>(null); // Seamless Integration (Bottom-Right)
  const div4Ref = useRef<HTMLDivElement>(null); // Orchestration (Central)
  const div5Ref = useRef<HTMLDivElement>(null); // Security & Compliance (Top-Left)
  const div6Ref = useRef<HTMLDivElement>(null); // Agile Delivery (Bottom-Left)

  // Pentagon node positions (approximate percentages for top/left)
  // R_percentage = 34%
  // Top: (50%, 16%)
  // Top-Right: (82.33%, 39.5%)
  // Bottom-Right: (70%, 77.5%)
  // Bottom-Left: (30%, 77.5%)
  // Top-Left: (17.67%, 39.5%)

  return (
    <div
      className={cn(
        "relative flex h-[450px] md:h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-primary/5 border-primary/20 p-4 md:p-6",
        className
      )}
      ref={containerRef}
    >
      {/* Central Orchestration Node */}
      <Circle ref={div4Ref} className="size-16 border-primary !bg-primary/10" size="size-14 md:size-16" label="Orchestration">
        <Workflow className="h-7 w-7 md:h-8 md:w-8 text-primary" />
      </Circle>

      {/* Surrounding Nodes - Pentagon Arrangement */}
      {/* 1. Unified Data (Top) */}
      <div className="absolute" style={{ top: '16%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <Circle ref={div1Ref} className="border-blue-500/50 bg-blue-500/10" size="size-10 md:size-12" label="Unified Data">
          <Database className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
        </Circle>
      </div>

      {/* 2. Smart Automation (Top-Right) */}
      <div className="absolute" style={{ top: '39.5%', left: '82.33%', transform: 'translate(-50%, -50%)' }}>
        <Circle ref={div2Ref} className="border-green-500/50 bg-green-500/10" size="size-10 md:size-12" label="Smart Automation">
          <Cpu className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
        </Circle>
      </div>

      {/* 3. Seamless Integration (Bottom-Right) */}
      <div className="absolute" style={{ top: '72.5%', left: '70%', transform: 'translate(-50%, -50%)' }}>
        <Circle ref={div3Ref} className="border-yellow-500/50 bg-yellow-500/10" size="size-10 md:size-12" label="Seamless Integration">
          <Zap className="h-5 w-5 md:h-6 md:w-6 text-yellow-600" />
        </Circle>
      </div>
      
      {/* 4. Agile Delivery (Bottom-Left) */}
      <div className="absolute" style={{ top: '72.5%', left: '30%', transform: 'translate(-50%, -50%)' }}>
        <Circle ref={div6Ref} className="border-orange-500/50 bg-orange-500/10" size="size-10 md:size-12" label="Agile Delivery">
          <Rocket className="h-5 w-5 md:h-6 md:w-6 text-orange-600" />
        </Circle>
      </div>

      {/* 5. Security & Compliance (Top-Left) */}
      <div className="absolute" style={{ top: '39.5%', left: '17.67%', transform: 'translate(-50%, -50%)' }}>
        <Circle ref={div5Ref} className="border-purple-500/50 bg-purple-500/10" size="size-10 md:size-12" label="Security & Compliance">
          <ShieldCheck className="h-5 w-5 md:h-6 md:w-6 text-purple-600" />
        </Circle>
      </div>
      
      {/* Beams connecting to Central Orchestration Node */}
      {/* Unified Data -> Orchestration */}
      <AnimatedBeam containerRef={containerRef as RefObject<HTMLElement>} fromRef={div1Ref as RefObject<HTMLElement>} toRef={div4Ref as RefObject<HTMLElement>} curvature={0} gradientStartColor="#3b82f6" gradientStopColor="#8b5cf6" />
      {/* Smart Automation -> Orchestration */}
      <AnimatedBeam containerRef={containerRef as RefObject<HTMLElement>} fromRef={div2Ref as RefObject<HTMLElement>} toRef={div4Ref as RefObject<HTMLElement>} curvature={25} gradientStartColor="#22c55e" gradientStopColor="#8b5cf6" />
      {/* Seamless Integration -> Orchestration */}
      <AnimatedBeam containerRef={containerRef as RefObject<HTMLElement>} fromRef={div3Ref as RefObject<HTMLElement>} toRef={div4Ref as RefObject<HTMLElement>} curvature={-25} gradientStartColor="#eab308" gradientStopColor="#8b5cf6" />
      
      {/* Orchestration -> Security & Compliance (reverse beam) */}
      <AnimatedBeam containerRef={containerRef as RefObject<HTMLElement>} fromRef={div5Ref as RefObject<HTMLElement>} toRef={div4Ref as RefObject<HTMLElement>} curvature={25} reverse gradientStartColor="#9333ea" gradientStopColor="#8b5cf6" />
      {/* Orchestration -> Agile Delivery (reverse beam) */}
      <AnimatedBeam containerRef={containerRef as RefObject<HTMLElement>} fromRef={div6Ref as RefObject<HTMLElement>} toRef={div4Ref as RefObject<HTMLElement>} curvature={-25} reverse gradientStartColor="#f97316" gradientStopColor="#8b5cf6" />
    </div>
  );
};

export const RubiCoreSolutionVisual: React.FC<RubiCoreSolutionVisualProps> = ({className}) => {
  return <WorkflowVisualComponent className={className} />;
};

export default RubiCoreSolutionVisual;
