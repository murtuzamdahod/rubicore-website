"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams } from 'next/navigation'; // To read query params
import Link from 'next/link'; // Added import for Link

export default function ContactFormSection() {
  const searchParams = useSearchParams();
  const demoParam = searchParams.get('demo');
  const planParam = searchParams.get('plan');
  const expertParam = searchParams.get('expert');
  const subjectParam = searchParams.get('subject');

  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    inquiryType: subjectParam === "Demo Request" 
                   ? "Request a Demo" 
                   : (demoParam ? "Request a Demo" 
                      : expertParam ? "Talk to an Expert" 
                      : planParam ? `Pricing Inquiry: ${planParam}` 
                      : "General Inquiry"),
    message: subjectParam ? `${subjectParam}\n\n` : "",
  });
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement; // Type assertion
    setFormData({ ...formData, [target.name]: target.value });
  };
  
  // Handling Select change separately as its value is not directly on e.target.value
  const handleInquiryChange = (value: string) => {
    setFormData({ ...formData, inquiryType: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsSubmitted(false);

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message || !formData.inquiryType) {
      setError("Please fill in all required fields.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Simulate API call
    try {
      console.log("Submitting contact form:", formData);
      // Replace with your actual contact form API endpoint
      // const response = await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });
      // if (!response.ok) {
      //   const resData = await response.json();
      //   throw new Error(resData.message || "Form submission failed. Please try again.");
      // }
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
      setIsSubmitted(true);
      // Optionally reset form:
      // setFormData({ firstName: "", lastName: "", email: "", company: "", phone: "", inquiryType: "General Inquiry", message: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred.");
    }
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Send Us a Message
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-400">
            Have a question, a project proposal, or just want to learn more? Fill out the form below, and one of our team members will get back to you shortly. We&apos;re eager to hear how RubiCore can help you achieve your AI goals.
          </p>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                First Name <span className="text-ruby-600">*</span>
              </label>
              <Input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} required className="mt-1 dark:bg-gray-700 dark:border-gray-600"/>
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Last Name <span className="text-ruby-600">*</span>
              </label>
              <Input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} required className="mt-1 dark:bg-gray-700 dark:border-gray-600"/>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email Address <span className="text-ruby-600">*</span>
              </label>
              <Input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 dark:bg-gray-700 dark:border-gray-600"/>
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Company
              </label>
              <Input type="text" name="company" id="company" value={formData.company} onChange={handleChange} className="mt-1 dark:bg-gray-700 dark:border-gray-600"/>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Phone Number
              </label>
              <Input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="mt-1 dark:bg-gray-700 dark:border-gray-600"/>
            </div>
            <div>
              <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Inquiry Type <span className="text-ruby-600">*</span>
              </label>
              <Select name="inquiryType" value={formData.inquiryType} onValueChange={handleInquiryChange}>
                <SelectTrigger id="inquiryType" className="mt-1 dark:bg-gray-700 dark:border-gray-600">
                  <SelectValue placeholder="Select inquiry type" />
                </SelectTrigger>
                <SelectContent className="dark:bg-gray-700">
                  <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                  <SelectItem value="Request a Demo">Request a Demo</SelectItem>
                  <SelectItem value="Talk to an Expert">Talk to an Expert</SelectItem>
                  <SelectItem value="Pricing Inquiry: Free / Developer">Pricing Inquiry: Free / Developer</SelectItem>
                  <SelectItem value="Pricing Inquiry: Pro / Team">Pricing Inquiry: Pro / Team</SelectItem>
                  <SelectItem value="Pricing Inquiry: Enterprise">Pricing Inquiry: Enterprise</SelectItem>
                  <SelectItem value="Partnership">Partnership</SelectItem>
                  <SelectItem value="Support">Support</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message <span className="text-ruby-600">*</span>
              </label>
              <Textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} required className="mt-1 dark:bg-gray-700 dark:border-gray-600"/>
            </div>
            <div className="ml-3">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                By selecting this, you agree to our{' '}
                <Link href="/terms-of-service" className="font-medium text-ruby-600 hover:text-ruby-700 dark:text-ruby-500 dark:hover:text-ruby-400">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="/privacy-policy" className="font-medium text-ruby-600 hover:text-ruby-700 dark:text-ruby-500 dark:hover:text-ruby-400">
                  Privacy Policy
                </Link>
                . We&apos;ll use your information to respond to your inquiry.
              </p>
            </div>
            <div>
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </div>
          </form>
          {isSubmitted && (
            <p className="mt-6 text-center text-green-600 dark:text-green-400">
              Thank you for your message! We will get back to you shortly.
            </p>
          )}
          {error && (
            <p className="mt-6 text-center text-red-600 dark:text-red-400">
              Error: {error}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
