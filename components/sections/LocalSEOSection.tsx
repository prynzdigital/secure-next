'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { GlowAbstract } from '@/components/shared/GlowAbstract'

const counties = [
  {
    name: 'Cook County',
    description:
      'Cook County is home to Chicago itself and dozens of municipalities — from Evanston and Oak Park to Cicero and Blue Island. SecureNext serves Cook County organizations from physician practices in the Loop and Lincoln Park to manufacturers in suburban Cook, with security programs calibrated to the urban business environment.',
  },
  {
    name: 'DuPage County',
    description:
      'DuPage County\'s business corridor along I-88 — Naperville, Lisle, Downers Grove, Oakbrook Terrace — includes a concentration of healthcare organizations, professional services firms, and technology companies that are among the most active in requesting formal security assessments and compliance programs. SecureNext understands the DuPage business environment.',
  },
  {
    name: 'Lake County',
    description:
      'Lake County\'s North Shore business community and the pharmaceutical and healthcare corridor along I-94 create specific cybersecurity needs — HIPAA compliance for healthcare providers, compliance with state and federal regulations for specialty manufacturers, and enterprise security programs for mid-market professional services firms. SecureNext serves Lake County organizations from Waukegan to Highland Park.',
  },
  {
    name: 'Will County',
    description:
      'Will County\'s industrial and logistics base — centered in Joliet, Bolingbrook, Romeoville, and the Route 30 and I-55 corridors — is one of the most concentrated manufacturing and distribution environments in the Midwest. SecureNext serves Will County manufacturers, logistics companies, and the healthcare and professional services organizations that support them.',
  },
  {
    name: 'Kane County',
    description:
      'Kane County\'s business communities in Aurora, Elgin, and St. Charles include manufacturing and industrial operations, healthcare organizations, and the full range of small and mid-sized businesses that anchor a suburban economy. SecureNext serves Kane County organizations with right-sized security programs appropriate to their industry and risk profile.',
  },
]

export function LocalSEOSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      className="py-20 bg-securenext-navy relative overflow-hidden"
      aria-labelledby="local-seo-heading"
    >
      <GlowAbstract variant="dense" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            id="local-seo-heading"
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Cybersecurity Services Across Chicagoland
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-3xl mx-auto">
            SecureNext Networks serves organizations across the five-county Chicago metropolitan area —
            delivering cybersecurity consulting, network security assessments, and compliance programs
            to organizations that need a local partner, not a remote vendor.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {counties.map((county, index) => (
            <motion.div
              key={county.name}
              className="glass-card p-6"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="h-4 w-4 text-securenext-accent shrink-0" aria-hidden="true" />
                <h3 className="font-semibold text-white">{county.name}</h3>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">{county.description}</p>
            </motion.div>
          ))}

          {/* Local value prop */}
          <motion.div
            className="glass-card p-6"
            style={{ background: 'rgba(29, 123, 255, 0.12)', borderColor: 'rgba(29, 123, 255, 0.30)' }}
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <h3 className="font-semibold text-white mb-3">Why Local Matters in Cybersecurity</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              A local cybersecurity partner understands the regional business environment —
              the compliance pressures specific to Illinois-regulated industries, the supply
              chain relationships common to Chicago-area manufacturers, and the workforce dynamics
              that shape security training needs. SecureNext is headquartered in Chicago and
              serves clients across the metro with on-site capability that a national firm cannot match.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
