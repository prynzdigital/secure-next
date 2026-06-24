'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

export function BackToTop() {
  const [visible, setVisible] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    if (prefersReducedMotion) {
      window.scrollTo({ top: 0 })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed z-50 flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 hover:border-securenext-accent/60 hover:shadow-lg hover:shadow-securenext-accent/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-securenext-accent focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          style={{
            bottom: '1.75rem',
            right: '1.25rem',
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
          }}
          initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.7, y: 12 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, scale: 1, y: 0 }}
          exit={prefersReducedMotion ? {} : { opacity: 0, scale: 0.7, y: 12 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          aria-label="Back to top"
          whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
          whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
        >
          <ChevronUp className="h-5 w-5 text-white" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
