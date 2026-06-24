import type { IndustrySlug } from './constants'
import { SITE_URL } from './constants'

export interface IndustryData {
  slug: IndustrySlug
  title: string
  h1: string
  metaTitle: string
  metaDescription: string
  image: string
  imageAlt: string
  intro: string
  challenges: string[]
  services: string[]
  complianceFrameworks: string[]
  faqs: { question: string; answer: string }[]
  relatedServices: string[]
}

export const industriesData: IndustryData[] = [
  {
    slug: 'healthcare',
    title: 'Healthcare',
    h1: 'Healthcare Cybersecurity & HIPAA Compliance in Chicago',
    metaTitle: 'Healthcare Cybersecurity Chicago | SecureNext',
    metaDescription:
      'HIPAA-specialized cybersecurity for Chicago healthcare organizations. SecureNext conducts risk analyses, secures PHI, and signs BAAs. Talk to us.',
    image: '/images/industry-healthcare.jpg',
    imageAlt: 'Healthcare cybersecurity and HIPAA compliance services for Chicago healthcare organizations',
    intro: `Healthcare organizations in Chicago face a specific cybersecurity challenge that no amount of general-purpose security guidance addresses: the HIPAA Security Rule's formal risk analysis requirement, the PHI environments that must be protected under the technical safeguard standards, and the OCR enforcement activity that makes compliance documentation non-optional.

Physician practices, multispecialty groups, behavioral health providers, dental practices, and home health agencies across Cook County, Lake County, and the broader Chicago metro regularly turn to SecureNext for HIPAA-specific cybersecurity services. We conduct formal risk analyses aligned to the OCR's Risk Analysis Guidance and the NIST SP 800-30 methodology, secure ePHI environments against the access control and transmission security requirements of 45 CFR Part 164, and serve as Business Associates for all healthcare clients — executing BAAs prior to any access to protected health information.`,
    challenges: [
      'HIPAA compliance documentation gaps',
      'OCR audit readiness',
      'Unsecured ePHI environments',
      'IT vendors who overclaim HIPAA expertise',
      'Need for a formal third-party risk analysis',
    ],
    services: [
      'HIPAA Security Rule risk analysis (45 CFR §164.308(a)(1))',
      'PHI environment security assessment',
      'Business Associate Agreement execution',
      'Security awareness training for clinical staff',
      'Breach notification support',
    ],
    complianceFrameworks: ['HIPAA Security Rule', 'NIST SP 800-30', 'NIST SP 800-66', 'OCR Risk Analysis Guidance'],
    faqs: [
      { question: 'Does SecureNext sign Business Associate Agreements (BAAs)?', answer: 'Yes. We operate as a Business Associate under HIPAA for all healthcare engagements and execute a BAA prior to any access to ePHI. This is a standard part of our healthcare client onboarding process — not something you need to request or negotiate separately.' },
      { question: 'What does a HIPAA Security Rule risk analysis include?', answer: 'A HIPAA-compliant risk analysis must include: a scope of all ePHI (where it lives and how it flows), identification of threats and vulnerabilities to that ePHI, assessment of current security controls, likelihood and impact ratings for identified risks, and a documented risk determination. The output must be maintained and updated periodically — not completed once and filed away.' },
      { question: 'We have antivirus software and a firewall. Are we HIPAA compliant?', answer: 'Not necessarily. HIPAA compliance requires a formal risk analysis under 45 CFR §164.308(a)(1), documented policies and procedures, security training for all workforce members, and ongoing monitoring and review. Antivirus software and a firewall are technical safeguards — one component of compliance, not compliance in itself.' },
      { question: 'How often does our HIPAA risk analysis need to be updated?', answer: 'The HIPAA Security Rule requires that risk analysis be reviewed and updated "periodically and when environmental or operational changes occur." In practice, annual review is standard, with updates triggered by new systems, new vendors, staff changes, or incidents. We design risk analysis deliverables to support ongoing review rather than requiring a full restart each year.' },
    ],
    relatedServices: ['security-risk-compliance', 'cybersecurity-consulting', 'cybersecurity-training', 'security-monitoring'],
  },
  {
    slug: 'education',
    title: 'Education',
    h1: 'Cybersecurity for K-12 and Higher Education in Illinois',
    metaTitle: 'Cybersecurity for Schools Illinois | SecureNext',
    metaDescription:
      'SecureNext helps Illinois school districts align with NIST, protect student data, and meet FERPA requirements. Request a consultation for your district.',
    image: '/images/industry-education.jpg',
    imageAlt: 'Cybersecurity services for Illinois K-12 school districts and higher education institutions',
    intro: `K-12 school districts and higher education institutions in Illinois face a security environment shaped by three converging pressures: FERPA obligations to protect student records, state funding requirements that increasingly include cybersecurity standards tied to NIST framework alignment, and the operational reality of managing student devices, open campus networks, and limited IT staff with generalist backgrounds and no dedicated security capability.

SecureNext works with Illinois school districts and colleges to conduct security assessments that satisfy state and federal documentation requirements, develop NIST Cybersecurity Framework alignment roadmaps, protect student information systems under FERPA, and deliver staff security awareness training programs appropriate for the education environment. We understand that school district procurement processes have specific requirements, and we produce formal proposals and scopes of work that fit the procurement process your board or administration requires.`,
    challenges: [
      'NIST alignment mandates for state funding requirements',
      'FERPA compliance documentation',
      'Phishing incidents involving staff accounts',
      'Budget constraints and limited IT staff',
      'Procurement process requirements',
      'No in-house security expertise',
    ],
    services: [
      'NIST Cybersecurity Framework alignment assessment',
      'Network security assessment for school environments',
      'Student data protection review (FERPA)',
      'Staff security awareness training',
      'Incident response planning',
    ],
    complianceFrameworks: ['NIST Cybersecurity Framework', 'FERPA', 'Illinois Student Online Personal Protection Act (SOPPA)'],
    faqs: [
      { question: 'Does SecureNext work with Illinois school district procurement requirements?', answer: 'Yes. We understand that school district engagements often require formal bid processes, board approval, and specific contract formats. We produce proposals and scopes of work designed to fit the procurement processes that Illinois districts use, and we can participate in competitive bid processes where required.' },
      { question: 'What does NIST CSF alignment mean for a school district?', answer: 'For Illinois school districts, NIST Cybersecurity Framework alignment is increasingly required as a condition of state cybersecurity funding. It means assessing your current security posture against the five CSF functions (Identify, Protect, Detect, Respond, Recover), documenting the gaps, and producing a roadmap for achieving your target maturity level. SecureNext produces the documentation and roadmap that satisfies both the state requirement and serves as a genuine security improvement plan.' },
      { question: 'How does SecureNext approach training for school district staff?', answer: 'School staff face specific cybersecurity risks — phishing campaigns targeting district credentials, social engineering attempts related to student records, and ransomware attacks that have disrupted school operations across Illinois. We design training programs appropriate for non-technical staff, using real-world scenarios relevant to the education environment.' },
    ],
    relatedServices: ['security-risk-compliance', 'network-security-assessments', 'cybersecurity-training', 'cybersecurity-consulting'],
  },
  {
    slug: 'government',
    title: 'Government',
    h1: 'Government & Public Sector Cybersecurity in Chicago',
    metaTitle: 'Government Cybersecurity Consulting Chicago | SecureNext',
    metaDescription:
      'Cybersecurity consulting for Chicago-area municipalities and government agencies. NIST and CMMC alignment, risk assessments, and more. Contact us.',
    image: '/images/industry-government.jpg',
    imageAlt: 'Government and public sector cybersecurity consulting for Chicago-area municipalities and agencies',
    intro: `Municipalities, county agencies, water utilities, park districts, and other public sector entities in the Chicago metro face a specific cybersecurity challenge: the same threat landscape as private sector organizations, with procurement processes, budget approval cycles, and public accountability requirements that make security program development more complex.

SecureNext works with Chicago-area government entities on NIST Cybersecurity Framework alignment, risk assessments appropriate for public sector environments, security awareness training for government employees, and CMMC readiness for agencies or contractors in the defense supply chain. We understand public sector procurement — we produce formal proposals and scopes of work that satisfy the documentation requirements of government procurement processes and can participate in competitive bid processes where required. Our work with government clients produces documentation designed to withstand public records requests, board presentations, and audit scrutiny.`,
    challenges: [
      'NIST alignment requirements for federal and state programs',
      'CMMC preparation for defense contractors and subcontractors',
      'Procurement-appropriate proposal formats',
      'Limited security budget within government constraints',
      'Public accountability and records request exposure',
      'No in-house security expertise in most municipal IT departments',
    ],
    services: [
      'NIST Cybersecurity Framework alignment for public sector',
      'Risk assessments for municipal and government environments',
      'CMMC readiness assessment for defense contractors',
      'Security awareness training for government employees',
      'Incident response planning and tabletop exercises',
    ],
    complianceFrameworks: ['NIST Cybersecurity Framework', 'CMMC 2.0', 'FISMA', 'Illinois Cybersecurity Act'],
    faqs: [
      { question: 'Does SecureNext have experience with government procurement processes?', answer: 'Yes. We understand that government engagements often involve formal RFP or bid processes, specific contract terms, and documentation requirements tied to public accountability. We produce proposals, scopes of work, and deliverables that satisfy government procurement requirements and can participate in competitive bid processes where required.' },
      { question: 'What is CMMC, and which government contractors need it?', answer: 'CMMC (Cybersecurity Maturity Model Certification) is a DoD requirement for contractors and subcontractors in the defense industrial base. Any organization that handles Controlled Unclassified Information (CUI) or Federal Contract Information (FCI) under a DoD contract may be subject to CMMC requirements. Illinois has a significant defense industrial base — manufacturers, engineers, and technology firms throughout the metro who may be affected. We conduct CMMC readiness assessments to determine which level applies and what the gap is.' },
    ],
    relatedServices: ['security-risk-compliance', 'cybersecurity-consulting', 'network-security-assessments', 'cybersecurity-training'],
  },
  {
    slug: 'nonprofits',
    title: 'Nonprofits',
    h1: 'Cybersecurity for Nonprofits in Chicago and Illinois',
    metaTitle: 'Nonprofit Cybersecurity Chicago | SecureNext Networks',
    metaDescription:
      'Protect donor data and keep operations secure. SecureNext delivers affordable cybersecurity for Chicago nonprofits. Request a free assessment today.',
    image: '/images/industry-nonprofit.jpg',
    imageAlt: 'Nonprofit cybersecurity services for Chicago-area nonprofits and associations',
    intro: `Nonprofit organizations in Chicago face cybersecurity risks that are often underestimated precisely because the sector is underestimated as a target. Donor databases contain financial information and personal data. Grant management systems hold sensitive operational and financial records. Many Chicago nonprofits operate with donated technology infrastructure and IT volunteers rather than dedicated IT staff — creating security gaps that are invisible until something goes wrong.

SecureNext works with Chicago-area nonprofits to design security programs that fit nonprofit budgets without compromising on the protections donor data and organizational continuity require. We have experience working within the financial constraints of nonprofit organizations and structuring engagements that prioritize the highest-risk gaps first. We also understand the grant compliance dimensions of nonprofit cybersecurity — some federal and state grants now include cybersecurity requirements as a condition of award.`,
    challenges: [
      'Donor data protection and PII security',
      'Limited IT budget and staff',
      'Grant compliance requirements with cybersecurity components',
      'Board accountability and reporting',
      'Inadequate baseline security infrastructure',
      'Donated or aging technology creating security gaps',
    ],
    services: [
      'Security assessment scoped for nonprofit budgets',
      'Donor data protection review',
      'Grant compliance cybersecurity documentation',
      'Security awareness training for nonprofit staff and volunteers',
      'Basic security hygiene implementation guidance',
    ],
    complianceFrameworks: ['NIST Cybersecurity Framework', 'State grant compliance requirements', 'PII protection requirements'],
    faqs: [
      { question: 'Can SecureNext work within nonprofit budget constraints?', answer: 'Yes. We have worked with nonprofits and understand the budget reality. Our approach with nonprofit clients is to prioritize the highest-risk gaps first — the assessment tells us what those are — and build a phased security program that addresses them in an order of priority that fits your annual budget cycle. We do not require a minimum engagement size to start a conversation.' },
      { question: 'Does our nonprofit need cybersecurity if we\'re not a large organization?', answer: 'Yes. Nonprofit organizations are targets for ransomware, phishing, and data theft precisely because they are perceived as having fewer defenses than private-sector organizations. Donor databases, financial records, and the personal information of the people you serve all represent value to attackers. The cost of a breach — including the reputational damage to donor trust — typically exceeds the cost of reasonable preventive measures.' },
    ],
    relatedServices: ['cybersecurity-consulting', 'network-security-assessments', 'cybersecurity-training'],
  },
  {
    slug: 'professional-services',
    title: 'Professional Services',
    h1: 'Cybersecurity for Professional Services Firms in Chicago',
    metaTitle: 'Cybersecurity for Law Firms Chicago | SecureNext',
    metaDescription:
      'Cybersecurity for Chicago law firms, accounting practices, and financial services. Protect client privilege and meet compliance requirements. Learn more.',
    image: '/images/industry-professional-services.jpg',
    imageAlt: 'Cybersecurity for Chicago law firms, accounting practices, and professional services firms',
    intro: `Law firms, accounting practices, and financial advisory firms in Chicago manage some of the most sensitive client data in the economy — client privilege, financial records, personal tax information, transaction data. The cybersecurity implications of that sensitivity are significant. A breach of a law firm's client files is not just a technology problem; it is a professional liability, a bar ethics issue, and a client trust catastrophe. A breach of an accounting firm's tax client data triggers breach notification obligations and reputational damage that exceeds most security program budgets many times over.

SecureNext works with Chicago-area professional services firms to assess and harden their security posture against the specific threats that privilege, financial data, and professional licensing obligations create. For firms preparing for SOC 2 audits or PE transaction due diligence, we provide the compliance and assessment support those milestones require.`,
    challenges: [
      'Client privilege exposure and professional liability',
      'SOC 2 readiness for PE transactions or enterprise clients',
      'PE transaction security due diligence requirements',
      'NIST alignment as a client requirement or insurance prerequisite',
      'Managing a growing firm\'s security needs without a dedicated security team',
      'ABA cybersecurity ethics obligations for law firms',
    ],
    services: [
      'Security assessment for professional services firms',
      'SOC 2 readiness assessment and gap analysis',
      'Client data protection review',
      'Security program development for growing firms',
      'PE transaction security due diligence support',
    ],
    complianceFrameworks: ['NIST Cybersecurity Framework', 'SOC 2 Trust Services Criteria', 'ABA Model Rules (for law firms)', 'FTC Safeguards Rule (for financial services)'],
    faqs: [
      { question: 'What are the cybersecurity obligations for Chicago law firms?', answer: 'The ABA Model Rules of Professional Conduct (Rule 1.6) require lawyers to make reasonable efforts to prevent the inadvertent or unauthorized disclosure of client information. State bar ethics rules extend this obligation to cybersecurity measures appropriate to the sensitivity of client information. Increasingly, firm cyber insurance policies and enterprise client agreements are requiring documented security programs, independent assessments, and in some cases SOC 2 certifications.' },
      { question: 'What is SOC 2 and why are professional services firms being asked for it?', answer: 'SOC 2 (Service Organization Control 2) is an auditing standard that evaluates an organization\'s controls related to security, availability, processing integrity, confidentiality, and privacy. Enterprise clients and institutional investors increasingly require SOC 2 reports as evidence of security program maturity. For professional services firms handling sensitive client data, SOC 2 readiness is becoming a competitive requirement. SecureNext supports organizations through all phases of SOC 2 readiness preparation.' },
    ],
    relatedServices: ['security-risk-compliance', 'cybersecurity-consulting', 'network-security-assessments', 'cybersecurity-training'],
  },
  {
    slug: 'small-businesses',
    title: 'Small Businesses',
    h1: 'Small Business Cybersecurity Protection in Chicago',
    metaTitle: 'Small Business Cybersecurity Chicago | SecureNext',
    metaDescription:
      'Affordable, right-sized cybersecurity for Chicago small businesses. SecureNext protects you without enterprise pricing. Request a free assessment.',
    image: '/images/industry-small-business.jpg',
    imageAlt: 'Small business cybersecurity services for Chicago-area businesses of 5 to 500 employees',
    intro: `Small businesses in Chicago — manufacturers in Bolingbrook, distributors in Joliet, retail businesses in Naperville, service businesses throughout the north and south suburbs — are not too small to be cybersecurity targets. Ransomware operators do not filter by company size. Phishing attacks do not require a minimum employee count. The data that small businesses collect from customers, employees, and vendors represents value to attackers who are operating at scale and looking for organizations without the security controls to stop them.

SecureNext works with Chicago-area small businesses to provide right-sized security programs — not enterprise frameworks applied to a 30-person company, but security assessments, practical remediation, and basic security hygiene programs appropriate to the actual risk profile and budget of a small business. The starting point is usually a security assessment that tells you what you are actually exposed to before you decide what to do about it.`,
    challenges: [
      'Fear of ransomware and not knowing the risk',
      'No in-house IT security expertise',
      'Not knowing what vulnerabilities exist',
      'Budget constraints',
      'Accessible starting point for a security program',
      'Uncertainty about compliance requirements that may apply',
    ],
    services: [
      'Small business security assessment',
      'Basic security hygiene program',
      'Ransomware risk reduction',
      'Firewall and access control review',
      'Employee security awareness training',
    ],
    complianceFrameworks: ['NIST Small Business Cybersecurity Act guidance', 'State data breach notification laws (Illinois Personal Information Protection Act)', 'PCI-DSS (if accepting payment cards)'],
    faqs: [
      { question: 'Is my small business a realistic target for a cyberattack?', answer: 'Yes. Small businesses represent the majority of ransomware victims because attackers operate at scale — they target organizations with low defenses and valuable-enough data to justify a ransom demand. A 25-person accounting firm, a 15-person medical practice, or a 50-person manufacturer fits that profile. The question is not whether small businesses are targeted; it is whether your specific business has the defenses to stop an attack that is not even specifically aimed at you.' },
      { question: 'How much does a security assessment cost for a small business?', answer: 'We do not publish fixed pricing because the right scope varies by organization. What we commit to: we establish cost clearly before any work begins, and we design assessments that fit small business budgets. If you tell us your budget constraints during the scoping conversation, we will help you identify the highest-priority starting point within those constraints. Contact us and we will have that conversation without obligation.' },
      { question: 'What are the most important security steps a small business should take right now?', answer: 'Based on the most common small business security failures we see: (1) Enable multi-factor authentication on all email and cloud service accounts. (2) Ensure you have offline or immutable backups of critical data. (3) Confirm your firewall is in place and that someone has reviewed its configuration in the last 12 months. (4) Train employees to recognize phishing emails — at minimum, run a brief session on what to look for and what to do when in doubt. A security assessment will tell you which of these you have and which you are missing.' },
    ],
    relatedServices: ['cybersecurity-consulting', 'network-security-assessments', 'cybersecurity-training', 'firewall-vpn-solutions'],
  },
]

export function getIndustryBySlug(slug: string): IndustryData | undefined {
  return industriesData.find((i) => i.slug === slug)
}

export function getIndustryUrl(slug: string): string {
  return `${SITE_URL}/industries/${slug}`
}
