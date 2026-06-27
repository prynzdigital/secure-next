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

  if (topContent) {
    return (
      <section className="py-20 bg-white" aria-labelledby={resolvedHeadingId}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left column — prose / intro */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {topContent}
            </motion.div>

            {/* Right column — FAQ accordion */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, x: 20 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {heading && (
                <h2
                  id={resolvedHeadingId}
                  className="text-3xl font-bold text-securenext-navy mb-2"
                >
                  {heading}
                </h2>
              )}
              {subheading && (
                <p className="text-gray-600 mb-8">{subheading}</p>
              )}
              <Accordion type="single" collapsible className="w-full">
                {items.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-gray-200 last:border-0"
                  >
                    <AccordionTrigger className="text-securenext-navy hover:text-securenext-accent text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="leading-relaxed text-gray-600">{item.answer}</p>
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

  return (
    <section className="py-20 bg-white" aria-labelledby={resolvedHeadingId}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className={`text-center mb-12 ${!heading ? 'hidden' : ''}`}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {heading && (
            <h2 id={resolvedHeadingId} className="text-3xl sm:text-4xl font-bold text-securenext-navy">
              {heading}
            </h2>
          )}
          {subheading && (
            <p className="mt-4 text-lg text-gray-600">{subheading}</p>
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
                  <p className="leading-relaxed text-gray-600">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
