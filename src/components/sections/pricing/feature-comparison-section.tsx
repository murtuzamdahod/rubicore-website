"use client";

import { Check, Minus } from "lucide-react";

const features = [
  // Core Platform
  { name: "Low-Code Studio", developer: true, team: true, business: true, enterprise: true },
  { name: "Pro-Code SDK", developer: false, team: true, business: true, enterprise: true },
  { name: "Orchestration Engine (Basic)", developer: true, team: true, business: true, enterprise: true },
  { name: "Orchestration Engine (Advanced)", developer: false, team: false, business: true, enterprise: true },
  { name: "Agent Lifecycle Management", developer: false, team: false, business: "Basic", enterprise: "Advanced" },
  { name: "Simulation Environment", developer: false, team: false, business: false, enterprise: true },
  // Agent Capabilities
  { name: "Max Agents", developer: "2-3", team: "10-15", business: "Substantial", enterprise: "Custom" },
  { name: "Workflow Runs", developer: "1,000/month", team: "10,000/month", business: "Substantial", enterprise: "Custom" },
  { name: "API Calls", developer: "Limited", team: "Increased", business: "Substantial", enterprise: "High/Custom" },
  { name: "Available Agent Types (Standard)", developer: "Select", team: "More", business: "Advanced", enterprise: "All" },
  { name: "Reasoning Frameworks", developer: "Basic", team: "Basic", business: "Advanced", enterprise: "Advanced" },
  { name: "Memory Capacity/Types", developer: "Basic", team: "Standard", business: "Advanced", enterprise: "Advanced" },
  // Multi-Agent Systems
  { name: "Collaboration Features", developer: false, team: "Basic", business: "Advanced", enterprise: "Advanced" },
  { name: "Max Agents per System", developer: "Limited", team: "Standard", business: "High", enterprise: "Custom" },
  { name: "Inter-Agent Communication", developer: "Basic", team: "Standard", business: "Advanced", enterprise: "Advanced" },
  // Human-AI Collaboration
  { name: "HITL (Human-in-the-Loop)", developer: "Basic", team: "Standard", business: "Advanced", enterprise: "Advanced" },
  { name: "Shared Task Dashboards", developer: false, team: false, business: true, enterprise: true },
  { name: "Co-pilot Interfaces", developer: false, team: false, business: false, enterprise: true },
  // Integrations
  { name: "Native Connectors", developer: "Basic", team: "Standard", business: "Advanced", enterprise: "All + Custom" },
  { name: "Custom Connector SDK", developer: false, team: false, business: true, enterprise: true },
  { name: "API Access (REST/GraphQL)", developer: "Limited", team: true, business: true, enterprise: true },
  { name: "MCP Support", developer: false, team: false, business: true, enterprise: true },
  { name: "Dynamic Tool Discovery", developer: false, team: false, business: true, enterprise: true },
  // Deployment
  { name: "Cloud Deployment", developer: true, team: true, business: true, enterprise: true },
  { name: "Hybrid Deployment", developer: false, team: false, business: "Add-on", enterprise: true },
  { name: "On-Premise Deployment", developer: false, team: false, business: false, enterprise: true },
  { name: "Edge Deployment", developer: false, team: false, business: false, enterprise: true },
  // Security & Governance
  { name: "RBAC", developer: "Basic", team: "Standard", business: "Granular", enterprise: "Granular" },
  { name: "SAML/SSO", developer: false, team: false, business: true, enterprise: true },
  { name: "Encryption (Standard/Advanced)", developer: "Standard", team: "Standard", business: "Advanced", enterprise: "Advanced" },
  { name: "Audit Logs (Standard/Immutable/Data Lineage)", developer: "Standard", team: "Standard", business: "Enhanced", enterprise: "Immutable/Lineage" },
  { name: "PII Handling", developer: "Basic", team: "Standard", business: "Advanced", enterprise: "Advanced" },
  { name: "Policy Engine", developer: false, team: false, business: true, enterprise: true },
  // Explainable & Ethical AI
  { name: "XAI Dashboards", developer: false, team: false, business: "Basic", enterprise: "Full Suite" },
  { name: "Bias Detection Tools", developer: false, team: false, business: false, enterprise: true },
  { name: "Ethical Frameworks", developer: false, team: false, business: false, enterprise: true },
  { name: "Constitutional AI Support", developer: false, team: false, business: false, enterprise: true },
  // Analytics & Learning
  { name: "Basic Dashboards", developer: true, team: true, business: true, enterprise: true },
  { name: "Advanced Insights", developer: false, team: "Basic", business: true, enterprise: true },
  { name: "ROI Tracking", developer: false, team: "Basic", business: true, enterprise: true },
  { name: "RLHF/Continuous Learning Modules", developer: false, team: false, business: true, enterprise: true },
  { name: "Cost Optimization", developer: false, team: false, business: true, enterprise: true },
  // Support & Services
  { name: "Community Support", developer: true, team: true, business: true, enterprise: true },
  { name: "Email/Chat Support", developer: false, team: true, business: "Priority", enterprise: "Premium Plus" },
  { name: "Priority Support", developer: false, team: false, business: true, enterprise: true },
  { name: "Dedicated TAM", developer: false, team: false, business: false, enterprise: true },
  { name: "SLAs", developer: false, team: "Standard", business: "Enhanced", enterprise: "Custom" },
  { name: "Professional Services", developer: false, team: "Add-on", business: "Add-on", enterprise: true },
  { name: "Training", developer: "Basic", team: "Standard", business: "Advanced", enterprise: "Custom" },
];

const FeatureTick = ({ available }: { available: boolean | string }) => {
  if (typeof available === "boolean") {
    return available ? <Check className="h-5 w-5 text-green-500" /> : <Minus className="h-5 w-5 text-gray-400" />;
  }
  return <span className="text-sm text-gray-700 dark:text-gray-300">{available}</span>;
};


export default function FeatureComparisonSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Find the Perfect Fit: Compare Plan Features In Detail
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Feature
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Developer / Free
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Team
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Business
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
              {features.map((feature) => (
                <tr key={feature.name}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {feature.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                    <FeatureTick available={feature.developer} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                    <FeatureTick available={feature.team} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                    <FeatureTick available={feature.business} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                    <FeatureTick available={feature.enterprise} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
