import React from 'react';

// TODO: Fetch and display all webinars & demos
// TODO: Add filtering/sorting options if needed

export const metadata = {
  title: "RubiCore Webinars & Demos | Agentic AI in Action",
  description: "Watch recorded webinars and product demonstrations showcasing RubiCore's platform capabilities and agentic AI applications.",
};

export default function WebinarsPage() {
  return (
    <main className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl mb-12 text-center">
        Webinars & Demos
      </h1>
      <div className="text-center text-lg text-gray-600 dark:text-gray-400">
        [Placeholder: Full list of webinars and demos will be displayed here.]
        {/* Add components to list webinars/demos */}
      </div>
    </main>
  );
}
