"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { motion } from "framer-motion";
import { Brain, ShieldCheck, Search, Database, Settings, Zap, Users } from "lucide-react";

// Define a type for our agent nodes
interface AgentNode {
  id: string;
  name: string;
  icon: React.ReactNode;
  ref: React.RefObject<HTMLDivElement>;
  className?: string;
  size?: "small" | "medium" | "large";
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
}

// Circle node component for agent visualization
const CircleNode = forwardRef<
  HTMLDivElement,
  {
    className?: string;
    children?: React.ReactNode;
    size?: "small" | "medium" | "large";
    label?: string;
  }
>(({ className, children, size = "medium", label }, ref) => {
  const sizeClasses = {
    small: "size-10",
    medium: "size-14",
    large: "size-20",
  };

  return (
    <div className="flex flex-col items-center">
      <motion.div
        ref={ref}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: Math.random() * 0.5
        }}
        className={cn(
          "z-10 flex items-center justify-center rounded-full border-2 bg-background/80 backdrop-blur-sm shadow-lg",
          sizeClasses[size],
          className
        )}
      >
        {children}
      </motion.div>
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ delay: 0.5 + Math.random() * 0.5 }}
          className="mt-2 text-xs text-muted-foreground text-center max-w-[100px] line-clamp-2"
        >
          {label}
        </motion.span>
      )}
    </div>
  );
});
CircleNode.displayName = "CircleNode";

export function HeroInterconnectedVisual() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const nodes: AgentNode[] = [
    { // Node 0: Central Hub
      id: "hub",
      name: "RubiCore Orchestrator",
      icon: <Zap className="size-6 text-ruby-500" />,
      ref: useRef<HTMLDivElement>(null),
      size: "large",
      className: "border-ruby-500 bg-ruby-50/90 shadow-[0_0_15px_rgba(229,62,62,0.3)]",
      position: { top: "50%", left: "50%" }
    },
    { // Node 1: Research (Top-Right Pentagon Point)
      id: "research",
      name: "Deep Research Agent",
      icon: <Search className="size-5 text-blue-500" />,
      ref: useRef<HTMLDivElement>(null),
      size: "medium",
      className: "border-blue-400 bg-blue-50/80",
      position: { top: "38%", left: "80%" }
    },
    { // Node 2: Knowledge (Bottom-Right Pentagon Point)
      id: "knowledge",
      name: "Knowledge Agent (RAG)",
      icon: <Database className="size-5 text-green-500" />,
      ref: useRef<HTMLDivElement>(null),
      size: "medium",
      className: "border-green-400 bg-green-50/80",
      position: { top: "81%", left: "69%" }
    },
    { // Node 3: Code (Top-Left Pentagon Point)
      id: "code",
      name: "Code Intelligence Agent",
      icon: <Brain className="size-5 text-purple-500" />,
      ref: useRef<HTMLDivElement>(null),
      size: "medium",
      className: "border-purple-400 bg-purple-50/80",
      position: { top: "38%", left: "20%" }
    },
    { // Node 4: Process (Bottom-Left Pentagon Point)
      id: "process",
      name: "Process Automation Agent",
      icon: <Settings className="size-5 text-orange-500" />,
      ref: useRef<HTMLDivElement>(null),
      size: "medium",
      className: "border-orange-400 bg-orange-50/80",
      position: { top: "81%", left: "33%" }
    },
    { // Node 5: Users (Top Pentagon Point)
      id: "users",
      name: "User Collaboration",
      icon: <Users className="size-5 text-indigo-500" />,
      ref: useRef<HTMLDivElement>(null),
      size: "medium",
      className: "border-indigo-400 bg-indigo-50/80",
      position: { top: "15%", left: "50%" }
    },
  ];

  const securityLayerRef = useRef<HTMLDivElement>(null);

  const beams = [
    { from: nodes[1].ref, to: nodes[0].ref, curvature: -20, delay: 0.1, duration: 3.5 },
    { from: nodes[2].ref, to: nodes[0].ref, curvature: -20, delay: 0.3, duration: 3.2 },
    { from: nodes[3].ref, to: nodes[0].ref, curvature: 20, delay: 0.5, duration: 3.8 },
    { from: nodes[4].ref, to: nodes[0].ref, curvature: 20, delay: 0.7, duration: 3.4 },
    { from: nodes[5].ref, to: nodes[0].ref, curvature: 0, delay: 0.9, duration: 3.0 },
  ];

  return (
    <div
      className="relative flex h-[500px] w-full max-w-3xl items-center justify-center overflow-hidden rounded-xl border bg-background/80 p-6 md:shadow-xl mx-auto"
      ref={containerRef}
    >
      <div className="absolute inset-0 bg-gradient-radial from-background/0 via-background/0 to-background/80 z-0"></div>
      <motion.div
        ref={securityLayerRef}
        className="absolute inset-2 border-2 border-dashed border-green-500/30 rounded-full pointer-events-none z-0" // Adjusted inset from inset-8 to inset-6
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-green-500/5"
          animate={{
            boxShadow: ['0 0 0px rgba(34, 197, 94, 0.2)', '0 0 15px rgba(34, 197, 94, 0.3)', '0 0 0px rgba(34, 197, 94, 0.2)']
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-3 py-1 rounded-full border border-green-500/30 flex items-center gap-1">
          <ShieldCheck className="size-4 text-green-600" />
          <span className="text-xs text-green-600 font-medium">Enterprise Security</span>
        </div>
      </motion.div>

      {nodes.map((node) => (
        <div
          key={node.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={node.position}
        >
          <CircleNode
            ref={node.ref}
            className={node.className}
            size={node.size}
            label={node.name}
          >
            {node.icon}
          </CircleNode>
        </div>
      ))}

      {beams.map((beam, index) => (
        <AnimatedBeam
          key={index}
          containerRef={containerRef}
          fromRef={beam.from}
          toRef={beam.to}
          curvature={beam.curvature}
          delay={beam.delay}
          duration={beam.duration}
          pathColor="var(--ruby-500)"
          pathWidth={1.5}
          pathOpacity={0.15}
          gradientStartColor="var(--ruby-400)"
          gradientStopColor="var(--ruby-600)"
        />
      ))}

      <motion.div
        className="absolute rounded-full bg-ruby-500/5 z-0"
        style={{
          top: "50%",
          left: "50%",
          width: 120,
          height: 120,
          transform: "translate(-50%, -50%)"
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.p
        className="absolute bottom-[-1rem] left-1/2 -translate-x-1/2 text-xs text-muted-foreground z-10 bg-background/80 px-3 py-1 rounded-full backdrop-blur-sm"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        Interconnected AI Agents Orchestrating Workflows
      </motion.p>
    </div>
  );
}
