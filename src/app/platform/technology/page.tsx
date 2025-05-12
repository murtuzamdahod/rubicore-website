import React from 'react';
import { TechArchitectureOverviewSection } from '@/components/sections/technology/architecture-overview-section';
import { CoreTechStackSection } from '@/components/sections/technology/core-tech-stack-section';
import { ModelIntegrationSection } from '@/components/sections/technology/model-integration-section';
import { ApiSdkSection } from '@/components/sections/technology/api-sdk-section';
import { DeploymentArchitectureSection } from '@/components/sections/technology/deployment-architecture-section';
import { TechFinalCtaSection } from '@/components/sections/technology/final-cta-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RubiCore AI Platform Technology & Architecture | Python, Microservices, Advanced Agent Memory, Kubernetes, XAI, LLM Agnostic',
  description: 'Explore RubiCore’s technology: a scalable Python/FastAPI microservices backend, LangChain-inspired agent logic with advanced memory (Vector DBs, Knowledge Graphs), Weaviate/Pinecone, Kubernetes, flexible LLM integration (OpenAI, Anthropic, Local Models), robust APIs/SDKs, XAI, and edge capabilities. Built for on-prem, cloud, or hybrid.',
};

const TechnologyPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">

        <TechArchitectureOverviewSection />
        <CoreTechStackSection />
        <ModelIntegrationSection />
        <ApiSdkSection />
        <DeploymentArchitectureSection />
        <TechFinalCtaSection />
      </main>
    </div>
  );
};

export default TechnologyPage;
