import { cn } from "@/lib/utils";
import { ShieldCheck, Server, Cloud, ArrowRight, Lock, Network, Cpu } from "lucide-react"; // Icons for visual representation
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
          <div className="flex flex-col items-center justify-center space-y-10 p-8 sm:p-10 bg-muted/40 rounded-xl shadow-lg">

            {/* Headline emphasizing choice and control */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-primary">Your AI, On Your Terms</h2>
              <p className="text-lg text-muted-foreground">Maximum Control, Anywhere You Operate.</p>
            </div>

            {/* Options Container: Using grid for better responsiveness and alignment */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-4xl mt-8">

              {/* Option 1: On-Premise / Private Cloud */}
              <div className="flex flex-col items-center text-center space-y-4 p-6 border border-border rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="flex items-center justify-center space-x-3 text-primary mb-2">
                  <Server size={40} /> {/* Icon for On-Premise hardware */}
                  <Lock size={40} /> {/* Icon for Private Cloud (secure cloud) */}
                </div>
                <span className="text-xl font-semibold">On-Premise / Private Cloud</span>
                <div className="flex items-center space-x-2 text-green-600">
                  <ShieldCheck size={24} />
                  <span className="text-sm font-medium">Complete Data Sovereignty & Model Control</span>
                </div>
                <p className="text-xs text-muted-foreground px-2">Ideal for regulated industries and maximum security requirements.</p>
              </div>

              {/* Option 2: Secure Cloud / Hybrid */}
              <div className="flex flex-col items-center text-center space-y-4 p-6 border border-border rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="flex items-center justify-center space-x-3 text-primary mb-2">
                  <Cloud size={40} /> {/* Icon for Public Cloud */}
                  <Network size={40} /> {/* Icon for Hybrid (interconnected systems) */}
                </div>
                <span className="text-xl font-semibold">Secure Cloud / Hybrid</span>
                <div className="flex items-center space-x-2 text-blue-500"> {/* Different accent color for visual distinction */}
                  <ShieldCheck size={24} />
                  <span className="text-sm font-medium">Flexible, Scalable & Secure Deployment</span>
                </div>
                <p className="text-xs text-muted-foreground px-2">Versatile options for secure public cloud and integrated hybrid solutions.</p>
              </div>
            </div>

            {/* Overall Benefit / RubiCore Architecture Highlight */}
            <div className="mt-10 text-center">
              {/* Icon representing adaptable/core architecture, e.g., Cpu, Layers, Settings2, or Blocks */}
              <Cpu size={48} className="text-primary mx-auto mb-3" />
              <p className="text-md text-muted-foreground max-w-xl mx-auto">
                Our architecture offers <span className="font-semibold text-primary">unprecedented control</span> over your AI deployment and data processing, tailored to your operational needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
