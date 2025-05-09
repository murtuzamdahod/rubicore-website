import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, Search, FileText, Code, DatabaseZap, Workflow, Scaling, Palette, BrainCog, Orbit, Building } from "lucide-react"; // Example icons

const agentProfiles = [
  {
    title: "Deep Research & Analysis Agent",
    headline: "Autonomous Research, Insight Generation, and Foresight",
    description: "Executes multi-step, multi-modal research strategies autonomously. Plans approach, gathers information from diverse web, academic, and proprietary sources (text, images, data tables), evaluates and synthesizes data critically, and produces structured, evidence-backed reports, insights, or recommendations with explainable conclusions and confidence scores.",
    features: [
      "Autonomous planning & dynamic tool use (browsing, API calls to databases like ArXiv, PubMed, financial data)",
      "multi-source/multi-modal data ingestion",
      "critical reasoning for synthesis",
      "configurable research scope",
      "governed data access",
      "advanced comparative analysis frameworks, conflicting evidence resolution, hypothesis generation & testing, anomaly detection, and basic trend forecasting.",
      "Advanced: Self-correction of research strategy, proactive knowledge gap ID, Simulation Agent integration.",
    ],
    useCases: "Market & competitive intelligence, product research, scientific literature reviews, due diligence reporting, geopolitical risk assessment, R&D trend analysis.",
    differentiator: "Goes beyond information retrieval to perform analytical reasoning, synthesis, and even predictive exploration, acting like a team of analysts with enterprise control and explainability.",
    icon: Search,
    link: "/platform/agent-types#deep-research-analysis-agent"
  },
  {
    title: "Enterprise Knowledge Q&A Agent (Advanced RAG+ & Knowledge Synthesis)",
    headline: "Trusted, Explainable Answers & Insights from Your Enterprise Knowledge Ecosystem",
    description: "Uses advanced Retrieval-Augmented Generation (RAG), knowledge graph traversal, and data analysis techniques to answer complex questions using your internal knowledge bases (wikis, SharePoint, Confluence, PDFs, databases, code repositories, chat logs). Retrieves relevant information, synthesizes it across disparate sources, and formulates context-aware answers with verifiable source citations, traceable reasoning paths, and confidence levels.",
    features: [
      "Vector search, knowledge graph querying, natural language query understanding, source attribution, real-time indexing, strict adherence to allowed content",
      "multi-document/multi-source reasoning, hierarchical knowledge navigation, conflicting information resolution with justification, proactive knowledge discovery, and continuous learning from user feedback and new data.",
      "Advanced: Auto-update knowledge graphs, flag outdated/contradictory info, personalized responses.",
    ],
    useCases: "Employee help desk (IT, HR), customer self-service, compliance & SOP lookup, expert system assistance, sales enablement, research support, onboarding.",
    differentiator: "Delivers auditable, explainable, and continuously improving answers, transforming enterprise information into actionable, trustworthy knowledge.",
    icon: FileText,
    link: "/platform/agent-types#enterprise-knowledge-agent"
  },
  {
    title: "Code & Software Intelligence Agent",
    headline: "Semantic Codebase Understanding, Generation, and Lifecycle Automation",
    description: "Assists developers throughout the software development lifecycle. Indexes repositories, understands code semantics (multiple languages), answers questions, generates code (functions, classes, tests), identifies bugs, suggests optimizations, and analyzes software architecture.",
    features: [
      "Semantic code search, multi-language support (Python, Java, C#, JS, etc.), cross-repo analysis, Git integration, code summarization",
      "automated code generation and documentation, refactoring suggestions, security vulnerability detection (SAST principles) with remediation advice, dependency impact analysis, architecture visualization, and CI/CD pipeline integration for automated checks and quality gates.",
      "Advanced: Predictive bug detection, boilerplate generation, legacy code migration aid, performance profiling.",
    ],
    useCases: "Developer onboarding & support, code review automation, security vulnerability scanning, debugging assistance, legacy code modernization, architectural analysis, test case generation.",
    differentiator: "Acts as an AI pair programmer and architect, boosting engineering velocity, quality, and security across the entire SDLC.",
    icon: Code,
    link: "/platform/agent-types#code-intelligence-agent"
  },
  {
    title: "SQL & Multi-Source Data Analytics Agent (NL to BI)",
    headline: "Democratize Data Insights with Natural Language Querying & Automated Analytics",
    description: "Enables users to query databases (SQL, NoSQL), data warehouses, data lakes, and even spreadsheets (CSV, Excel) using natural language. Translates questions into optimized queries, retrieves data, performs analysis, generates visualizations, and provides narrative summaries of findings.",
    features: [
      "Supports diverse data sources, understands schemas and data relationships, permission-aware execution, chart generation, contextual follow-up questions",
      "multi-database/multi-table joins via NL, basic statistical analysis, anomaly detection in results, trend identification, and predictive analytics capabilities (e.g., forecasting based on historical data).",
      "Advanced: Auto-generate BI dashboards, proactive data change alerts, learn user presentation preferences.",
    ],
    useCases: "Ad-hoc reporting, operational metrics tracking, financial analysis, sales forecasting, inventory optimization, customer behavior analysis, business intelligence for non-technical users.",
    differentiator: "Transforms natural language questions into rich business intelligence, empowering data-driven decisions across the organization without requiring deep technical expertise.",
    icon: DatabaseZap,
    link: "/platform/agent-types#sql-data-analytics-agent"
  },
  {
    title: "Intelligent Process Automation & Orchestration Agent",
    headline: "Orchestrate and Optimize Complex End-to-End Business Processes with Adaptive AI",
    description: "Automates and orchestrates multi-step, cross-functional business workflows by intelligently interacting with various enterprise systems (ERP, CRM, ITSM, custom apps) through APIs, RPA (via integration), or direct interaction. Manages task execution, exception handling, and resource allocation.",
    features: [
      "Visual workflow designer, extensive connector library, conditional logic, error handling and intelligent retries, human-in-the-loop for approvals",
      "self-healing workflows that adapt to system changes or failures, adaptive process optimization based on performance metrics and learned patterns, dynamic task prioritization, and MCP integration for dynamic tool/service discovery.",
      "Advanced: Predictive bottleneck/failure ID, auto-discovery of automation opportunities, process change simulation.",
    ],
    useCases: "Employee onboarding/offboarding, procure-to-pay, order-to-cash, IT service fulfillment, incident management, supply chain management, regulatory compliance reporting.",
    differentiator: "Combines AI reasoning, learning, and dynamic adaptation with robust automation, moving beyond rigid RPA to create truly intelligent and resilient process automation.",
    icon: Workflow,
    link: "/platform/agent-types#process-automation-agent"
  },
  {
    title: "Strategic Decision Agent",
    headline: "Advanced Reasoning for Complex Evaluations, Strategic Planning & Ethical Decisions",
    description: "Applies sophisticated reasoning frameworks (e.g., causal inference, game theory, multi-criteria decision analysis, Bayesian reasoning) to evaluate complex options against dynamic criteria, weigh trade-offs, model scenarios, and recommend data-informed decisions with clear, auditable justifications, risk assessments, ethical impact analysis, and alternative scenario comparisons.",
    features: [
      "Multi-criteria decision analysis",
      "uncertainty quantification",
      "scenario modeling & forecasting",
      "ethical framework alignment (configurable by organization), belief updating based on new evidence, counterfactual reasoning (\"what if\"),",
      "decision explanation generation, and governance controls.",
      "Can incorporate real-time human feedback and preferences.",
      "Advanced: Learn/refine decision models from outcomes, support collaborative decision-making, Simulation Agent integration.",
    ],
    useCases: "Resource allocation, risk management strategy, investment prioritization, vendor/solution evaluation, complex claims processing, policy development and impact analysis, strategic business planning, crisis response strategy.",
    differentiator: "Provides transparent, justifiable, and ethically-aware decision support for high-stakes situations, moving beyond simple recommendations to offer deep strategic insights.",
    icon: Scaling,
    link: "/platform/agent-types#strategic-decision-agent"
  },
  {
    title: "Multi-Modal Creative & Content Agent",
    headline: "Enhance Human Innovation and Content Velocity with AI-Powered Collaborative Creativity",
    description: "Partners with humans to generate novel ideas, multi-modal content (text, images, audio snippets, presentation drafts, video storyboards), and designs that align with strategic objectives, brand guidelines, and target audiences.",
    features: [
      "Integrated brainstorming tools, brand/style guide adherence",
      "multi-modal content generation and editing capabilities",
      "collaborative workflows with versioning, variation generation from seed concepts, constraint-based creative problem-solving",
      "audience persona adaptation, A/B testing suggestions for content, and IP compliance checks (e.g., image originality hints).",
      "Advanced: Interactive content prototype generation, personalized content at scale, automated cross-channel repurposing.",
    ],
    useCases: "Marketing campaign development, personalized advertising, content creation (blogs, social media, scripts, emails), product concept generation, UX/UI design exploration, presentation building, brand messaging, innovation workshops.",
    differentiator: "Functions as a versatile creative collaborator, amplifying human ingenuity and content production speed while ensuring brand consistency, personalization, and compliance.",
    icon: Palette,
    link: "/platform/agent-types#creative-content-agent"
  },
  {
    title: "Adaptive Reasoning & Problem-Solving Agent",
    headline: "Solve Novel & Complex Problems with Advanced Cognitive Frameworks and Learning",
    description: "Applies multiple, adaptable reasoning patterns (deductive, inductive, abductive, analogical, causal) and machine learning techniques to analyze complex, often ill-defined problems, generate hypotheses, develop structured solutions, and learn from the process through a transparent, verifiable approach.",
    features: [
      "Utilizes advanced techniques like chain-of-thought, tree-of-thought, ReAct",
      "graphical reasoning structures, reflection and self-correction capabilities, multi-step planning with contingency branches, belief updating with new evidence, structured knowledge representation, and the ability to learn new problem-solving strategies over time.",
      "Advanced: Meta-learning, incorporate expert human knowledge, explain reasoning at varying detail levels.",
    ],
    useCases: "Root cause analysis for complex failures, strategic planning under uncertainty, scientific hypothesis development, complex systems troubleshooting, legal case analysis, medical diagnosis assistance (within regulatory constraints), developing novel algorithms or solutions.",
    differentiator: "Makes its thought processes explicit, decomposes complex problems, and learns from experience, enabling human verification and collaboration on the most challenging cognitive tasks. Excels at combining information across domains and identifying non-obvious connections.",
    icon: BrainCog,
    link: "/platform/agent-types#adaptive-reasoning-agent"
  },
  {
    title: "Simulation & Synthetic Environment Agent",
    headline: "Model, Test, and Predict with AI-Powered Simulations",
    description: "Creates and manages dynamic, interactive simulations of real-world or hypothetical environments, systems, or processes. Allows for testing agent behaviors, \"what-if\" scenario analysis, risk assessment, and synthetic data generation for training other AI models.",
    features: [
      "Configurable environment parameters, agent behavior modeling within the simulation, data logging and analysis from simulation runs, ability to inject stochastic events, visualization of simulation states",
      "generation of labeled synthetic data for ML training, and integration with other agent types (e.g., Decision Agents testing strategies).",
      "Advanced: Digital twin creation, RL training environments, automated scenario generation for stress-testing.",
    ],
    useCases: "Training and validating other AI agents, strategic business planning, operational process optimization, supply chain resilience testing, financial market modeling, urban planning, crisis response training.",
    differentiator: "Provides a safe, controlled, and cost-effective way to experiment, learn, and prepare for a wide range of scenarios, accelerating innovation and reducing real-world risk.",
    icon: Orbit,
    link: "/platform/agent-types#simulation-agent"
  },
  {
    title: "Industry-Specific Vertical Agents",
    headline: "Domain-Optimized AI for Specialized Industries, Pre-Trained and Compliance-Aware",
    description: "Provides targeted, industry-specific intelligence with pre-trained understanding of domain-specific terminology, regulations, processes, data formats, and best practices.",
    features: [
      "Industry-specific knowledge bases and ontologies, specialized reasoning frameworks",
      "compliance-aware processing (e.g., HIPAA for Healthcare, AML/KYC for Finance), sector-specific integration capabilities (e.g., HL7/FHIR, FIX), and vertical-specific templates for common use cases.",
      "Continuously updated with evolving industry standards.",
      "Example Sub-Types: Financial Services Agent, Healthcare Agent, Legal & Compliance Agent, Manufacturing Agent.",
    ],
    useCases: "Regulatory reporting, risk analysis, fraud detection, administrative workflow automation, patient engagement, contract review, supply chain optimization, predictive maintenance.",
    differentiator: "Accelerates time-to-value in specific industries by providing pre-built, domain-aware expertise and compliance features, reducing customization effort and risk.",
    icon: Building,
    link: "/platform/agent-types#industry-specific-agents"
  }
];

export function CoreAgentCapabilitiesSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/20">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Core Agent Capabilities
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {agentProfiles.map((agent) => (
            <Card key={agent.title} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-3">
                  <agent.icon className="h-8 w-8 text-primary mr-3 flex-shrink-0" />
                  <CardTitle className="text-xl font-semibold">{agent.title}</CardTitle>
                </div>
                <h3 className="text-lg font-medium text-foreground">{agent.headline}</h3>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground mb-4">{agent.description}</p>
                <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                <ul className="space-y-1.5 mb-4">
                  {agent.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <h4 className="text-sm font-semibold text-foreground mb-2">Use Cases:</h4>
                <p className="text-sm text-muted-foreground mb-4">{agent.useCases}</p>
                <h4 className="text-sm font-semibold text-foreground mb-2">Differentiator:</h4>
                <p className="text-sm text-muted-foreground">{agent.differentiator}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link href={agent.link}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
