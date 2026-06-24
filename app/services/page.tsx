import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ShieldCheck, Network, Search, FileCheck, Shield, Cloud, Eye, AlertTriangle, Target, GraduationCap } from 'lucide-react'
import { SITE_URL } from '@/lib/constants'
import { breadcrumbSchema } from '@/lib/schema'
import { Breadcrumb } from '@/components/shared/Breadcrumb'
import { FinalCTA } from '@/components/sections/FinalCTA'

export const metadata: Metadata = {
  title: 'Cybersecurity Services Chicago IL | SecureNext',
  description:
    'Explore our full range of cybersecurity services in Chicago: assessments, compliance, monitoring, cloud security, training, and more. Learn more.',
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: 'Cybersecurity Services Chicago IL | SecureNext',
    description:
      'Explore our full range of cybersecurity services in Chicago: assessments, compliance, monitoring, cloud security, training, and more. Learn more.',
    url: `${SITE_URL}/services`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cybersecurity Services Chicago IL | SecureNext',
    description:
      'Explore our full range of cybersecurity services in Chicago: assessments, compliance, monitoring, cloud security, training, and more. Learn more.',
  },
}

const services = [
  { slug: 'cybersecurity-consulting', title: 'Cybersecurity Consulting', icon: ShieldCheck, description: 'Build a security program appropriate to your organization — assessments, compliance programs, and ongoing advisory.' },
  { slug: 'network-infrastructure-design', title: 'Network Infrastructure Design', icon: Network, description: 'Secure network architecture designed from the ground up — topology, segmentation, and persistent documentation.' },
  { slug: 'network-security-assessments', title: 'Network Security Assessments', icon: Search, description: 'Find your actual vulnerabilities with prioritized findings and plain-language remediation guidance.' },
  { slug: 'security-risk-compliance', title: 'Security Risk & Compliance', icon: FileCheck, description: 'HIPAA, CMMC, NIST, and PCI-DSS compliance programs designed to hold up under audits and enforcement review.' },
  { slug: 'firewall-vpn-solutions', title: 'Firewall & VPN Solutions', icon: Shield, description: 'Enterprise perimeter security — designed, configured, and documented so your defenses actually work.' },
  { slug: 'cloud-security-solutions', title: 'Cloud Security Solutions', icon: Cloud, description: 'AWS, Azure, and GCP security posture assessment, IAM hardening, and compliance alignment.' },
  { slug: 'security-monitoring', title: 'Security Monitoring', icon: Eye, description: 'Continuous monitoring with alert investigation, incident escalation, and compliance documentation.' },
  { slug: 'incident-response', title: 'Incident Response', icon: AlertTriangle, description: 'Structured response when something goes wrong — containment, investigation, recovery, and post-incident documentation.', urgent: true },
  { slug: 'penetration-testing', title: 'Penetration Testing', icon: Target, description: 'Active adversarial testing by experienced practitioners — not a scan report, but a real exploitation attempt.' },
  { slug: 'cybersecurity-training', title: 'Cybersecurity Training', icon: GraduationCap, description: 'Behavior-change training with phishing simulations and compliance documentation for your team.' },
]

export default function ServicesPage() {
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', item: SITE_URL },
    { name: 'Services', item: `${SITE_URL}/services` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Page header */}
      <section className="bg-securenext-navy py-16 lg:py-20" aria-labelledby="services-hub-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Services' }]} />
          <h1 id="services-hub-heading" className="mt-6 text-4xl sm:text-5xl font-bold text-white">
            Our Cybersecurity &amp; Network Security Services
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl">
            From initial security assessment to ongoing monitoring — specialized security services that match your organization&apos;s actual risk and compliance profile.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 bg-securenext-gray" aria-label="All services">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className={`group flex flex-col bg-white rounded-xl p-6 shadow-sm border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-securenext-accent focus-visible:ring-offset-2 ${
                  svc.urgent
                    ? 'border-red-200 hover:border-red-400 hover:shadow-md'
                    : 'border-gray-100 hover:border-securenext-accent/30 hover:shadow-md'
                }`}
              >
                {svc.urgent && (
                  <div className="mb-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-100 text-red-700">
                      Active Incident? Call Us Now
                    </span>
                  </div>
                )}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-securenext-accent/10 text-securenext-accent group-hover:bg-securenext-accent group-hover:text-white transition-all duration-300">
                  <svc.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h2 className="text-lg font-semibold text-securenext-navy mb-2 group-hover:text-securenext-accent transition-colors duration-200">
                  {svc.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">{svc.description}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-securenext-accent">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
