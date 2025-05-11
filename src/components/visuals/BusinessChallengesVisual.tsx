"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Database, 
  GitBranch, 
  Network, 
  FileWarning,
  Lock,
  Unlink,
  Workflow,
  Layers 
} from "lucide-react";

interface BusinessChallengeVisualProps {
  className?: string;
}

interface ChallengeItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ChallengeVisualComponent: React.FC<BusinessChallengeVisualProps> = ({ className }) => {
  const challenges: ChallengeItem[] = [
    {
      icon: <GitBranch className="h-5 w-5 text-amber-500" />,
      title: "Tangled Processes",
      description: "Complex workflows with redundant steps causing delays and inefficiencies"
    },
    {
      icon: <Database className="h-5 w-5 text-blue-500" />,
      title: "Data Silos",
      description: "Isolated information systems preventing cross-departmental collaboration"
    },
    {
      icon: <Network className="h-5 w-5 text-purple-500" />,
      title: "Integration Gaps",
      description: "Disconnected systems requiring manual data transfer and reconciliation"
    },
    {
      icon: <FileWarning className="h-5 w-5 text-red-500" />,
      title: "Compliance Risks",
      description: "Difficulty maintaining regulatory compliance across fragmented systems"
    },
    {
      icon: <Lock className="h-5 w-5 text-emerald-500" />,
      title: "Security Vulnerabilities",
      description: "Inconsistent security protocols across disparate business systems"
    },
    {
      icon: <Unlink className="h-5 w-5 text-orange-500" />,
      title: "Broken Communication",
      description: "Information bottlenecks causing delays and misunderstandings"
    },
    {
      icon: <Workflow className="h-5 w-5 text-indigo-500" />,
      title: "Process Inefficiencies",
      description: "Manual workarounds and redundant tasks wasting valuable resources"
    },
    {
      icon: <Layers className="h-5 w-5 text-teal-500" />,
      title: "Legacy System Burden",
      description: "Outdated technology limiting innovation and business agility"
    }
  ];

  // We only want to show a few key challenges in the context of the ChallengeSolutionSection's layout
  // const displayedChallenges = challenges.slice(0, 2); // Display first 2 for a 2-column layout within the section

  return (
    <div className={`w-full mx-auto ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {challenges.map((challenge, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full" // Ensure motion.div takes full height for card
          >
            <Card className="h-full overflow-hidden border-destructive/20 bg-destructive/5 hover:shadow-md transition-shadow flex flex-col">
              <div className="p-2 md:p-3 flex flex-col items-center flex-grow">
                <div className="mb-1.5 md:mb-2 flex items-center justify-center h-8 w-8 md:h-10 md:w-10 rounded-full bg-background border border-destructive/30 mx-auto">
                  {challenge.icon}
                </div>
                <h3 className="text-sm font-semibold text-center text-destructive/80 mb-1">{challenge.title}</h3>
                <Separator className="my-1 md:my-1.5 bg-destructive/20" />
                <p className="text-xs text-destructive/60 text-center flex-grow">{challenge.description}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const BusinessChallengesVisual: React.FC<BusinessChallengeVisualProps> = ({className}) => {
  return <ChallengeVisualComponent className={className} />;
};

export default BusinessChallengesVisual;
