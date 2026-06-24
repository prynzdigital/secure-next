'use client'

import React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CONTACT_PHONE, SITE_TAGLINE } from '@/lib/constants'

interface FinalCTAProps {
  heading?: string
  subheading?: string
  primaryCTALabel?: string
  primaryCTAHref?: string
  secondaryCTALabel?: string
  secondaryCTAHref?: string
}

export function FinalCTA({
  heading = SITE_TAGLINE,
  subheading = 'Ready to build a security program for your organization? Start with a free security assessment.',
  primaryCTALabel = 'Request Free Assessment',
  primaryCTAHref = '/contact#assessment-form',
  secondaryCTALabel = 'Schedule a Consultation',
  secondaryCTAHref = '/contact#consultation-form',
}: FinalCTAProps) {
  const hasPhone = CONTACT_PHONE && !CONTACT_PHONE.includes('NEEDS')
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      className="py-24 relative overflow-hidden"
      aria-labelledby="final-cta-heading"
    >
      {/* Background decorative glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-securenext-accent opacity-[0.12] blur-3xl" />
        <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-securenext-accent opacity-[0.07] blur-3xl" />
      </div>

      {/* Glass panel */}
      <div className="absolute inset-0" style={{ background: 'rgba(7, 26, 61, 0.40)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' }} aria-hidden="true" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          id="final-cta-heading"
          className="text-4xl sm:text-5xl font-bold text-white"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {heading}
        </motion.h2>

        <motion.p
          className="mt-5 text-xl text-white/70 max-w-2xl mx-auto"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {subheading}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <Button asChild variant="primary" size="lg">
            <Link href={primaryCTAHref}>
              {primaryCTALabel}
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild variant="navy-outline" size="lg">
            <Link href={secondaryCTAHref}>
              {secondaryCTALabel}
            </Link>
          </Button>
        </motion.div>

        {hasPhone && (
          <motion.p
            className="mt-8 text-white/50 text-sm"
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Experiencing an active incident?{' '}
            <a
              href={`tel:${CONTACT_PHONE.replace(/\D/g, '')}`}
              className="text-securenext-accent hover:text-white transition-colors font-semibold"
            >
              <Phone className="inline h-3.5 w-3.5 mr-1" aria-hidden="true" />
              Call {CONTACT_PHONE}
            </a>
          </motion.p>
        )}
      </div>
    </section>
  )
}
