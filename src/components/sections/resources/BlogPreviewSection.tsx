import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { featuredResources } from '@/lib/resource-data'; // Using placeholder data for now
import { ArrowRight } from 'lucide-react';

// TODO: Replace placeholder data with actual data fetching/filtering logic
const blogPosts = featuredResources.filter(res => res.type === 'Blog Post').slice(0, 3); // Show max 3

export default function BlogPreviewSection() {
  return (
    <section id="blog" className="w-full py-16 md:py-24 lg:py-32 bg-muted/40"> {/* Added id="blog" */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Latest Blog Posts
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Read our latest insights and updates on agentic AI.
          </p>
        </div>

        {blogPosts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.id} className="flex flex-col">
                <CardHeader>
                  {/* Placeholder for image if needed */}
                  {/* <img src={post.imageUrl} alt={post.title} className="mb-4 rounded-md" /> */}
                  <CardTitle className="text-primary">{post.title}</CardTitle>
                  <CardDescription>{post.date}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{post.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" asChild className="p-0 h-auto">
                    <Link href={post.link}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No blog posts available yet.</p>
        )}

        <div className="mt-12 text-center">
          <Button asChild>
            <Link href="/resources/blog">
              See All Blog Posts <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
