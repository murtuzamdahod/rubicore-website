import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { featuredResources } from '@/lib/resource-data'; // Using placeholder data for now
import { ArrowRight } from 'lucide-react';

// TODO: Replace placeholder data with actual data fetching/filtering logic
const caseStudies = featuredResources.filter(res => res.type === 'Case Study').slice(0, 3); // Show max 3

export default function CaseStudiesPreviewSection() {
  return (
    <section id="casestudies" className="w-full py-16 md:py-24 lg:py-32 bg-background"> {/* Added id="casestudies", Alternating background */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Featured Case Studies
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See how RubiCore drives real-world results.
          </p>
        </div>

        {caseStudies.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <Card key={study.id} className="flex flex-col">
                <CardHeader>
                  {/* Placeholder for image if needed */}
                  {/* <img src={study.imageUrl} alt={study.title} className="mb-4 rounded-md" /> */}
                  <CardTitle className="text-primary">{study.title}</CardTitle>
                  <CardDescription>{study.date}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{study.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" asChild className="p-0 h-auto">
                    <Link href={study.link}>
                      Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No case studies available yet.</p>
        )}

        <div className="mt-12 text-center">
          <Button asChild>
            <Link href="/resources/case-studies">
              See All Case Studies <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
