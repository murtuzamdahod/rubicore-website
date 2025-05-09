import MissionVisionSection from "@/components/sections/company/about/mission-vision-section";
import StorySection from "@/components/sections/company/about/story-section";
import WhyRubiCoreSection from "@/components/sections/company/about/why-rubicore-section";
import LeadershipTeamSection from "@/components/sections/company/about/leadership-team-section";
import CareersSection from "@/components/sections/company/about/careers-section";
import PressNewsSection from "@/components/sections/company/about/press-news-section";
import ContactSection from "@/components/sections/company/about/contact-section";
import { HeroSection } from "@/components/sections/hero-section";

export const metadata = {
  title: "About RubiCore | Secure Enterprise Agentic AI Platform",
  description:
    "Learn about RubiCore's mission to empower enterprises with secure, governable AI workforces. Meet our team and discover our commitment to responsible AI innovation.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            <span className="block">Pioneering Secure, Governed, and</span>
            <span className="block text-ruby-600 dark:text-ruby-500">
              Effective Enterprise AI
            </span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400 sm:text-xl md:text-2xl">
            We&apos;re dedicated to helping organizations unlock the
            transformative power of Agentic AI responsibly and securely,
            driving real business value.
          </p>
        </div>
      </div>
      <HeroSection
        title="Crafting the Future of AI, Together"
        description="RubiCore is pioneering the next wave of agentic AI, building intelligent systems that learn, adapt, and collaborate. Our mission is to empower businesses and individuals with AI that augments human potential and solves complex challenges. We&apos;re a team of innovators, thinkers, and builders passionate about creating a future where technology and humanity work in concert."
        imageSrc="/images/stock/team-collaboration.webp"
        imageAlt="RubiCore Team Collaborating on AI Solutions"
      />
      <MissionVisionSection />
      <StorySection />
      <WhyRubiCoreSection />
      <LeadershipTeamSection />
      <CareersSection />
      <PressNewsSection />
      <ContactSection />
    </main>
  );
}
