import { cn } from "@/lib/utils";
import { ShieldCheck, Server, Cloud, Combine } from "lucide-react"; // Icons for visual representation

// Placeholder for compliance badges visual
const ComplianceBadgesPlaceholder = () => (
  <div className="flex flex-wrap justify-center gap-4 mt-6">
    {["SOC 2", "GDPR", "ISO", "HIPAA"].map((badge) => (
      <div key={badge} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
        {badge}
      </div>
    ))}
  </div>
);


interface OnPremiseImperativeSectionProps {
  className?: string;
}

export function OnPremiseImperativeSection({
  className,
}: OnPremiseImperativeSectionProps) {
  const headline = "Your AI, On Your Terms – In Your Cloud or Ours.";
  const bodyText =
    "Unlike many AI platforms, RubiCore can be deployed fully on-premise or in a private cloud, ensuring complete data sovereignty for regulated industries like finance, government, or healthcare. Keep sensitive data and model interactions within your firewalls to meet strict compliance (SOC2, GDPR, HIPAA) and performance requirements. For those who prefer cloud convenience, our secure cloud and hybrid options provide flexibility without compromising governance.";

  return (
    <section
      className={cn("bg-background text-foreground py-16 md:py-24", className)}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
              {headline}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {bodyText}
            </p>
            <ComplianceBadgesPlaceholder />
          </div>
          <div className="flex flex-col items-center justify-center space-y-8 p-8 bg-muted/30 rounded-lg">
            <div className="flex items-center space-x-4 text-primary">
              <Server size={48} />
              <span className="text-2xl font-semibold">On-Premise</span>
            </div>
            <Combine size={32} className="text-muted-foreground" />
            <div className="flex items-center space-x-4 text-primary">
              <Cloud size={48} />
              <span className="text-2xl font-semibold">Cloud / Hybrid</span>
            </div>
            <ShieldCheck size={64} className="text-green-500 mt-6" />
            <p className="text-center text-muted-foreground mt-2">Maximum Control & Security</p>
          </div>
        </div>
      </div>
    </section>
  );
}
