import ContactFormSection from "@/components/sections/company/contact/contact-form-section";
import ContactDetailsSection from "@/components/sections/company/contact/contact-details-section";

export const metadata = {
  title: "Contact RubiCore | Get in Touch with Our Team",
  description:
    "Reach out to RubiCore for sales inquiries, support, partnership opportunities, or general questions. We're here to help you with your enterprise AI needs.",
};

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            <span className="block">Let&apos;s Connect</span>
            <span className="block text-ruby-600 dark:text-ruby-500">
              We&apos;re Here to Help
            </span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400 sm:text-xl md:text-2xl">
            Whether you have a question about our platform, need support,
            or want to discuss a partnership, our team is ready to assist you.
          </p>
        </div>
      </div>
      <ContactFormSection />
      <ContactDetailsSection />
    </main>
  );
}
