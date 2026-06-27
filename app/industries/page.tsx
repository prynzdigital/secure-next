import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'
import { breadcrumbSchema } from '@/lib/schema'
import { industriesData } from '@/lib/industries-data'
import { Breadcrumb } from '@/components/shared/Breadcrumb'
import { IndustryCard } from '@/components/shared/IndustryCard'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Heart, BookOpen, Building2, HandHeart, Briefcase, Store } from 'lucide-react'
import React from 'react'

export const metadata: Metadata = {
  title: 'Industries We Serve | SecureNext Cybersecurity Chicago',
  description:
    'SecureNext protects businesses, healthcare, education, government, and nonprofits across Chicago and Illinois. Find your industry — learn more.',
  alternates: { canonical: `${SITE_URL}/industries` },
  openGraph: {
    title: 'Industries We Serve | SecureNext Cybersecurity Chicago',
    description:
      'SecureNext protects businesses, healthcare, education, government, and nonprofits across Chicago and Illinois. Find your industry — learn more.',
    url: `${SITE_URL}/industries`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industries We Serve | SecureNext Cybersecurity Chicago',
    description:
      'SecureNext protects businesses, healthcare, education, government, and nonprofits across Chicago and Illinois. Find your industry — learn more.',
  },
}

const industryIcons: Record<string, React.ReactNode> = {
  healthcare: <Heart className="h-6 w-6" />,
  education: <BookOpen className="h-6 w-6" />,
  government: <Building2 className="h-6 w-6" />,
  nonprofits: <HandHeart className="h-6 w-6" />,
  'professional-services': <Briefcase className="h-6 w-6" />,
  'small-businesses': <Store className="h-6 w-6" />,
}

export default function IndustriesPage() {
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', item: SITE_URL },
    { name: 'Industries', item: `${SITE_URL}/industries` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="bg-securenext-navy py-16 lg:py-20" aria-labelledby="industries-hub-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Industries' }]} />
          <h1 id="industries-hub-heading" className="mt-6 text-4xl sm:text-5xl font-bold text-white">
            Cybersecurity by Industry
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl">
            Security expertise calibrated to your industry&apos;s compliance requirements, threat profile, and operational realities.
          </p>
        </div>
      </section>

      <section className="py-16 bg-securenext-gray" aria-label="Industries we serve">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesData.map((industry) => (
              <IndustryCard
                key={industry.slug}
                slug={industry.slug}
                title={industry.title}
                intro={industry.intro}
                icon={industryIcons[industry.slug]}
                light
                className="h-full"
              />
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
