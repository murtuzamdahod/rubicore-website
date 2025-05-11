import React from 'react';
import { Badge } from "@/components/ui/badge";
import { ShieldCheck } from "lucide-react";
import { cn } from '@/lib/utils';

interface StyledComplianceBadgeProps {
  name: string;
  className?: string;
}

export const StyledComplianceBadge: React.FC<StyledComplianceBadgeProps> = ({ name, className }) => {
  return (
    <Badge variant="outline" className={cn("border-primary/30 text-primary font-medium", className)}>
      <ShieldCheck className="mr-1 h-3.5 w-3.5" />
      {name}
    </Badge>
  );
};
