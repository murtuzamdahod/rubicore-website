import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Newspaper, ExternalLink } from "lucide-react";

// Placeholder data - replace with actual news items
const newsItems = [
  {
    id: "news-1",
    title: "RubiCore Secures Series A Funding to Advance Secure On-Premise AI",
    source: "TechCrunch",
    date: "April 10, 2025",
    link: "https://techcrunch.com/rubicore-funding", // Replace with actual link
    imageUrl: "/images/news/techcrunch-logo.svg" // Replace with actual image
  },
  {
    id: "news-2",
    title: "RubiCore Recognized as Leader in Enterprise Agentic AI by Analyst Firm",
    source: "Global AI Insights",
    date: "March 22, 2025",
    link: "https://globalaiinsights.com/rubicore-leader", // Replace with actual link
    imageUrl: "/images/news/gai-logo.png" // Replace with actual image
  },
  {
    id: "news-3",
    title: "The Future of Governed AI: An Interview with RubiCore CEO",
    source: "Enterprise AI Weekly",
    date: "February 15, 2025",
    link: "https://enterpriseaiweekly.com/rubicore-ceo-interview", // Replace with actual link
    imageUrl: "/images/news/eaiw-logo.png" // Replace with actual image
  },
];

export default function PressNewsSection() {
  // Show only the latest 3 news items, for example
  const displayedNews = newsItems.slice(0, 3);

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Newspaper className="w-12 h-12 text-ruby-600 dark:text-ruby-500 mx-auto mb-4" />
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            RubiCore in the News & On the Road
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayedNews.map((item) => (
            <Link key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" className="block group">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                {/* Placeholder for source logo if available */}
                {/* <img src={item.imageUrl} alt={item.source} className="h-8 mb-4"/> */}
                <div className="h-10 w-auto flex items-center mb-4">
                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">{item.source}</p>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-ruby-600 dark:group-hover:text-ruby-500 mb-2 flex-grow">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{item.date}</p>
                <div className="mt-auto text-sm text-ruby-600 dark:text-ruby-500 group-hover:underline flex items-center">
                  Read Article <ExternalLink className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        {newsItems.length > 3 && (
          <div className="mt-12 text-center">
            <Button variant="outline" asChild>
              <Link href="/news">View All News & Events</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
