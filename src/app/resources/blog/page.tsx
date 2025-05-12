import React from 'react';

// TODO: Fetch and display all blog posts
// TODO: Add filtering/sorting options if needed

export const metadata = {
  title: "RubiCore Blog | Agentic AI Insights & News",
  description: "Stay updated with the latest articles, insights, and news on enterprise agentic AI from the RubiCore team.",
};

export default function BlogPage() {
  return (
    <main className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl mb-12 text-center">
        RubiCore Blog
      </h1>
      <div className="text-center text-lg text-gray-600 dark:text-gray-400">
        [Placeholder: Full list of blog posts will be displayed here.]
        {/* Add components to list blog posts */}
      </div>
    </main>
  );
}
