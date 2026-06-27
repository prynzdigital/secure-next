'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  items: FAQItem[]
  heading?: string
  subheading?: string
  headingId?: string
  topContent?: React.ReactNode
}

export function FAQSection({
  items,
  heading = 'Frequently Asked Questions',
  subheading,
  headingId,
  topContent,
}: FAQSectionProps) {
  const resolvedHeadingId = heading ? (headingId ?? 'faq-section-heading') : undefined
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      className="py-20 bg-white"
      aria-labelledby={resolvedHeadingId}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

        {/* Optional intro content above the accordion */}
        {topContent && (
          <motion.div
            className="mb-14 pb-14 border-b border-gray-100"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {topContent}
          </motion.div>
        )}

        <div className="max-w-3xl mx-auto">
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
                className="text-3xl sm:text-4xl font-bold text-securenext-navy"
              >
                {heading}
              </h2>
            )}
            {subheading && (
              <p className="mt-4 text-lg text-gray-600">
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
                  className="border-gray-200 last:border-0"
                >
                  <AccordionTrigger className="text-securenext-navy hover:text-securenext-accent">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="leading-relaxed text-gray-600">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
