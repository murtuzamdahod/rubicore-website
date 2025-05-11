"use client";

import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button';
import { RubiCoreLogo } from '@/components/ui/rubicore-logo';
import { Menu } from 'lucide-react'; // For mobile menu icon
import React from 'react';
import { cn } from "@/lib/utils";

const platformLinks: { title: string; href: string; description: string }[] = [
  {
    title: 'Overview',
    href: '/platform/overview',
    description: 'High-level value proposition and core pillars.',
  },
  {
    title: 'Agent Types',
    href: '/platform/agent-types',
    description: 'Details on specialized agents.',
  },
  {
    title: 'Technology',
    href: '/platform/technology',
    description: 'Architecture and tech stack, including LLM agnosticism and advanced memory systems.',
  },
  {
    title: 'Integrations',
    href: '/platform/integrations',
    description: 'Connectivity options, including dynamic tool discovery and API ecosystem.',
  },
  {
    title: 'Security & Compliance',
    href: '/platform/security',
    description: 'Focus on trust, governance, XAI, and ethical AI.',
  },
  {
    title: 'MCP Integration',
    href: '/platform/mcp-integration', // Assuming path
    description: 'Model Context Protocol capabilities.',
  },
  {
    title: 'Human-AI Collaboration (Coming Soon)',
    href: '/platform/human-ai-collaboration', // Assuming path
    description: 'Features for seamless human-agent teaming and oversight.',
  },
  {
    title: 'Developer Hub (Coming Soon)',
    href: '/developer-hub', // Assuming path
    description: 'SDKs, API Docs, Simulation Environments (Coming Soon), Community (Coming Soon).',
  },
];

const resourcesLinks: { title: string; href: string; description: string }[] = [
  {
    title: 'Blog',
    href: '/resources#blog',
    description: 'Latest articles and insights.', // Kept existing, draft is just "Blog"
  },
  {
    title: 'Case Studies',
    href: '/resources#casestudies',
    description: 'Real-world success stories.', // Kept existing, draft is just "Case Studies"
  },
  {
    title: 'Whitepapers & Guides',
    href: '/resources#whitepapers',
    description: 'In-depth analysis, practical guides, including guides on Ethical AI, XAI, and Agentic ROI.',
  },
  {
    title: 'Documentation',
    href: '/docs',
    description: 'Comprehensive technical guides.', // Kept existing, draft is "Comprehensive guides."
  },
  {
    title: 'API Reference',
    href: '/api-docs',
    description: 'Detailed developer API documentation.', // Kept existing, draft is "Detailed developer documentation."
  },
  {
    title: 'Webinars & Demos',
    href: '/resources#webinars', // Assuming path
    description: 'Product showcases and expert talks.',
  },
  {
    title: 'Glossary (Coming Soon)',
    href: '/resources#glossary', // Assuming path
    description: 'Key Agentic AI terms explained.',
  },
];

const companyLinks: { title: string; href: string; description?: string }[] = [
  {
    title: 'About Us',
    href: '/company/about',
    description: 'Mission, vision, and commitment to Responsible AI.',
  },
  {
    title: 'Careers',
    href: '/company/careers',
    description: 'Explore opportunities at RubiCore.', // Added a generic description
  },
  {
    title: 'Contact Us',
    href: '/contact',
    description: 'Get in touch with our team.', // Added a generic description
  },
  {
    title: 'Partners (Coming Soon)',
    href: '/company/partners', // Assuming path
    description: 'Technology and solution partners.',
  },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <RubiCoreLogo />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Platform</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {platformLinks.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/solutions" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Solutions
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/pricing" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Pricing
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {resourcesLinks.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Company</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] ">
                  {companyLinks.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-2">
          <Button variant="outline" className="hidden md:inline-flex">Contact Sales</Button>
          <Button className="hidden md:inline-flex">Request a Demo</Button>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <DropdownMenu open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Navigation</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {platformLinks.map((link) => (
                  <DropdownMenuItem key={`mobile-platform-${link.title}`} asChild>
                    <Link href={link.href}>{link.title}</Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild><Link href="/solutions">Solutions</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link href="/pricing">Pricing</Link></DropdownMenuItem>
                <DropdownMenuSeparator />
                {resourcesLinks.map((link) => (
                  <DropdownMenuItem key={`mobile-resources-${link.title}`} asChild>
                    <Link href={link.href}>{link.title}</Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                {companyLinks.map((link) => (
                  <DropdownMenuItem key={`mobile-company-${link.title}`} asChild>
                    <Link href={link.href}>{link.title}</Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Button variant="outline" className="w-full justify-start">Contact Sales</Button>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Button className="w-full justify-start mt-1">Request a Demo</Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
