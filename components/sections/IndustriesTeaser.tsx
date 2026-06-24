'use client'

import React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { Heart, BookOpen, Building2, HandHeart, Briefcase, Store, ArrowRight } from 'lucide-react'
import { IndustryCard } from '@/components/shared/IndustryCard'

const industries = [
  {
    slug: 'healthcare',
    title: 'Healthcare',
    intro: 'HIPAA Security Rule risk analysis, ePHI environment hardening, and BAA execution for physician practices, multispecialty groups, and behavioral health providers.',
    icon: <Heart className="h-6 w-6" />,
  },
  {
    slug: 'education',
    title: 'Education',
    intro: 'NIST CSF alignment, FERPA compliance, and staff security training for Illinois K-12 school districts and higher education institutions.',
    icon: <BookOpen className="h-6 w-6" />,
  },
  {
    slug: 'government',
    title: 'Government',
    intro: 'NIST alignment, CMMC readiness, and procurement-appropriate security programs for Chicago-area municipalities and government agencies.',
    icon: <Building2 className="h-6 w-6" />,
  },
  {
    slug: 'nonprofits',
    title: 'Nonprofits',
    intro: 'Donor data protection, right-sized security programs for nonprofit budgets, and grant compliance cybersecurity documentation.',
    icon: <HandHeart className="h-6 w-6" />,
  },
  {
    slug: 'professional-services',
    title: 'Professional Services',
    intro: 'Client privilege protection, SOC 2 readiness, and PE transaction security due diligence for Chicago law firms, accounting practices, and advisory firms.',
    icon: <Briefcase className="h-6 w-6" />,
  },
  {
    slug: 'small-businesses',
    title: 'Small Businesses',
    intro: 'Right-sized security assessments and practical security programs for Chicago-area small businesses — without enterprise pricing or complexity.',
    icon: <Store className="h-6 w-6" />,
  },
]

export function IndustriesTeaser() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="py-20 bg-white" aria-labelledby="industries-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            id="industries-heading"
            className="text-3xl sm:text-4xl font-bold text-securenext-navy"
          >
            Industries We Serve
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Cybersecurity expertise calibrated to your industry&apos;s specific compliance requirements,
            threat profile, and operational realities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.slug}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <IndustryCard
                slug={industry.slug}
                title={industry.title}
                intro={industry.intro}
                icon={industry.icon}
                className="h-full"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 text-center"
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-securenext-accent font-semibold hover:text-securenext-accent-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-securenext-accent focus-visible:ring-offset-2 rounded-sm"
          >
            View All Industries
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
