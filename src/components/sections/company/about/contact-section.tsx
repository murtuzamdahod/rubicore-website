import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, Phone, MapPin, MessageSquare, Users } from "lucide-react"; // Added Users icon

const contactDetails = [
  {
    icon: <Mail className="w-6 h-6 text-ruby-600 dark:text-ruby-500" />,
    title: "General Inquiries",
    value: "info@rubicore.ai",
    href: "mailto:info@rubicore.ai",
  },
  {
    icon: <Phone className="w-6 h-6 text-ruby-600 dark:text-ruby-500" />, // Assuming Phone icon is suitable for Sales
    title: "Sales Inquiries",
    value: "sales@rubicore.ai",
    href: "mailto:sales@rubicore.ai",
  },
  {
    icon: <Users className="w-6 h-6 text-ruby-600 dark:text-ruby-500" />,
    title: "Partner Inquiries",
    value: "partners@rubicore.ai",
    href: "mailto:partners@rubicore.ai",
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-ruby-600 dark:text-ruby-500" />,
    title: "Press Inquiries",
    value: "press@rubicore.ai",
    href: "mailto:press@rubicore.ai",
  },
  {
    icon: <MapPin className="w-6 h-6 text-ruby-600 dark:text-ruby-500" />,
    title: "Our Headquarters",
    value: "123 Innovation Drive, Tech City, CA 94000", // Placeholder address
    href: "https://maps.google.com/?q=123+Innovation+Drive,+Tech+City,+CA+94000", // Placeholder map link
    isMapLink: true,
  },
];

export default function ContactSection() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Get in Touch – Let&apos;s Discuss Your Agentic AI Journey.
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Have questions about RubiCore, our platform, partnerships, responsible AI initiatives, or press inquiries? Reach out to our team.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"> {/* Adjusted grid for 5 items */}
          {contactDetails.map((detail) => (
            <div
              key={detail.title}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center flex flex-col items-center" // Added flex for centering
            >
              <div className="flex justify-center mb-4">{detail.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                {detail.title}
              </h3>
              <Link
                href={detail.href}
                target={detail.isMapLink ? "_blank" : undefined}
                rel={detail.isMapLink ? "noopener noreferrer" : undefined}
                className="text-ruby-600 dark:text-ruby-500 hover:underline break-all"
              >
                {detail.value}
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center"> {/* Increased margin top for button */}
            <Button size="xl" asChild>
                <Link href="/contact">Send Us a Message</Link>
            </Button>
        </div>
        {/* Removed redundant General Inquiries block */}
      </div>
    </section>
  );
}
