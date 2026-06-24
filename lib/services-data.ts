import type { ServiceSlug } from './constants'
import { SITE_URL } from './constants'

export interface ServiceFaq {
  question: string
  answer: string
}

export interface ServiceData {
  slug: ServiceSlug
  title: string
  h1: string
  metaTitle: string
  metaDescription: string
  ogTitle: string
  ogDescription: string
  primaryKeyword: string
  serviceType: string
  schemaDescription: string
  icon: string
  overview: string
  keyBenefits: { headline: string; body: string }[]
  challenges: { headline: string; body: string }[]
  process: { step: number; headline: string; body: string }[]
  deliverables: string[]
  audiences: { headline: string; body: string }[]
  faqs: ServiceFaq[]
  ctaHeadline: string
  relatedServices: ServiceSlug[]
  isIncidentResponse?: boolean
}

export const servicesData: ServiceData[] = [
  {
    slug: 'cybersecurity-consulting',
    title: 'Cybersecurity Consulting',
    h1: 'Cybersecurity Consulting for Chicago Organizations',
    metaTitle: 'Cybersecurity Consulting Chicago | SecureNext',
    metaDescription:
      'Need a cybersecurity consultant in Chicago? SecureNext builds security programs tailored to your organization. Request a free assessment today.',
    ogTitle: 'Cybersecurity Consulting Chicago | SecureNext',
    ogDescription:
      'Need a cybersecurity consultant in Chicago? SecureNext builds security programs tailored to your organization. Request a free assessment today.',
    primaryKeyword: 'cybersecurity consulting Chicago',
    serviceType: 'Cybersecurity Consulting Services',
    schemaDescription:
      'SecureNext provides cybersecurity consulting for Chicago organizations — assessments, compliance programs, and ongoing advisory services.',
    icon: 'ShieldCheck',
    overview: `Cybersecurity consulting in Chicago means something specific: organizations that need enterprise-grade security expertise without the budget or headcount for a full internal security team. SecureNext builds security programs for exactly these organizations — from small businesses that have never had a formal security posture to mid-market firms dealing with compliance mandates they did not anticipate and professional services firms facing new regulatory pressure as they grow.

What cybersecurity consulting is not, at SecureNext, is a sales call dressed up as an assessment. We begin by understanding your organization — your industry, your data environment, your existing controls, your compliance obligations, and your actual risk tolerance. From that baseline, we help you build a security program that is appropriate to your circumstances: not an enterprise framework retrofitted into a 40-person office, and not a minimal checkbox exercise that leaves you exposed.

Our cybersecurity consulting engagements are typically scoped around one of three starting points: an initial security posture assessment to establish the baseline; a compliance-driven engagement when a specific framework (HIPAA, NIST, CMMC, PCI-DSS) must be addressed by a deadline; or an advisory relationship where SecureNext serves as an ongoing fractional CISO function alongside your existing IT operations. In each case, the outcome is the same — a security program you can maintain, report on, and stand behind when your board, your regulator, or your clients ask the hard questions.`,
    keyBenefits: [
      {
        headline: 'No in-house security team required.',
        body: 'We function as your security department — providing strategy, methodology, documentation, and execution — without the overhead of a full-time hire.',
      },
      {
        headline: 'Compliance frameworks addressed correctly.',
        body: 'Whether the requirement is HIPAA, NIST CSF, CMMC, or PCI-DSS, we know the frameworks well enough to produce documentation that holds up under actual audits, not just internal reviews.',
      },
      {
        headline: 'Business-size appropriate scope.',
        body: 'A 35-person manufacturer and a 300-person professional services firm need different security programs. We scope every engagement to your actual environment, not a generic template.',
      },
      {
        headline: 'Plain-language deliverables.',
        body: 'Our reports are written for the executive who needs to make a decision and the technical lead who needs to implement it — not for a security engineer who already knows what a CVE is.',
      },
      {
        headline: 'A partner, not a vendor.',
        body: 'We measure our success by whether your security posture improves, not by the number of services on your invoice.',
      },
      {
        headline: 'Prioritized action, not paralyzing findings.',
        body: 'Every assessment we produce includes a prioritized remediation roadmap, so you know what to address first, what to address later, and what to accept as residual risk.',
      },
    ],
    challenges: [
      {
        headline: '"We have IT support, but no one is looking at security specifically."',
        body: 'Most IT generalists manage your infrastructure admirably. They keep systems running, handle user support, and maintain your network. But security specialization — threat modeling, vulnerability analysis, compliance framework mapping, incident response planning — is a different discipline. We complement your existing IT support without displacing it.',
      },
      {
        headline: '"A compliance deadline arrived and we do not know where to start."',
        body: 'HIPAA risk analysis requirements, NIST framework mandates for state-funded school districts, CMMC requirements for defense contractors — these deadlines arrive with specific documentation requirements and audit trail obligations. We have worked through these frameworks before and we know what the deliverable needs to look like, not just what the regulation says.',
      },
      {
        headline: '"The board is asking security questions we cannot answer confidently."',
        body: 'As organizations grow and take on more data responsibility, boards and leadership teams increasingly ask for evidence of a security program — not just reassurance that someone is "handling it." We help you build the documented, auditable security program that makes those conversations straightforward.',
      },
      {
        headline: '"We had a near-miss incident and need to understand what happened and what to fix."',
        body: 'Post-incident, the question is not just what went wrong but what the full exposure looks like and what systematic changes need to happen to prevent recurrence. We conduct post-incident assessments that go beyond the immediate event to evaluate underlying vulnerabilities.',
      },
    ],
    process: [
      {
        step: 1,
        headline: 'Discovery Call (No Cost)',
        body: 'We spend 30–45 minutes understanding your organization, your current environment, and your primary concerns. No sales deck, no pitch — just a conversation about where you are and what you need.',
      },
      {
        step: 2,
        headline: 'Scope Definition',
        body: 'Based on the discovery conversation, we define a specific engagement scope: what we will assess, what frameworks apply, what the deliverable looks like, and what the timeline and cost are. This is documented before we begin.',
      },
      {
        step: 3,
        headline: 'Assessment and Analysis',
        body: 'We conduct the technical and documentary assessment — reviewing configurations, interviewing stakeholders, evaluating policies, and running structured vulnerability analysis. The depth varies by engagement scope.',
      },
      {
        step: 4,
        headline: 'Findings and Recommendations',
        body: 'We deliver a written report with prioritized findings, risk ratings, and specific remediation recommendations. We walk through the report with you in a working session — not a slide presentation.',
      },
      {
        step: 5,
        headline: 'Ongoing Advisory (Optional)',
        body: 'Many clients retain us in an ongoing advisory capacity after the initial engagement — for remediation support, compliance maintenance, and periodic reassessment as the environment changes.',
      },
    ],
    deliverables: [
      'Written security posture assessment with prioritized findings and risk ratings',
      'Compliance gap analysis against applicable framework(s) (HIPAA, NIST CSF, CMMC, PCI-DSS as applicable)',
      'Prioritized remediation roadmap with timeline recommendations',
      'Executive summary suitable for board and leadership presentation',
      'Technical detail appendix for your IT team or managed service provider',
      'Working session to review findings (not a one-way presentation)',
    ],
    audiences: [
      {
        headline: 'Small business owners (5–100 employees)',
        body: 'Who have never had a formal security assessment and want to understand what they are exposed to before something happens. The starting point is the assessment; the path forward is whatever the assessment reveals.',
      },
      {
        headline: 'Mid-market IT managers and technology leaders (100–500 employees)',
        body: 'Who are dealing with compliance requirements, board-level security questions, or the need to formalize a security program that has grown organically. They need a firm that can work at their technical level and produce deliverables that satisfy a formal audit.',
      },
      {
        headline: 'Healthcare, education, government, and professional services organizations',
        body: 'With specific compliance frameworks that require formal documentation and a third-party assessment to satisfy regulatory requirements. The engagement is defined by the compliance requirement, and the deliverable is designed to withstand scrutiny.',
      },
    ],
    faqs: [
      {
        question: 'What is the difference between cybersecurity consulting and managed security services?',
        answer:
          'Consulting engagements are typically scoped projects — assessments, compliance programs, security architecture reviews — with defined deliverables and timelines. Managed security services are ongoing: we monitor your environment continuously, respond to alerts, and provide a persistent security presence. Many clients start with a consulting engagement and transition to managed services once the initial security program is established.',
      },
      {
        question: 'How long does a cybersecurity consulting engagement take?',
        answer:
          'An initial security posture assessment typically takes two to four weeks from kickoff to final report delivery, depending on the size and complexity of your environment. Compliance-driven engagements (HIPAA risk analysis, NIST assessment) have similar timelines. Ongoing advisory relationships continue indefinitely.',
      },
      {
        question: 'Do we need to have security policies in place before engaging SecureNext?',
        answer:
          'No. Many clients engage us precisely because they do not have formal security policies. We assess what exists, identify what is missing, and help develop the policy foundation as part of the engagement. Starting from scratch is not an obstacle — it is a defined starting point.',
      },
      {
        question: 'Can SecureNext work alongside our existing IT provider?',
        answer:
          'Yes — and this is the most common arrangement. We work as the security specialist layer alongside your IT support provider, each operating in our respective areas of expertise. We are happy to engage with your IT provider directly to coordinate recommendations and avoid conflicting configurations.',
      },
    ],
    ctaHeadline: 'Ready to build a security program for your organization?',
    relatedServices: ['network-security-assessments', 'security-risk-compliance', 'security-monitoring'],
  },
  {
    slug: 'network-infrastructure-design',
    title: 'Network Infrastructure Design',
    h1: 'Secure Network Infrastructure Design in Chicago',
    metaTitle: 'Network Infrastructure Design Chicago | SecureNext',
    metaDescription:
      'SecureNext designs secure, scalable network infrastructure for Chicago businesses. From architecture to implementation — request a consultation today.',
    ogTitle: 'Network Infrastructure Design Chicago | SecureNext',
    ogDescription:
      'SecureNext designs secure, scalable network infrastructure for Chicago businesses. From architecture to implementation — request a consultation today.',
    primaryKeyword: 'network infrastructure design Chicago',
    serviceType: 'Network Infrastructure Design',
    schemaDescription:
      'SecureNext designs secure, scalable network infrastructure for Chicago-area organizations — from architecture to implementation.',
    icon: 'Network',
    overview: `A secure network infrastructure design in Chicago means more than buying the right equipment. It means making deliberate decisions — about topology, segmentation, access controls, redundancy, and documentation — before deployment, when changes are still inexpensive, rather than after, when vulnerabilities have already been exploited. SecureNext designs network infrastructure for Chicago-area organizations that need their network to be both operationally reliable and security-hardened from the ground up.

Most organizations arrive at network security assessments with infrastructure that was designed for operational convenience rather than security. A switch was added when the office expanded. A wireless access point was installed by a vendor who did not know your network topology. Remote access was stood up quickly during an operational emergency. Over time, these expedient decisions accumulate into a network that works but is difficult to defend.

Our network infrastructure design service addresses this problem at the planning stage — for new builds, expansions, and redesigns. We produce architecture documentation that your IT team or managed service provider can implement and maintain, with security controls built into the design rather than applied as an afterthought.`,
    keyBenefits: [
      {
        headline: 'Security by design, not by retrofit.',
        body: 'Network security controls — segmentation, VLAN architecture, firewall rule structure, access control lists — are built into the design before deployment rather than applied to an existing infrastructure after vulnerabilities have accumulated.',
      },
      {
        headline: 'Documentation that persists.',
        body: 'We produce network diagrams, configuration standards, and architecture documentation that stays with your organization — not in a vendor\'s head. This documentation is essential for incident response, change management, and onboarding new IT staff.',
      },
      {
        headline: 'Scalability without security compromise.',
        body: 'As your organization grows, adds locations, or adopts new technology, the network architecture we design accommodates growth without requiring security to be re-built from scratch.',
      },
      {
        headline: 'Compliance-aligned design.',
        body: 'For organizations with HIPAA, NIST, CMMC, or PCI-DSS requirements, we design network environments that satisfy the technical safeguard and access control requirements of the applicable framework.',
      },
      {
        headline: 'Vendor-neutral recommendations.',
        body: 'We recommend equipment and architecture based on security requirements and operational fit, not vendor relationships or product margins.',
      },
      {
        headline: 'Reduced long-term costs.',
        body: 'Designing security into the infrastructure is significantly less expensive than discovering vulnerabilities after deployment and remediating them under operational pressure.',
      },
    ],
    challenges: [
      {
        headline: '"Our network grew organically and nobody documented it."',
        body: 'This is the most common infrastructure scenario we encounter. The network works — but no one can confidently describe what is connected to it, what can communicate with what, or what the blast radius of a breach would be. We assess what exists, document it accurately, and design a remediation path toward a defensible architecture.',
      },
      {
        headline: '"We are opening a new location and need to design the network correctly from the start."',
        body: 'A new location is an opportunity to design infrastructure correctly. We work with your team before equipment is ordered to define the architecture — segmentation, remote access method, wireless design, connectivity to primary locations — so implementation is straightforward rather than improvised.',
      },
      {
        headline: '"We need to segment our network for compliance reasons but do not know how to approach it."',
        body: 'HIPAA, PCI-DSS, and NIST frameworks all require or strongly recommend network segmentation — isolating sensitive systems, restricting lateral movement, and limiting the scope of what a compromised endpoint can access. We design segmentation architectures that satisfy the compliance requirement and can be implemented within your current infrastructure.',
      },
      {
        headline: '"We had a security incident and our network topology made containment impossible."',
        body: 'When a network lacks segmentation, a single compromised endpoint can become a pivot point for lateral movement across the entire environment. We design networks that limit lateral movement by default — so that containment during an incident is a matter of isolating a segment, not scrambling to understand what can reach what.',
      },
    ],
    process: [
      { step: 1, headline: 'Environment Discovery', body: 'We document your existing network — topology, devices, connectivity, access controls, remote access methods, and existing documentation (or the absence of it).' },
      { step: 2, headline: 'Requirements Analysis', body: 'We identify your security, compliance, operational, and growth requirements — the design criteria the architecture must satisfy.' },
      { step: 3, headline: 'Architecture Design', body: 'We produce a secure network architecture design: topology diagram, VLAN structure, segmentation model, firewall rule architecture, access control framework, and remote access methodology.' },
      { step: 4, headline: 'Documentation Package', body: 'We deliver a complete documentation package — architecture diagram, device inventory, configuration standards, and implementation guide.' },
      { step: 5, headline: 'Implementation Support', body: 'We provide implementation guidance for your IT team or managed service provider, and can provide direct implementation services for clients who prefer a single-vendor delivery.' },
    ],
    deliverables: [
      'Network architecture diagram (logical and physical)',
      'VLAN and segmentation design documentation',
      'Firewall rule architecture and access control framework',
      'Remote access design (VPN or zero-trust methodology as appropriate)',
      'Device and connectivity inventory',
      'Implementation guide for internal IT team or MSP',
      'Compliance alignment notes (HIPAA, NIST, PCI-DSS as applicable)',
    ],
    audiences: [
      { headline: 'Organizations building a new office or expanding to new locations', body: 'Who want to design the network correctly before equipment is installed — rather than securing a network that was designed without security in mind.' },
      { headline: 'Organizations that have experienced a security incident', body: 'And need to understand whether their existing network architecture contributed to the incident and how to redesign it to prevent recurrence.' },
      { headline: 'Organizations preparing for compliance audits', body: '(HIPAA, PCI-DSS, NIST, CMMC) that require documented evidence of network segmentation and access controls as part of their technical safeguard requirements.' },
    ],
    faqs: [
      {
        question: 'Do you recommend specific equipment vendors or brands?',
        answer: 'We are vendor-neutral. Our recommendations are based on security capability, operational fit, and your existing infrastructure — not on vendor relationships. We work with the major enterprise network vendors (Cisco, Palo Alto, Fortinet, Juniper, and others) and can design within your existing platform or recommend a change where the security or operational case supports it.',
      },
      {
        question: 'How long does a network infrastructure design engagement take?',
        answer: 'For a single-location organization, an architecture design engagement typically takes two to three weeks from discovery to final deliverable. Multi-site or complex environments take longer. We establish timeline expectations during the scoping conversation.',
      },
      {
        question: 'Can SecureNext assess our existing network before designing improvements?',
        answer: 'Yes — and for most clients, this is the right starting point. A network security assessment provides the baseline documentation and vulnerability analysis that informs a redesign. Many clients engage us for an assessment first and then proceed to a formal architecture design based on the findings.',
      },
      {
        question: 'Will you work with our existing IT team or MSP during implementation?',
        answer: 'Yes. We produce documentation designed for implementation by your existing IT team or MSP. We are also available to answer technical questions during implementation and to review the final configuration to confirm it matches the design intent.',
      },
    ],
    ctaHeadline: 'Ready to build a network that is secure by design?',
    relatedServices: ['firewall-vpn-solutions', 'cloud-security-solutions', 'network-security-assessments'],
  },
  {
    slug: 'network-security-assessments',
    title: 'Network Security Assessments',
    h1: 'Network Security Assessments for Chicago Businesses',
    metaTitle: 'Network Security Assessment Chicago | SecureNext',
    metaDescription:
      'Find your vulnerabilities before attackers do. SecureNext delivers network security assessments for Chicago businesses. Request your assessment now.',
    ogTitle: 'Network Security Assessment Chicago | SecureNext',
    ogDescription:
      'Find your vulnerabilities before attackers do. SecureNext delivers network security assessments for Chicago businesses. Request your assessment now.',
    primaryKeyword: 'network security assessment Chicago',
    serviceType: 'Network Security Assessment',
    schemaDescription:
      'SecureNext delivers comprehensive network security assessments for Chicago-area organizations of all sizes.',
    icon: 'Search',
    overview: `A network security assessment in Chicago is the starting point most organizations need — and the one most have been putting off. It answers the fundamental question: where is your organization actually vulnerable right now? Not in theory, not based on industry averages, but in your specific network, with your specific configurations, connected devices, and access controls.

SecureNext delivers network security assessments for organizations of all sizes across Cook, DuPage, Lake, Will, and Kane counties. Our assessments go beyond automated vulnerability scanning — though scanning is part of the process. We combine technical tooling with manual analysis and configuration review to produce findings that reflect the actual risk landscape of your environment, not just a list of CVEs pulled from a scanner report.

The deliverable is a written assessment report with prioritized findings, risk ratings, and specific remediation steps — written for the decision-maker who needs to act on it and the technical team that will implement the changes.`,
    keyBenefits: [
      { headline: 'Know your actual vulnerabilities, not hypothetical ones.', body: 'Our assessment identifies specific weaknesses in your environment — not generic industry risk statistics.' },
      { headline: 'Prioritized findings, not a dump of raw data.', body: 'Every finding is rated by risk level and paired with a specific remediation recommendation and timeline guidance. You know what to fix first.' },
      { headline: 'A deliverable you can present to leadership.', body: 'The assessment report includes an executive summary designed for board-level and management presentation — alongside the technical detail your IT team needs.' },
      { headline: 'Compliance baseline establishment.', body: 'For organizations preparing for HIPAA, NIST, CMMC, or PCI-DSS compliance, the assessment establishes the baseline from which gap analysis and compliance program development begin.' },
      { headline: 'No technical expertise required to get started.', body: 'You do not need to know what a CVE is or understand firewall rules to understand what our assessment report tells you. That is the point of the plain-language finding summaries.' },
      { headline: 'A relationship, not a one-time transaction.', body: 'Many assessment clients transition to ongoing monitoring or compliance engagements after the initial assessment. We design the assessment to set that path up, not to close the transaction.' },
    ],
    challenges: [
      { headline: '"We don\'t know what we don\'t know."', body: 'This is the most honest description of why organizations need an assessment. Most organizations know their biggest systems and their most obvious risks. What they do not know is where the unexpected vulnerabilities are — the forgotten device, the misconfigured access rule, the service running on a non-standard port. Our assessment finds those things before someone else does.' },
      { headline: '"Our IT contractor says everything is fine, but we want an independent view."', body: 'We regularly work alongside organizations that have IT support in place. An independent security assessment is not a critique of your IT provider — it is a different type of evaluation, conducted with a different methodology and a different objective.' },
      { headline: '"We need documentation of our security posture for a compliance requirement or a client request."', body: 'Compliance frameworks require documented evidence of security assessment activities. A formal assessment report from an independent third party satisfies this requirement in a way that an internal review cannot.' },
      { headline: '"We had a security incident and we need to understand our full exposure."', body: 'Post-incident assessments evaluate whether the incident was an isolated event or a symptom of broader vulnerabilities. We conduct these assessments with an understanding of what the attacker likely saw.' },
    ],
    process: [
      { step: 1, headline: 'Scoping', body: 'We define the assessment scope based on your environment: number of locations, network segments, user population, cloud presence, remote access method, and compliance requirements.' },
      { step: 2, headline: 'Reconnaissance and Discovery', body: 'We document your network topology, connected devices, and exposed services — establishing an accurate picture of what exists before evaluating what is vulnerable.' },
      { step: 3, headline: 'Vulnerability Analysis', body: 'We conduct technical vulnerability scanning, configuration review, and manual analysis of high-priority systems and access controls. This is not a scan-and-report process; we evaluate context and confirm findings before they appear in the report.' },
      { step: 4, headline: 'Risk Rating and Prioritization', body: 'Each finding is rated by exploitability, potential impact, and the asset it affects. Priority is determined by real-world risk, not technical severity scores alone.' },
      { step: 5, headline: 'Report Delivery and Findings Session', body: 'We deliver the written assessment report and schedule a findings session to walk through the results with your team — answering questions and discussing the remediation roadmap.' },
    ],
    deliverables: [
      'Written network security assessment report',
      'Executive summary (board/leadership-ready)',
      'Technical findings with risk ratings (Critical / High / Medium / Low)',
      'Prioritized remediation roadmap with timeline recommendations',
      'Compliance baseline notes (HIPAA, NIST, CMMC, PCI-DSS as applicable)',
      'Network topology documentation (if not already existing)',
      'Live findings walkthrough session with your team',
    ],
    audiences: [
      { headline: 'Small business owners', body: 'Who want to know what their company is exposed to before something happens — without committing to an ongoing program before they understand what they need.' },
      { headline: 'IT managers and technical leaders', body: 'Who need an independent assessment of their environment to supplement internal visibility, satisfy a compliance requirement, or inform a security program redesign.' },
      { headline: 'Healthcare, education, and government organizations', body: 'That require a formal third-party security assessment as part of their compliance documentation — HIPAA risk analysis, NIST assessment, or agency security review.' },
    ],
    faqs: [
      { question: 'How is a network security assessment different from a penetration test?', answer: 'A network security assessment evaluates your environment\'s security posture — identifying vulnerabilities, configuration weaknesses, and policy gaps through technical scanning, review, and manual analysis. A penetration test goes further: the SecureNext team actively attempts to exploit identified vulnerabilities, simulating what a real attacker would do. Assessments are typically the starting point; penetration tests are typically conducted after baseline vulnerabilities have been addressed.' },
      { question: 'Will the assessment disrupt our operations?', answer: 'We schedule assessments to minimize operational impact. Most scanning and analysis is conducted during off-peak hours. For sensitive environments (healthcare, manufacturing, industrial control systems), we discuss the assessment methodology in detail before beginning so there are no operational surprises.' },
      { question: 'How often should we have a security assessment?', answer: 'Annual assessments are a standard recommendation — and a requirement under several compliance frameworks (HIPAA requires regular review of risk analysis; NIST CSF recommends periodic reassessment). After significant infrastructure changes, a reassessment is warranted even within an annual cycle.' },
      { question: 'Do you provide a remediation plan, or just findings?', answer: 'Both. Every assessment we deliver includes prioritized remediation recommendations — not just a list of what we found. We can also provide remediation support as a follow-on engagement if your team needs assistance implementing the recommended changes.' },
    ],
    ctaHeadline: 'Ready to know exactly where you stand?',
    relatedServices: ['cybersecurity-consulting', 'penetration-testing', 'security-risk-compliance'],
  },
  {
    slug: 'security-risk-compliance',
    title: 'Security Risk & Compliance',
    h1: 'Security Risk & Compliance Consulting in Chicago',
    metaTitle: 'HIPAA Compliance Consulting Chicago | SecureNext',
    metaDescription:
      'HIPAA, CMMC, NIST, and PCI-DSS compliance consulting for Chicago organizations. Get a defensible risk analysis — schedule your consultation today.',
    ogTitle: 'HIPAA Compliance Consulting Chicago | SecureNext',
    ogDescription:
      'HIPAA, CMMC, NIST, and PCI-DSS compliance consulting for Chicago organizations. Get a defensible risk analysis — schedule your consultation today.',
    primaryKeyword: 'HIPAA compliance consulting Chicago',
    serviceType: 'Security Risk and Compliance Consulting',
    schemaDescription:
      'SecureNext provides HIPAA, CMMC, NIST, and PCI-DSS compliance consulting for Chicago-area organizations.',
    icon: 'FileCheck',
    overview: `HIPAA compliance consulting in Chicago requires more than familiarity with the regulation's text. It requires an understanding of what the Office for Civil Rights actually looks for in an enforcement investigation, what a defensible risk analysis methodology looks like in practice, and what the gap between a checklist compliance program and a genuinely compliant security posture means for a covered entity. SecureNext provides security risk and compliance consulting for Chicago-area organizations navigating HIPAA, CMMC, NIST, and PCI-DSS requirements.

We work with healthcare organizations that need a formal HIPAA Security Rule risk analysis — including an accurate inventory of ePHI locations, a systematic evaluation of threats and vulnerabilities, and an assessment of existing safeguards — that produces a documented, audit-ready deliverable. We work with government contractors preparing for CMMC certification, school districts and public agencies aligning with the NIST Cybersecurity Framework, and businesses in the payment processing and financial services sectors navigating PCI-DSS requirements.

Compliance is not a destination. The risk analysis you complete this year needs to be reviewed and updated as your environment changes — new systems, new vendors, new threat intelligence, new regulatory guidance. We build compliance programs designed for ongoing maintenance, not one-time execution.`,
    keyBenefits: [
      { headline: 'HIPAA risk analyses that satisfy OCR scrutiny.', body: 'Our HIPAA risk analyses address the specific requirements of 45 CFR §164.308(a)(1) — not a general security review relabeled as a risk analysis. The deliverable is structured as the OCR expects to see it.' },
      { headline: 'Framework fluency across HIPAA, NIST, CMMC, and PCI-DSS.', body: 'We work across the major compliance frameworks without requiring our clients to explain the framework to us. We know what each framework requires, what "sufficient" documentation looks like, and where organizations typically fall short.' },
      { headline: 'Business Associate Agreement execution for healthcare clients.', body: 'We operate as a Business Associate under HIPAA for all healthcare engagements and execute a BAA prior to any access to ePHI. Healthcare clients should not have to explain this requirement — it is standard practice for us.' },
      { headline: 'Compliance programs built for maintenance.', body: 'A risk analysis that sits in a folder until the next audit is not a compliance program — it is a compliance liability. We design programs with review cadences, update triggers, and documentation standards that keep the program current.' },
      { headline: 'Audit-ready documentation.', body: 'Every deliverable is written and formatted as if a regulator or auditor will read it. Because they might.' },
      { headline: 'Plain-language translation for leadership.', body: 'We translate compliance requirements into executive-ready summaries that allow leadership to understand their obligations, their current posture, and the investment required to close the gap.' },
    ],
    challenges: [
      { headline: '"Our IT vendor told us we\'re HIPAA compliant, but we\'ve never had a formal risk analysis."', body: 'This is the most common situation we encounter in healthcare. A vendor installing antivirus software and a firewall is not a HIPAA compliance program. A formal risk analysis under the HIPAA Security Rule requires a documented, systematic evaluation of potential risks and vulnerabilities to ePHI.' },
      { headline: '"We have a CMMC deadline and do not know what Level we need to achieve or where to start."', body: 'CMMC 2.0 has three levels, each with specific practice requirements and assessment obligations. The starting point is understanding which level applies to your contracts and what your current posture is relative to that level\'s requirements.' },
      { headline: '"We need to demonstrate NIST Cybersecurity Framework alignment to satisfy a state or federal requirement."', body: 'NIST CSF alignment is increasingly required for state-funded organizations (including school districts), federal contractors, and businesses seeking cyber insurance. We assess your posture against the framework\'s five functions and produce documentation of your current profile and target profile.' },
      { headline: '"We are preparing for a SOC 2 audit and need expert support."', body: 'SOC 2 audits evaluate an organization\'s controls against the Trust Services Criteria. Preparing for a SOC 2 requires a current security posture assessment, gap remediation, policy development, and evidence collection. We support organizations through all phases of SOC 2 readiness. [NEEDS CLIENT INPUT: confirm whether SOC 2 readiness is an offered service]' },
    ],
    process: [
      { step: 1, headline: 'Framework Identification', body: 'We establish which compliance frameworks apply to your organization and what the specific requirements and timelines are.' },
      { step: 2, headline: 'Current Posture Assessment', body: 'We evaluate your current controls, policies, procedures, and documentation against the applicable framework requirements.' },
      { step: 3, headline: 'Gap Analysis', body: 'We identify where your current posture falls short of the framework requirements — producing a gap analysis with risk ratings and remediation priority.' },
      { step: 4, headline: 'Remediation Planning', body: 'We develop a remediation roadmap with specific actions, timeline recommendations, and resource requirements.' },
      { step: 5, headline: 'Documentation Development', body: 'We develop or update the policy and procedure documentation required by the applicable framework.' },
      { step: 6, headline: 'Compliance Report Delivery', body: 'We deliver the final compliance deliverable — risk analysis, assessment report, or gap analysis — in a format designed for regulatory and audit use.' },
    ],
    deliverables: [
      'HIPAA Security Rule risk analysis (45 CFR §164.308(a)(1) compliant) — for healthcare clients',
      'NIST Cybersecurity Framework current profile and target profile assessment',
      'CMMC readiness assessment and gap analysis — for defense contractors',
      'PCI-DSS Self-Assessment Questionnaire support and gap analysis',
      'Compliance gap analysis with risk ratings and prioritized remediation roadmap',
      'Policy and procedure documentation (drafted or updated as applicable)',
      'Executive summary for board and leadership presentation',
      'Business Associate Agreement (for healthcare clients)',
    ],
    audiences: [
      { headline: 'Healthcare organizations', body: 'Physician practices, multispecialty groups, behavioral health providers, dental practices, home health agencies — that need a formal HIPAA Security Rule risk analysis and a healthcare cybersecurity partner who signs a BAA.' },
      { headline: 'Government contractors and defense industry suppliers', body: 'Preparing for CMMC certification requirements as a condition of maintaining DoD contracts.' },
      { headline: 'School districts and government agencies', body: 'That need NIST Cybersecurity Framework alignment documentation to satisfy state or federal funding or regulatory requirements.' },
    ],
    faqs: [
      { question: 'What is the difference between HIPAA compliance and a HIPAA security risk analysis?', answer: 'HIPAA compliance is a broad term covering the full set of HIPAA Privacy Rule, Security Rule, and Breach Notification Rule obligations. A HIPAA security risk analysis is a specific, mandatory requirement of the HIPAA Security Rule (45 CFR §164.308(a)(1)) — a documented, systematic evaluation of the potential risks and vulnerabilities to ePHI. It is the component OCR most consistently cites in enforcement actions where it is missing or insufficient.' },
      { question: 'Will SecureNext sign a Business Associate Agreement (BAA)?', answer: 'Yes. We operate as a Business Associate under HIPAA for all healthcare engagements and execute a BAA prior to any engagement involving access to ePHI. This is a standard part of our onboarding for healthcare clients.' },
      { question: 'How long does a HIPAA risk analysis take?', answer: 'For a single-location physician practice or small healthcare organization, a formal HIPAA risk analysis typically takes three to five weeks from kickoff to final deliverable. Multi-site or complex healthcare organizations may take longer.' },
      { question: 'Do we need to redo our risk analysis every year?', answer: 'The HIPAA Security Rule requires organizations to review and update their risk analysis periodically and in response to environmental or operational changes. Annual review is standard practice. We design our risk analysis deliverables to support ongoing review rather than requiring a full restart each year.' },
    ],
    ctaHeadline: 'Ready to build a defensible compliance program?',
    relatedServices: ['cybersecurity-consulting', 'cybersecurity-training', 'network-security-assessments'],
  },
  {
    slug: 'firewall-vpn-solutions',
    title: 'Firewall & VPN Solutions',
    h1: 'Firewall & VPN Security Solutions for Chicago Businesses',
    metaTitle: 'Firewall & VPN Solutions Chicago | SecureNext',
    metaDescription:
      'Enterprise firewall and VPN solutions for Chicago businesses. SecureNext configures and manages your network defenses. Request a security review.',
    ogTitle: 'Firewall & VPN Solutions Chicago | SecureNext',
    ogDescription:
      'Enterprise firewall and VPN solutions for Chicago businesses. SecureNext configures and manages your network defenses. Request a security review.',
    primaryKeyword: 'firewall security solutions Chicago',
    serviceType: 'Firewall and VPN Security Solutions',
    schemaDescription:
      'SecureNext designs, configures, and manages enterprise-grade firewall and VPN solutions for Chicago-area organizations.',
    icon: 'Shield',
    overview: `Firewall security solutions for Chicago businesses mean more than buying a box and plugging it in. A firewall configured without a security architecture behind it is a false boundary — it creates the appearance of perimeter protection without the substance. SecureNext designs, configures, and manages enterprise-grade firewall and VPN solutions for Chicago-area organizations, ensuring that the rules, policies, and monitoring behind the hardware match the security requirements of the environment.

Most organizations we assess have a firewall in place. Many have a VPN. What they typically lack is a firewall rule set that has been reviewed and rationalized, a VPN configuration that enforces least-privilege access, and documentation of what was configured, when, and why. Over time, firewall rule sets accumulate exceptions, legacy rules, and forgotten configurations that create exposure — quietly, without triggering any alert.

Our firewall and VPN engagement includes a current-state review if a firewall is already in place, or a design-and-implementation engagement for organizations building or replacing their perimeter security. For clients transitioning from traditional VPN access to zero-trust network access (ZTNA) architectures, we provide design and migration support.`,
    keyBenefits: [
      { headline: 'Firewall rule rationalization.', body: 'We review and clean up accumulated, redundant, or overly permissive rules — eliminating the exposure created by rules that made sense three years ago and create risk today.' },
      { headline: 'Least-privilege VPN access.', body: 'VPN configurations should grant access to specific resources, not to the entire network. We design VPN policies that enforce least-privilege and segment remote access appropriately.' },
      { headline: 'Documented configuration standards.', body: 'Every configuration decision is documented with a security rationale, ensuring your team can understand and maintain the firewall without relying on institutional memory.' },
      { headline: 'Compliance-aligned configurations.', body: 'Firewall configuration standards are referenced in HIPAA, NIST, CMMC, and PCI-DSS requirements. We configure and document to these standards.' },
      { headline: 'Zero-trust network access (ZTNA) design.', body: 'For organizations moving beyond traditional perimeter-based VPN access, we provide ZTNA architecture design and implementation support.' },
      { headline: 'Vendor-neutral expertise.', body: 'We work with the major enterprise firewall platforms (Palo Alto Networks, Fortinet FortiGate, Cisco, Check Point, and others) without vendor preference driving recommendations.' },
    ],
    challenges: [
      { headline: '"We have a firewall but we\'re not sure if it\'s configured correctly."', body: 'A firewall that is installed but not correctly configured provides limited protection. We conduct firewall configuration reviews that evaluate rule sets, zone definitions, logging and alerting configuration, and update posture.' },
      { headline: '"Remote access has become a significant part of our operations and we are concerned about VPN security."', body: 'VPN security failures are among the most common initial access vectors in ransomware incidents. We evaluate your VPN configuration, authentication requirements, access scope, and logging — and recommend improvements that reduce the risk of credential-based remote access compromise.' },
      { headline: '"We are replacing our firewall and want to make sure the new configuration is done correctly."', body: 'A firewall replacement is an opportunity to establish a clean, documented configuration baseline. We provide design and implementation support for firewall replacements.' },
      { headline: '"Our compliance audit requires documented evidence of firewall configuration controls."', body: 'HIPAA, PCI-DSS, NIST, and CMMC all reference firewall and network access control requirements. We produce documentation that satisfies the evidence requirements of these frameworks.' },
    ],
    process: [
      { step: 1, headline: 'Current State Review', body: 'We review your existing firewall configuration, rule sets, VPN policy, and network topology — establishing what exists and where the gaps are.' },
      { step: 2, headline: 'Security Requirements Definition', body: 'We identify the access control requirements your organization needs to enforce, based on your network topology, user population, compliance framework, and risk profile.' },
      { step: 3, headline: 'Configuration Design', body: 'We design the firewall rule architecture, zone model, VPN policy, and logging configuration that satisfies your security requirements.' },
      { step: 4, headline: 'Implementation', body: 'We configure the firewall and VPN to the agreed design, documenting each decision and its security rationale.' },
      { step: 5, headline: 'Testing and Validation', body: 'We test the implemented configuration to confirm it behaves as designed — blocking unauthorized traffic and allowing authorized traffic without operational disruption.' },
      { step: 6, headline: 'Documentation and Handoff', body: 'We deliver complete configuration documentation and provide a walkthrough for your IT team or MSP.' },
    ],
    deliverables: [
      'Firewall configuration assessment report (if reviewing existing configuration)',
      'Firewall architecture design document (zone model, rule architecture, VPN policy)',
      'Implemented and tested firewall configuration',
      'Configuration documentation (rule-by-rule rationale)',
      'VPN policy documentation and access scope definition',
      'Logging and alerting configuration recommendations',
      'Compliance alignment notes (HIPAA, NIST, PCI-DSS as applicable)',
    ],
    audiences: [
      { headline: 'Small and mid-sized businesses', body: 'That have a firewall in place but have never had it independently reviewed — and want to know whether it is actually doing the job it was installed to do.' },
      { headline: 'Organizations replacing aging firewall hardware', body: 'Who want the replacement configured correctly, with a documented security rationale, rather than replicating the previous configuration into a new box.' },
      { headline: 'Organizations with growing remote workforces', body: 'Who need their VPN architecture evaluated and, where appropriate, redesigned or replaced with a zero-trust access model.' },
    ],
    faqs: [
      { question: 'Do you support specific firewall vendors, or are you vendor-neutral?', answer: 'We are vendor-neutral. We have experience with the major enterprise firewall platforms — Palo Alto Networks, Fortinet FortiGate, Cisco ASA and FTD, Check Point, and others. Our recommendations are driven by security requirements and operational fit, not vendor preference.' },
      { question: 'What is the difference between a traditional VPN and a zero-trust network access (ZTNA) model?', answer: 'A traditional VPN grants remote users access to the network — often broadly. A ZTNA model grants access to specific resources based on verified identity, device posture, and defined policy — not to the network itself. ZTNA reduces the blast radius of a compromised credential by limiting what an authenticated remote user can actually reach.' },
      { question: 'How often should a firewall configuration be reviewed?', answer: 'Annual review is a standard recommendation. Rule sets accumulate over time — exceptions are added, legacy rules are forgotten, and network topology changes that were not reflected in the firewall rules create unintended access. We recommend a formal configuration review annually and after significant network or access model changes.' },
    ],
    ctaHeadline: 'Ready to know your perimeter is properly configured?',
    relatedServices: ['network-infrastructure-design', 'network-security-assessments', 'cloud-security-solutions'],
  },
  {
    slug: 'cloud-security-solutions',
    title: 'Cloud Security Solutions',
    h1: 'Cloud Security Solutions for Chicago Organizations',
    metaTitle: 'Cloud Security Solutions Chicago | SecureNext',
    metaDescription:
      'Secure your cloud environment with confidence. SecureNext delivers cloud security solutions for Chicago businesses on AWS, Azure, and Google Cloud.',
    ogTitle: 'Cloud Security Solutions Chicago | SecureNext',
    ogDescription:
      'Secure your cloud environment with confidence. SecureNext delivers cloud security solutions for Chicago businesses on AWS, Azure, and Google Cloud.',
    primaryKeyword: 'cloud security solutions Chicago',
    serviceType: 'Cloud Security Solutions',
    schemaDescription:
      'SecureNext evaluates and secures cloud environments on AWS, Azure, and Google Cloud for Chicago-area organizations.',
    icon: 'Cloud',
    overview: `Cloud security solutions for Chicago organizations address a problem that cloud adoption has not solved on its own: moving data and workloads to AWS, Microsoft Azure, or Google Cloud does not transfer your security responsibility to the cloud provider. The shared responsibility model means the cloud provider secures the infrastructure; you are responsible for what runs on it — the data, the access controls, the configurations, the application security, and the monitoring.

Most organizations that have moved to the cloud have done so faster than their security posture has adapted. Identity and access management policies that made sense for an on-premises environment may not translate correctly to cloud IAM. Security group configurations that seem restrictive may have overly permissive rules that are not immediately obvious. Logging and monitoring configured in the cloud environment may not actually be capturing the data necessary to detect an intrusion or satisfy a compliance audit.

SecureNext evaluates your cloud security posture, identifies the gaps between your current configuration and security best practice, and implements controls appropriate to your cloud environment and compliance requirements. We work with AWS, Microsoft Azure, Google Cloud Platform, and hybrid environments.`,
    keyBenefits: [
      { headline: 'Cloud security posture assessment.', body: 'We evaluate your cloud environment\'s IAM policies, security group configurations, logging, monitoring, encryption, and network controls — identifying specific misconfigurations and access control gaps.' },
      { headline: 'Compliance alignment in the cloud.', body: 'HIPAA, NIST, CMMC, and PCI-DSS compliance obligations do not disappear when workloads move to the cloud. We configure cloud environments to satisfy the technical requirements of applicable compliance frameworks.' },
      { headline: 'Identity and access management hardening.', body: 'Cloud IAM is one of the most common sources of cloud security incidents. We evaluate and harden your cloud IAM policies — enforcing least privilege, multi-factor authentication, and role separation.' },
      { headline: 'Multi-cloud and hybrid environment support.', body: 'Many organizations operate across multiple cloud platforms and maintain some on-premises infrastructure. We evaluate security across the full environment, not just within a single cloud boundary.' },
      { headline: 'Cloud-native security tool configuration.', body: 'We configure and tune the security tools native to your cloud platform (AWS Security Hub, Microsoft Defender for Cloud, Google Security Command Center) so they are actually providing the detection and alerting they are capable of.' },
      { headline: 'Vendor-neutral recommendations.', body: 'Our recommendations are based on security requirements and your organization\'s cloud architecture, not on a preferred vendor relationship.' },
    ],
    challenges: [
      { headline: '"We moved to the cloud but we are not sure our security configuration followed."', body: 'Cloud migrations frequently prioritize speed and functionality. Security configurations — IAM policies, security groups, logging, encryption — are often set to defaults or quickly configured and not reviewed. We conduct cloud security posture assessments that identify the gaps between your current configuration and best practice.' },
      { headline: '"We have a compliance requirement that applies to our cloud-hosted data."', body: 'HIPAA covered entities that store ePHI in the cloud need cloud configurations that satisfy the HIPAA Security Rule\'s technical safeguard requirements. PCI-DSS environments that process payments through cloud infrastructure need cloud configurations that satisfy the applicable PCI-DSS controls.' },
      { headline: '"Our cloud environment has grown significantly and we have lost visibility into what is deployed."', body: 'Cloud sprawl — the accumulation of resources, services, and access policies over time without systematic governance — is a common security problem. We assess your cloud environment\'s current state and establish governance controls.' },
      { headline: '"We are concerned about the security of data shared between our on-premises environment and our cloud environment."', body: 'Hybrid environments create connectivity between networks with different security postures. We evaluate the connectivity between your on-premises and cloud environments and identify the security controls needed at each boundary.' },
    ],
    process: [
      { step: 1, headline: 'Cloud Environment Inventory', body: 'We document your cloud environment — accounts, regions, services in use, resource types, IAM policies, and network topology — establishing an accurate picture of what exists.' },
      { step: 2, headline: 'Security Posture Assessment', body: 'We evaluate your cloud security posture against a defined security framework (CIS Benchmarks, CSA CCM, or the security baseline appropriate to your compliance requirements).' },
      { step: 3, headline: 'Gap Analysis', body: 'We identify specific misconfigurations, access control gaps, logging deficiencies, and compliance gaps.' },
      { step: 4, headline: 'Remediation Implementation', body: 'We implement or guide implementation of the security controls identified in the gap analysis — IAM hardening, security group corrections, logging configuration, encryption enforcement.' },
      { step: 5, headline: 'Monitoring Configuration', body: 'We configure cloud-native security monitoring tools and establish alerting for the security events that matter in your environment.' },
      { step: 6, headline: 'Documentation and Handoff', body: 'We deliver configuration documentation and compliance evidence suitable for audit use.' },
    ],
    deliverables: [
      'Cloud security posture assessment report',
      'IAM policy review and hardening recommendations (implemented)',
      'Security group and network control review',
      'Logging and monitoring configuration (cloud-native tools)',
      'Compliance alignment documentation (HIPAA, NIST, PCI-DSS as applicable)',
      'Cloud resource inventory and access policy documentation',
      'Ongoing cloud security monitoring (as part of managed security engagement)',
    ],
    audiences: [
      { headline: 'Organizations that have migrated workloads to AWS, Azure, or Google Cloud', body: 'And want an independent evaluation of whether their cloud security posture matches the sensitivity of the data they have moved there.' },
      { headline: 'Organizations with compliance requirements', body: '(HIPAA, PCI-DSS, NIST) that need cloud configurations documented and evidenced for regulatory audit purposes.' },
      { headline: 'Mid-market IT managers', body: 'Who are managing cloud environments alongside on-premises infrastructure and need expert support to ensure the security controls span both environments.' },
    ],
    faqs: [
      { question: 'Does SecureNext work with all major cloud providers?', answer: 'We work with AWS, Microsoft Azure, and Google Cloud Platform, as well as hybrid environments that combine cloud and on-premises infrastructure. [NEEDS CLIENT INPUT: confirm current cloud platform expertise and any platform limitations]' },
      { question: 'What is cloud security posture management (CSPM)?', answer: 'CSPM refers to the ongoing evaluation and monitoring of cloud environment security configurations — identifying misconfigurations, access policy violations, and compliance gaps on a continuous basis. We configure cloud-native CSPM tools (AWS Security Hub, Microsoft Defender for Cloud, Google Security Command Center) and include cloud posture monitoring as part of our managed security engagements.' },
      { question: 'Do cloud providers handle security for us?', answer: 'Cloud providers operate under a shared responsibility model. The provider is responsible for the security of the cloud infrastructure — the physical hardware, the hypervisor, the physical network. You are responsible for security in the cloud — your data, your access controls, your configurations, your application security. Many security incidents in cloud environments exploit misconfigurations that are entirely within the customer\'s responsibility boundary.' },
      { question: 'We use Microsoft 365 for our business. Does that fall under cloud security?', answer: 'Yes. Microsoft 365 is a cloud platform, and its security configuration — Exchange Online protection, SharePoint and OneDrive access controls, Teams security settings, Azure AD / Entra ID policies, and Microsoft Defender for Business configuration — is part of your cloud security posture. We evaluate and configure Microsoft 365 security as part of our cloud security engagements. [NEEDS CLIENT INPUT: confirm M365 security as a specific service offering]' },
    ],
    ctaHeadline: 'Ready to secure your cloud environment?',
    relatedServices: ['firewall-vpn-solutions', 'security-monitoring', 'network-infrastructure-design'],
  },
  {
    slug: 'security-monitoring',
    title: 'Security Monitoring',
    h1: 'Managed Security Monitoring for Chicago Businesses',
    metaTitle: 'Managed Security Monitoring Chicago | SecureNext',
    metaDescription:
      '24/7 managed security monitoring for Chicago organizations. SecureNext detects and responds to threats so your team doesn\'t have to. Get started.',
    ogTitle: 'Managed Security Monitoring Chicago | SecureNext',
    ogDescription:
      '24/7 managed security monitoring for Chicago organizations. SecureNext detects and responds to threats so your team doesn\'t have to. Get started.',
    primaryKeyword: 'managed security monitoring Chicago',
    serviceType: 'Managed Security Monitoring',
    schemaDescription:
      'SecureNext provides managed security monitoring for Chicago-area organizations — continuous detection, investigation, and response.',
    icon: 'Eye',
    overview: `Managed security monitoring for Chicago businesses answers a question most organizations cannot resolve internally: who is watching your systems when your team is not? A security assessment tells you where your vulnerabilities are. Remediation closes them. But the threat environment does not stop when the remediation is done — and new vulnerabilities, new attack techniques, and new insider risks emerge continuously. Managed security monitoring is how organizations maintain a security posture instead of only building one.

SecureNext monitors your environment for indicators of compromise, unauthorized access attempts, anomalous activity, and configuration changes that may signal a security event. When we identify something that warrants investigation, we investigate it — and we report what we found in plain language, with a recommended response. Your team does not have to be the first responder to every security alert; that is the role we fill.

Managed security monitoring is the highest-LTV service we provide — and the one that produces the most sustained security improvement over time. For organizations that are ready to move from a point-in-time security posture to a continuous security program, managed monitoring is the next step. [NEEDS CLIENT INPUT: confirm 24/7 monitoring availability, detection tooling (SIEM, EDR platforms in use), and specific monitoring service tiers]`,
    keyBenefits: [
      { headline: 'Continuous visibility, not periodic snapshots.', body: 'Security monitoring is not a quarterly check — it is a continuous function. We monitor your environment so that a security event is detected when it happens, not when someone reviews logs next week. [NEEDS CLIENT INPUT: confirm monitoring hours and SLA]' },
      { headline: 'Alert investigation, not just alert delivery.', body: 'A system that delivers raw security alerts to your inbox is not the same as a service that investigates them. We investigate alerts, confirm findings, eliminate false positives, and report on what actually requires your attention.' },
      { headline: 'Baseline establishment for your specific environment.', body: 'Effective monitoring requires knowing what normal looks like. We establish a behavioral baseline for your environment so that deviations are detectable against that baseline — not against a generic rule set that generates noise.' },
      { headline: 'Compliance documentation of monitoring activities.', body: 'HIPAA, NIST, CMMC, and PCI-DSS all require evidence of security monitoring activities. We maintain monitoring logs and produce compliance-ready documentation of monitoring activities and detected events.' },
      { headline: 'Incident escalation with clear communication.', body: 'When a confirmed security event occurs, we escalate with clear, specific communication — what happened, what we did, and what you need to do next. No cryptic alerts, no technical jargon that requires a decoder ring.' },
      { headline: 'Integration with incident response.', body: 'When monitoring detects an active incident, incident response begins immediately — not after a form is submitted and a ticket is opened.' },
    ],
    challenges: [
      { headline: '"Our team receives security alerts but no one has time to investigate them."', body: 'Alert fatigue is a real and documented security problem. When alerts are not investigated, real events are missed. We take alert investigation off your team\'s plate entirely — filtering noise, confirming real events, and only escalating what requires your attention.' },
      { headline: '"We have security tools deployed but we are not sure they are configured to detect the right things."', body: 'Security tools that are not tuned to your environment generate excessive noise and miss relevant events. We evaluate your existing security tooling, tune detection rules to your environment, and ensure the tools are actually producing the detection capability they are capable of.' },
      { headline: '"We need documented evidence of security monitoring for a compliance requirement."', body: 'HIPAA, NIST, PCI-DSS, and CMMC all require evidence of security monitoring activities — not just the presence of monitoring tools. We produce compliance-ready documentation of monitoring activities, alert investigations, and detected events.' },
      { headline: '"We want ongoing security visibility without hiring a full-time security operations analyst."', body: 'A dedicated security operations analyst is an expensive hire — and a single hire is not sufficient for continuous monitoring coverage. Our managed monitoring service provides the equivalent of a security operations function at a fraction of the cost of building it internally.' },
    ],
    process: [
      { step: 1, headline: 'Environment Onboarding', body: 'We integrate your environment into our monitoring infrastructure — configuring log collection, endpoint telemetry, network monitoring, and cloud environment visibility.' },
      { step: 2, headline: 'Baseline Establishment', body: 'We establish a behavioral baseline for your environment over an initial period — learning what normal traffic, access patterns, and system behavior look like for your specific organization.' },
      { step: 3, headline: 'Continuous Monitoring', body: 'We monitor your environment against defined detection rules and behavioral baselines, investigating alerts as they occur.' },
      { step: 4, headline: 'Alert Investigation and Reporting', body: 'We investigate every alert that reaches a defined threshold, confirm or eliminate findings, and report confirmed events to your designated point of contact with specific recommended actions.' },
      { step: 5, headline: 'Monthly Review', body: 'We provide a monthly security monitoring report summarizing detected events, alert volumes, trends, and any recommendations for security posture improvements.' },
      { step: 6, headline: 'Incident Escalation', body: 'When monitoring identifies a confirmed security incident, we escalate immediately and engage our incident response capability.' },
    ],
    deliverables: [
      'Continuous security monitoring of your environment [NEEDS CLIENT INPUT: confirm coverage hours]',
      'Alert investigation and triage (not raw alert delivery)',
      'Monthly security monitoring report',
      'Compliance documentation of monitoring activities',
      'Incident escalation and coordination with incident response',
      'Quarterly security posture review and recommendations',
    ],
    audiences: [
      { headline: 'Mid-market organizations', body: 'That have completed an initial security assessment and are ready to move from building a security posture to maintaining one continuously.' },
      { headline: 'Healthcare and compliance-regulated organizations', body: 'That require documented evidence of ongoing security monitoring as part of their HIPAA, NIST, or PCI-DSS compliance program.' },
      { headline: 'Organizations that have experienced a security incident', body: 'And want to ensure they have continuous visibility going forward rather than discovering the next event after the fact.' },
    ],
    faqs: [
      { question: 'What is the difference between managed security monitoring and a SOC?', answer: 'A Security Operations Center (SOC) is a facility staffed by analysts who monitor security events across client environments. Managed security monitoring is the service those analysts provide. SecureNext provides this capability for Chicago-area organizations. [NEEDS CLIENT INPUT: describe specific monitoring function and staffing model]' },
      { question: 'What happens when you detect a potential security incident?', answer: 'We investigate the alert, confirm whether it represents a real security event, and escalate to your designated point of contact with a clear description of what we found and a recommended response. For confirmed active incidents, we engage our incident response capability immediately.' },
      { question: 'Do we need to replace our existing security tools to work with SecureNext?', answer: 'Not necessarily. We evaluate your existing security tooling as part of the onboarding process and work with what you have where possible. Where your existing tools have gaps that prevent effective monitoring, we recommend specific additions. [NEEDS CLIENT INPUT: confirm security monitoring platform and tooling compatibility]' },
      { question: 'What compliance frameworks does security monitoring support?', answer: 'Our security monitoring service produces documentation that supports HIPAA Security Rule compliance, NIST Cybersecurity Framework monitoring requirements, PCI-DSS log monitoring and review requirements, and CMMC audit log review requirements.' },
    ],
    ctaHeadline: 'Ready for continuous security visibility?',
    relatedServices: ['incident-response', 'cybersecurity-consulting', 'cloud-security-solutions'],
  },
  {
    slug: 'incident-response',
    title: 'Incident Response',
    h1: 'Incident Response Services in Chicago — When Every Minute Counts',
    metaTitle: 'Incident Response Services Chicago | SecureNext',
    metaDescription:
      'Experiencing a breach or cyberattack? SecureNext provides incident response services in Chicago. Call us now — we respond fast when it matters most.',
    ogTitle: 'Incident Response Services Chicago | SecureNext',
    ogDescription:
      'Experiencing a breach or cyberattack? SecureNext provides incident response services in Chicago. Call us now — we respond fast when it matters most.',
    primaryKeyword: 'incident response services Chicago',
    serviceType: 'Incident Response Services',
    schemaDescription:
      'SecureNext provides structured incident response for Chicago-area organizations — containment, investigation, recovery, and post-incident documentation.',
    icon: 'AlertTriangle',
    isIncidentResponse: true,
    overview: `Incident response services in Chicago exist for the moment when something has gone wrong — and what happens in the first hours determines how much damage gets contained. A ransomware infection encrypting your systems, an unauthorized login from an unfamiliar location, a vendor calling to say they noticed strange outbound traffic from your network: these are not situations where you schedule a consultation for next week. They require an experienced response, right now.

SecureNext provides incident response for Chicago-area organizations — from initial triage and containment through forensic investigation, recovery support, and post-incident documentation. We have worked with organizations across multiple sectors who were dealing with active breaches, ransomware events, and suspected intrusions, and we understand what the first hours of an incident response require: calm, methodical action to contain the scope, preserve evidence, and restore operations — in that order.

Our incident response engagements do not begin with a form. They begin with a phone call. If your organization is experiencing an active security incident right now, call the number at the top of this page. [NEEDS CLIENT INPUT: confirm whether SecureNext offers incident response retainer agreements and what the retainer structure looks like]`,
    keyBenefits: [
      { headline: 'Structured containment, not improvised response.', body: 'We follow a defined incident response methodology — containment first, investigation second, recovery third, documentation throughout. Structure under pressure is what separates effective response from making the situation worse.' },
      { headline: 'Evidence preservation for forensics and legal.', body: 'Incident response conducted without evidence preservation can compromise your ability to understand what happened, pursue legal remedies, or satisfy breach notification obligations. We preserve evidence correctly from the beginning.' },
      { headline: 'Breach notification support.', body: 'HIPAA, Illinois PIPA, and other state and federal laws impose breach notification obligations with specific timelines. We support organizations in understanding their notification obligations and documenting the incident appropriately for legal and regulatory review.' },
      { headline: 'Root cause analysis.', body: 'We do not just stop the bleeding — we find how the attacker got in, what they accessed, and what needs to change to prevent recurrence.' },
      { headline: 'Ransomware response specific expertise.', body: 'Ransomware is the most common incident type we respond to. We understand the operational and technical dimensions of ransomware response — including recovery sequencing and decryption evaluation. [NEEDS CLIENT INPUT: confirm position on ransom negotiation support]' },
      { headline: 'Post-incident documentation.', body: 'We produce a post-incident report documenting the timeline, findings, response actions, and remediation recommendations — required for insurance claims, regulatory notifications, and internal review.' },
    ],
    challenges: [
      { headline: '"We think we\'ve been breached but we\'re not sure what\'s happening."', body: 'The first priority when you suspect an incident is not to fix everything — it is to understand the scope before taking actions that might spread the damage or destroy evidence. We help you triage the situation methodically, establish scope, and make containment decisions based on evidence rather than panic.' },
      { headline: '"We have ransomware and our files are encrypted."', body: 'Ransomware response requires sequential action: isolate affected systems, evaluate the encryption scope, preserve evidence, assess backup integrity, evaluate recovery options, and determine notification obligations. Making the wrong decision at any step can result in reinfection. We guide organizations through the sequence correctly.' },
      { headline: '"We\'ve had an incident and we need to document it for our insurer, our regulator, or our board."', body: 'Post-incident, organizations frequently need to produce a documented account of what happened, what response actions were taken, what was accessed or exfiltrated, and what has been done to prevent recurrence. We produce post-incident reports designed for this purpose.' },
      { headline: '"We want to be prepared before an incident happens."', body: 'The organizations that respond most effectively to incidents are those that had an incident response plan and a prepared response team before the incident occurred. We help organizations develop and test incident response plans and, for clients who want guaranteed response priority, establish retainer relationships. [NEEDS CLIENT INPUT: confirm retainer offering]' },
    ],
    process: [
      { step: 1, headline: 'Initial Triage (Immediate)', body: 'We assess the current state of the incident — what is happening, what systems are affected, what is the likely attack vector, and what immediate containment actions are required.' },
      { step: 2, headline: 'Containment', body: 'We isolate affected systems to prevent further spread, preserve evidence, and stop the attacker from continuing to operate within the environment.' },
      { step: 3, headline: 'Investigation', body: 'We conduct forensic analysis to determine how the attacker gained access, what they accessed or exfiltrated, and the full timeline of the incident.' },
      { step: 4, headline: 'Eradication', body: 'We remove the attacker\'s access and presence from the environment — eliminating malware, revoking compromised credentials, and closing the initial access vector.' },
      { step: 5, headline: 'Recovery', body: 'We support the restoration of systems and operations from clean backups or clean system rebuilds, sequenced to prevent reinfection.' },
      { step: 6, headline: 'Post-Incident Report', body: 'We produce a written post-incident report documenting the incident timeline, root cause, response actions, and recommendations to prevent recurrence.' },
    ],
    deliverables: [
      'Immediate response upon contact [NEEDS CLIENT INPUT: confirm response time commitment]',
      'Incident triage and scope assessment',
      'Containment actions and attacker eradication',
      'Forensic investigation and root cause analysis',
      'Recovery support and sequencing guidance',
      'Post-incident report (suitable for insurer, regulator, board)',
      'Breach notification obligation assessment (HIPAA, Illinois PIPA, and other applicable law)',
      'Remediation recommendations to prevent recurrence',
    ],
    audiences: [
      { headline: 'Any organization experiencing or suspecting an active security incident', body: 'Breach, ransomware, unauthorized access, data exfiltration, or suspicious system behavior. Organization size and industry do not determine incident response need; the incident does.' },
      { headline: 'Organizations that want to prepare before an incident', body: 'Incident response retainer clients receive prioritized response, reduced response time, and the benefit of our team already knowing their environment when an incident occurs. [NEEDS CLIENT INPUT: confirm retainer availability and structure]' },
      { headline: 'Organizations that have experienced a prior incident', body: 'And need post-incident assessment, documentation, and remediation planning.' },
    ],
    faqs: [
      { question: 'What should we do first if we think we\'ve been hacked?', answer: 'Call us. Do not turn off systems (this destroys forensic evidence and may not eliminate the threat). Do not attempt to remove malware or change passwords across the environment without guidance (this can spread the infection or alert the attacker before containment is complete). Isolate affected systems from the network if you can do so without shutting them down, and call us immediately. [NEEDS CLIENT INPUT: 24/7 phone number]' },
      { question: 'How quickly can SecureNext respond to an active incident?', answer: '[NEEDS CLIENT INPUT: confirm response time commitment for active incidents — on-site and remote response timelines]' },
      { question: 'What is a breach notification obligation, and how do you help with it?', answer: 'HIPAA requires covered entities to notify affected individuals, the Department of Health and Human Services, and potentially media outlets when a breach of unsecured PHI occurs — within 60 days of discovery. Illinois PIPA and other state laws impose notification obligations for breaches of other personal information. We assess your notification obligations based on the incident facts and help you document the breach in a manner appropriate for regulatory reporting.' },
      { question: 'Should we call law enforcement when we have a security incident?', answer: 'For significant incidents — particularly ransomware, data exfiltration, or incidents involving critical infrastructure — reporting to law enforcement (FBI Cyber Division, CISA, or local law enforcement) is worth considering and may be required in some regulated sectors. We can advise on when and how to engage law enforcement and what that engagement typically looks like.' },
    ],
    ctaHeadline: 'Experiencing an incident? Contact us immediately.',
    relatedServices: ['security-monitoring', 'network-security-assessments', 'cybersecurity-training'],
  },
  {
    slug: 'penetration-testing',
    title: 'Penetration Testing',
    h1: 'Penetration Testing Services for Chicago Organizations',
    metaTitle: 'Penetration Testing Chicago | SecureNext Networks',
    metaDescription:
      'Test your defenses before attackers do. SecureNext delivers professional penetration testing services in Chicago, IL. Request a pen test today.',
    ogTitle: 'Penetration Testing Chicago | SecureNext Networks',
    ogDescription:
      'Test your defenses before attackers do. SecureNext delivers professional penetration testing services in Chicago, IL. Request a pen test today.',
    primaryKeyword: 'penetration testing Chicago',
    serviceType: 'Penetration Testing Services',
    schemaDescription:
      'SecureNext conducts professional penetration testing for Chicago-area organizations using structured, authorized adversarial methodology.',
    icon: 'Target',
    overview: `Penetration testing in Chicago moves beyond vulnerability scanning into active, structured testing of your defenses — the way a real attacker would probe them. A vulnerability scan identifies known weaknesses based on signatures and CVEs. A penetration test takes those findings and attempts to exploit them: to answer not just "does this vulnerability exist" but "can it actually be used to gain access, escalate privileges, or move laterally through your environment?"

SecureNext conducts penetration testing engagements for Chicago-area organizations using a structured methodology — scoped, authorized, and documented. Our penetration testing team does not apply a generic automated test against your network and deliver a report. We design the test scope around your specific environment and threat model, conduct manual exploitation attempts against the highest-priority targets, and document findings in a report that tells you exactly what was found, how it was found, and what needs to change.

Penetration testing is not the starting point for most organizations. It is most valuable after the baseline security posture has been established — either through a network security assessment or a prior pen test cycle — because it tests whether the controls in place actually hold under active adversarial pressure.`,
    keyBenefits: [
      { headline: 'Real-world adversarial validation.', body: 'A penetration test answers the question a vulnerability scan cannot: if an attacker attempted to exploit these weaknesses, could they succeed? Our test attempts to answer that question empirically, not theoretically.' },
      { headline: 'Manual testing against high-priority targets.', body: 'Automated tooling finds the low-hanging fruit. Manual testing by experienced practitioners finds the issues that require contextual understanding, chained exploitation, and knowledge of your specific environment.' },
      { headline: 'A deliverable written for both audiences.', body: 'The penetration test report includes an executive summary for leadership and detailed technical findings with proof-of-concept evidence and remediation guidance for your technical team.' },
      { headline: 'Scoped and authorized to protect your operations.', body: 'Every penetration test engagement includes a defined scope, authorized targets, and agreed-upon rules of engagement — ensuring the test produces useful findings without creating operational disruption.' },
      { headline: 'Compliance requirement fulfillment.', body: 'PCI-DSS requires annual penetration testing. NIST and CMMC recommend it. Our penetration test reports are documented in a format suitable for compliance evidence.' },
      { headline: 'Remediation verification.', body: 'After remediation of findings from a penetration test, we can conduct a follow-up validation test to confirm that identified vulnerabilities have been addressed.' },
    ],
    challenges: [
      { headline: '"We\'ve completed a vulnerability assessment and want to know whether our remediation actually works."', body: 'A penetration test conducted after remediation is the validation that the work was done correctly and completely. We test the specific vulnerabilities that were remediated and report on whether they are closed.' },
      { headline: '"Our compliance framework (PCI-DSS, SOC 2) requires an annual penetration test."', body: 'We conduct penetration tests that satisfy the scope and documentation requirements of PCI-DSS Requirement 11.3 and SOC 2 penetration testing requirements. [NEEDS CLIENT INPUT: confirm PCI-DSS pen test scope capability]' },
      { headline: '"We are a technically sophisticated organization and want to validate our defensive controls."', body: 'For organizations with mature security programs, a penetration test provides empirical evidence of control effectiveness — not just documentation of controls in place. We conduct penetration tests appropriate to the maturity level of the target environment.' },
      { headline: '"We need to demonstrate to a client, partner, or board that our security program has been independently validated."', body: 'A penetration test report from an independent third-party firm is a strong security assurance signal — evidence that the organization\'s defenses have been actively tested, not just assessed.' },
    ],
    process: [
      { step: 1, headline: 'Scope and Rules of Engagement', body: 'We define the test scope (networks, systems, applications), authorized targets, test methods, and rules of engagement — including emergency contact procedures and out-of-bounds systems.' },
      { step: 2, headline: 'Reconnaissance', body: 'We conduct authorized reconnaissance of the defined scope — identifying exposed systems, services, and potential entry points.' },
      { step: 3, headline: 'Exploitation Attempts', body: 'Our team attempts to exploit identified vulnerabilities and misconfigurations using manual techniques and specialized tooling, guided by the test scope and rules of engagement.' },
      { step: 4, headline: 'Post-Exploitation Assessment', body: 'For successful exploitation, we assess what access was obtained, what lateral movement was possible, and what data or systems were within reach.' },
      { step: 5, headline: 'Reporting', body: 'We produce a written penetration test report with executive summary, detailed technical findings, proof-of-concept evidence (screenshots, outputs), and specific remediation recommendations.' },
      { step: 6, headline: 'Findings Review Session', body: 'We walk through the report with your team, answering questions and ensuring the remediation recommendations are clearly understood.' },
    ],
    deliverables: [
      'Penetration test report with executive summary and technical findings',
      'Proof-of-concept evidence for successful exploits (screenshots, output samples)',
      'Risk-rated findings with specific remediation guidance',
      'Rules of engagement documentation (for compliance evidence)',
      'Optional: remediation validation re-test upon completion of remediation',
    ],
    audiences: [
      { headline: 'Organizations that have completed a security assessment', body: 'And remediated initial findings — and want to validate that the controls in place actually hold under active adversarial testing.' },
      { headline: 'Organizations with PCI-DSS, SOC 2, or other compliance requirements', body: 'That mandate annual penetration testing.' },
      { headline: 'Technically sophisticated organizations with mature security programs', body: 'Who want empirical evidence of their defensive control effectiveness against an active adversary.' },
    ],
    faqs: [
      { question: 'What is the difference between a penetration test and a vulnerability assessment?', answer: 'A vulnerability assessment identifies security weaknesses through scanning and analysis — it tells you what vulnerabilities exist. A penetration test goes further: it attempts to exploit those vulnerabilities to determine whether they can actually be used to gain unauthorized access or cause damage. A vulnerability assessment is typically the starting point; a penetration test is most valuable after baseline vulnerabilities have been addressed.' },
      { question: 'Will a penetration test take our systems offline?', answer: 'We design penetration tests to avoid operational disruption. The scope and rules of engagement define how and when testing occurs, and critical production systems are typically treated with specific care. We discuss operational risk and timing during the scoping process.' },
      { question: 'How long does a penetration test take?', answer: 'The duration depends on scope size. A single-network penetration test for a small organization typically takes three to five business days of active testing, with the report delivered within two weeks of testing completion. Larger or multi-scope environments take longer.' },
      { question: 'What types of penetration tests do you conduct?', answer: 'We conduct network penetration testing (internal and external), wireless network testing, and social engineering assessments (phishing simulations). [NEEDS CLIENT INPUT: confirm full scope of penetration testing service types — web application testing, physical security testing, etc.]' },
    ],
    ctaHeadline: 'Ready to test your defenses?',
    relatedServices: ['network-security-assessments', 'security-risk-compliance', 'cybersecurity-consulting'],
  },
  {
    slug: 'cybersecurity-training',
    title: 'Cybersecurity Training',
    h1: 'Cybersecurity Awareness Training for Chicago Teams',
    metaTitle: 'Cybersecurity Training Chicago | SecureNext Networks',
    metaDescription:
      'Empower your team to recognize and stop cyber threats. SecureNext delivers cybersecurity awareness training for Chicago organizations. Learn more.',
    ogTitle: 'Cybersecurity Training Chicago | SecureNext Networks',
    ogDescription:
      'Empower your team to recognize and stop cyber threats. SecureNext delivers cybersecurity awareness training for Chicago organizations. Learn more.',
    primaryKeyword: 'cybersecurity awareness training Chicago',
    serviceType: 'Cybersecurity Awareness Training',
    schemaDescription:
      'SecureNext delivers cybersecurity awareness training for Chicago-area organizations — behavior-change programs and phishing simulations.',
    icon: 'GraduationCap',
    overview: `Cybersecurity awareness training for Chicago teams addresses the single most persistent vulnerability in most organizations: people. Technical controls — firewalls, endpoint protection, multi-factor authentication, network segmentation — create barriers that skilled attackers work around. But a single employee who clicks a phishing link, enters credentials into a spoofed login page, or connects a personal device to the corporate network can circumvent those barriers in seconds. Training is the control that closes the human gap.

SecureNext delivers cybersecurity awareness training for Chicago-area organizations — from a single-session lunch-and-learn format for small businesses to structured, ongoing training programs for larger organizations with compliance-driven training requirements. Our training is designed to change behavior, not just satisfy a training checkbox. We focus on the scenarios your employees actually encounter — phishing emails, social engineering calls, physical security lapses, remote work risks — and present them in a format that creates recognition and response, not just awareness.

For organizations with HIPAA, CMMC, PCI-DSS, or NIST requirements that include security awareness training obligations, our training programs produce documentation appropriate for compliance evidence.`,
    keyBenefits: [
      { headline: 'Behavior change, not box-checking.', body: 'Our training is designed to change how employees recognize and respond to social engineering attempts — not to generate a training completion certificate and move on.' },
      { headline: 'Scenarios specific to your industry and organization.', body: 'A phishing scenario relevant to a healthcare administrator is different from one relevant to a manufacturing plant supervisor. We tailor training content to the real threat scenarios your employees encounter.' },
      { headline: 'Phishing simulation testing.', body: 'We conduct controlled phishing simulations to test whether employees apply training in realistic conditions — and to identify individuals and departments that need additional targeted training.' },
      { headline: 'Compliance documentation.', body: 'HIPAA, CMMC, NIST, and PCI-DSS all include security awareness training requirements. We produce training records, completion documentation, and program descriptions suitable for compliance audit evidence.' },
      { headline: 'Leadership-appropriate content.', body: 'Executive leaders and board members are high-value phishing targets. We provide executive-level security awareness content calibrated to the specific risks that leadership-level roles face.' },
      { headline: 'Scalable formats.', body: 'We deliver training in formats appropriate to your organization: in-person sessions, virtual delivery, or a hybrid approach with ongoing reinforcement content.' },
    ],
    challenges: [
      { headline: '"We\'ve had phishing incidents and we know our employees need training, but we don\'t know where to start."', body: 'A post-incident training engagement begins with understanding what happened — what the phishing attempt looked like, why it succeeded, and what the employees who interacted with it were thinking. We use the actual incident as a teaching case and build training around closing the specific gap it revealed.' },
      { headline: '"Our compliance framework requires security awareness training and we need documentation."', body: 'HIPAA requires that covered entities train all workforce members on security policies and procedures relevant to their job function. CMMC Level 1 and above require security awareness training. PCI-DSS requires security awareness training for all personnel with access to cardholder data.' },
      { headline: '"We have a large, dispersed workforce and need training that scales."', body: 'We work with organizations that have employees across multiple locations, including remote workers. Training formats can be adapted for virtual delivery, and phishing simulation testing can be conducted across the full user population regardless of physical location.' },
      { headline: '"Our leadership team is asking for security awareness content at the executive level."', body: 'Executives are disproportionate targets for business email compromise, whale phishing, and social engineering. We provide executive-level security awareness content that addresses the specific threat scenarios leadership-level roles face.' },
    ],
    process: [
      { step: 1, headline: 'Organization Assessment', body: 'We understand your organization\'s size, industry, threat environment, compliance requirements, and existing training history to design an appropriate program.' },
      { step: 2, headline: 'Training Design', body: 'We design a training curriculum appropriate to your employee population, their roles, and the specific threats your industry faces.' },
      { step: 3, headline: 'Training Delivery', body: 'We deliver training in the agreed format — in-person, virtual, or hybrid — for all required employee groups, including executives.' },
      { step: 4, headline: 'Phishing Simulation (Optional)', body: 'We conduct controlled phishing simulations to test employee recognition and response, identifying individuals or groups that need additional training.' },
      { step: 5, headline: 'Reporting and Documentation', body: 'We produce training completion records, phishing simulation results, and program documentation appropriate for compliance evidence.' },
      { step: 6, headline: 'Ongoing Program Support (Optional)', body: 'For organizations that need ongoing training as a compliance requirement, we provide recurring training delivery, updated content, and annual phishing simulations.' },
    ],
    deliverables: [
      'Security awareness training curriculum (customized for your organization and industry)',
      'Training delivery for all required employee groups (in-person, virtual, or hybrid)',
      'Executive-level security awareness session',
      'Phishing simulation test (controlled, coordinated, and documented) — optional',
      'Training completion records and compliance documentation',
      'Post-training phishing simulation results report (if simulation conducted)',
      'Ongoing training program support — optional recurring cadence',
    ],
    audiences: [
      { headline: 'Small business owners', body: 'Who have recognized the human risk in their organization and want a practical training session that helps employees recognize and avoid the attacks most commonly targeting businesses like theirs.' },
      { headline: 'School districts and educational institutions', body: 'That need security awareness training for staff as part of their NIST alignment program and in response to phishing incidents within the institution.' },
      { headline: 'Healthcare organizations', body: 'That are required under HIPAA to provide security awareness training to all workforce members with access to ePHI, and need documentation of that training for compliance purposes.' },
    ],
    faqs: [
      { question: 'How long does a security awareness training session take?', answer: 'A standard in-person or virtual security awareness session is typically 60–90 minutes, covering the core topics — phishing recognition, social engineering, password hygiene, remote work security, physical security, and incident reporting. We can expand or condense based on your organization\'s schedule constraints and specific training priorities.' },
      { question: 'What is phishing simulation testing, and is it required?', answer: 'Phishing simulation testing involves sending controlled, authorized phishing emails to your employees to see who clicks, who enters credentials, and who reports the email as suspicious. It is not required, but it is highly valuable — it tells you whether your training is actually changing behavior rather than just generating completion rates. Results are used to identify targeted follow-up training, not to discipline employees.' },
      { question: 'Do you train executives separately from general staff?', answer: 'We recommend a separate executive-level session, or at minimum executive-specific content within the general session. Executives face different threat scenarios — business email compromise, whale phishing, impersonation attacks — and benefit from training calibrated to those specific risks.' },
      { question: 'How do you measure whether the training worked?', answer: 'The most direct measurement is phishing simulation performance before and after training — click rate, credential submission rate, and report rate. We establish a baseline phishing simulation before training and conduct a follow-up simulation after training to measure the change.' },
    ],
    ctaHeadline: 'Ready to build a security-aware culture in your organization?',
    relatedServices: ['incident-response', 'security-risk-compliance', 'cybersecurity-consulting'],
  },
]

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug)
}

export function getServiceUrl(slug: string): string {
  return `${SITE_URL}/services/${slug}`
}
