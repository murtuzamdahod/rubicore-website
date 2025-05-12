import React from 'react';
import { Metadata } from 'next';
// Import section components
import { McpIntroductionSection } from '@/components/sections/mcp-integration/McpIntroductionSection';
import { McpCoreConceptsSection } from '@/components/sections/mcp-integration/McpCoreConceptsSection';
import { McpBenefitsSection } from '@/components/sections/mcp-integration/McpBenefitsSection';
import { RubicoreImplementationSection } from '@/components/sections/mcp-integration/RubicoreImplementationSection';
import { McpUseCasesSection } from '@/components/sections/mcp-integration/McpUseCasesSection';
import { McpDeveloperCtaSection } from '@/components/sections/mcp-integration/McpDeveloperCtaSection';

export const metadata: Metadata = {
  title: 'MCP Integration | RubiCore Platform',
  description:
    'Learn how RubiCore leverages the Model Context Protocol (MCP) for dynamic tool discovery, secure context sharing, and building a composable, future-proof enterprise AI ecosystem.',
  // Add other relevant metadata like keywords or open graph tags if needed
};

const McpIntegrationPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow pt-16"> {/* Adjust pt-16 based on header height */}
        {/* Render section components */}
        <McpIntroductionSection />
        <McpCoreConceptsSection />
        <McpBenefitsSection />
        <RubicoreImplementationSection />
        <McpUseCasesSection />
        <McpDeveloperCtaSection />
      </main>
    </div>
  );
};

export default McpIntegrationPage;
