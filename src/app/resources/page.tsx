import BlogPreviewSection from '@/components/sections/resources/BlogPreviewSection';
import CaseStudiesPreviewSection from '@/components/sections/resources/CaseStudiesPreviewSection';
import WhitepapersPreviewSection from '@/components/sections/resources/WhitepapersPreviewSection';
import WebinarsPreviewSection from '@/components/sections/resources/WebinarsPreviewSection';
// TODO: Add NewsletterSignupSection and FinalCtaResourcesSection back if needed, or create new versions.

export const metadata = {
  title: "Enterprise Agentic AI Resources | Blog, Case Studies, Guides | RubiCore",
  description:
    "Access RubiCore's resource library: Read the blog, explore case studies, download whitepapers & guides, watch webinars, and find documentation on building secure AI workforces.",
};

export default function ResourcesPage() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            <span className="block">Explore Our Resources</span>
            <span className="block text-ruby-600 dark:text-ruby-500">
              Knowledge Hub for Agentic AI
            </span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400 sm:text-xl md:text-2xl">
            Dive into our curated collection of articles, case studies, whitepapers, and guides. Stay informed on the latest in agentic AI, best practices, and how RubiCore&apos;s platform can transform your business.
          </p>
        </div>
      </div>
      {/* Render the new preview sections */}
      <BlogPreviewSection />
      <CaseStudiesPreviewSection />
      <WhitepapersPreviewSection />
      <WebinarsPreviewSection />
      {/* TODO: Add other sections like Newsletter/CTA if required */}
    </main>
  );
}
