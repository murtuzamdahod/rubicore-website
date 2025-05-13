import { Cable } from "lucide-react"; // Using Cable as a generic icon for now

const connectorCategories = [
  {
    categoryTitle: "Collaboration & Document Management",
    connectors: [
      { name: "Microsoft OneDrive / SharePoint", description: "Enable agents to securely read, write, analyze, and synthesize information from documents." },
      { name: "Google Workspace", description: "Integrate with Google Drive, Docs, Sheets, and Slides." },
      { name: "Confluence", description: "Access and manage documentation and knowledge bases." },
      { name: "Box", description: "Connect to cloud content management and file sharing." },
      { name: "Dropbox", description: "Utilize cloud storage for documents and media." },
      { name: "Egnyte", description: "Connect to enterprise file services and governance." },
      { name: "Webflow", description: "Integrate with website content and CMS." },
      { name: "Notion", description: "Connect to workspaces for notes, tasks, and wikis." },
      { name: "Miro", description: "Access collaborative online whiteboards." },
      { name: "Coda", description: "Integrate with all-in-one docs and workspaces." },
    ]
  },
  {
    categoryTitle: "Databases & Data Warehouses",
    connectors: [
      { name: "PostgreSQL", description: "Connect to open-source relational databases." },
      { name: "MySQL", description: "Integrate with popular open-source databases." },
      { name: "SQL Server", description: "Connect to Microsoft's relational database." },
      { name: "Oracle", description: "Integrate with Oracle database systems." },
      { name: "MongoDB", description: "Connect to NoSQL document databases." },
      { name: "Snowflake", description: "Access cloud data warehouse services." },
      { name: "Google BigQuery", description: "Utilize Google's serverless data warehouse." },
      { name: "Amazon Redshift", description: "Connect to AWS's data warehouse solution." },
      { name: "Weaviate", description: "Integrate with vector databases for semantic search." },
      { name: "Pinecone", description: "Connect to vector databases for AI applications." },
      { name: "Neo4j", description: "Access graph database platforms." },
      { name: "Algolia", description: "Integrate with search and discovery APIs." },
      { name: "Elasticsearch", description: "Connect to distributed search and analytics engines." },
    ]
  },
  {
    categoryTitle: "CRM & Customer Experience",
    connectors: [
      { name: "Salesforce", description: "Empower Sales, Marketing, and Support agents to read, update records, personalize communications, and manage customer interactions." },
      { name: "HubSpot", description: "Integrate with CRM, marketing, sales, and service software." },
      { name: "Microsoft Dynamics 365", description: "Connect to Microsoft's suite of business applications." },
      { name: "Zendesk", description: "Integrate with customer service and engagement platforms." },
      { name: "Intercom", description: "Connect to customer messaging platforms." },
      { name: "Freshdesk", description: "Utilize cloud-based customer support software." },
      { name: "Zoho CRM", description: "Integrate with Zoho's CRM and business tools." },
      { name: "Pipedrive", description: "Connect to sales CRM for deal management." },
      { name: "Kustomer", description: "Access customer service CRM platforms." },
      { name: "Gorgias", description: "Integrate with e-commerce helpdesk solutions." },
      { name: "Copper", description: "Connect to CRM for G Suite users." },
      { name: "Front", description: "Utilize customer communication hubs." },
      { name: "Attio", description: "Integrate with flexible CRM platforms." },
      { name: "Insightly", description: "Connect to CRM for project and contact management." },
    ]
  },
  {
    categoryTitle: "ITSM & DevOps",
    connectors: [
      { name: "ServiceNow", description: "Enable IT support agents to manage tickets, and Process Agents to automate IT workflows." },
      { name: "Jira", description: "Integrate with project tracking and issue management software." },
      { name: "Azure DevOps", description: "Connect to Microsoft's suite of DevOps tools." },
      { name: "GitHub", description: "Integrate with code hosting and version control." },
      { name: "GitLab", description: "Utilize a complete DevOps platform." },
      { name: "Bitbucket", description: "Connect to Git-based code hosting." },
      { name: "PagerDuty", description: "Integrate with incident response platforms." },
      { name: "Zammad", description: "Access open-source helpdesk and support systems." },
      { name: "Freshservice", description: "Utilize cloud-based IT service management." },
      { name: "BMC Helix", description: "Connect to IT service and operations management." },
    ]
  },
  {
    categoryTitle: "ERP & Financial Systems",
    connectors: [
      { name: "SAP S/4HANA", description: "Allow agents to interact with financial data, manage procurement processes, and automate reporting." },
      { name: "Oracle NetSuite", description: "Integrate with cloud ERP and financial software." },
      { name: "Microsoft Dynamics F&O", description: "Connect to Microsoft's enterprise resource planning solution." },
      { name: "QuickBooks", description: "Utilize accounting software for small businesses." },
      { name: "Xero", description: "Integrate with cloud-based accounting software." },
      { name: "Chargebee", description: "Connect to subscription billing and revenue management." },
      { name: "Stripe", description: "Integrate with online payment processing." },
      { name: "PayPal", description: "Utilize online payment systems." },
      { name: "Braintree", description: "Connect to payment gateway services." },
      { name: "Pennylane", description: "Access financial management platforms." },
      { name: "Sage", description: "Integrate with accounting and business management software." },
      { name: "Workday", description: "Connect to enterprise cloud applications for finance and HR." },
      { name: "SuccessFactors", description: "Utilize SAP's HR management software." },
    ]
  },
  {
    categoryTitle: "Communication & Messaging",
    connectors: [
      { name: "Slack", description: "Deploy conversational agents, send notifications, and integrate into event-driven architectures." },
      { name: "Microsoft Teams", description: "Integrate with Microsoft's collaboration platform." },
      { name: "Discord", description: "Connect to community and chat platforms." },
      { name: "WhatsApp Business", description: "Utilize messaging for business communication." },
      { name: "Telegram", description: "Integrate with cloud-based instant messaging." },
      { name: "Email (SMTP/IMAP)", description: "Connect to email services for notifications and interactions." },
      { name: "Twilio", description: "Utilize communication APIs for voice, SMS, and video." },
      { name: "RingCentral", description: "Integrate with cloud communications and collaboration." },
      { name: "Zoom", description: "Connect to video conferencing and online meetings." },
      { name: "Google Meet", description: "Utilize Google's video communication service." },
      { name: "Message Queues (Kafka, RabbitMQ)", description: "Integrate with event-driven architectures." },
      { name: "Aircall", description: "Connect to cloud-based phone systems." },
      { name: "Dialpad", description: "Utilize AI-powered communication platforms." },
    ]
  },
  {
    categoryTitle: "Marketing & Analytics",
    connectors: [
      { name: "Mailchimp", description: "Enable agents to analyze campaign performance, automate marketing tasks, and drive engagement." },
      { name: "HubSpot Marketing", description: "Integrate with marketing automation software." },
      { name: "Google Analytics", description: "Connect to web analytics services." },
      { name: "Marketo", description: "Utilize marketing automation platforms." },
      { name: "Klaviyo", description: "Integrate with email and SMS marketing automation." },
      { name: "Segment", description: "Connect to customer data platforms." },
      { name: "Hotjar", description: "Utilize behavior analytics and user feedback tools." },
      { name: "Google Ads", description: "Integrate with online advertising platforms." },
      { name: "Meta (Facebook/Instagram)", description: "Connect to social media advertising and engagement." },
      { name: "LinkedIn", description: "Utilize professional networking and advertising." },
      { name: "Buffer", description: "Integrate with social media management tools." },
      { name: "HootSuite", description: "Connect to social media management platforms." },
      { name: "ActiveCampaign", description: "Utilize customer experience automation." },
      { name: "Amplitude", description: "Integrate with product analytics." },
      { name: "Mixpanel", description: "Connect to user behavior analytics." },
    ]
  },
  {
    categoryTitle: "HR & Recruitment",
    connectors: [
      { name: "BambooHR", description: "Automate talent acquisition, employee onboarding, and HR operations with secure, compliant agent workflows." },
      { name: "Workday", description: "Integrate with enterprise cloud applications for HR and finance." },
      { name: "Greenhouse", description: "Connect to applicant tracking and recruiting software." },
      { name: "Lever", description: "Utilize talent acquisition suites." },
      { name: "SmartRecruiters", description: "Integrate with talent acquisition platforms." },
      { name: "Teamtailor", description: "Connect to employer branding and recruitment software." },
      { name: "Personio", description: "Utilize HR software for SMEs." },
      { name: "Gusto", description: "Integrate with payroll, benefits, and HR platforms." },
      { name: "Hibob", description: "Connect to HRIS platforms." },
      { name: "Factorial", description: "Utilize HR software for small and medium businesses." },
      { name: "ADP", description: "Integrate with payroll and HR solutions." },
    ]
  },
  {
    categoryTitle: "Project & Task Management",
    connectors: [
      { name: "Asana", description: "Coordinate project tasks, deadlines, and resources across teams through intelligent agent orchestration." },
      { name: "ClickUp", description: "Integrate with productivity and project management platforms." },
      { name: "Monday.com", description: "Connect to work operating systems." },
      { name: "Trello", description: "Utilize visual collaboration tools." },
      { name: "Notion", description: "Integrate with connected workspaces for notes and tasks." },
      { name: "Wrike", description: "Connect to project management software." },
      { name: "Teamwork", description: "Utilize project management and team collaboration tools." },
      { name: "Smartsheet", description: "Integrate with dynamic workspace platforms." },
      { name: "Airtable", description: "Connect to low-code platforms for building collaborative apps." },
      { name: "Luma", description: "Utilize event management and community platforms." },
    ]
  },
  {
    categoryTitle: "E-commerce Platforms",
    connectors: [
      { name: "Shopify", description: "Manage product listings, inventory, orders, and customer interactions through specialized agent workflows." },
      { name: "WooCommerce", description: "Integrate with open-source e-commerce platforms for WordPress." },
      { name: "BigCommerce", description: "Connect to SaaS e-commerce platforms." },
      { name: "Amazon", description: "Utilize e-commerce and marketplace services." },
      { name: "eBay", description: "Integrate with online auction and shopping websites." },
      { name: "Etsy", description: "Connect to global online marketplaces." },
    ]
  },
  {
    categoryTitle: "Legal & Compliance",
    connectors: [
      { name: "DocuSign", description: "Automate contract workflows, document processing, and compliance monitoring." },
      { name: "PandaDoc", description: "Integrate with document automation software." },
      { name: "Westlaw", description: "Connect to legal research services." },
      { name: "Clio", description: "Utilize legal practice management software." },
      { name: "ContractSafe", description: "Integrate with contract management software." },
    ]
  },
  {
    categoryTitle: "Industry-Specific Systems",
    connectors: [
      { name: "Healthcare (Epic, Cerner)", description: "Connect agents to specialized systems for domain-specific automation." },
      { name: "Financial Services (Bloomberg, Reuters)", description: "Integrate with financial data and analytics platforms." },
      { name: "Manufacturing (Siemens MindSphere)", description: "Connect to industrial IoT and cloud platforms." },
      { name: "Logistics (UPS, DHL)", description: "Utilize shipping and logistics services." },
      { name: "Real Estate (Yardi, AppFolio)", description: "Integrate with property management software." },
    ]
  }
];


export default function NativeConnectorsSection() {
  return (
    <section className="py-16 sm:py-24 bg-muted/20 dark:bg-gray-800/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
            Secure, Out-of-the-Box Connectivity for 200+ Enterprise Systems
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Accelerate deployment with our extensive library of 200+ built-in, secure connectors for essential enterprise data sources, applications, and services. Our integration ecosystem is continuously expanding to ensure your AI workforce can operate seamlessly within your existing technology landscape:
          </p>
        </div>

        {connectorCategories.map((category) => (
          <div key={category.categoryTitle} className="mb-12">
            <h3 className="text-2xl font-semibold text-primary mb-6 text-center md:text-left">{category.categoryTitle}</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {category.connectors.map((connector) => (
                <div
                  key={connector.name}
                  className="bg-background dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col" // Removed items-center text-center
                >
                  <div className="flex items-center mb-3">
                    <Cable className="w-7 h-7 mr-3 text-primary flex-shrink-0" /> {/* Generic Icon */}
                    <h4 className="text-lg font-semibold text-foreground">
                      {connector.name}
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground flex-grow">
                    {connector.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
        {/* CTA Button removed as per draft */}
      </div>
    </section>
  );
}
