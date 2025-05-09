import React from "react";
import { cn } from "@/lib/utils";

export interface GlowProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
  opacity?: number;
  blur?: string;
  size?: string;
}

const Glow = React.forwardRef<HTMLDivElement, GlowProps>(
  (
    {
      className,
      color = "rgba(220, 38, 38, 0.5)", // Default to a ruby-like color
      opacity = 0.5,
      blur = "100px",
      size = "400px",
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(
        "absolute inset-0 pointer-events-none -z-10",
        "bg-no-repeat bg-center",
        className
      )}
      style={{
        backgroundImage: `radial-gradient(circle at center, ${color} 0, transparent 70%)`,
        opacity,
        filter: `blur(${blur})`,
        width: size,
        height: size,
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
      {...props}
    />
  )
);
Glow.displayName = "Glow";

export { Glow };
