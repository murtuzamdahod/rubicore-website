import React from 'react';

// TODO: Fetch and display all whitepapers & guides
// TODO: Add filtering/sorting options if needed

export const metadata = {
  title: "RubiCore Whitepapers & Guides | In-Depth AI Analysis",
  description: "Download comprehensive whitepapers and practical guides on agentic AI, security, ROI, and industry best practices from RubiCore.",
};

export default function WhitepapersPage() {
  return (
    <main className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl mb-12 text-center">
        Whitepapers & Guides
      </h1>
      <div className="text-center text-lg text-gray-600 dark:text-gray-400">
        [Placeholder: Full list of whitepapers and guides will be displayed here.]
        {/* Add components to list whitepapers/guides */}
      </div>
    </main>
  );
}
