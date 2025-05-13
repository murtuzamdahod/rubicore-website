import { Button } from "@/components/ui/button";
import { Puzzle } from "lucide-react"; 
import Link from "next/link";

export function AgentCustomizationSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto max-w-screen-lg px-4 md:px-8">
        <div className="text-center mb-10 md:mb-12">
          <Puzzle className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Build, Extend, and Evolve Your AI Workforce – Tailored Precisely to Your Needs
          </h2>
        </div>
        <div className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
          <p className="mb-6">
            While RubiCore offers many ready-to-use and adaptable specialized agents, the platform is designed for ultimate flexibility. You can:
          </p>
          <ul className="space-y-3 list-disc pl-5 mb-6">
            <li>
              <strong>Customize Existing Agents:</strong> Fine-tune behaviors, update knowledge, add new tools, or modify reasoning processes of pre-built agents using the Low-Code Agent Studio.
            </li>
            <li>
              <strong>Build Custom Agents from Scratch:</strong> Define unique agent roles, objectives, specialized skills (using our Agentic Skill Builder), and cognitive architectures in the Studio or via our <strong>Python SDK</strong> for more complex logic.
            </li>
            <li>
              <strong>Develop New Tools & Integrations:</strong> Extend agent capabilities by developing custom tools that connect to your proprietary systems or niche APIs using the SDK.
            </li>
            <li>
              <strong>Configure Advanced Reasoning & Learning:</strong> Our Advanced Reasoning Designer allows visual configuration of complex cognitive processes (chain-of-thought, tree-of-thought, ReAct, self-critique, reflection) and learning parameters.
            </li>
            <li>
              <strong>Leverage Dynamic Tooling:</strong> MCP Integration and automated tool discovery allow custom agents to dynamically find and use available enterprise resources.
            </li>
            <li>
              <strong>Utilize Simulation Environments:</strong> Test and validate custom agents and their interactions in a sandboxed simulation environment before deploying them into production. This allows for safe experimentation with agent logic, tool use, and collaborative behaviors.
            </li>
          </ul>
          <p className="mb-8">
            <em>We are fostering a community-driven <strong>Agent & Skill Marketplace</strong> where users and partners can share, discover, and acquire agent templates, specialized skills, and tool connectors – accelerating development, promoting best practices, and enriching the RubiCore ecosystem.</em>
          </p>
          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/platform/developer-hub">Explore the Agent Studio & SDK</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
