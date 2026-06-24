'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ClipboardList, BarChart2, ShieldCheck, Eye, TrendingUp } from 'lucide-react'

/**
 * Animation spec 6.4 — Process Timeline
 * Steps animate in left-to-right with connecting line drawn via scaleX
 */

const steps = [
  {
    number: '01',
    label: 'Assess',
    description: 'We evaluate your current security posture — network, endpoints, access controls, policies, and compliance gaps.',
    icon: ClipboardList,
  },
  {
    number: '02',
    label: 'Analyze',
    description: 'We prioritize findings by risk level and impact — so you know exactly what to address first.',
    icon: BarChart2,
  },
  {
    number: '03',
    label: 'Secure',
    description: 'We implement the controls, configurations, and documentation that close the gaps the assessment revealed.',
    icon: ShieldCheck,
  },
  {
    number: '04',
    label: 'Monitor',
    description: 'We watch your environment continuously — detecting threats, investigating alerts, and escalating confirmed events.',
    icon: Eye,
  },
  {
    number: '05',
    label: 'Improve',
    description: 'We reassess periodically and adapt the security program as your organization and the threat landscape evolve.',
    icon: TrendingUp,
  },
]

export function ProcessTimeline() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      className="py-20 bg-securenext-navy overflow-hidden"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            id="process-heading"
            className="text-3xl sm:text-4xl font-bold text-white"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Security Process
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-white/70 max-w-2xl mx-auto"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A structured five-phase approach — from initial assessment to continuous improvement.
          </motion.p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting line */}
            <motion.div
              className="absolute top-12 left-[10%] right-[10%] h-0.5 bg-securenext-accent/30"
              initial={prefersReducedMotion ? {} : { scaleX: 0 }}
              whileInView={prefersReducedMotion ? {} : { scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }}
              style={{ originX: 0 }}
            />

            <div className="relative grid grid-cols-5 gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.label}
                  className="flex flex-col items-center text-center"
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
                  whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 * index, ease: 'easeOut' }}
                >
                  {/* Step circle */}
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-securenext-navy border-2 border-securenext-accent/40 z-10 mb-6">
                    <div className="flex flex-col items-center gap-1">
                      <step.icon className="h-7 w-7 text-securenext-accent" aria-hidden="true" />
                      <span className="text-xs font-bold text-securenext-accent">{step.number}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.label}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden flex flex-col gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.label}
              className="flex gap-5"
              initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="flex flex-col items-center">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-securenext-accent/20 border border-securenext-accent/40">
                  <step.icon className="h-6 w-6 text-securenext-accent" aria-hidden="true" />
                </div>
                {index < steps.length - 1 && (
                  <div className="mt-3 w-0.5 h-full bg-securenext-accent/20" aria-hidden="true" />
                )}
              </div>
              <div className="pt-1 pb-6">
                <div className="text-xs font-semibold text-securenext-accent mb-1">{step.number}</div>
                <h3 className="text-lg font-bold text-white mb-2">{step.label}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
