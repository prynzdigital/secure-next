'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

/**
 * Animation spec 6.7 — FAQ Accordion
 * Height animates via Radix AccordionContent; stagger on initial mount
 */

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  items: FAQItem[]
  heading?: string
  subheading?: string
  dark?: boolean
  headingId?: string
}

export function FAQSection({
  items,
  heading = 'Frequently Asked Questions',
  subheading,
  dark = false,
  headingId,
}: FAQSectionProps) {
  // Only render aria-labelledby when a heading is actually shown
  const resolvedHeadingId = heading ? (headingId ?? 'faq-section-heading') : undefined
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      className="py-20"
      aria-labelledby={resolvedHeadingId}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className={`text-center mb-12 ${!heading ? 'hidden' : ''}`}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {heading && (
            <h2
              id={resolvedHeadingId}
              className="text-3xl sm:text-4xl font-bold text-white"
            >
              {heading}
            </h2>
          )}
          {subheading && (
            <p className="mt-4 text-lg text-white/70">
              {subheading}
            </p>
          )}
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-white/15 last:border-0"
              >
                <AccordionTrigger className="text-white hover:text-securenext-accent">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="leading-relaxed text-white/70">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
