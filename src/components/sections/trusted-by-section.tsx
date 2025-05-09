import { cn } from "@/lib/utils";

// Placeholder for client logos
const PlaceholderLogo = ({ name }: { name: string }) => (
  <div className="h-12 w-32 bg-muted/70 rounded flex items-center justify-center p-2">
    <span className="text-muted-foreground text-sm">{name}</span>
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
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-10">
          {headline}
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clientLogos.map((name) => (
            <PlaceholderLogo key={name} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
}
