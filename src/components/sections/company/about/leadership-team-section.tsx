import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";

// Placeholder data - replace with actual team member details
const teamMembers = [
  {
    name: "Dr. Eva Rostova",
    title: "Founder & CEO",
    bio: "Visionary leader with 20+ years in enterprise AI and security. Passionate about building trustworthy AI solutions that drive real business impact.",
    imageUrl: "/images/team/eva-rostova.jpg", // Replace with actual image
    linkedinUrl: "https://linkedin.com/in/evarostova", // Replace with actual URL
  },
  {
    name: "Marcus Chen",
    title: "Chief Technology Officer",
    bio: "Expert architect of scalable AI platforms. Leads RubiCore's technology strategy and engineering teams with a focus on innovation and reliability.",
    imageUrl: "/images/team/marcus-chen.jpg",
    linkedinUrl: "https://linkedin.com/in/marcuschen",
  },
  {
    name: "Aisha Khan",
    title: "Chief Product Officer",
    bio: "Drives product vision and strategy, ensuring RubiCore meets the evolving needs of enterprise clients with intuitive and powerful solutions.",
    imageUrl: "/images/team/aisha-khan.jpg",
    linkedinUrl: "https://linkedin.com/in/aishakhan",
  },
  {
    name: "David Miller",
    title: "VP of Sales & Partnerships",
    bio: "Experienced sales leader focused on building strong customer relationships and strategic alliances to expand RubiCore's market reach.",
    imageUrl: "/images/team/david-miller.jpg",
    linkedinUrl: "https://linkedin.com/in/davidmiller",
  },
];

export default function LeadershipTeamSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Meet the Team Driving Secure, Ethical, and Enterprise-Ready AI Innovation
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our team combines decades of experience in AI, enterprise software, and business strategy. We&apos;re dedicated to building a company that not only innovates but also fosters a culture of collaboration and excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden shadow-lg mb-6">
                <Image
                  src={member.imageUrl}
                  alt={`Photo of ${member.name}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {member.name}
              </h3>
              <p className="text-ruby-600 dark:text-ruby-500 font-medium">
                {member.title}
              </p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {member.bio}
              </p>
              {member.linkedinUrl && (
                <div className="mt-4">
                  <Link href={member.linkedinUrl} target="_blank" rel="noopener noreferrer"
                    className="text-gray-400 hover:text-ruby-600 dark:hover:text-ruby-500 transition-colors"
                  >
                    <Linkedin className="w-6 h-6 inline-block" />
                    <span className="sr-only">LinkedIn Profile</span>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
