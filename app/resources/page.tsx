import type { Metadata } from 'next'
import Link from 'next/link'
import { Download, ArrowRight, FileText } from 'lucide-react'
import { SITE_URL } from '@/lib/constants'
import { breadcrumbSchema } from '@/lib/schema'
import { Breadcrumb } from '@/components/shared/Breadcrumb'
import { FinalCTA } from '@/components/sections/FinalCTA'

export const metadata: Metadata = {
  title: 'Free Cybersecurity Resources | SecureNext Chicago',
  description:
    'Download free cybersecurity resources for Chicago businesses: checklist, compliance guide, incident response template, and security assessment guide.',
  alternates: { canonical: `${SITE_URL}/resources` },
  openGraph: {
    title: 'Free Cybersecurity Resources | SecureNext Chicago',
    description:
      'Download free cybersecurity resources for Chicago businesses: checklist, compliance guide, incident response template, and security assessment guide.',
    url: `${SITE_URL}/resources`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Cybersecurity Resources | SecureNext Chicago',
    description:
      'Download free cybersecurity resources for Chicago businesses: checklist, compliance guide, incident response template, and security assessment guide.',
  },
}

const resources = [
  {
    title: 'Cybersecurity Essentials Checklist',
    description:
      'A plain-language checklist of the security controls every small and mid-sized organization should have in place — covering access management, endpoint protection, backup integrity, firewall configuration, and employee training basics. Use this as a starting point to identify your highest-priority gaps.',
    category: 'Checklist',
    href: '#', // [NEEDS CLIENT INPUT: actual PDF download link or form gate]
    cta: 'Download Checklist',
  },
  {
    title: 'Incident Response Plan Template',
    description:
      'A customizable incident response plan template with response team roster, incident classification criteria, step-by-step procedures for ransomware, business email compromise, data breach, and insider threat scenarios, and breach notification obligation guidance for HIPAA and Illinois PIPA.',
    category: 'Template',
    href: '#', // [NEEDS CLIENT INPUT: actual PDF download link or form gate]
    cta: 'Download Template',
  },
  {
    title: 'Security Assessment Preparation Guide',
    description:
      'What to expect from a security assessment — and how to prepare your team and environment for the assessment process. Covers what we evaluate, what documentation to have ready, how to communicate the assessment to your team, and how to use the findings report.',
    category: 'Guide',
    href: '#', // [NEEDS CLIENT INPUT: actual PDF download link or form gate]
    cta: 'Download Guide',
  },
  {
    title: 'Compliance Readiness Guide',
    description:
      'A framework-by-framework overview of what HIPAA, NIST CSF, CMMC, and PCI-DSS compliance actually requires — and what "compliance" looks like in practice for organizations at different maturity levels. Includes a self-assessment worksheet for each framework.',
    category: 'Guide',
    href: '#', // [NEEDS CLIENT INPUT: actual PDF download link or form gate]
    cta: 'Download Guide',
  },
]

const categoryColors: Record<string, string> = {
  Checklist: 'bg-securenext-accent/10 text-securenext-accent',
  // text-securenext-navy used per design-system.md §Pairing 10: Success Green MUST NOT be standalone text on white
  Template: 'bg-securenext-green/10 text-securenext-navy',
  Guide: 'bg-securenext-navy/10 text-securenext-navy',
}

export default function ResourcesPage() {
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', item: SITE_URL },
    { name: 'Resources', item: `${SITE_URL}/resources` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Page header */}
      <section className="bg-securenext-navy py-16 lg:py-20" aria-labelledby="resources-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Resources' }]} />
          <h1 id="resources-heading" className="mt-6 text-4xl sm:text-5xl font-bold text-white">
            Free Cybersecurity Resources
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl">
            Practical tools and guides for Chicago organizations — designed to help you understand your risk, prepare for an assessment, and navigate compliance requirements.
          </p>
        </div>
      </section>

      {/* Resources grid */}
      <section className="py-16 bg-securenext-gray" aria-label="Resource downloads">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {resources.map((resource) => (
              <div
                key={resource.title}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 flex flex-col"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-securenext-gray">
                    <FileText className="h-6 w-6 text-securenext-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold mb-2 ${categoryColors[resource.category] ?? 'bg-gray-100 text-gray-700'}`}>
                      {resource.category}
                    </span>
                    <h2 className="text-xl font-bold text-securenext-navy">{resource.title}</h2>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed flex-1 mb-6">{resource.description}</p>

                <a
                  href={resource.href}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-securenext-accent hover:bg-securenext-accent-dark text-white font-semibold text-sm rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-securenext-accent focus-visible:ring-offset-2 w-fit"
                  aria-label={`${resource.cta}: ${resource.title}`}
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  {resource.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog teaser */}
      <section className="py-16 bg-white" aria-labelledby="resources-blog-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="resources-blog-heading" className="text-2xl font-bold text-securenext-navy mb-4">
            More Insights on the SecureNext Blog
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Cybersecurity guides, compliance explainers, and threat analysis written for Chicago organizations.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-securenext-accent font-semibold hover:text-securenext-accent-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-securenext-accent focus-visible:ring-offset-2 rounded-sm"
          >
            Visit the Blog
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
