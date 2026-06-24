'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { Shield, ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CONTACT_PHONE } from '@/lib/constants'

export function HeroSection() {
  const hasPhone = CONTACT_PHONE && !CONTACT_PHONE.includes('NEEDS')
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      className="relative min-h-[88vh] flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background photo */}
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        className="object-cover object-center"
        priority
        aria-hidden="true"
      />

      {/* Dark gradient overlay — strong left, fades right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(4,16,40,0.97) 0%, rgba(4,16,40,0.92) 38%, rgba(4,16,40,0.65) 60%, rgba(4,16,40,0.25) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Subtle grid texture on overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* Accent glow on the left */}
      <div
        className="absolute top-1/2 -left-32 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-securenext-accent opacity-[0.10] blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Content — left-aligned */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Eyebrow badge */}
          <motion.div
            className="mb-6"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          >
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-securenext-accent text-sm font-semibold tracking-wide uppercase"
              style={{
                background: 'rgba(29,123,255,0.15)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(29,123,255,0.35)',
              }}
            >
              <Shield className="h-3.5 w-3.5" aria-hidden="true" />
              24/7 Best Cyber Security Solutions
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Protecting Networks.{' '}
            <span className="text-securenext-accent">Securing Futures.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="mt-4 text-xl sm:text-2xl font-semibold text-white/90 leading-snug"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          >
            Secure Your Business. Strengthen Your Network. Stay Ahead of Cyber Threats.
          </motion.p>

          {/* Body copy */}
          <motion.p
            className="mt-5 text-base sm:text-lg text-white/75 leading-relaxed"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          >
            SecureNext Networks delivers expert cybersecurity consulting, network security assessments,
            and compliance programs for Chicago businesses — from small businesses in the suburbs to
            healthcare organizations across Chicagoland.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4"
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            animate={prefersReducedMotion ? {} : { opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button asChild variant="primary" size="lg">
              <Link href="/contact#assessment-form">
                Request Free Assessment
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="navy-outline" size="lg">
              <Link href="/services">View Our Services</Link>
            </Button>
          </motion.div>

          {/* Social proof / phone */}
          <motion.div
            className="mt-8 flex flex-wrap items-center gap-6"
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            animate={prefersReducedMotion ? {} : { opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {hasPhone && (
              <a
                href={`tel:${CONTACT_PHONE.replace(/\D/g, '')}`}
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-medium"
              >
                <Phone className="h-4 w-4 text-securenext-accent" aria-hidden="true" />
                {CONTACT_PHONE}
              </a>
            )}
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-securenext-green" aria-hidden="true" />
              Serving Cook, DuPage, Lake, Will &amp; Kane Counties
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
