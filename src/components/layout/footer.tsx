import Link from 'next/link';
import { RubiCoreLogo } from '@/components/ui/rubicore-logo';
import { Github, Linkedin, Twitter, Youtube } from 'lucide-react';

const footerNavSections = [
  {
    title: 'Platform',
    links: [
      { name: 'Overview', href: '/platform/overview' },
      { name: 'Agent Types', href: '/platform/agent-types' },
      { name: 'Technology', href: '/platform/technology' },
      { name: 'Integrations', href: '/platform/integrations' },
      { name: 'Security & Compliance', href: '/platform/security' },
    ],
  },
  {
    title: 'Solutions',
    links: [{ name: 'Use Cases', href: '/solutions' }],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Blog', href: '/resources#blog' },
      { name: 'Case Studies', href: '/resources#casestudies' },
      { name: 'Whitepapers & Guides', href: '/resources#whitepapers' },
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api-docs' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/company/about' },
      { name: 'Careers', href: '/company/careers' },
      { name: 'Contact Us', href: '/contact' },
    ],
  },
];

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms of Service', href: '/terms-of-service' },
];

const socialLinks = [
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'GitHub', href: '#', icon: Github },
  { name: 'YouTube', href: '#', icon: Youtube },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto max-w-screen-2xl px-6 py-12 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/">
              <RubiCoreLogo />
            </Link>
            <p className="text-sm text-muted-foreground">
              Build, Orchestrate & Govern Your Secure AI Workforce.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((item) => (
                <Link key={item.name} href={item.href} className="text-muted-foreground hover:text-foreground">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0 md:grid-cols-4">
            {footerNavSections.map((section) => (
              <div key={section.title} className="md:grid md:grid-cols-1 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-foreground">
                    {section.title}
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {section.links.map((item) => (
                      <li key={item.name}>
                        <Link href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-border/40 pt-8 md:flex md:items-center md:justify-between lg:mt-16">
          <div className="flex space-x-6 md:order-2">
            {legalLinks.map((item) => (
              <Link key={item.name} href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                {item.name}
              </Link>
            ))}
          </div>
          <p className="mt-8 text-sm leading-5 text-muted-foreground md:order-1 md:mt-0">
            &copy; {currentYear} RubiCore.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
