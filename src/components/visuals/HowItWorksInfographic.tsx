"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepVisual {
  number: number;
  title: string;
  // Description is handled by the main section, not this visual component
}

interface HowItWorksVisualProps {
  steps: StepVisual[];
  className?: string;
  initialActiveStep?: number; // Renamed from activeStep for clarity
}

const HowItWorksVisualComponent: React.FC<HowItWorksVisualProps> = ({
  steps,
  className,
}) => {

  return (
    <div className={cn("w-full max-w-5xl mx-auto px-4 py-2 md:py-4", className)}>
      <div className="relative">
        {/* Progress Line - always full for static display */}
        <div className="absolute top-10 left-0 right-0 h-1 bg-muted">
          <div 
            className="h-full bg-primary transition-all duration-500"
            style={{ width: `100%` }} // Always full
          />
        </div>

        {/* Steps */}
        <div className="flex justify-between relative">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center space-y-2 md:space-y-3 relative"
            >
              <motion.div
                className={cn(
                  "w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-300 border-2",
                  // All steps considered "active" or "done" for static visual
                  "bg-primary border-primary text-primary-foreground" 
                )}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Show checkmark if not the last step, number for last, or always number */}
                {index < steps.length -1 ? ( // Or a different logic for "current" step if interactive
                   <CheckIcon className="w-6 h-6 md:w-8 md:h-8" />
                ) : (
                   <span className="text-lg md:text-xl font-bold">{step.number}</span>
                )}
              </motion.div>

              <div className="text-center max-w-[100px] md:max-w-[150px]">
                <h3 className={cn(
                  "font-semibold text-xs md:text-sm transition-colors",
                  "text-foreground" // All titles active color
                )}>
                  {step.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        {/* Removed Step Details section to keep this purely visual */}
      </div>
    </div>
  );
};

export const HowItWorksInfographic: React.FC<HowItWorksVisualProps> = ({ steps, className }) => {
  const visualSteps = steps.map(s => ({ number: s.number, title: s.title }));
  return <HowItWorksVisualComponent steps={visualSteps} className={className} />;
};

export default HowItWorksInfographic;
