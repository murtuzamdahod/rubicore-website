// import { Lock, KeyRound, Eye, Columns, Shuffle } from "lucide-react"; // Removed ShieldAlert, Layers, CheckCircle
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // All unused

export default function SecurityFoundationSection() {
  return (
    <section className="py-16 bg-background sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
            Security, Governance & Ethics: Embedded, Not Bolted On, for Trustworthy AI.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            In the era of generative and agentic AI, robust security, auditable compliance, and explainable, ethical operations are non-negotiable. RubiCore integrates enterprise-grade security principles, comprehensive governance capabilities, and Responsible AI frameworks throughout the platform. From secure data handling and granular access control to deployment models that keep data on your terms, complete audit logs (including decision lineage), and XAI tools for transparency, we provide the foundation to operate your AI workforce responsibly. Every interaction, decision, and data access point is controlled, logged, and auditable. This means you can embrace AI automation while meeting stringent regulatory requirements, internal policies, and societal expectations for ethical AI – no trade-offs needed.
          </p>
        </div>
        {/* Visual Placeholder: A multi-layered shield or secure vault metaphor, 
            illustrating layers of defense: Infrastructure Security, Data Security, 
            Application Security, Agent Security, Governance & Compliance, 
            Ethical AI Framework, XAI. 
            This will be implemented later or by a design-focused MCP.
        */}
        <div className="mt-12 flex justify-center">
          <div className="w-full max-w-xl h-72 bg-muted/30 rounded-lg flex items-center justify-center p-4 border border-dashed">
            <p className="text-muted-foreground text-center">
              [Visual: Multi-layered security shield/vault metaphor]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
