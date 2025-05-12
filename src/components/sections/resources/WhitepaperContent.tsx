// src/components/WhitepaperContent.tsx (Keep as previously modified)
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface WhitepaperContentProps {
  title: string; // The title displayed in the Card Header
  htmlContent: string; // The raw HTML content string
}

export function WhitepaperContent({ title, htmlContent }: WhitepaperContentProps) {
  return (
    // Keep the section wrapper if you want consistent padding controlled by the parent
    // Or remove it if the parent page handles all outer padding/margins
    // <section className="w-full py-16 md:py-24 lg:py-32">
    //   <div className="container mx-auto px-4 md:px-6">

    // Card is the main container for the whitepaper text
    <Card className="mt-6 shadow-lg"> {/* Added margin-top and shadow */}
      <CardHeader>
        {/* Title is now optional here if banner handles it, or keep for context */}
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Render the HTML content */}
        {/* Added prose class for better typography if using Tailwind Typography plugin */}
        <div
          className="prose prose-lg max-w-none prose-headings:font-semibold prose-a:text-primary hover:prose-a:text-primary/80 prose-li:my-1" // Example Tailwind Typography styling
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </CardContent>
    </Card>

    //   </div>
    // </section>
  );
}