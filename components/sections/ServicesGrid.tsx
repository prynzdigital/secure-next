'use client'

import React from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import {
  ShieldCheck,
  Network,
  Search,
  FileCheck,
  Shield,
  Cloud,
  Eye,
  AlertTriangle,
  Target,
  GraduationCap,
} from 'lucide-react'
import { ServiceCard } from '@/components/shared/ServiceCard'
import { GlowAbstract } from '@/components/shared/GlowAbstract'

/**
 * Animation spec 6.3 — Card Fade-in
 * whileInView stagger, viewport once
 */

const services = [
  {
    slug: 'cybersecurity-consulting',
    title: 'Cybersecurity Consulting',
    excerpt:
      'Build a security program appropriate to your organization — without the overhead of a full-time security team.',
    icon: <ShieldCheck className="h-6 w-6" />,
  },
  {
    slug: 'network-infrastructure-design',
    title: 'Network Infrastructure Design',
    excerpt:
      'Secure network architecture designed from the ground up — topology, segmentation, and documentation that persists.',
    icon: <Network className="h-6 w-6" />,
  },
  {
    slug: 'network-security-assessments',
    title: 'Network Security Assessments',
    excerpt:
      'Find your actual vulnerabilities before attackers do — with prioritized findings and a plain-language report.',
    icon: <Search className="h-6 w-6" />,
  },
  {
    slug: 'security-risk-compliance',
    title: 'Security Risk & Compliance',
    excerpt:
      'HIPAA, CMMC, NIST, and PCI-DSS compliance programs built to hold up under actual audits and enforcement review.',
    icon: <FileCheck className="h-6 w-6" />,
  },
  {
    slug: 'firewall-vpn-solutions',
    title: 'Firewall & VPN Solutions',
    excerpt:
      'Enterprise-grade perimeter security — designed, configured, and documented so your defenses actually work.',
    icon: <Shield className="h-6 w-6" />,
  },
  {
    slug: 'cloud-security-solutions',
    title: 'Cloud Security Solutions',
    excerpt:
      'Secure your AWS, Azure, or Google Cloud environment — IAM hardening, posture assessment, compliance alignment.',
    icon: <Cloud className="h-6 w-6" />,
  },
  {
    slug: 'security-monitoring',
    title: 'Security Monitoring',
    excerpt:
      'Continuous monitoring of your environment — alert investigation, incident escalation, compliance documentation.',
    icon: <Eye className="h-6 w-6" />,
  },
  {
    slug: 'incident-response',
    title: 'Incident Response',
    excerpt:
      'When something goes wrong, structured response matters. Call us first — we contain, investigate, and recover.',
    icon: <AlertTriangle className="h-6 w-6" />,
  },
  {
    slug: 'penetration-testing',
    title: 'Penetration Testing',
    excerpt:
      'Active adversarial testing of your defenses — not a scan report, but a structured exploitation attempt by experienced practitioners.',
    icon: <Target className="h-6 w-6" />,
  },
  {
    slug: 'cybersecurity-training',
    title: 'Cybersecurity Training',
    excerpt:
      'Behavior-change training for your team — phishing simulations, role-specific scenarios, compliance documentation.',
    icon: <GraduationCap className="h-6 w-6" />,
  },
]


const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function ServicesGrid() {
  const prefersReducedMotion = useReducedMotion()

  const activeContainerVariants: Variants = prefersReducedMotion
    ? { hidden: {}, visible: {} }
    : containerVariants

  const activeCardVariants: Variants = prefersReducedMotion
    ? { hidden: {}, visible: {} }
    : cardVariants

  return (
    <section
      className="py-20 bg-securenext-navy relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      <GlowAbstract variant="default" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Cybersecurity Services for Chicago Organizations
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            From initial assessment to ongoing monitoring — specialized security services that match your organization&apos;s actual risk and compliance profile.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={activeContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {services.map((svc) => (
            <motion.div key={svc.slug} variants={activeCardVariants}>
              <ServiceCard
                slug={svc.slug}
                title={svc.title}
                excerpt={svc.excerpt}
                icon={svc.icon}
                className="h-full"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
