import React from "react";
import { cn } from "@/lib/utils";

export type MockupProps = React.HTMLAttributes<HTMLDivElement>;

const Mockup = React.forwardRef<HTMLDivElement, MockupProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("bg-muted/50 p-8 rounded-lg shadow-lg", className)} // Basic placeholder styles
      {...props}
    >
      {children || <div className="w-full h-64 bg-muted rounded">{/* Placeholder content */} </div>}
    </div>
  )
);
Mockup.displayName = "Mockup";

export { Mockup };
