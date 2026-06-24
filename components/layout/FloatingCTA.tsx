'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone, X } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { CONTACT_PHONE } from '@/lib/constants'

/**
 * Animation spec 6.6 — Floating CTA
 * Appears after 3s on mobile only. Phone + "Get a Free Assessment" pill.
 * Dismissible per session.
 */
export function FloatingCTA() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const prefersReducedMotion = useReducedMotion()

  if (dismissed) return null

  const hasPhone = CONTACT_PHONE && !CONTACT_PHONE.includes('NEEDS')

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-4 left-4 right-4 z-40 md:hidden"
          initial={prefersReducedMotion ? {} : { y: 100, opacity: 0 }}
          animate={prefersReducedMotion ? {} : { y: 0, opacity: 1 }}
          exit={prefersReducedMotion ? {} : { y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          role="complementary"
          aria-label="Contact options"
        >
          <div className="bg-securenext-navy rounded-2xl shadow-2xl p-4 flex items-center gap-3">
            {hasPhone && (
              <a
                href={`tel:${CONTACT_PHONE.replace(/\D/g, '')}`}
                className="flex items-center justify-center h-11 w-11 rounded-xl bg-securenext-accent text-white shrink-0 animate-[pulse-ring_1.5s_ease-out_infinite] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-securenext-navy"
                aria-label={`Call SecureNext Networks at ${CONTACT_PHONE}`}
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
              </a>
            )}
            <Link
              href="/contact#assessment-form"
              className="flex-1 text-center py-2.5 bg-white text-securenext-navy text-sm font-semibold rounded-xl hover:bg-securenext-gray transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-securenext-accent focus-visible:ring-offset-2 focus-visible:ring-offset-securenext-navy"
            >
              Free Security Assessment
            </Link>
            <button
              onClick={() => setDismissed(true)}
              className="flex items-center justify-center h-8 w-8 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Dismiss contact bar"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
