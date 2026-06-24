'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { MapPin, Shield, Network, Lock, Award, CheckCircle } from 'lucide-react'

/**
 * Animation spec 6.2 — Trust Bar
 * Staggered fade-in left-to-right, 0.1s delay per badge
 * Scroll-triggered via Intersection Observer via framer-motion whileInView
 */

const trustBadges = [
  {
    icon: MapPin,
    label: 'Chicago-Based',
    sublabel: 'Serving Chicagoland',
  },
  {
    icon: Shield,
    label: 'Cybersecurity Experts',
    sublabel: 'Specialized Focus',
  },
  {
    icon: Network,
    label: 'Network Infrastructure',
    sublabel: 'Specialists',
  },
  {
    icon: Lock,
    label: 'Security-Focused',
    sublabel: 'By Design',
  },
  {
    icon: Award,
    // [NEEDS CLIENT INPUT: BLK-1 — specific certification to display here]
    label: 'Certified Team',
    sublabel: '[NEEDS CLIENT INPUT: certification]',
  },
  {
    icon: CheckCircle,
    label: 'Compliance-Ready',
    sublabel: 'HIPAA · NIST · CMMC · PCI-DSS',
  },
]

export function TrustBar() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      className="border-b border-white/10 py-6"
      style={{ background: 'rgba(7, 26, 61, 0.60)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
      aria-label="Trust indicators"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {trustBadges.map((badge, index) => (
            <motion.div
              key={badge.label}
              className="flex flex-col items-center text-center gap-1.5"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-securenext-accent/20">
                <badge.icon className="h-5 w-5 text-securenext-accent" aria-hidden="true" />
              </div>
              <p className="text-xs font-semibold text-white leading-tight">
                {badge.label}
              </p>
              {badge.sublabel && !badge.sublabel.includes('NEEDS') && (
                <p className="text-xs text-white/60 leading-tight">{badge.sublabel}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
