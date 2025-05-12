// src/pages/resources/whitepapers/ai-roi-visual.tsx (Example Enhanced Page)
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowLeft, PiggyBank, TrendingUp, Smile, CheckCircle, Download,
  ShoppingCart, MessageCircle, LineChart, LucideProps // Icons for case studies
} from 'lucide-react';

// --- Structured Content Definition ---
interface CaseStudyItem {
  icon: keyof typeof CaseStudyIcons;
  title: string;
  text: string;
  color: string;
}
interface WhitepaperSection {
  type: string;
  level?: number;
  content?: string;
  style?: string;
  src?: string;
  alt?: string;
  caption?: string;
  items?: string[] | CaseStudyItem[]; 
}

const whitepaperSections: WhitepaperSection[] = [
    { type: 'heading', level: 1, content: 'Achieving Measurable ROI with AI Agents' },
    { type: 'paragraph', style: 'intro', content: 'Unlock efficiency, boost revenue, and gain a competitive edge by strategically implementing AI agents in your business operations.' },
    { type: 'image', src: '/images/news/ai-agents-roi.png', alt: 'Abstract AI visualization', caption: 'AI agents integrate deeply into business processes to drive value.' },

    { type: 'heading', level: 2, content: 'Introduction: The AI Agent Advantage' },
    { type: 'paragraph', content: "In today's fast-paced digital landscape, staying competitive requires leveraging cutting-edge technology. AI agents – intelligent software entities capable of autonomous action and learning – represent a paradigm shift. They move beyond simple automation, interacting dynamically with environments (digital or physical) to achieve specific business objectives, from streamlining workflows to revolutionizing customer engagement." },
    { type: 'paragraph', content: "Integrating AI agents isn't just about technological novelty; it's a strategic imperative offering tangible benefits: automating complex tasks, delivering hyper-personalized customer experiences, driving data-backed innovation, and optimizing operational efficiency at scale." },
    { type: 'divider' },

    { type: 'heading', level: 2, content: 'Navigating the Challenges in AI Agent Deployment' },
    { type: 'paragraph', content: 'While the potential is immense, successful AI agent implementation requires navigating several common hurdles:' },
    { type: 'orderedList', items: [
        "<strong>Data Foundation (Quality & Availability)</strong>: AI agents are data-hungry. Success hinges on access to large volumes of clean, relevant, and unbiased data. <em>Challenge: Integrating disparate data sources securely.</em>",
        "<strong>Seamless Technology Integration</strong>: Merging AI agents with legacy systems can be complex, often demanding significant IT infrastructure adjustments and robust API development.",
        "<strong>Bridging the Skills Gap</strong>: Effective deployment and management require specialized talent in machine learning, data science, and AI ethics – skills often in high demand.",
        "<strong>Ethical Guardrails & Privacy Assurance</strong>: Handling sensitive data necessitates stringent adherence to privacy regulations (like GDPR, CCPA) and transparent, ethical AI practices. <em>Concern: Avoiding algorithmic bias.</em>",
        "<strong>Fostering User Acceptance & Trust</strong>: Overcoming skepticism among employees and customers regarding reliability, job security, and data usage is crucial for adoption.",
        "<strong>Designing for Scalability</strong>: Solutions must be architected to handle increasing loads and evolving business needs without performance degradation or exponential cost increases.",
    ]},
    { type: 'divider' },

    { type: 'heading', level: 2, content: 'Evaluating the ROI Potential: Beyond the Hype' },
    { type: 'paragraph', content: 'Assessing the potential Return on Investment (ROI) for AI agent projects requires looking at both quantitative and qualitative impacts. Key drivers often include:' },
    { type: 'unorderedList', items: [
        "Cost Savings & Efficiency Gains",
        "Revenue Growth & Upselling Opportunities",
        "Enhanced Customer Experience (CX) & Retention",
        "Increased Productivity & Focus",
        "Error Reduction & Compliance",
        "Scalability & Agility",
        "Strategic Insights & Foresight",
     ]},
    { type: 'divider' },

    { type: 'heading', level: 2, content: 'Methodologies: Measuring What Matters' },
    { type: 'paragraph', content: 'Quantifying the success of AI initiatives requires robust measurement frameworks:' },
    { type: 'orderedList', items: [
        "<strong>Cost-Benefit Analysis (CBA)</strong>: Systematically compares total expected costs against total expected benefits. <em>Focus: Justifying the investment.</em>",
        "<strong>Return on Investment (ROI) Calculation</strong>: The classic formula ((Net Profit / Total Investment Cost) * 100). <em>Focus: Financial efficiency.</em>",
        "<strong>Payback Period</strong>: Calculates the time required for benefits to equal investment. <em>Focus: Risk assessment.</em>",
        "<strong>Total Cost of Ownership (TCO)</strong>: Encompasses all lifecycle costs. <em>Focus: Long-term planning.</em>",
        "<strong>Key Performance Indicators (KPIs)</strong>: Tracks specific metrics aligned with goals (CSAT, completion time, error rates). <em>Focus: Operational impact.</em>",
    ]},
    { type: 'divider' },

    { type: 'heading', level: 2, content: 'Best Practices for Maximizing AI Agent ROI' },
    { type: 'paragraph', content: 'To ensure your AI agent initiatives deliver optimal returns, adopt these best practices (highlighted separately below for emphasis):' },
     { type: 'unorderedList', items: [
        "Align with Core Business Objectives", "Choose High-Impact Use Cases", "Prioritize Data Quality",
        "Design for Scalability", "Ensure Seamless Integration", "Monitor & Optimize",
        "Foster AI Literacy", "Manage Change Effectively", "Uphold Ethical Standards", "Measure & Communicate ROI",
     ]},
    { type: 'divider' },

    { type: 'heading', level: 2, content: 'Real-World Impact: Case Study Snippets' },
    { type: 'caseStudyGrid', items: [
        { icon: 'ShoppingCart', title: 'E-commerce Personalization', text: 'A major online retailer uses AI to analyze behavior for hyper-personalized recommendations. <strong>Result: Illustrative 12% increase in AOV & 7% lift in conversion rates.</strong>', color: 'blue' },
        { icon: 'MessageCircle', title: 'Automated Customer Support', text: 'A SaaS provider deploys AI chatbots for Tier-1 queries, 24/7. <strong>Result: Illustrative 25% reduction in resolution time & 40% query deflection.</strong>', color: 'green' },
        { icon: 'LineChart', title: 'Predictive Supply Chain Analytics', text: 'A manufacturer uses AI to forecast demand and optimize inventory. <strong>Result: Illustrative 18% reduction in stockouts & 10% lower holding costs.</strong>', color: 'purple' },
    ]},
    { type: 'paragraph', style: 'disclaimer', content: 'Note: Case study results are illustrative examples representing potential outcomes.' },
    { type: 'divider' },

    { type: 'heading', level: 2, content: 'Conclusion: Seizing the AI Opportunity'},
    { type: 'paragraph', content: 'AI agents offer a powerful toolkit for transforming business operations and achieving significant ROI. While challenges exist, a strategic approach focused on clear objectives, quality data, robust measurement, ethical implementation, and continuous optimization unlocks immense value.'},
    { type: 'paragraph', content: 'By learning from best practices and real-world successes, organizations can harness the power of AI agents to not only improve their bottom line but also build a foundation for sustained growth and innovation in an increasingly intelligent world.'}
];
// --- End Structured Content ---


// --- Helper Icon Map for Case Studies ---
const CaseStudyIcons: { [key: string]: React.FC<LucideProps> } = {
    ShoppingCart: ShoppingCart,
    MessageCircle: MessageCircle,
    LineChart: LineChart,
    // Add more icons as needed
};

// --- The Page Component ---
export default function EnhancedVisualAiRoiPage() {

  // --- Content Renderer Function ---
  const renderSection = (section: WhitepaperSection, index: number): React.ReactNode => {
    switch (section.type) {
      case 'heading':
        const Tag = `h${section.level || 2}` as React.ElementType;
        const sizeClass = section.level === 1 ? 'text-3xl md:text-4xl font-bold mt-8 mb-4' :
                          section.level === 2 ? 'text-2xl md:text-3xl font-semibold mt-6 mb-3' :
                          'text-xl font-semibold mt-4 mb-2';
        return <Tag key={index} className={sizeClass}>{section.content}</Tag>;

      case 'paragraph':
        let paraClass = 'mb-4 text-base md:text-lg leading-relaxed text-gray-700';
        if (section.style === 'intro') paraClass += ' text-xl text-gray-600';
        if (section.style === 'disclaimer') paraClass += ' text-sm text-gray-500 italic';
        return <p key={index} className={paraClass} dangerouslySetInnerHTML={{ __html: section.content || "" }}></p>;

      case 'image':
        return (
          <figure key={index} className="my-6 md:my-8">
            <Image
              src={section.src || ""}
              alt={section.alt || 'Whitepaper image'}
              width={1000} 
              height={500} 
              className="rounded-lg shadow-md object-cover w-full h-auto"
            />
            {section.caption && <figcaption className="text-center text-sm text-gray-500 mt-2">{section.caption}</figcaption>}
          </figure>
        );

      case 'orderedList':
        return (
          <ol key={index} className="list-decimal list-inside space-y-2 mb-4 pl-4 text-gray-700 text-base md:text-lg">
            {(section.items as string[])?.map((item: string, i: number) => <li key={i} dangerouslySetInnerHTML={{ __html: item }}></li>)}
          </ol>
        );

      case 'unorderedList':
         return (
            <ul key={index} className="list-disc list-inside space-y-2 mb-4 pl-4 text-gray-700 text-base md:text-lg">
                {(section.items as string[])?.map((item: string, i: number) => <li key={i} dangerouslySetInnerHTML={{ __html: item }}></li>)}
            </ul>
         );

      case 'caseStudyGrid':
          const colors: { [key: string]: string } = {
              blue: 'border-blue-500 bg-blue-50',
              green: 'border-green-500 bg-green-50',
              purple: 'border-purple-500 bg-purple-50',
          };
          return (
              <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6 md:my-8">
                  {(section.items as CaseStudyItem[])?.map((study, i: number) => {
                      const IconComponent = CaseStudyIcons[study.icon] || ShoppingCart; 
                      const borderClass = colors[study.color] || 'border-gray-300 bg-gray-50';
                      return (
                          <div key={i} className={`p-4 border-l-4 rounded-r-lg shadow-sm ${borderClass}`}>
                              <h4 className="font-semibold mb-2 flex items-center text-lg">
                                 <IconComponent className="mr-2 h-5 w-5 flex-shrink-0" />
                                 {study.title}
                              </h4>
                              <p className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: study.text }}></p>
                          </div>
                      );
                  })}
              </div>
          );

      case 'divider':
        return <hr key={index} className="my-6 md:my-8 border-gray-200" />;

      default:
        return null;
    }
  };
  // --- End Renderer ---


  return (
    <div className="bg-gray-50 min-h-screen"> {/* Subtle page background */}

      {/* 1. Banner Section - Using a placeholder background image */}
      <section
        className="w-full bg-cover bg-center text-white py-16 md:py-24 relative"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/80 via-indigo-700/80 to-purple-700/80"></div>

        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 drop-shadow-md">
            Achieving Measurable ROI with AI Agents
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto drop-shadow-sm">
            Unlock efficiency, boost revenue, and gain a competitive edge by strategically implementing AI agents.
          </p>
        </div>
      </section>

      {/* 2. Main Content Area */}
      <div className="container mx-auto px-4 md:px-6 py-10 md:py-12">

        {/* Back Button */}
        <Button variant="link" asChild className="mb-6 text-base text-gray-600 hover:text-gray-900">
          <Link href="/resources/whitepapers"> {/* Adjust link */}
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Whitepapers
          </Link>
        </Button>

        {/* 3. Highlighted Stats/Benefits Section */}
        <section className="mb-10 md:mb-12 p-6 bg-white rounded-lg shadow-md border border-gray-200">
           <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Key ROI Drivers</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
             {/* Stat Card Example */}
             <Card className="bg-gradient-to-br from-green-50 to-white border-green-200">
               <CardHeader className="flex flex-row items-center justify-between pb-2">
                 <CardTitle className="text-sm font-medium text-green-800">Cost Savings</CardTitle>
                 <PiggyBank className="h-5 w-5 text-green-600" />
               </CardHeader>
               <CardContent>
                 <div className="text-2xl font-bold text-green-700">15-30%</div>
                 <p className="text-xs text-green-600">Illustrative OpEx reduction.</p>
               </CardContent>
             </Card>
              {/* Stat Card Example */}
             <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-200">
               <CardHeader className="flex flex-row items-center justify-between pb-2">
                 <CardTitle className="text-sm font-medium text-blue-800">Revenue Growth</CardTitle>
                 <TrendingUp className="h-5 w-5 text-blue-600" />
               </CardHeader>
               <CardContent>
                 <div className="text-2xl font-bold text-blue-700">10-15%</div>
                 <p className="text-xs text-blue-600">Illustrative sales lift.</p>
               </CardContent>
             </Card>
              {/* Stat Card Example */}
             <Card className="bg-gradient-to-br from-yellow-50 to-white border-yellow-300">
               <CardHeader className="flex flex-row items-center justify-between pb-2">
                 <CardTitle className="text-sm font-medium text-yellow-800">Improved CSAT</CardTitle>
                 <Smile className="h-5 w-5 text-yellow-600" />
               </CardHeader>
               <CardContent>
                 <div className="text-2xl font-bold text-yellow-700">+10-20 pts</div>
                 <p className="text-xs text-yellow-600">Illustrative satisfaction score increase.</p>
               </CardContent>
             </Card>
           </div>
         </section>

        {/* 4. Rendered Whitepaper Content */}
        <article className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-200">
          {/* Render the structured content */}
          {whitepaperSections.map(renderSection)}
        </article>

        {/* 5. Highlighted Best Practices Section */}
         <section className="mt-10 md:mt-12 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg shadow border border-indigo-100">
            <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Keys to Success</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 text-gray-700">
                <div className="flex items-center"><CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" /><span>Align with Business Objectives</span></div>
                <div className="flex items-center"><CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" /><span>Choose High-Impact Use Cases</span></div>
                <div className="flex items-center"><CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" /><span>Prioritize Data Quality</span></div>
                <div className="flex items-center"><CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" /><span>Monitor, Iterate & Optimize</span></div>
                <div className="flex items-center"><CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" /><span>Foster AI Literacy</span></div>
                <div className="flex items-center"><CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" /><span>Measure & Communicate ROI</span></div>
            </div>
         </section>

        {/* 6. Call to Action Section */}
        <section className="mt-12 md:mt-16 text-center py-10 px-6 bg-white rounded-lg shadow-lg border border-gray-200">
           <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">Ready to Explore AI for Your Business?</h2>
           <p className="text-muted-foreground mb-6 max-w-xl mx-auto text-lg">Download the full whitepaper PDF or contact our experts to discuss how AI agents can drive ROI for your specific needs.</p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a href="/api/generate-pdf/roi-whitepaper">
               <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Download className="mr-2 h-5 w-5" /> Download PDF
               </Button>
             </a>
             <Link href="/contact">
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Contact Sales
                </Button>
             </Link>
           </div>
        </section>

      </div>
    </div>
  );
}
