import React from 'react';

// TODO: Fetch and display glossary terms when available

export const metadata = {
  title: "Agentic AI Glossary | Key Terms Explained | RubiCore",
  description: "Understand key terminology related to agentic AI, large language models, and enterprise AI platforms with the RubiCore glossary.",
};

export default function GlossaryPage() {
  return (
    <main className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl mb-12 text-center">
        Agentic AI Glossary
      </h1>
      <div className="text-center text-lg text-gray-600 dark:text-gray-400">
        <p className="mb-4">This glossary is currently under development.</p>
        <p>Check back soon for definitions of key terms in the world of agentic AI!</p>
        {/* Add components to list glossary terms when ready */}
      </div>
    </main>
  );
}
