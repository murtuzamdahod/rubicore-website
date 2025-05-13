"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MapPin, Briefcase, Search, Filter } from "lucide-react";
import React from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Placeholder data - replace with actual job openings or fetch from an API/CMS
const jobOpenings = [
  {
    id: "swe-001",
    title: "Senior Backend Engineer (Python/FastAPI)",
    department: "Engineering",
    location: "Tech City, CA (Hybrid)",
    type: "Full-time",
    description: "Design and build scalable backend services for our Agentic AI platform. Strong experience with Python, FastAPI, and cloud technologies required.",
    applyLink: "/careers/apply/swe-001",
  },
  {
    id: "ml-002",
    title: "AI/ML Research Scientist (LLMs & Agents)",
    department: "Research & Development",
    location: "Remote (US)",
    type: "Full-time",
    description: "Conduct cutting-edge research in large language models, agentic frameworks, and reasoning. PhD or equivalent experience preferred.",
    applyLink: "/careers/apply/ml-002",
  },
  {
    id: "pd-003",
    title: "Product Manager - Enterprise AI Solutions",
    department: "Product",
    location: "Tech City, CA (On-site)",
    type: "Full-time",
    description: "Define and drive the product roadmap for our enterprise AI offerings, working closely with customers and engineering.",
    applyLink: "/careers/apply/pd-003",
  },
  {
    id: "sales-004",
    title: "Enterprise Account Executive",
    department: "Sales",
    location: "New York, NY",
    type: "Full-time",
    description: "Drive sales of RubiCore's platform to large enterprise clients. Proven track record in B2B tech sales.",
    applyLink: "/careers/apply/sales-004",
  },
];

const departments = ["All Departments", "Engineering", "Research & Development", "Product", "Sales", "Marketing", "Operations"];
const locations = ["All Locations", "Tech City, CA (Hybrid)", "Remote (US)", "New York, NY", "London, UK"];


export default function OpenPositionsSection() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedDepartment, setSelectedDepartment] = React.useState(departments[0]);
  const [selectedLocation, setSelectedLocation] = React.useState(locations[0]);

  const filteredOpenings = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === "All Departments" || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === "All Locations" || job.location === selectedLocation;
    return matchesSearch && matchesDepartment && matchesLocation;
  });

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
            Current Openings
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Find your next challenge and grow with us.
          </p>
        </div>

        {/* Filtering UI */}
        <div className="mb-12 p-6 bg-muted/40 rounded-lg shadow">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 items-end">
            <div>
              <label htmlFor="job-search" className="block text-sm font-medium text-foreground mb-1">Search by Keyword</label>
              <div className="relative">
                <Input
                  id="job-search"
                  type="text"
                  placeholder="e.g., Engineer, Product..."
                  value={searchTerm}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                  className="pr-10"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
            </div>
            <div>
              <label htmlFor="department-filter" className="block text-sm font-medium text-foreground mb-1">Department</label>
              <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                <SelectTrigger id="department-filter"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {departments.map(dept => <SelectItem key={dept} value={dept}>{dept}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="location-filter" className="block text-sm font-medium text-foreground mb-1">Location</label>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger id="location-filter"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {locations.map(loc => <SelectItem key={loc} value={loc}>{loc}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <Button onClick={() => { /* Implement filter logic or rely on state change */ }} className="w-full sm:w-auto lg:mt-7">
              <Filter className="w-4 h-4 mr-2" /> Filter Results
            </Button>
          </div>
        </div>

        {filteredOpenings.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredOpenings.map((job) => (
              <div
                key={job.id}
                className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {job.title}
                </h3>
                <div className="flex items-center text-sm text-muted-foreground mb-1">
                  <Briefcase className="w-4 h-4 mr-2 flex-shrink-0" /> {job.department}
                </div>
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4 mr-2 flex-shrink-0" /> {job.location} ({job.type})
                </div>
                <p className="text-base text-foreground mb-4 flex-grow">
                  {job.description}
                </p>
                <Button asChild className="mt-auto">
                  <Link href={job.applyLink}>Learn More & Apply</Link>
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground">No openings match your criteria.</h3>
            <p className="text-muted-foreground mt-2">Try adjusting your filters or check back later!</p>
          </div>
        )}
         <div className="mt-16 text-center">
            <p className="text-lg text-foreground">
                Don't see a role that fits? We're always looking for talented individuals.
            </p>
            <Button variant="link" asChild className="mt-2 text-xl text-primary">
                <Link href="/contact?subject=General+Career+Inquiry">
                    Get in Touch
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
