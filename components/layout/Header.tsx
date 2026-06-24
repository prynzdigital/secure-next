'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, Phone, Shield } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { NAV_LINKS, CONTACT_PHONE, FOOTER_SERVICE_LINKS } from '@/lib/constants'
import { Button } from '@/components/ui/button'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change (via escape key)
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false)
        setServicesOpen(false)
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <>
      {/* Animation spec 6.5 — transparent header that gains bg on scroll */}
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-securenext-navy shadow-lg'
            : 'bg-transparent'
        )}
        initial={prefersReducedMotion ? {} : { y: -100 }}
        animate={prefersReducedMotion ? {} : { y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        role="banner"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-securenext-accent focus-visible:ring-offset-2 rounded-sm"
              aria-label="SecureNext Networks — Home"
            >
              <Image
                src="/images/logo-placeholder-white.svg"
                alt="SecureNext Networks"
                width={160}
                height={42}
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Primary navigation">
              {NAV_LINKS.map((link) =>
                link.hasDropdown ? (
                  <div key={link.href} className="relative">
                    <button
                      className={cn(
                        'flex items-center gap-1 px-4 py-2 rounded-md text-sm font-semibold text-white',
                        'hover:text-securenext-accent transition-colors duration-200',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-securenext-accent focus-visible:ring-offset-2'
                      )}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                      onClick={() => setServicesOpen((v) => !v)}
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          'h-4 w-4 transition-transform duration-200',
                          servicesOpen && 'rotate-180'
                        )}
                        aria-hidden="true"
                      />
                    </button>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          className="absolute left-0 top-full pt-2 z-50"
                          initial={prefersReducedMotion ? {} : { opacity: 0, y: -8 }}
                          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                          exit={prefersReducedMotion ? {} : { opacity: 0, y: -8 }}
                          transition={{ duration: 0.15 }}
                          onMouseEnter={() => setServicesOpen(true)}
                          onMouseLeave={() => setServicesOpen(false)}
                        >
                          <div className="w-72 rounded-xl bg-white shadow-xl border border-gray-100 overflow-hidden">
                            <div className="p-3">
                              {FOOTER_SERVICE_LINKS.map((svc) => (
                                <Link
                                  key={svc.href}
                                  href={svc.href}
                                  className={cn(
                                    'flex items-center gap-2 px-3 py-2 rounded-md text-sm text-securenext-navy font-medium',
                                    'hover:bg-securenext-gray hover:text-securenext-accent transition-colors duration-150'
                                  )}
                                  onClick={() => setServicesOpen(false)}
                                >
                                  <Shield className="h-4 w-4 text-securenext-accent shrink-0" aria-hidden="true" />
                                  {svc.label}
                                </Link>
                              ))}
                            </div>
                            <div className="border-t border-gray-100 p-3">
                              <Link
                                href="/services"
                                className="flex items-center justify-center py-2 text-sm font-semibold text-securenext-accent hover:text-securenext-accent-dark transition-colors"
                                onClick={() => setServicesOpen(false)}
                              >
                                View All Services →
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'px-4 py-2 rounded-md text-sm font-semibold text-white',
                      'hover:text-securenext-accent transition-colors duration-200',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-securenext-accent focus-visible:ring-offset-2'
                    )}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              {CONTACT_PHONE && !CONTACT_PHONE.includes('NEEDS') && (
                <a
                  href={`tel:${CONTACT_PHONE.replace(/\D/g, '')}`}
                  className="flex items-center gap-2 text-sm font-semibold text-white hover:text-securenext-accent transition-colors"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {CONTACT_PHONE}
                </a>
              )}
              <Button asChild variant="primary" size="sm">
                <Link href="/contact#assessment-form">Free Assessment</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className={cn(
                'lg:hidden p-2 rounded-md text-white',
                'hover:bg-white/10 transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-securenext-accent focus-visible:ring-offset-2'
              )}
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-menu"
              className="lg:hidden bg-securenext-navy border-t border-white/10"
              initial={prefersReducedMotion ? {} : { opacity: 0, height: 0 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, height: 'auto' }}
              exit={prefersReducedMotion ? {} : { opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
            >
              <nav className="px-4 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-3 py-3 rounded-md text-base font-semibold text-white hover:bg-white/10 hover:text-securenext-accent transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-3 border-t border-white/10 mt-2 flex flex-col gap-2">
                  <Button asChild variant="primary" size="md" className="w-full">
                    <Link href="/contact#assessment-form" onClick={() => setMobileOpen(false)}>
                      Free Security Assessment
                    </Link>
                  </Button>
                  {CONTACT_PHONE && !CONTACT_PHONE.includes('NEEDS') && (
                    <a
                      href={`tel:${CONTACT_PHONE.replace(/\D/g, '')}`}
                      className="flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white hover:text-securenext-accent transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      Call {CONTACT_PHONE}
                    </a>
                  )}
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer for fixed header */}
      <div className="h-20" aria-hidden="true" />
    </>
  )
}
