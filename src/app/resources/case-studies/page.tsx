import React from 'react';

// TODO: Fetch and display all case studies
// TODO: Add filtering/sorting options if needed

export const metadata = {
  title: "RubiCore Case Studies | Real-World AI Success Stories",
  description: "Explore how businesses leverage RubiCore's agentic AI platform to achieve tangible results and overcome complex challenges.",
};

export default function CaseStudiesPage() {
  return (
    <main className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl mb-12 text-center">
        Case Studies
      </h1>
      <div className="text-center text-lg text-gray-600 dark:text-gray-400">
        [Placeholder: Full list of case studies will be displayed here.]
        {/* Add components to list case studies */}
      </div>
    </main>
  );
}
