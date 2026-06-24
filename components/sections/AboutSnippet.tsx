'use client'

import React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Users, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'

const trustBlocks = [
  {
    icon: ShieldCheck,
    title: 'Security-First',
    body: 'We are a cybersecurity firm — not an IT support company that added security to the menu. Every engagement is led by security specialists.',
  },
  {
    icon: Users,
    title: 'Built for Chicago Organizations',
    body: 'We understand Chicago\'s business environment — the local compliance landscape, the industries that drive the metro economy, and what right-sized security looks like for organizations that are not enterprise-scale.',
  },
  {
    icon: Award,
    title: 'Documented, Auditable Results',
    body: 'Every engagement produces written deliverables — assessment reports, compliance documentation, architecture diagrams — that your board, your regulator, and your clients can review.',
  },
]

export function AboutSnippet() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="py-20 bg-white" aria-labelledby="about-snippet-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: text */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, x: -24 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-securenext-accent font-semibold text-sm uppercase tracking-wider mb-3">
              About SecureNext
            </p>
            <h2
              id="about-snippet-heading"
              className="text-3xl sm:text-4xl font-bold text-securenext-navy mb-5"
            >
              A Chicago Cybersecurity Firm Built to Protect Organizations Like Yours
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              SecureNext Networks & Cyber Defense Solutions LLC was founded on a straightforward observation:
              most small and mid-sized organizations in Chicago cannot afford a full-time Chief Information
              Security Officer, but they have the same compliance obligations, the same threat exposure, and
              the same need for a documented security program that larger organizations do.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We exist to fill that gap — providing security expertise, compliance program development,
              and ongoing security capability that organizations can rely on without hiring it full-time.
            </p>
            <Button asChild variant="navy" size="md">
              <Link href="/about">
                Our Story
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </motion.div>

          {/* Right: trust blocks */}
          <div className="flex flex-col gap-5">
            {trustBlocks.map((block, index) => (
              <motion.div
                key={block.title}
                className="flex gap-4 p-5 bg-securenext-gray rounded-xl"
                initial={prefersReducedMotion ? {} : { opacity: 0, x: 24 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-securenext-accent/15 text-securenext-accent">
                  <block.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-securenext-navy mb-1">{block.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{block.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
