import { cn } from "@/lib/utils";
import { ShieldCheck, Server, Cloud, Combine, ArrowRight } from "lucide-react"; // Icons for visual representation
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { StyledComplianceBadge } from "@/components/ui/StyledComplianceBadge"; // Import the new badge

// Placeholder for compliance badges visual - will be removed
// const ComplianceBadgesPlaceholder = () => (
//   <div className="flex flex-wrap justify-center gap-4 mt-6">
//     {["SOC 2", "GDPR", "ISO", "HIPAA", "FedRAMP (aspiring)"].map((badge) => (
//       <div key={badge} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
//         {badge}
//       </div>
//     ))}
//   </div>
// );


interface OnPremiseImperativeSectionProps {
  className?: string;
}

export function OnPremiseImperativeSection({
  className,
}: OnPremiseImperativeSectionProps) {
  const headline = "Your AI, On Your Terms – Maximum Control, Anywhere You Operate.";
  const bodyText =
    "RubiCore offers on-premise or private cloud deployment for complete data sovereignty and model control, ideal for regulated industries. Secure public cloud and hybrid options are also available. Our architecture provides unprecedented control over your AI deployment and data processing.";

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
            <div className="flex flex-wrap justify-start gap-3 mt-6"> {/* Changed justify-center to justify-start and gap */}
              {["SOC 2 Type II", "GDPR Compliant", "ISO 27001", "HIPAA Ready", "FedRAMP (Targeted)"].map((badgeName) => (
                <StyledComplianceBadge key={badgeName} name={badgeName} />
              ))}
            </div>
            <div className="mt-8">
              <Button asChild variant="link" className="text-primary p-0 h-auto">
                <Link href="/platform/security">
                  Learn More About Security & Deployment <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
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
