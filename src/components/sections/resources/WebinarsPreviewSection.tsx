import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { featuredResources } from '@/lib/resource-data'; // Using placeholder data for now
import { ArrowRight, PlayCircle } from 'lucide-react'; // Added PlayCircle icon

// TODO: Replace placeholder data with actual data fetching/filtering logic
// TODO: Add actual webinar data when available
const webinars = featuredResources.filter(res => res.type === 'Webinar').slice(0, 3); // Show max 3, currently none in placeholder

export default function WebinarsPreviewSection() {
  return (
    <section id="webinars" className="w-full py-16 md:py-24 lg:py-32 bg-background"> {/* Added id="webinars", Alternating background */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Webinars & Demos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Watch agentic AI in action and learn from experts.
          </p>
        </div>

        {webinars.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {webinars.map((webinar) => (
              <Card key={webinar.id} className="flex flex-col">
                <CardHeader>
                  {/* Placeholder for image/thumbnail if needed */}
                  {/* <img src={webinar.imageUrl} alt={webinar.title} className="mb-4 rounded-md" /> */}
                  <CardTitle>{webinar.title}</CardTitle>
                  <CardDescription>{webinar.date}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{webinar.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" asChild className="p-0 h-auto">
                    <Link href={webinar.link}>
                      Watch Now <PlayCircle className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No webinars available yet. Check back soon!</p>
        )}

        <div className="mt-12 text-center">
          <Button asChild>
            <Link href="/resources/webinars">
              See All Webinars & Demos <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
