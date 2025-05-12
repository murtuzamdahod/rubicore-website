import React from 'react';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button'; // Assuming Button component exists
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Human-AI Collaboration - RubiCore Platform | Coming Soon',
  description: 'Explore how RubiCore facilitates seamless collaboration between humans and AI agents. Feature coming soon.',
};

const HumanAiCollaborationPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="py-16 md:py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
              Human-AI Collaboration
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore how Rubicore bridges the gap between human intuition and AI
              efficiency, creating synergistic workflows where AI handles the
              computational heavy lifting, freeing humans for strategic thinking,
              creativity, and complex problem-solving. It&apos;s not just automation;
              it&apos;s augmentation.
            </p>
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md max-w-2xl mx-auto mb-8" role="alert">
              <p className="font-bold">Coming Soon!</p>
              <p>This exciting feature is currently under development. Stay tuned for updates!</p>
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

export default HumanAiCollaborationPage;
