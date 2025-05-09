import { cn } from "@/lib/utils";

interface FeatureStatusBadgeProps {
  status: "Coming Soon" | "Roadmap" | "Beta" | "New" | "Planned for 2025"; // Added Beta & New for potential future use
  className?: string;
}

export function FeatureStatusBadge({ status, className }: FeatureStatusBadgeProps) {
  let bgColor = "bg-gray-100 dark:bg-gray-700";
  let textColor = "text-gray-700 dark:text-gray-300";
  let borderColor = "border-gray-300 dark:border-gray-600";

  switch (status) {
    case "Coming Soon":
      bgColor = "bg-yellow-100 dark:bg-yellow-700/50";
      textColor = "text-yellow-800 dark:text-yellow-300";
      borderColor = "border-yellow-400 dark:border-yellow-600";
      break;
    case "Roadmap":
      bgColor = "bg-blue-100 dark:bg-blue-700/50";
      textColor = "text-blue-800 dark:text-blue-300";
      borderColor = "border-blue-400 dark:border-blue-600";
      break;
    case "Beta":
      bgColor = "bg-purple-100 dark:bg-purple-700/50";
      textColor = "text-purple-800 dark:text-purple-300";
      borderColor = "border-purple-400 dark:border-purple-600";
      break;
    case "New":
      bgColor = "bg-green-100 dark:bg-green-700/50";
      textColor = "text-green-800 dark:text-green-300";
      borderColor = "border-green-400 dark:border-green-600";
      break;
    case "Planned for 2025":
      bgColor = "bg-teal-100 dark:bg-teal-700/50";
      textColor = "text-teal-800 dark:text-teal-300";
      borderColor = "border-teal-400 dark:border-teal-600";
      break;
  }

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
        bgColor,
        textColor,
        borderColor,
        className
      )}
    >
      {status}
    </span>
  );
}
