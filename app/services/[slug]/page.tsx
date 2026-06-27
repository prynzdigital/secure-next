import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowRight } from 'lucide-react'
import { servicesData, getServiceBySlug } from '@/lib/services-data'
import { SERVICE_SLUGS, SITE_URL, CONTACT_PHONE } from '@/lib/constants'
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema'
import { Breadcrumb } from '@/components/shared/Breadcrumb'
import { FAQSection } from '@/components/sections/FAQSection'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Button } from '@/components/ui/button'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `${SITE_URL}/services/${slug}` },
    openGraph: {
      title: service.ogTitle,
      description: service.ogDescription,
      url: `${SITE_URL}/services/${slug}`,
    },
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const svcSchema = serviceSchema({
    name: service.title,
    description: service.schemaDescription,
    serviceType: service.serviceType,
    url: `${SITE_URL}/services/${slug}`,
  })
  const faqJsonLd = faqSchema(service.faqs)
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', item: SITE_URL },
    { name: 'Services', item: `${SITE_URL}/services` },
    { name: service.title, item: `${SITE_URL}/services/${slug}` },
  ])

  const hasPhone = CONTACT_PHONE && !CONTACT_PHONE.includes('NEEDS')

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(svcSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Incident response gets emergency phone as primary CTA above the fold */}
      {service.isIncidentResponse && hasPhone && (
        <div className="bg-red-700 py-3" role="alert">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-white text-center">
            <span className="font-semibold">Experiencing an active security incident?</span>
            <a
              href={`tel:${CONTACT_PHONE.replace(/\D/g, '')}`}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-red-700 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Now: {CONTACT_PHONE}
            </a>
          </div>
        </div>
      )}

      {/* Page header */}
      <section className="bg-securenext-navy py-16 lg:py-20" aria-labelledby="service-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Services', href: '/services' },
              { label: service.title },
            ]}
          />
          <h1 id="service-heading" className="mt-6 text-4xl sm:text-5xl font-bold text-white max-w-3xl">
            {service.h1}
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl">
            {service.metaDescription}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button asChild variant="primary" size="lg">
              <Link href="/contact#assessment-form">
                Request Free Assessment
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
            {service.isIncidentResponse && hasPhone ? (
              <a
                href={`tel:${CONTACT_PHONE.replace(/\D/g, '')}`}
                className="inline-flex items-center justify-center gap-2 h-14 px-8 text-lg bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition-colors"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call Now: {CONTACT_PHONE}
              </a>
            ) : (
              <Button asChild variant="navy-outline" size="lg">
                <Link href="/contact#consultation-form">Schedule Consultation</Link>
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white" aria-labelledby="overview-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 id="overview-heading" className="text-2xl font-bold text-securenext-navy mb-6">Overview</h2>
          <div className="prose-light">
            {service.overview.split('\n\n').map((para, i) => (
              <p key={i} className="text-gray-700 leading-relaxed mb-5 text-[17px]">{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-securenext-gray" aria-labelledby="benefits-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="benefits-heading" className="text-2xl sm:text-3xl font-bold text-securenext-navy mb-10 text-center">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.keyBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="h-5 w-5 text-securenext-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <h3 className="font-semibold text-securenext-navy">{benefit.headline}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed pl-8">{benefit.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges We Solve */}
      <section className="py-16 bg-white" aria-labelledby="challenges-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 id="challenges-heading" className="text-2xl sm:text-3xl font-bold text-securenext-navy mb-10">
            Challenges We Solve
          </h2>
          <div className="flex flex-col gap-6">
            {service.challenges.map((challenge, index) => (
              <div key={index} className="bg-securenext-gray rounded-xl p-6">
                <h3 className="font-semibold text-securenext-navy mb-3 italic">{challenge.headline}</h3>
                <p className="text-gray-600 leading-relaxed">{challenge.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-securenext-navy" aria-labelledby="process-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 id="process-heading" className="text-2xl sm:text-3xl font-bold text-white mb-10">
            Our Process
          </h2>
          <ol className="flex flex-col gap-8" role="list">
            {service.process.map((step) => (
              <li key={step.step} className="flex gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-securenext-accent text-white font-bold text-sm">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{step.headline}</h3>
                  <p className="text-white/70 leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 bg-white" aria-labelledby="deliverables-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 id="deliverables-heading" className="text-2xl sm:text-3xl font-bold text-securenext-navy mb-8">
            What You&apos;ll Receive
          </h2>
          <ul className="flex flex-col gap-3" role="list">
            {service.deliverables.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-securenext-green shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 bg-securenext-gray" aria-labelledby="audience-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 id="audience-heading" className="text-2xl sm:text-3xl font-bold text-securenext-navy mb-8">
            Who This Is For
          </h2>
          <div className="flex flex-col gap-6">
            {service.audiences.map((audience, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-securenext-navy mb-2">{audience.headline}</h3>
                <p className="text-gray-600 leading-relaxed">{audience.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {service.relatedServices.length > 0 && (
        <section className="py-16 bg-white" aria-labelledby="related-services-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="related-services-heading" className="text-xl font-bold text-securenext-navy mb-6">
              Related Services
            </h2>
            <div className="flex flex-wrap gap-3">
              {service.relatedServices.map((relSlug) => {
                const relService = servicesData.find((s) => s.slug === relSlug)
                if (!relService) return null
                return (
                  <Link
                    key={relSlug}
                    href={`/services/${relSlug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-securenext-gray text-securenext-navy text-sm font-medium rounded-full hover:bg-securenext-navy hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-securenext-accent focus-visible:ring-offset-2"
                  >
                    {relService.title}
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <FAQSection
        items={service.faqs}
        heading={`${service.title}: FAQ`}
      />

      <FinalCTA heading={service.ctaHeadline} />
    </>
  )
}
