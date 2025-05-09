"use client";

import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

const CircleNode = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; size?: "small" | "medium" | "large" }
>(({ className, children, size = "medium" }, ref) => {
  const sizeClasses = {
    small: "size-10 p-2",
    medium: "size-12 p-3",
    large: "size-16 p-4",
  };
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex items-center justify-center rounded-full border-2 bg-white dark:bg-gray-800 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] dark:shadow-[0_0_20px_-12px_rgba(255,255,255,0.2)]",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </div>
  );
});

CircleNode.displayName = "CircleNode";

export { CircleNode };
