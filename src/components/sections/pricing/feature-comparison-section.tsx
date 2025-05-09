"use client";

import { Check, Minus } from "lucide-react";

const features = [
  { name: "Core Platform (Agent Studio, Orchestration)", free: true, pro: true, enterprise: true },
  { name: "Number of Agents", free: "2", pro: "10", enterprise: "Custom" },
  { name: "Workflow Runs/Month", free: "100", pro: "1,000", enterprise: "Custom" },
  { name: "API Calls/Month", free: "Limited", pro: "Standard", enterprise: "High Volume" },
  { name: "Knowledge Agent", free: true, pro: true, enterprise: true },
  { name: "Process Agent", free: true, pro: true, enterprise: true },
  { name: "SQL/CSV Data Agent", free: false, pro: true, enterprise: true },
  { name: "Code Intelligence Agent", free: false, pro: true, enterprise: true },
  { name: "Deep Research Agent", free: false, pro: false, enterprise: true },
  { name: "Cloud Deployment", free: true, pro: true, enterprise: true },
  { name: "Hybrid Deployment", free: false, pro: false, enterprise: true },
  { name: "On-Premise Deployment", free: false, pro: false, enterprise: true },
  { name: "Basic Integrations (OneDrive)", free: true, pro: true, enterprise: true },
  { name: "API/SDK Access", free: false, pro: true, enterprise: true },
  { name: "Custom Integration Support", free: false, pro: false, enterprise: true },
  { name: "RBAC", free: false, pro: "Basic", enterprise: "Granular" },
  { name: "SAML/SSO", free: false, pro: false, enterprise: true },
  { name: "Audit Logs", free: "Basic", pro: "Standard", enterprise: "Advanced" },
  { name: "End-to-End Encryption", free: true, pro: true, enterprise: true },
  { name: "Compliance Readiness (SOC 2, GDPR, HIPAA)", free: false, pro: "Partial", enterprise: "Full" },
  { name: "Basic Dashboards", free: true, pro: true, enterprise: true },
  { name: "Advanced Analytics & ROI Tracking", free: false, pro: "Basic", enterprise: true },
  { name: "Community Support", free: true, pro: true, enterprise: true },
  { name: "Standard Support (Email/Chat)", free: false, pro: true, enterprise: true },
  { name: "Premium Support (Dedicated AM, SLAs)", free: false, pro: false, enterprise: true },
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
            Find the Perfect Fit: Compare Plan Features
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
                  Free / Developer
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Pro / Team
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
                    <FeatureTick available={feature.free} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                    <FeatureTick available={feature.pro} />
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
