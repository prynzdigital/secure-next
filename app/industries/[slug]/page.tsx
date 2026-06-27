import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { getIndustryBySlug } from '@/lib/industries-data'
import { INDUSTRY_SLUGS, SITE_URL } from '@/lib/constants'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'
import { Breadcrumb } from '@/components/shared/Breadcrumb'
import { FAQSection } from '@/components/sections/FAQSection'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Button } from '@/components/ui/button'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return INDUSTRY_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const industry = getIndustryBySlug(slug)
  if (!industry) return {}

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    alternates: { canonical: `${SITE_URL}/industries/${slug}` },
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      url: `${SITE_URL}/industries/${slug}`,
    },
  }
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params
  const industry = getIndustryBySlug(slug)
  if (!industry) notFound()

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', item: SITE_URL },
    { name: 'Industries', item: `${SITE_URL}/industries` },
    { name: industry.title, item: `${SITE_URL}/industries/${slug}` },
  ])
  const faqJsonLd = industry.faqs.length > 0 ? faqSchema(industry.faqs) : null

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}

      {/* Page header */}
      <section className="bg-securenext-navy py-16 lg:py-20" aria-labelledby="industry-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Industries', href: '/industries' },
              { label: industry.title },
            ]}
          />
          <h1 id="industry-heading" className="mt-6 text-4xl sm:text-5xl font-bold text-white max-w-3xl">
            {industry.h1}
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl">{industry.metaDescription}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button asChild variant="primary" size="lg">
              <Link href="/contact#assessment-form">
                Request Free Assessment
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="navy-outline" size="lg">
              <Link href="/contact#consultation-form">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white" aria-labelledby="industry-intro-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 id="industry-intro-heading" className="sr-only">Overview</h2>
          <div className="prose-light">
            {industry.intro.split('\n\n').map((para, i) => (
              <p key={i} className="text-gray-700 leading-relaxed mb-5 text-[17px]">{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges + Services */}
      <section className="py-16 bg-securenext-gray" aria-label="Challenges and services">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-securenext-navy mb-6">Common Challenges</h2>
              <ul className="flex flex-col gap-3" role="list">
                {industry.challenges.map((challenge, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-securenext-accent shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-securenext-navy mb-6">What We Provide</h2>
              <ul className="flex flex-col gap-3" role="list">
                {industry.services.map((svc, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-securenext-green shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-gray-700">{svc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Compliance frameworks */}
          {industry.complianceFrameworks.length > 0 && (
            <div className="mt-12">
              <h2 className="text-xl font-bold text-securenext-navy mb-4">Compliance Frameworks</h2>
              <div className="flex flex-wrap gap-3">
                {industry.complianceFrameworks.map((fw) => (
                  <span
                    key={fw}
                    className="inline-block px-4 py-2 bg-white rounded-full text-sm font-semibold text-securenext-navy border border-securenext-navy/20 shadow-sm"
                  >
                    {fw}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related services */}
      {industry.relatedServices.length > 0 && (
        <section className="py-12 bg-white" aria-labelledby="related-svc-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="related-svc-heading" className="text-xl font-bold text-securenext-navy mb-5">
              Related Services
            </h2>
            <div className="flex flex-wrap gap-3">
              {industry.relatedServices.map((svcSlug) => (
                <Link
                  key={svcSlug}
                  href={`/services/${svcSlug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-securenext-gray text-securenext-navy text-sm font-medium rounded-full hover:bg-securenext-navy hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-securenext-accent focus-visible:ring-offset-2"
                >
                  {svcSlug.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {industry.faqs.length > 0 && (
        <FAQSection items={industry.faqs} heading={`${industry.title} Cybersecurity FAQ`} />
      )}

      <FinalCTA />
    </>
  )
}
