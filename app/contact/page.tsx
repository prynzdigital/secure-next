import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'
import { breadcrumbSchema, localBusinessSchema } from '@/lib/schema'
import { ContactPageClient } from '@/components/shared/ContactForm'

export const metadata: Metadata = {
  title: 'Contact SecureNext | Chicago Cybersecurity Firm',
  description:
    'Contact SecureNext Networks in Chicago. Request a security assessment, schedule a consultation, or call us directly. We serve all of Chicagoland.',
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: 'Contact SecureNext | Chicago Cybersecurity Firm',
    description:
      'Contact SecureNext Networks in Chicago. Request a security assessment, schedule a consultation, or call us directly. We serve all of Chicagoland.',
    url: `${SITE_URL}/contact`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact SecureNext | Chicago Cybersecurity Firm',
    description:
      'Contact SecureNext Networks in Chicago. Request a security assessment, schedule a consultation, or call us directly. We serve all of Chicagoland.',
  },
}

export default function ContactPage() {
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', item: SITE_URL },
    { name: 'Contact', item: `${SITE_URL}/contact` },
  ])
  const localBizJsonLd = localBusinessSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBizJsonLd) }}
      />
      <ContactPageClient />
    </>
  )
}
