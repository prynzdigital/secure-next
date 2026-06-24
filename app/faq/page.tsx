import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'
import { faqSchema, breadcrumbSchema } from '@/lib/schema'
import { Breadcrumb } from '@/components/shared/Breadcrumb'
import { FAQSection } from '@/components/sections/FAQSection'
import { FinalCTA } from '@/components/sections/FinalCTA'

export const metadata: Metadata = {
  title: 'Cybersecurity FAQ | SecureNext Networks Chicago',
  description:
    'Questions about cybersecurity services, assessments, compliance requirements, or getting started with SecureNext? We have answered the most common questions below.',
  alternates: { canonical: `${SITE_URL}/faq` },
  openGraph: {
    title: 'Cybersecurity FAQ | SecureNext Networks Chicago',
    description:
      'Questions about cybersecurity services, assessments, compliance requirements, or getting started with SecureNext? We have answered the most common questions below.',
    url: `${SITE_URL}/faq`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cybersecurity FAQ | SecureNext Networks Chicago',
    description:
      'Questions about cybersecurity services, assessments, compliance requirements, or getting started with SecureNext? We have answered the most common questions below.',
  },
}

const faqCategories = [
  {
    category: 'General',
    items: [
      {
        question: 'What is SecureNext Networks?',
        answer: 'SecureNext Networks & Cyber Defense Solutions LLC is a Chicago-based cybersecurity firm providing security assessments, compliance programs, network security design, incident response, and ongoing security monitoring for organizations across the Chicago metropolitan area. We serve Cook, DuPage, Lake, Will, and Kane Counties.',
      },
      {
        question: 'What makes SecureNext different from an IT support company?',
        answer: 'Cybersecurity is a distinct discipline from IT support. IT support focuses on keeping systems operational — managing devices, user accounts, and network connectivity. Cybersecurity requires specialized expertise in threat modeling, vulnerability analysis, compliance framework implementation, incident response, and security architecture. SecureNext was built as a security-first firm. We do not provide general IT support.',
      },
      {
        question: 'What size organizations does SecureNext work with?',
        answer: 'Most of our clients are small to mid-sized organizations — from 5 to 500 employees — across healthcare, professional services, manufacturing, government, education, and nonprofit sectors. We design security programs appropriate to the actual size and risk profile of each client. Our smallest clients have fewer than 10 employees; our largest have several hundred.',
      },
      {
        question: 'What geographic area does SecureNext serve?',
        answer: 'SecureNext serves organizations across the five-county Chicago metropolitan area: Cook, DuPage, Lake, Will, and Kane Counties. We provide on-site services throughout the metro. Remote services can be provided to organizations outside the metropolitan area.',
      },
    ],
  },
  {
    category: 'Cybersecurity Services',
    items: [
      {
        question: 'What is a network security assessment?',
        answer: 'A network security assessment is a structured evaluation of your organization\'s current security posture — identifying vulnerabilities, configuration weaknesses, and policy gaps through technical scanning, configuration review, and manual analysis. The output is a written report with prioritized findings, risk ratings, and specific remediation recommendations. It answers the question: where is your organization actually vulnerable right now?',
      },
      {
        question: 'What is the difference between a security assessment and a penetration test?',
        answer: 'A security assessment identifies vulnerabilities through scanning and analysis. A penetration test goes further — it attempts to actively exploit identified vulnerabilities to determine whether they can actually be used to gain unauthorized access. Assessments are typically the starting point; penetration tests are conducted after baseline vulnerabilities have been addressed and provide empirical evidence of whether the controls in place hold under active adversarial pressure.',
      },
      {
        question: 'Does SecureNext offer ongoing security monitoring?',
        answer: 'Yes. Our managed security monitoring service provides continuous visibility into your environment — monitoring for indicators of compromise, unauthorized access attempts, and anomalous activity. We investigate alerts, eliminate false positives, and escalate confirmed events with specific recommended actions. Monthly monitoring reports are produced for compliance documentation purposes.',
      },
      {
        question: 'How quickly does SecureNext respond to security incidents?',
        answer: 'Incident response begins with a phone call. If your organization is experiencing an active security incident, call us immediately rather than submitting a form. We provide incident response for active breaches, ransomware, and suspected compromises. [NEEDS CLIENT INPUT: confirm response time commitment for active incidents]',
      },
    ],
  },
  {
    category: 'Network Security',
    items: [
      {
        question: 'Our IT provider says our network is secure. Why do we need a third-party assessment?',
        answer: 'Security assessment is a different discipline from IT support. An IT provider who manages your network admirably — keeping systems running, handling user support, maintaining connectivity — may not have the specialized methodology for vulnerability assessment, configuration analysis, and risk rating that a security assessment requires. An independent assessment provides a view that is not influenced by who configured the systems being evaluated.',
      },
      {
        question: 'What is network segmentation and why does it matter?',
        answer: 'Network segmentation divides your network into separate subnetworks so that systems with different functions and trust levels cannot communicate freely with each other. In a flat (unsegmented) network, a single compromised device can reach everything else. Segmentation limits the blast radius of a breach — ransomware that infects a workstation cannot reach servers if those segments are separated by firewall policy. It is required or strongly recommended by HIPAA, PCI-DSS, NIST, and CMMC.',
      },
      {
        question: 'How often should we have a network security assessment?',
        answer: 'Annual assessments are a standard recommendation and a requirement under several compliance frameworks. After significant infrastructure changes — new systems, new locations, new remote access methods — a reassessment within the annual cycle is warranted.',
      },
    ],
  },
  {
    category: 'Compliance',
    items: [
      {
        question: 'What is a HIPAA Security Rule risk analysis?',
        answer: 'A HIPAA security risk analysis is a specific, mandatory requirement of the HIPAA Security Rule (45 CFR §164.308(a)(1)). It is a documented, systematic evaluation of potential risks and vulnerabilities to electronic protected health information (ePHI). It must include: a complete inventory of all ePHI locations, identification of threats and vulnerabilities, assessment of current security controls, likelihood and impact ratings for each risk, and a documented risk determination. It is the compliance component most commonly cited in OCR enforcement actions when it is missing or insufficient.',
      },
      {
        question: 'Does SecureNext sign Business Associate Agreements (BAAs)?',
        answer: 'Yes. SecureNext operates as a Business Associate under HIPAA for all healthcare engagements and executes a BAA prior to any access to protected health information. This is standard practice for all our healthcare clients.',
      },
      {
        question: 'What is CMMC and do we need it?',
        answer: 'CMMC (Cybersecurity Maturity Model Certification) is a DoD requirement for contractors and subcontractors in the defense industrial base. Any organization that handles Controlled Unclassified Information (CUI) or Federal Contract Information (FCI) under a DoD contract may be subject to CMMC requirements. Illinois has a significant defense industrial base — manufacturers, engineers, and technology firms throughout the metro who may be affected. If you hold or seek DoD contracts and you are unsure whether CMMC applies, contact us for a scoping conversation.',
      },
      {
        question: 'What does NIST framework alignment mean for our organization?',
        answer: 'NIST Cybersecurity Framework alignment means assessing your current security posture against the five CSF functions (Identify, Protect, Detect, Respond, Recover), documenting your current profile, and developing a roadmap toward your target profile. It is increasingly required for state-funded organizations (school districts, government agencies), federal contractors, and organizations seeking certain cyber insurance policies or enterprise client relationships.',
      },
    ],
  },
  {
    category: 'Getting Started and Pricing',
    items: [
      {
        question: 'How does a new client engagement typically begin?',
        answer: 'It begins with a discovery call — 30 to 45 minutes to understand your organization, your current environment, and your primary concerns. No sales deck, no pitch. Based on that conversation, we define a specific engagement scope: what we will assess, what frameworks apply, what the deliverable looks like, and what the timeline and cost are. All of this is documented before any work begins.',
      },
      {
        question: 'How much do cybersecurity services cost?',
        answer: 'We establish cost clearly before any work begins and do not publish fixed pricing because the appropriate scope varies significantly by organization. We design assessments and programs to fit small and mid-sized business budgets — not enterprise pricing for organizations that do not need enterprise scope. Contact us and we will have the cost conversation directly, without obligation.',
      },
      {
        question: 'We do not have any security policies or documentation in place. Can we still engage SecureNext?',
        answer: 'Yes — and many clients engage us precisely because they do not have formal security policies or documentation. Starting from scratch is a defined starting point, not an obstacle. We assess what exists, identify what is missing, and help develop the policy foundation as part of the engagement.',
      },
      {
        question: 'Can SecureNext work alongside our existing IT provider or MSP?',
        answer: 'Yes — and this is the most common arrangement. We function as the security specialist layer alongside your IT support provider, each operating in our respective areas of expertise. We are happy to engage with your IT provider or MSP directly to coordinate recommendations and avoid conflicting configurations.',
      },
    ],
  },
]

const allFaqs = faqCategories.flatMap((cat) => cat.items)

export default function FAQPage() {
  const faqJsonLd = faqSchema(allFaqs)
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', item: SITE_URL },
    { name: 'FAQ', item: `${SITE_URL}/faq` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Page header */}
      <section className="bg-securenext-navy py-16 lg:py-20" aria-labelledby="faq-page-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'FAQ' }]} />
          <h1 id="faq-page-heading" className="mt-6 text-4xl sm:text-5xl font-bold text-white">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl">
            Common questions from Chicago organizations about cybersecurity services, compliance, and working with SecureNext.
          </p>
        </div>
      </section>

      {/* Category navigation */}
      <section className="py-8 bg-white border-b border-gray-200" aria-label="FAQ categories">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap gap-2" aria-label="Jump to FAQ category">
            {faqCategories.map((cat) => (
              <a
                key={cat.category}
                href={`#${cat.category.toLowerCase().replace(/\s+&?\s*/g, '-')}`}
                className="px-4 py-2 bg-securenext-gray text-securenext-navy text-sm font-medium rounded-full hover:bg-securenext-navy hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-securenext-accent focus-visible:ring-offset-2"
              >
                {cat.category}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* FAQ sections by category */}
      {faqCategories.map((cat) => (
        <section
          key={cat.category}
          id={cat.category.toLowerCase().replace(/\s+&?\s*/g, '-')}
          className="py-12 bg-white border-b border-gray-100 last:border-0"
          aria-labelledby={`faq-cat-${cat.category}`}
        >
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2
              id={`faq-cat-${cat.category}`}
              className="text-2xl font-bold text-securenext-navy mb-8"
            >
              {cat.category}
            </h2>
            <FAQSection
              items={cat.items}
              heading=""
            />
          </div>
        </section>
      ))}

      <FinalCTA />
    </>
  )
}
