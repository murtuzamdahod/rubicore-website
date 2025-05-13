import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { featuredResources } from '@/lib/resource-data'; // Using placeholder data for now
import { ArrowRight, Download } from 'lucide-react'; // Added Download icon

// TODO: Replace placeholder data with actual data fetching/filtering logic
const whitepapers = featuredResources.filter(res => res.type === 'Whitepaper').slice(0, 3); // Show max 3

export default function WhitepapersPreviewSection() {
  return (
    <section id="whitepapers" className="w-full py-16 md:py-24 lg:py-32 bg-muted/40"> {/* Added id="whitepapers", Alternating background */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Whitepapers & Guides
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Download in-depth analysis and practical guides.
          </p>
        </div>

        {whitepapers.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whitepapers.map((paper) => (
              <Card key={paper.id} className="flex flex-col">
                <CardHeader>
                  {/* Placeholder for image if needed */}
                  {/* <img src={paper.imageUrl} alt={paper.title} className="mb-4 rounded-md" /> */}
                  <CardTitle>{paper.title}</CardTitle>
                  <CardDescription>{paper.date}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{paper.description}</p>
                </CardContent>
                <CardFooter>
                  {/* Assuming whitepapers are downloadable, link might go to a detail page or direct download */}
                  <Button variant="link" asChild className="p-0 h-auto">
                    <Link href={paper.link}>
                      Learn More <Download className="ml-2 h-4 w-4" /> {/* Or ArrowRight */}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No whitepapers available yet.</p>
        )}

        <div className="mt-12 text-center">
          <Button asChild>
            <Link href="/resources/whitepapers">
              See All Whitepapers & Guides <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
