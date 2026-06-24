import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Shield } from 'lucide-react'
import {
  SITE_NAME,
  SITE_TAGLINE,
  CONTACT_PHONE,
  CONTACT_EMAIL,
  CONTACT_ADDRESS,
  FOOTER_SERVICE_LINKS,
  FOOTER_COMPANY_LINKS,
} from '@/lib/constants'
import { NewsletterForm } from '@/components/shared/NewsletterForm'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-securenext-navy-dark text-white" role="contentinfo">
      {/* Main footer grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <Link href="/" aria-label="SecureNext Networks — Home">
              <Image
                src="/images/logo-placeholder-white.svg"
                alt="SecureNext Networks"
                width={160}
                height={42}
              />
            </Link>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              {SITE_TAGLINE}
            </p>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              Serving Chicago businesses across Cook, DuPage, Lake, Will, and Kane Counties.
            </p>

            {/* Contact details */}
            <div className="mt-6 flex flex-col gap-3">
              {CONTACT_PHONE && !CONTACT_PHONE.includes('NEEDS') && (
                <a
                  href={`tel:${CONTACT_PHONE.replace(/\D/g, '')}`}
                  className="flex items-center gap-2 text-sm text-white/80 hover:text-securenext-accent transition-colors"
                >
                  <Phone className="h-4 w-4 text-securenext-accent shrink-0" aria-hidden="true" />
                  {CONTACT_PHONE}
                </a>
              )}
              {CONTACT_EMAIL && !CONTACT_EMAIL.includes('NEEDS') && (
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-2 text-sm text-white/80 hover:text-securenext-accent transition-colors"
                >
                  <Mail className="h-4 w-4 text-securenext-accent shrink-0" aria-hidden="true" />
                  {CONTACT_EMAIL}
                </a>
              )}
              {CONTACT_ADDRESS && !CONTACT_ADDRESS.includes('NEEDS') && (
                <p className="flex items-start gap-2 text-sm text-white/60">
                  <MapPin className="h-4 w-4 text-securenext-accent shrink-0 mt-0.5" aria-hidden="true" />
                  {CONTACT_ADDRESS}
                </p>
              )}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
              Services
            </h3>
            <ul className="flex flex-col gap-2">
              {FOOTER_SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1.5 text-sm text-white/70 hover:text-securenext-accent transition-colors"
                  >
                    <Shield className="h-3 w-3 text-securenext-accent/60 shrink-0" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
              Company
            </h3>
            <ul className="flex flex-col gap-2">
              {FOOTER_COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-securenext-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4 mt-8">
              Industries
            </h3>
            <ul className="flex flex-col gap-2">
              {[
                { label: 'Healthcare', href: '/industries/healthcare' },
                { label: 'Education', href: '/industries/education' },
                { label: 'Government', href: '/industries/government' },
                { label: 'Nonprofits', href: '/industries/nonprofits' },
                { label: 'Professional Services', href: '/industries/professional-services' },
                { label: 'Small Businesses', href: '/industries/small-businesses' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-securenext-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: CTA */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
              Get Protected
            </h3>
            <p className="text-sm text-white/70 leading-relaxed mb-5">
              Know where your organization stands. Request a free security assessment — no commitment required.
            </p>
            <Link
              href="/contact#assessment-form"
              className="inline-flex items-center justify-center px-5 py-3 bg-securenext-accent hover:bg-securenext-accent-dark text-white font-semibold text-sm rounded-md transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-securenext-accent focus-visible:ring-offset-2 focus-visible:ring-offset-securenext-navy-dark"
            >
              Request Free Assessment
            </Link>

            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-3">
                Compliance Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {['HIPAA', 'NIST CSF', 'CMMC', 'PCI-DSS'].map((badge) => (
                  <span
                    key={badge}
                    className="inline-block px-2 py-1 text-xs font-semibold bg-white/10 text-white/80 rounded"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter signup */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="text-base font-semibold text-white">Stay Informed on Cybersecurity</h3>
              <p className="mt-1 text-sm text-white/60">
                Get the latest threat intelligence and security tips for Chicago businesses.
              </p>
            </div>
            <div className="sm:w-80 shrink-0">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50">
            &copy; {currentYear} {SITE_NAME}. All rights reserved. Chicago, IL.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/privacy-policy"
              className="text-xs text-white/50 hover:text-white/80 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-xs text-white/50 hover:text-white/80 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
