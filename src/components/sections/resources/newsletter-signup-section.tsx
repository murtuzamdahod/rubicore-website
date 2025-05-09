"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React from "react";
import { Mail } from "lucide-react";

export default function NewsletterSignupSection() {
  const [email, setEmail] = React.useState("");
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsSubmitted(false);

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Simulate API call
    try {
      // Replace with your actual newsletter signup API endpoint
      // const response = await fetch("/api/subscribe-newsletter", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email }),
      // });
      // if (!response.ok) {
      //   throw new Error("Subscription failed. Please try again.");
      // }
      console.log("Subscribing email:", email);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

      setIsSubmitted(true);
      setEmail("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred.");
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-ruby-600 via-red-600 to-pink-600 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <Mail className="w-12 h-12 text-white mx-auto mb-4" />
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Get the Latest Insights Delivered
          </h2>
          <p className="mt-4 text-lg text-ruby-100">
            Subscribe to receive updates on new resources, platform features,
            and upcoming events directly to your inbox.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 sm:flex">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <Input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              className="w-full px-5 py-3 placeholder-gray-500 focus:ring-white focus:border-white sm:max-w-xs border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <Button type="submit" variant="solidWhite" className="w-full">
                Subscribe
              </Button>
            </div>
          </form>
          {isSubmitted && (
            <p className="mt-4 text-sm text-green-200">
              Thank you for subscribing! Please check your email to confirm.
            </p>
          )}
          {error && (
            <p className="mt-4 text-sm text-yellow-200">
              Error: {error}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
