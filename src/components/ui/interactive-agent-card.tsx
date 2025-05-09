"use client";

import React from "react"; // Import React
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react"; // Zap as a default icon
import { cn } from "@/lib/utils";

interface InteractiveAgentCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  benefit: string;
  idealFor: string;
  learnMoreLink: string;
  className?: string;
}

export function InteractiveAgentCard({
  icon,
  title,
  description,
  benefit,
  idealFor,
  learnMoreLink,
  className,
}: InteractiveAgentCardProps) {
  const displayIcon = icon || <Zap className="w-10 h-10 text-ruby-500" />;

  return (
    <Card
      className={cn(
        "flex flex-col bg-background dark:bg-gray-800/80 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 h-full border-transparent hover:border-primary/50",
        className
      )}
    >
      <CardHeader className="items-center text-center pt-8 pb-4">
        <div className="p-3 rounded-full bg-primary/10 mb-4 transition-colors duration-300 group-hover:bg-primary/20">
          {React.isValidElement(displayIcon)
            ? React.cloneElement(displayIcon as React.ReactElement<{ className?: string }>, {
                className: cn(
                  "w-10 h-10 text-primary transition-transform duration-300 group-hover:scale-110",
                  (displayIcon as React.ReactElement<{ className?: string }>).props.className || ""
                ),
              })
            : displayIcon}
        </div>
        <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow px-6 pb-6 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 min-h-[60px]">
          {description}
        </p>
        <div className="space-y-3 text-left">
          <div>
            <p className="text-xs font-semibold text-ruby-600 dark:text-ruby-400 uppercase tracking-wider">Benefit:</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">{benefit}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-ruby-600 dark:text-ruby-400 uppercase tracking-wider">Ideal for:</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">{idealFor}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 justify-center">
        <Button asChild variant="outline" className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300 w-full sm:w-auto">
          <Link href={learnMoreLink}>
            Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
