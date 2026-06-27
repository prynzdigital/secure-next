export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.securenextnetworks.com'
export const SITE_NAME = 'SecureNext Networks'
export const SITE_LEGAL_NAME = 'SecureNext Networks & Cyber Defense Solutions LLC'
export const SITE_TAGLINE = 'Protecting Networks. Securing Futures.'
export const SITE_DESCRIPTION =
  "Chicago's cybersecurity specialists. We protect businesses, healthcare orgs, and governments from cyber threats. Request a free assessment today."

export const CONTACT_PHONE = '(312) 998-2114'
// [NEEDS CLIENT INPUT: confirm email address]
export const CONTACT_EMAIL = '[NEEDS CLIENT INPUT: email address]'
export const CONTACT_ADDRESS = '1133 E 83rd Street Unit 113'
export const CONTACT_CITY = 'Chicago'
export const CONTACT_STATE = 'IL'
export const CONTACT_ZIP = '60619'
// [NEEDS CLIENT INPUT: confirm business hours]
export const BUSINESS_HOURS = '[NEEDS CLIENT INPUT: business hours]'

export const NAV_LINKS = [
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'Industries', href: '/industries' },
  { label: 'About', href: '/about' },
  { label: 'Resources', href: '/resources' },
  { label: 'Blog', href: '/blog' },
]

export const SERVICE_SLUGS = [
  'cybersecurity-consulting',
  'network-infrastructure-design',
  'network-security-assessments',
  'security-risk-compliance',
  'firewall-vpn-solutions',
  'cloud-security-solutions',
  'security-monitoring',
  'incident-response',
  'penetration-testing',
  'cybersecurity-training',
] as const

export type ServiceSlug = (typeof SERVICE_SLUGS)[number]

export const INDUSTRY_SLUGS = [
  'healthcare',
  'education',
  'government',
  'nonprofits',
  'professional-services',
  'small-businesses',
] as const

export type IndustrySlug = (typeof INDUSTRY_SLUGS)[number]

export const BLOG_SLUGS = [
  'cybersecurity-assessment-guide-chicago-businesses',
  'hipaa-security-risk-analysis-requirements',
  'what-is-penetration-testing',
  'nist-cybersecurity-framework-small-business',
  'cloud-security-best-practices-2025',
  'ransomware-protection-chicago-smb',
  'firewall-configuration-mistakes-businesses-make',
  'employee-cybersecurity-training-importance',
  'incident-response-plan-template',
  'cmmc-compliance-illinois-defense-contractors',
  'network-segmentation-security-benefits',
  'chicago-cybersecurity-landscape-2025',
] as const

export type BlogSlug = (typeof BLOG_SLUGS)[number]

export const FOOTER_SERVICE_LINKS = [
  { label: 'Cybersecurity Consulting', href: '/services/cybersecurity-consulting' },
  { label: 'Network Infrastructure Design', href: '/services/network-infrastructure-design' },
  { label: 'Network Security Assessments', href: '/services/network-security-assessments' },
  { label: 'Security Risk & Compliance', href: '/services/security-risk-compliance' },
  { label: 'Firewall & VPN Solutions', href: '/services/firewall-vpn-solutions' },
  { label: 'Cloud Security Solutions', href: '/services/cloud-security-solutions' },
  { label: 'Security Monitoring', href: '/services/security-monitoring' },
  { label: 'Incident Response', href: '/services/incident-response' },
  { label: 'Penetration Testing', href: '/services/penetration-testing' },
  { label: 'Cybersecurity Training', href: '/services/cybersecurity-training' },
]

export const FOOTER_COMPANY_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Industries', href: '/industries' },
  { label: 'Resources', href: '/resources' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  { label: 'FAQ', href: '/faq' },
]
