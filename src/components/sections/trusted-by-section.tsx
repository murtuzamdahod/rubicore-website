import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee"; // Restoring Marquee

// Updated Placeholder for client logos
const PlaceholderLogo = ({ name }: { name: string }) => (
  <div className="h-16 w-40 bg-muted/30 dark:bg-muted/50 rounded-lg flex items-center justify-center p-3 mx-4 shadow-sm hover:shadow-md transition-shadow">
    <span className="text-muted-foreground font-medium text-base">{name}</span>
  </div>
);

interface TrustedBySectionProps {
  className?: string;
}

export function TrustedBySection({ className }: TrustedBySectionProps) {
  const headline = "Powering Intelligent Automation for Leading Enterprises";
  const clientLogos = [
    "Client A",
    "Client B",
    "Client C",
    "Client D",
    "Client E",
  ]; // Placeholder names

  return (
    <section
      className={cn(
        "bg-background text-foreground py-12 md:py-20",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-12 text-center">
          {headline}
        </h2>
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:60s]">
            {clientLogos.map((name) => (
              <PlaceholderLogo key={name} name={name} />
            ))}
          </Marquee>
          {/* Optional: Add a second row reversing direction or with different logos */}
          {/* <Marquee reverse pauseOnHover className="[--duration:60s] mt-4">
            {clientLogos.slice(0,3).map((name) => ( // Example: different set or order
              <PlaceholderLogo key={name + "-rev"} name={name} />
            ))}
          </Marquee> */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-background to-transparent dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-background to-transparent dark:from-background"></div>
        </div>
      </div>
    </section>
  );
}
