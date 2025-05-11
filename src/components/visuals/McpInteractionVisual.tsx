"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import {
  Database as LucideDatabase, // Renamed to avoid conflict if you had a Database icon image
  Globe as LucideGlobe,
  Users as LucideUsers,
  FolderOpen as LucideFolderOpen,
  Briefcase as LucideBriefcase,
  Mail as LucideMail,
  CalendarDays as LucideCalendarDays,
  Folders as LucideFolders,
  Cpu,
} from "lucide-react";
import { OutlookIcon } from "@/components/icons";

// CSS for the heartbeat animation (remains the same)
const HeartbeatAnimationStyle = `
  @keyframes heartbeatGlowAnimation {
    0%, 100% {
      transform: scale(1);
      box-shadow: 0 0 6px 2px var(--glow-color-weak), 0 0 12px 4px var(--glow-color-medium), 0 0 20px 6px var(--glow-color-strong);
    }
    50% {
      transform: scale(1.05);
      box-shadow: 0 0 10px 4px var(--glow-color-weak), 0 0 20px 8px var(--glow-color-medium), 0 0 30px 12px var(--glow-color-strong);
    }
  }
  .animate-heartbeat-glow {
    animation: heartbeatGlowAnimation 2s ease-in-out infinite;
  }
`;

const Circle = forwardRef<
  HTMLDivElement,
  {
    className?: string;
    children?: React.ReactNode; // For Lucide icons or custom SVG components
    iconSrc?: string; // For image-based icons
    iconAlt?: string;
    size?: string;
    label?: string;
    style?: React.CSSProperties;
  }
>(({ className, children, iconSrc, iconAlt, size = "size-12", label, style }, ref) => {
  return (
    <div className="flex flex-col items-center text-center" style={style}>
      <div
        ref={ref}
        className={cn(
          "z-10 flex items-center justify-center rounded-full border-2 bg-background p-3 shadow-lg backdrop-blur-sm",
          size,
          className,
        )}
      >
        {iconSrc ? (
          <img src={iconSrc} alt={iconAlt || label || "icon"} className="h-full w-full object-contain" />
        ) : (
          children
        )}
      </div>
      {label && <span className="mt-1.5 text-xs text-muted-foreground max-w-[100px]">{label}</span>}
    </div>
  );
});
Circle.displayName = "Circle";

interface McpInteractionVisualProps {
  className?: string;
}

// Define your node data, specifying either a Lucide Icon or an iconSrc
// IMPORTANT: Replace '/icons/...' paths with your actual local asset paths
// or use a library like react-icons if preferred and licensed correctly.
const peripheralNodeData = [
  { id: "database", refCreator: useRef, label: "Database", IconComponent: LucideDatabase, colorKey: "database", beamCurvature: 0 },
  { id: "calendar", refCreator: useRef, label: "Calendar", iconSrc: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Google_Calendar_%282015-2020%29.png", colorKey: "calendar", beamCurvature: 0 },
  { id: "webApi", refCreator: useRef, label: "Web APIs", IconComponent: LucideGlobe, colorKey: "webApi", beamCurvature: 0 },
  { id: "teams", refCreator: useRef, label: "Communication Channels", iconSrc: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg", colorKey: "teams", beamCurvature: 0 },
  { id: "localFs", refCreator: useRef, label: "Local Filesystem", IconComponent: LucideFolderOpen, colorKey: "localFs", beamCurvature: 0, beamDirection: "from-center" },
  { id: "sharepoint", refCreator: useRef, label: "Storage Systems", iconSrc: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Microsoft_Office_SharePoint_%282019%E2%80%93present%29.svg", colorKey: "sharepoint", beamCurvature: 0 },
  { id: "sap", refCreator: useRef, label: "ERP", iconSrc: "https://upload.wikimedia.org/wikipedia/commons/8/8f/SAP-Logo.svg", colorKey: "sap", beamCurvature: 0 },
  { id: "outlook", refCreator: useRef, label: "Emails", IconComponent: OutlookIcon, colorKey: "outlook", beamCurvature: 0 },
];


const McpVisualComponent: React.FC<McpInteractionVisualProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rubiCoreRef = useRef<HTMLDivElement>(null);

  const peripheralNodes = peripheralNodeData.map(node => ({
    ...node,
    ref: node.refCreator<HTMLDivElement>(null),
  }));

  const colorStyles: { [key: string]: string } = {
    rubiCore: "border-primary !bg-primary/10",
    database: "border-blue-500/70 bg-blue-500/10",
    webApi: "border-green-500/70 bg-green-500/10",
    teams: "border-purple-500/70 bg-purple-500/10", // Microsoft Teams is often associated with purple
    localFs: "border-amber-500/70 bg-amber-500/10",
    sap: "border-sky-600/70 bg-sky-600/10", // SAP's blue
    outlook: "border-blue-600/70 bg-blue-600/10", // Outlook's blue
    calendar: "border-red-500/70 bg-red-500/10", // Common calendar color
    sharepoint: "border-cyan-500/70 bg-cyan-500/10", // SharePoint's teal/cyan
  };

  // Icon colors are for Lucide icons; for img src, the image itself provides color.
  const iconColorStyles: { [key: string]: string } = {
    rubiCore: "text-primary",
    database: "text-blue-600",
    webApi: "text-green-600",
    teams: "text-purple-600",
    localFs: "text-amber-600",
    sap: "text-sky-700",
    outlook: "text-blue-700",
    calendar: "text-red-600",
    sharepoint: "text-cyan-600",
  };
  
  const beamGradientColors: { [key: string]: { start: string; stop: string } } = {
    database: { start: "#3b82f6", stop: "#f59e0b" },
    webApi: { start: "#22c55e", stop: "#f59e0b" },
    teams: { start: "#a855f7", stop: "#f59e0b" }, // Purple
    localFs: { start: "#f59e0b", stop: "#d97706" },
    sap: { start: "#0284c7", stop: "#f59e0b" }, // Sky blue
    outlook: { start: "#2563eb", stop: "#f59e0b" }, // Blue
    calendar: { start: "#ef4444", stop: "#f59e0b" }, // Red
    sharepoint: { start: "#06b6d4", stop: "#f59e0b" }, // Cyan
  };

  const radiusXPercent = 38;
  const radiusYPercent = 38;
  const angleStep = (2 * Math.PI) / peripheralNodes.length;
  const startAngle = -Math.PI / 2 - angleStep / 2; // Adjust startAngle to center top item more aesthetically for 8 items

  return (
    <>
      <style>{HeartbeatAnimationStyle}</style>
      <div
        className={cn(
          "relative flex h-[500px] md:h-[550px] w-full max-w-3xl items-center justify-center overflow-hidden rounded-lg border bg-muted/50 p-6 md:p-8",
          className
        )}
        ref={containerRef}
      >
        <Circle
          ref={rubiCoreRef}
          className={cn(
            "!size-20 md:!size-24 border-4 animate-heartbeat-glow",
            colorStyles.rubiCore
          )}
          label="RubiCore MCP Hub"
          style={{
            '--glow-color-weak': 'rgba(245, 158, 11, 0.2)',
            '--glow-color-medium': 'rgba(245, 158, 11, 0.4)',
            '--glow-color-strong': 'rgba(245, 158, 11, 0.6)',
          } as React.CSSProperties}
        >
          <Cpu className={cn("h-10 w-10 md:h-12 md:w-12", iconColorStyles.rubiCore)} />
        </Circle>

        {peripheralNodes.map((node, index) => {
          const angle = startAngle + index * angleStep;
          const x = radiusXPercent * Math.cos(angle);
          const y = radiusYPercent * Math.sin(angle);
          const nodeStyle: React.CSSProperties = {
            position: 'absolute',
            left: `calc(50% + ${x}%)`,
            top: `calc(50% + ${y}%)`,
            transform: 'translate(-50%, -50%)',
          };
          const { IconComponent, iconSrc, colorKey, label, ref: nodeRef } = node;
          
          // Use slightly larger circles for image-based icons if needed, or ensure images have padding
          const circleSize = iconSrc ? "size-14 md:size-16" : "size-12 md:size-14";


          return (
            <Circle
              key={node.id}
              ref={nodeRef}
              className={colorStyles[colorKey]}
              label={label}
              style={nodeStyle}
              iconSrc={iconSrc}
              iconAlt={label}
              size={circleSize}
            >
              {IconComponent && ( // Render Lucide icon if no iconSrc
                <IconComponent className={cn("h-6 w-6 md:h-7 md:w-7", iconColorStyles[colorKey])} />
              )}
            </Circle>
          );
        })}

        {peripheralNodes.map((node) => {
          const fromRefSource = node.beamDirection === "from-center" ? rubiCoreRef : node.ref;
          const toRefSource = node.beamDirection === "from-center" ? node.ref : rubiCoreRef;

          const fromRef = fromRefSource as unknown as React.RefObject<HTMLElement>;
          const toRef = toRefSource as unknown as React.RefObject<HTMLElement>;
          
          // Ensure gradient colors are always defined
          const startColor = beamGradientColors[node.colorKey]?.start || "#cccccc"; // Fallback
          const stopColor = beamGradientColors[node.colorKey]?.stop || "#888888"; // Fallback

          return (
            <AnimatedBeam
              key={`beam-${node.id}`}
              containerRef={containerRef}
              fromRef={fromRef}
              toRef={toRef}
              curvature={node.beamCurvature}
              gradientStartColor={startColor}
              gradientStopColor={stopColor}
            />
          );
        })}
      </div>
    </>
  );
};

export const McpInteractionVisual: React.FC<McpInteractionVisualProps> = ({className}) => {
  return <McpVisualComponent className={className} />;
};

export default McpInteractionVisual;
