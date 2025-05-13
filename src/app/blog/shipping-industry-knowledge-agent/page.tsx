import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Ship, Anchor, Navigation2, Container, Compass, FileSearch, CheckCircle2, AlertTriangle, Timer, BarChart3, Twitter, Linkedin } from "lucide-react";
import { Glow } from "@/components/ui/glow";
import { Card } from "@/components/ui/card";

export const metadata = {
  title: "Navigating the Tides of Information: How a RubiCore Knowledge Agent Revolutionizes the Shipping Industry",
  description: "Discover how RubiCore's specialized AI knowledge base agent helps the shipping and maritime industry improve efficiency, safety, and decision-making.",
};

// Placeholder for author and date - can be made dynamic later
const author = {
  name: "RubiCore AI Team",
  date: "May 10, 2025", // Example date
  imageUrl: "/images/logo/rubicore-icon-color.png", // Replace with actual author/company image
};

export default function ShippingKnowledgeAgentBlogPost() {
  const sections = [
    { id: "operational-efficiency", title: "Operational Efficiency: Streamlining Logistics in Real Time" },
    { id: "enhanced-safety", title: "Enhanced Safety: Predicting Risks Before They Escalate" },
    { id: "data-driven-decisions", title: "Data-Driven Decision-Making: Turning Information into Action" },
    { id: "unified-knowledge", title: "The Power of Unified Knowledge: Regulations, Documentation, and Real-Time Data" },
    { id: "conclusion", title: "Conclusion: Charting a Smarter Future with RubiCore" }
  ];

  return (
    <main className="flex flex-col items-center justify-center relative min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6 py-16 sm:py-20 lg:py-24">
        <article className="prose dark:prose-invert max-w-2xl mx-auto space-y-12">
          {/* Back to Blog Link */}
          <div className="mb-8">
            <Button variant="link" asChild className="p-0 text-sm text-ruby-600 dark:text-ruby-500 hover:underline">
              <Link href="/resources#blog">
                <ArrowLeft className="w-4 h-4" />
                Back to Resources
              </Link>
            </Button>
          </div>

          {/* Blog Header */}
          <div className="mb-8 border-b pb-8 border-gray-200 dark:border-gray-700">
            <h1 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl md:text-5xl mb-4">
              {metadata.title}
            </h1>
            <div className="flex items-center space-x-3">
              {/* <Image src={author.imageUrl} alt={author.name} width={40} height={40} className="rounded-full bg-gray-200 dark:bg-gray-700" /> */}
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{author.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{author.date}</p>
              </div>
            </div>
          </div>
          
          {/* Featured image for the blog post */}
          {/* Featured Image */}
          <div className="relative w-full h-64 md:h-80 lg:h-96 mb-12 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1674478006575-90f17920f3a3"
              alt="Container ship in port with advanced logistics systems"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ruby-600/20 to-blue-600/20 dark:from-ruby-900/30 dark:to-blue-900/30" />
            <div className="relative h-full flex items-center justify-center">
              <Glow>
                <div className="flex items-center gap-8">
                  <Ship className="w-24 h-24 text-ruby-600 dark:text-ruby-400" />
                  <Navigation2 className="w-20 h-20 text-blue-600 dark:text-blue-400" />
                  <Compass className="w-24 h-24 text-ruby-600 dark:text-ruby-400" />
                </div>
              </Glow>
            </div>
          </div>

          {/* Table of Contents */}
          <Card className="p-8 mb-12 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
            <nav>
              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-ruby-600 dark:text-ruby-400 hover:underline flex items-center gap-2"
                    >
                      <Anchor className="w-4 h-4" />
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Card>

          <p className="lead text-xl text-gray-600 dark:text-gray-400">
            The global shipping industry, a backbone of international trade, faces relentless pressure to optimize operations, mitigate risks, and adapt to ever-evolving regulations. With a significant portion of goods transported by sea, companies grapple with fragmented data, complex compliance requirements, and the need for real-time decision-making. Enter RubiCore’s Knowledge Agent—a specialized AI-powered solution leveraging Retrieval-Augmented Generation (RAG) to transform how maritime professionals access, analyze, and act on critical information. By synthesizing vast datasets, internal documentation, and regulatory frameworks, this tool empowers stakeholders to navigate challenges with unprecedented precision.
          </p>

          <h2 id="operational-efficiency" className="flex items-center gap-3 scroll-mt-20">
            <Container className="w-8 h-8 text-ruby-600 dark:text-ruby-400" />
            Operational Efficiency: Streamlining Logistics in Real Time
          </h2>
          <p>
            Shipping agents and logistics managers juggle countless tasks—from cargo scheduling to customs clearance and coordination with authorities—that demand accuracy and speed. RubiCore’s Knowledge Agent can significantly automate and assist these processes by:
          </p>
          {/* Image Section */}
          <div className="mb-12">
              <div className="space-y-2">
                <div className="relative aspect-video">
                  <Image
                    src="https://www.idom.com/wp-content/uploads/2024/05/PCS-IA.jpg"
                    alt="Modern shipping port with automated systems"
                    fill
                    className="rounded-lg shadow-lg object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    loading="eager"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0cHBwcHx4eHx8fHh4fIiAmJiYmJiYiIiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJib/2wBDAhUXFx4XHh8cHB8fIiEmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJib/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center italic">
                  Modern port operations enhanced by RubiCore&apos;s AI system for optimal efficiency
                </p>
              </div>
          </div>

          <div className="grid gap-6 my-12">
            <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] bg-white/50 dark:bg-gray-800/50">
              <div className="flex items-start gap-4">
                <Navigation2 className="w-6 h-6 text-primary mt-1" />
                <div>
                  <strong className="text-primary">Optimizing routes dynamically:</strong>
                  <p className="text-muted-foreground mt-1">
                    Analyzing weather patterns, port congestion (as highlighted by MITAGS regarding efficient docking), fuel costs, and historical traffic data to recommend the most efficient paths. This can lead to reduced transit times and fuel consumption.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] bg-white/50 dark:bg-gray-800/50">
              <div className="flex items-start gap-4">
                <FileSearch className="w-6 h-6 text-primary mt-1" />
                <div>
                  <strong className="text-primary">Automating documentation:</strong>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Instantly generating or verifying bills of lading, customs forms, and compliance reports, cutting administrative workloads. This addresses the documentation handling role of shipping agents.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] bg-white/50 dark:bg-gray-800/50">
              <div className="flex items-start gap-4">
                <BarChart3 className="w-6 h-6 text-primary mt-1" />
                <div>
                  <strong className="text-primary">Enhancing supply chain visibility:</strong>
                  <p className="text-muted-foreground mt-1">
                    Aggregating data from IoT sensors, ERP systems, and port call data (destination, arrival times) to provide real-time updates on cargo status, warehouse capacity, and delivery timelines, helping to predict delays and manage inventory more accurately (similar to points from CMR Berkeley and Nexocode).
                  </p>
                </div>
              </div>
            </Card>
          </div>
          <p>
            For example, a freight company using a sophisticated knowledge agent could see significant reductions in fuel costs through predictive route adjustments and eliminate delays caused by paperwork errors by having instant access to correct procedures and forms.
          </p>

          <h2 id="enhanced-safety" className="flex items-center gap-3 scroll-mt-20">
            <AlertTriangle className="w-8 h-8 text-ruby-600 dark:text-ruby-400" />
            Enhanced Safety: Predicting Risks Before They Escalate
          </h2>
          <p>
            Safety remains a top priority in an industry where human error and mechanical failures can lead to frequent accidents. RubiCore’s AI mitigates risks by:
          </p>
          {/* Image Section */}
          <div className="mb-12">
              <div className="space-y-2">
                <div className="relative aspect-video">
                  <Image
                    src="https://knowhow.distrelec.com/wp-content/uploads/2023/07/iStock-1277731095.jpg"
                    alt="Digital interface showing shipping analytics"
                    fill
                    className="rounded-lg shadow-lg object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    loading="eager"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0cHBwcHx4eHx8fHh4fIiAmJiYmJiYiIiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJib/2wBDAhUXFx4XHh8cHB8fIiEmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJib/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center italic">
                  Real-time analytics dashboard powered by RubiCore&apos;s Knowledge Agent
                </p>
              </div>
          </div>

          <div className="grid gap-6 my-12">
            <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] bg-white/50 dark:bg-gray-800/50">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-ruby-600 dark:text-ruby-400 mt-1" />
                <div>
                  <strong className="text-gray-900 dark:text-white">Identifying hazards proactively:</strong>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Scanning maintenance logs, sensor data, historical incident reports, and even analyzing traffic patterns to flag potential equipment failures or unsafe routes, thereby reducing collision risks (MITAGS).
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] bg-white/50 dark:bg-gray-800/50">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-ruby-600 dark:text-ruby-400 mt-1" />
                <div>
                  <strong className="text-gray-900 dark:text-white">Ensuring regulatory compliance:</strong>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Cross-referencing operations with international standards like SOLAS and IMO guidelines to avert fines or detention. A knowledge agent can provide instant access to these complex regulations.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] bg-white/50 dark:bg-gray-800/50">
              <div className="flex items-start gap-3">
                <Timer className="w-6 h-6 text-ruby-600 dark:text-ruby-400 mt-1" />
                <div>
                  <strong className="text-gray-900 dark:text-white">Predictive maintenance:</strong>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Alerting crews to replace parts or inspect systems weeks before issues arise, reducing unplanned downtime and preventing accidents (LinkedIn research).
                  </p>
                </div>
              </div>
            </Card>
          </div>
          <p>
            Imagine a container ship operator receiving predictive alerts from RubiCore’s Knowledge Agent about a potential engine component issue, allowing for preemptive action and avoiding a costly and dangerous mid-ocean failure.
          </p>

          <h2 id="data-driven-decisions" className="flex items-center gap-3 scroll-mt-20">
            <BarChart3 className="w-8 h-8 text-ruby-600 dark:text-ruby-400" />
            Data-Driven Decision-Making: Turning Information into Action
          </h2>
          <p>
            The shipping industry generates petabytes of data daily, yet organizations often struggle to harness its full potential. RubiCore’s Knowledge Agent bridges this gap by:
          </p>
          {/* Image Section */}
          <div className="mb-12">
              <div className="space-y-2">
                <div className="relative aspect-video">
                  <Image
                    src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3"
                    alt="Maritime safety and navigation systems"
                    fill
                    className="rounded-lg shadow-lg object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    loading="eager"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0cHBwcHx4eHx8fHh4fIiAmJiYmJiYiIiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJib/2wBDAhUXFx4XHh8cHB8fIiEmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJib/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center italic">
                  Advanced navigation and safety systems integrated with RubiCore&apos;s platform
                </p>
              </div>
          </div>

          <div className="grid gap-6 my-12">
            <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] bg-white/50 dark:bg-gray-800/50">
              <div className="flex items-start gap-4">
                <Container className="w-6 h-6 text-ruby-600 dark:text-ruby-400 mt-1" />
                <div>
                  <strong className="text-gray-900 dark:text-white">Centralizing fragmented data:</strong>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Integrating siloed sources like port databases, weather APIs, internal manuals, market performance insights (Spire), and standardized industry data (CMR Berkeley on data quality).
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] bg-white/50 dark:bg-gray-800/50">
              <div className="flex items-start gap-3">
                <Compass className="w-6 h-6 text-ruby-600 dark:text-ruby-400 mt-1" />
                <div>
                  <strong className="text-gray-900 dark:text-white">Delivering actionable insights:</strong>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Using natural language queries to answer complex questions, such as, &quot;What are the current customs clearance requirements for hazardous materials in Singapore?&quot; or &quot;Based on current weather forecasts and port congestion, what is the optimal ETA for Vessel XYZ to Port of LA?&quot;
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] bg-white/50 dark:bg-gray-800/50">
              <div className="flex items-start gap-3">
                <Timer className="w-6 h-6 text-ruby-600 dark:text-ruby-400 mt-1" />
                <div>
                  <strong className="text-gray-900 dark:text-white">Enabling scenario modeling:</strong>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Simulating the impact of fuel price fluctuations, labor shortages, or regulatory changes on profitability by quickly accessing and processing relevant data.
                  </p>
                </div>
              </div>
            </Card>
          </div>
          <p>
            For instance, a logistics firm could use RubiCore to rapidly assess alternative routes and schedules during unforeseen disruptions like a canal blockage, minimizing losses by leveraging instantly accessible, synthesized information.
          </p>

          <h2 id="unified-knowledge" className="flex items-center gap-3 scroll-mt-20">
            <FileSearch className="w-8 h-8 text-ruby-600 dark:text-ruby-400" />
            The Power of Unified Knowledge: Regulations, Documentation, and Real-Time Data
          </h2>
          <p>
            Maritime operations rely on navigating dense regulatory frameworks (IMO, DCSA standards mentioned by CMR Berkeley) and internal protocols. RubiCore’s AI excels here by:
          </p>
          {/* Image Section */}
          <div className="mb-12">
              <div className="space-y-2">
                <div className="relative aspect-video">
                  <Image
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758"
                    alt="Digital documentation and regulatory compliance systems"
                    fill
                    className="rounded-lg shadow-lg object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    loading="eager"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0cHBwcHx4eHx8fHh4fIiAmJiYmJiYiIiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJib/2wBDAhUXFx4XHh8cHB8fIiEmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJib/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center italic">
                  Unified regulatory compliance and documentation management through RubiCore
                </p>
              </div>
          </div>

          <div className="grid gap-6 my-12">
            <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] bg-white/50 dark:bg-gray-800/50">
              <div className="flex items-start gap-4">
                <FileSearch className="w-6 h-6 text-ruby-600 dark:text-ruby-400 mt-1" />
                <div>
                  <strong className="text-gray-900 dark:text-white">Instant regulatory access:</strong>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Providing up-to-date summaries of local customs laws, emissions regulations, or safety protocols, ensuring compliance across diverse jurisdictions.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] bg-white/50 dark:bg-gray-800/50">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-ruby-600 dark:text-ruby-400 mt-1" />
                <div>
                  <strong className="text-gray-900 dark:text-white">Contextualizing internal docs:</strong>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Enabling crews to quickly find answers in complex operational manuals, safety procedures, or vessel-specific documentation. For example, &quot;What is the emergency shutdown procedure for the main engine on Vessel ABC?&quot;
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] bg-white/50 dark:bg-gray-800/50">
              <div className="flex items-start gap-3">
                <BarChart3 className="w-6 h-6 text-ruby-600 dark:text-ruby-400 mt-1" />
                <div>
                  <strong className="text-gray-900 dark:text-white">Leveraging real-time feeds:</strong>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Integrating live data on weather, geopolitical events, port delays, or security alerts to adjust strategies mid-voyage and provide crews with the most current operational picture.
                  </p>
                </div>
              </div>
            </Card>
          </div>
          <p>
            A shipping agent could significantly reduce customs clearance times by using RubiCore to auto-verify documentation against country-specific requirements and flag missing permits or outdated information instantly.
          </p>

          <h2 id="conclusion" className="flex items-center gap-3 scroll-mt-20">
            <CheckCircle2 className="w-8 h-8 text-ruby-600 dark:text-ruby-400" />
            Conclusion: Charting a Smarter Future with RubiCore
          </h2>
          <p>
            RubiCore’s Knowledge Agent isn’t just another digital tool—it’s a paradigm shift for the shipping industry. By transforming disjointed data from internal documents, external regulations, and real-time feeds into actionable, easily accessible intelligence, it empowers organizations to operate more safely, efficiently, and competitively. As global trade continues to grow and regulatory landscapes become more complex, the ability to make informed decisions swiftly, backed by a comprehensive knowledge base, will define the leaders in the maritime sector.
          </p>
          <p>
            With RubiCore, maritime professionals are no longer navigating a sea of overwhelming information or relying on outdated manuals. Instead, they sail ahead with confidence, equipped with an AI co-pilot that turns their collective knowledge and external data into their greatest operational asset. The importance of industry collaboration and data standardization, as highlighted by Spire and CMR Berkeley, will further enhance the capabilities of such AI agents, paving the way for a truly interconnected and intelligent maritime ecosystem.
          </p>
        </article>

        {/* Share Section */}
        <div className="mt-16 flex justify-center">
          <Card className="p-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm w-full max-w-2xl shadow-lg">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-6">Share this article</h3>
              <div className="flex justify-center gap-6">
                <Button variant="outline" size="lg" className="hover:bg-blue-50 dark:hover:bg-blue-900/20">
                  <Link href="https://twitter.com/intent/tweet" className="flex items-center gap-3">
                    <Twitter className="w-5 h-5" />
                    Share on Twitter
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="hover:bg-blue-50 dark:hover:bg-blue-900/20">
                  <Link href="https://www.linkedin.com/sharing/share-offsite/" className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5" />
                    Share on LinkedIn
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}
