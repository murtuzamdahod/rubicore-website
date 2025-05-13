"use client";

import Link from "next/link";
import Image from "next/image"; // For placeholder images
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { featuredResources } from "@/lib/resource-data";

export default function FeaturedResourcesSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
            Featured Insights & Tools
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredResources.map((resource) => (
            <div
              key={resource.id}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-background hover:shadow-xl transition-shadow duration-300"
            >
              <Link href={resource.link} className="block">
                <div className="relative h-48 w-full">
                  <Image
                    src={resource.imageUrl}
                    alt={resource.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
              </Link>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm font-medium text-primary">
                  {resource.type}
                </p>
                <Link href={resource.link} className="block mt-2">
                  <h3 className="text-xl font-semibold text-primary hover:text-primary/80">
                    {resource.title}
                  </h3>
                </Link>
                <p className="mt-3 text-base text-muted-foreground flex-grow">
                  {resource.description}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">{resource.date}</p>
                  <Button variant="link" asChild className="p-0 text-primary hover:underline">
                    <Link href={resource.link}>
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
