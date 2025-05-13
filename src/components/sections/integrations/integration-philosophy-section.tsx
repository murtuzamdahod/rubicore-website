// Removed LockKeyhole, ShieldCheck as the cards are removed. Add other icons if needed for the visual.

export default function IntegrationPhilosophySection() {
  return (
    <section className="py-16 bg-background sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
            Seamless, Secure & Adaptive Integration: Breaking Down Silos, Not Security, with Intelligent Connectivity.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Effective enterprise automation and intelligence demand seamless data flow, dynamic tool access, <em>and</em> uncompromising security. RubiCore’s integration capabilities ensure your AI agents become integral, adaptive parts of your operational fabric –{" "}
            <strong>without creating new security risks or data silos</strong>.
            Agents can securely connect to data sources, discover and utilize tools at runtime, trigger actions in other applications, and orchestrate workflows that span your entire tech stack, all while respecting your security posture and governance policies. Every integration is authenticated, authorized, and audited, ensuring you maintain full control.{" "}
            <strong>Our architecture supports not just pre-built connectors but also dynamic tool discovery (e.g., via MCP, OpenAPI specs) and agent-driven API composition, allowing for unprecedented flexibility and future-proofing.</strong>
          </p>
        </div>
        
        {/* Visual Placeholder */}
        <div className="flex justify-center">
          <div className="w-full max-w-2xl h-72 bg-muted/30 rounded-lg flex items-center justify-center p-4 border border-dashed">
            <p className="text-muted-foreground text-center">
              [Visual: RubiCore platform securely and dynamically connecting to diverse system types – cloud storage, databases, SaaS apps, IoT devices, legacy systems, other AI services – with shield/lock icons, API gateways, and MCP flows.]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
