import type { Metadata } from 'next'
import { CheckCircle } from 'lucide-react'
import { SITE_URL } from '@/lib/constants'
import { breadcrumbSchema } from '@/lib/schema'
import { Breadcrumb } from '@/components/shared/Breadcrumb'
import { FinalCTA } from '@/components/sections/FinalCTA'

export const metadata: Metadata = {
  title: 'About SecureNext | Chicago Cybersecurity Consulting Firm',
  description:
    'Meet SecureNext Networks — Chicago\'s dedicated cybersecurity consulting firm. Enterprise-grade security expertise, local relationships. Learn more.',
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: 'About SecureNext | Chicago Cybersecurity Consulting Firm',
    description:
      'Meet SecureNext Networks — Chicago\'s dedicated cybersecurity consulting firm. Enterprise-grade security expertise, local relationships. Learn more.',
    url: `${SITE_URL}/about`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About SecureNext | Chicago Cybersecurity Consulting Firm',
    description:
      'Meet SecureNext Networks — Chicago\'s dedicated cybersecurity consulting firm. Enterprise-grade security expertise, local relationships. Learn more.',
  },
}

const coreValues = [
  {
    name: 'Integrity',
    description: 'We give you the honest assessment, not the one that justifies the most services. If the assessment reveals you are in good shape, we will tell you that.',
  },
  {
    name: 'Expertise',
    description: 'Security is a specialty. We do not generalize across every IT discipline — we go deep on the security disciplines our clients actually need.',
  },
  {
    name: 'Clarity',
    description: 'Every deliverable we produce is written to be understood — by the executive who needs to make a decision and the technical team that will implement it.',
  },
  {
    name: 'Accountability',
    description: 'We stand behind our work. If a finding from an assessment is not clear, we clarify it. If a recommendation needs adjustment as implementation proceeds, we adjust it.',
  },
  {
    name: 'Partnership',
    description: 'We measure success by whether your security posture improves — not by the number of services on your invoice. Clients that trust us keep working with us.',
  },
  {
    name: 'Accessibility',
    description: 'The organizations that most need expert security guidance are often the ones least able to attract full-time security talent. We exist to close that gap.',
  },
]

export default function AboutPage() {
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', item: SITE_URL },
    { name: 'About', item: `${SITE_URL}/about` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Page header */}
      <section className="bg-securenext-navy py-16 lg:py-20" aria-labelledby="about-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'About' }]} />
          <h1 id="about-heading" className="mt-6 text-4xl sm:text-5xl font-bold text-white">
            Who We Are: Chicago&apos;s Dedicated Cybersecurity Team
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl">
            A Chicago cybersecurity firm built to protect organizations that need enterprise-grade security expertise without the overhead of an enterprise security team.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white" aria-labelledby="story-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 id="story-heading" className="text-3xl font-bold text-securenext-navy mb-6">Our Story</h2>
          <div className="prose-light">
            <p className="text-gray-700 leading-relaxed mb-5 text-[17px]">
              SecureNext Networks & Cyber Defense Solutions LLC was founded on a straightforward observation:
              most small and mid-sized organizations in Chicago cannot afford a full-time Chief Information
              Security Officer, but they have the same compliance obligations, the same threat exposure, and
              the same need for a documented security program that larger organizations do.
            </p>
            <p className="text-gray-700 leading-relaxed mb-5 text-[17px]">
              The Chicago market is filled with IT support firms that have added cybersecurity to their
              service menus as demand has grown. The result is a market where organizations seeking
              security expertise may be working with generalists who lack the specialized knowledge that
              HIPAA risk analysis, CMMC readiness, penetration testing, and incident response require.
            </p>
            <p className="text-gray-700 leading-relaxed text-[17px]">
              SecureNext was built as a security-first firm. Every engagement is led by security specialists.
              Every deliverable is written to produce a genuine security improvement — not to generate
              a compliance checkbox or a vendor relationship.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision */}
      <section className="py-16 bg-securenext-gray" aria-labelledby="mission-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h2 id="mission-heading" className="text-2xl font-bold text-securenext-navy mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To protect Chicago-area organizations from cyber threats by delivering genuine security expertise — assessments, compliance programs, and ongoing capability — calibrated to the actual size and risk profile of each client, without the overhead or complexity of enterprise security frameworks applied to organizations that need something different.
              </p>
            </div>
            <div className="bg-securenext-navy rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-white/70 leading-relaxed">
                A Chicago business environment where every organization — regardless of size, industry, or budget — has access to the security expertise it needs to operate confidently, protect its clients, and satisfy its compliance obligations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white" aria-labelledby="values-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="values-heading" className="text-3xl font-bold text-securenext-navy mb-10 text-center">
            Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value) => (
              <div key={value.name} className="flex flex-col p-6 bg-securenext-gray rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="h-5 w-5 text-securenext-accent shrink-0" aria-hidden="true" />
                  <h3 className="font-semibold text-securenext-navy text-lg">{value.name}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership — placeholders */}
      <section className="py-16 bg-securenext-gray" aria-labelledby="leadership-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="leadership-heading" className="text-3xl font-bold text-securenext-navy mb-4">
            Leadership Team
          </h2>
          <p className="text-gray-600 mb-8">
            {/* [NEEDS CLIENT INPUT: leadership bios, photos, certifications] */}
            SecureNext&apos;s leadership team brings decades of combined experience across cybersecurity consulting, network security, and compliance program development for Chicago-area organizations.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: '[NEEDS CLIENT INPUT: Name]', title: '[NEEDS CLIENT INPUT: Title]', bio: '[NEEDS CLIENT INPUT: Bio]' },
              { name: '[NEEDS CLIENT INPUT: Name]', title: '[NEEDS CLIENT INPUT: Title]', bio: '[NEEDS CLIENT INPUT: Bio]' },
            ].map((person, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                {/* Temporary placeholder — replace with <Image> when client provides photos */}
                <div
                  className="h-20 w-20 rounded-full bg-securenext-gray mb-4 flex items-center justify-center text-securenext-silver text-xs"
                  aria-hidden="true"
                />
                <h3 className="font-semibold text-securenext-navy">{person.name}</h3>
                <p className="text-sm text-securenext-accent mb-3">{person.title}</p>
                <p className="text-sm text-gray-600">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 bg-white" aria-labelledby="credentials-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="credentials-heading" className="text-3xl font-bold text-securenext-navy mb-6">
            Credentials &amp; Compliance Expertise
          </h2>
          {/* [NEEDS CLIENT INPUT: specific certifications (CISSP, CISM, CEH, OSCP, etc.)] */}
          <p className="text-gray-600 mb-8">
            SecureNext team members hold industry certifications across cybersecurity, compliance, and network security disciplines.
            <span className="text-securenext-accent font-medium"> [NEEDS CLIENT INPUT: list specific certifications]</span>
          </p>
          <div className="flex flex-wrap gap-3">
            {['HIPAA', 'NIST CSF', 'CMMC', 'PCI-DSS', 'SOC 2'].map((fw) => (
              <span
                key={fw}
                className="inline-block px-4 py-2 bg-securenext-gray rounded-full text-sm font-semibold text-securenext-navy border border-securenext-navy/15"
              >
                {fw}
              </span>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
