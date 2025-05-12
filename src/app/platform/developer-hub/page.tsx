import React from 'react';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button'; // Assuming Button component exists
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Developer Hub - RubiCore Platform | Coming Soon',
  description: 'Access resources, documentation, and tools for building with the RubiCore platform. Hub coming soon.',
};

const DeveloperHubPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="py-16 md:py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
              Developer Hub
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {/* Placeholder for introductory text */}
              Leverage our comprehensive guides, SDKs, and API documentation to seamlessly integrate Rubicore&apos;s capabilities into your applications.
            </p>
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md max-w-2xl mx-auto mb-8" role="alert">
              <p className="font-bold">Coming Soon!</p>
              <p>We&apos;re building a comprehensive hub for developers. Stay tuned for its launch!</p>
            </div>
            <Button asChild>
              <Link href="/platform/overview">Back to Platform Overview</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DeveloperHubPage;
