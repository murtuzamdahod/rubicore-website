import Link from "next/link";
import { Mail, Phone, MapPin, MessageSquare, Building } from "lucide-react"; // Example icons

const contactPoints = [
  {
    icon: <Mail className="w-8 h-8 text-ruby-600 dark:text-ruby-500" />,
    title: "General Inquiries",
    text: "For any general questions about RubiCore.",
    value: "info@rubicore.ai",
    href: "mailto:info@rubicore.ai",
  },
  {
    icon: <Phone className="w-8 h-8 text-ruby-600 dark:text-ruby-500" />,
    title: "Sales & Demo Requests",
    text: "Interested in a demo or have sales questions?",
    value: "sales@rubicore.ai",
    href: "mailto:sales@rubicore.ai",
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-ruby-600 dark:text-ruby-500" />,
    title: "Media & Press",
    text: "For all media and press-related inquiries.",
    value: "press@rubicore.ai",
    href: "mailto:press@rubicore.ai",
  },
  {
    icon: <Building className="w-8 h-8 text-ruby-600 dark:text-ruby-500" />,
    title: "Partnerships",
    text: "Explore partnership opportunities with RubiCore.",
    value: "partners@rubicore.ai", // Assuming a partnerships email
    href: "mailto:partners@rubicore.ai",
  },
];

const officeLocation = {
    icon: <MapPin className="w-8 h-8 text-ruby-600 dark:text-ruby-500" />,
    title: "Our Headquarters",
    addressLines: ["RubiCore Inc.", "123 Innovation Drive", "Tech City, CA 94000", "United States"],
    mapLink: "https://maps.google.com/?q=123+Innovation+Drive,+Tech+City,+CA+94000", // Placeholder
};

export default function ContactDetailsSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                Other Ways to Reach Us
            </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactPoints.map((point) => (
            <div
              key={point.title}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-start space-x-4"
            >
              <div className="flex-shrink-0 pt-1">{point.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  {point.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{point.text}</p>
                <Link
                  href={point.href}
                  className="text-ruby-600 dark:text-ruby-500 hover:underline font-medium break-all"
                >
                  {point.value}
                </Link>
              </div>
            </div>
          ))}
           <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-start space-x-4 md:col-span-2 lg:col-span-1">
              <div className="flex-shrink-0 pt-1">{officeLocation.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  {officeLocation.title}
                </h3>
                {officeLocation.addressLines.map(line => (
                    <p key={line} className="text-sm text-gray-600 dark:text-gray-400">{line}</p>
                ))}
                <Link
                  href={officeLocation.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-ruby-600 dark:text-ruby-500 hover:underline font-medium"
                >
                  View on Map
                </Link>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
