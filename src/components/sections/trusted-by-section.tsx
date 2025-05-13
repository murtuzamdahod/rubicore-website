import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import {
  MicrosoftAzureIcon,
  SalesforceIcon,
  GoogleDriveIcon,
  AmazonWebServicesIcon,
} from "@/components/icons"; // Import new icons

interface ClientLogo {
  name: string;
  IconComponent: React.FC;
}

interface TrustedBySectionProps {
  className?: string;
}

export function TrustedBySection({ className }: TrustedBySectionProps) {
  const headline = "Powering Intelligent Automation for Leading Enterprises";
  const clientLogos: ClientLogo[] = [
    { name: "Microsoft Azure", IconComponent: MicrosoftAzureIcon },
    { name: "Salesforce", IconComponent: SalesforceIcon },
    { name: "Google Drive", IconComponent: GoogleDriveIcon },
    { name: "Amazon Web Services", IconComponent: AmazonWebServicesIcon },
    // Add more logos as needed, or duplicate for marquee effect
    { name: "Microsoft Azure Dupe", IconComponent: MicrosoftAzureIcon }, // Example for longer marquee
    { name: "Salesforce Dupe", IconComponent: SalesforceIcon }, // Example for longer marquee
  ];

  return (
    <section
      className={cn(
        "bg-background text-foreground py-12 md:py-20",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-12 text-center">
          {headline}
        </h2>
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:60s]">
            {clientLogos.map(({ name, IconComponent }) => (
              <div key={name} className="h-16 w-40 rounded-lg flex items-center justify-center p-3 mx-4" aria-label={name}>
                <IconComponent />
              </div>
            ))}
          </Marquee>
          {/* Optional: Add a second row reversing direction or with different logos */}
          {/* <Marquee reverse pauseOnHover className="[--duration:60s] mt-4">
            {clientLogos.slice(0,3).map(({ name, IconComponent }) => ( // Example: different set or order
              <div key={`${name}-rev`} className="h-16 w-40 rounded-lg flex items-center justify-center p-3 mx-4" aria-label={name}>
                <IconComponent />
              </div>
            ))}
          </Marquee> */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-background to-transparent dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-background to-transparent dark:from-background"></div>
        </div>
      </div>
    </section>
  );
}
