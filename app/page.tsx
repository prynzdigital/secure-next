import type { Metadata } from 'next'
import { SITE_URL, SITE_NAME } from '@/lib/constants'
import { faqSchema, breadcrumbSchema } from '@/lib/schema'
import { HeroSection } from '@/components/sections/HeroSection'
import { TrustBar } from '@/components/sections/TrustBar'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { ProcessTimeline } from '@/components/sections/ProcessTimeline'
import { LocalSEOSection } from '@/components/sections/LocalSEOSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { AboutSnippet } from '@/components/sections/AboutSnippet'
import { IndustriesTeaser } from '@/components/sections/IndustriesTeaser'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'

export const metadata: Metadata = {
  title: `Cybersecurity Company Chicago | ${SITE_NAME}`,
  description:
    "Chicago's cybersecurity specialists. We protect businesses, healthcare orgs, and governments from cyber threats. Request a free assessment today.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: `Cybersecurity Company Chicago | ${SITE_NAME}`,
    description:
      "Chicago's cybersecurity specialists. We protect businesses, healthcare orgs, and governments from cyber threats. Request a free assessment today.",
    url: SITE_URL,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Cybersecurity Company Chicago | ${SITE_NAME}`,
    description:
      "Chicago's cybersecurity specialists. We protect businesses, healthcare orgs, and governments from cyber threats. Request a free assessment today.",
  },
}

const homepageFaqs = [
  {
    question: 'What cybersecurity services does SecureNext provide?',
    answer:
      'SecureNext provides cybersecurity consulting, network security assessments, security risk and compliance programs (HIPAA, NIST, CMMC, PCI-DSS), firewall and VPN solutions, cloud security, managed security monitoring, incident response, penetration testing, and cybersecurity awareness training for Chicago-area organizations.',
  },
  {
    question: 'Does SecureNext work with small businesses?',
    answer:
      'Yes. Most of our clients are small to mid-sized organizations — the ones that need enterprise-quality security expertise without the overhead of an in-house security team. We scope every engagement to the actual size and risk profile of the organization, not a generic template.',
  },
  {
    question: 'What areas of Chicago does SecureNext serve?',
    answer:
      'SecureNext serves organizations across the five-county Chicago metropolitan area: Cook County, DuPage County, Lake County, Will County, and Kane County. We provide on-site services throughout the metro.',
  },
  {
    question: 'How much does a cybersecurity assessment cost?',
    answer:
      'We establish cost clearly before any work begins. Assessment scope and cost depend on the size of your environment, your compliance requirements, and the depth of analysis you need. We design assessments to fit the budgets of small and mid-sized businesses — not enterprise pricing for organizations that do not need enterprise scope. Contact us and we will have that conversation without obligation.',
  },
  {
    question: 'Does SecureNext sign Business Associate Agreements for HIPAA clients?',
    answer:
      'Yes. We operate as a Business Associate under HIPAA for all healthcare engagements and execute a BAA prior to any access to protected health information. This is standard practice for all our healthcare clients.',
  },
  {
    question: 'What should I do if I think my organization has been breached?',
    answer:
      'Call us immediately. Do not shut down infected systems — this destroys forensic evidence. If possible, isolate affected systems from the network without shutting them down. Do not attempt to remove malware or change passwords across the environment without guidance. We provide incident response services and the first call is always a phone call.',
  },
  {
    question: 'How long does a network security assessment take?',
    answer:
      'For a single-location organization, two to four weeks from kickoff to final report delivery, depending on the size and complexity of your environment. The assessment includes a findings walkthrough session — not just a report delivered to your inbox.',
  },
  {
    question: 'Do I need to have existing security policies before engaging SecureNext?',
    answer:
      'No. Many clients engage us precisely because they do not have formal security policies. We assess what exists and help develop the policy foundation as part of the engagement. Starting from scratch is not an obstacle — it is a defined starting point.',
  },
  {
    question: 'Can SecureNext work alongside our existing IT provider or MSP?',
    answer:
      'Yes — and this is the most common arrangement. We work as the security specialist layer alongside your IT support provider, each operating in our respective areas of expertise. We are happy to engage with your IT provider or MSP directly to coordinate recommendations.',
  },
  {
    question: 'What compliance frameworks does SecureNext support?',
    answer:
      'We support HIPAA Security Rule risk analysis, NIST Cybersecurity Framework assessment and alignment, CMMC readiness for defense contractors, and PCI-DSS compliance programs. We also support SOC 2 readiness preparation.',
  },
]

export default function HomePage() {
  const faqJsonLd = faqSchema(homepageFaqs)
  const breadcrumbJsonLd = breadcrumbSchema([{ name: 'Home', item: SITE_URL }])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <HeroSection />
      <TrustBar />
      <AboutSnippet />
      <ServicesGrid />
      <IndustriesTeaser />
      <WhyChooseUs />
      <FAQSection
        items={homepageFaqs}
        heading="Frequently Asked Questions"
        subheading="Common questions from Chicago organizations considering a cybersecurity partner."
        topContent={
          <div>
            <h2 className="text-2xl font-bold text-securenext-navy mb-6">
              Cybersecurity Company in Chicago: Why SecureNext
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-[17px]">
              Chicago businesses searching for a cybersecurity company face a market crowded with
              IT support firms that have added security to their service menus without the specialized
              expertise security requires. SecureNext was built as a cybersecurity-first firm — our
              entire practice is focused on security assessment, compliance program development,
              network security design, and incident response, not on helpdesk support or hardware sales.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-[17px]">
              Organizations across the Chicago metro — from physician practices in Naperville that need
              a HIPAA security risk analysis, to manufacturers in Joliet preparing for CMMC certification,
              to professional services firms in the Loop dealing with new compliance requirements from
              enterprise clients — engage SecureNext because the firm has genuine expertise in the
              security disciplines these organizations need, not generalist IT experience relabeled as
              cybersecurity consulting.
            </p>
            <p className="text-gray-700 leading-relaxed text-[17px]">
              If your organization is in Cook County, DuPage County, Lake County, Will County, or Kane
              County and you need a cybersecurity partner that understands your industry, your compliance
              obligations, and the specific threat landscape facing Chicago-area businesses in your sector,
              the conversation starts here.
            </p>
          </div>
        }
      />
      <ProcessTimeline />
      <LocalSEOSection />
      <FinalCTA
        heading="Protecting Networks. Securing Futures."
        subheading="Start with a free security assessment — no commitment required. Know exactly where your organization stands."
      />
    </>
  )
}
