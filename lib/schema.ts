import { SITE_URL, SITE_LEGAL_NAME, CONTACT_PHONE, CONTACT_EMAIL, CONTACT_ADDRESS, CONTACT_CITY, CONTACT_STATE, CONTACT_ZIP, BUSINESS_HOURS } from './constants'

const ORG_ID = `${SITE_URL}/#organization`

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'ProfessionalService'],
        '@id': ORG_ID,
        name: SITE_LEGAL_NAME,
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/images/logo-placeholder.svg`,
        },
        description:
          'SecureNext Networks & Cyber Defense Solutions LLC is a Chicago cybersecurity consulting firm serving Cook, DuPage, Lake, Will, and Kane Counties.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: CONTACT_ADDRESS,
          addressLocality: CONTACT_CITY,
          addressRegion: CONTACT_STATE,
          postalCode: CONTACT_ZIP,
          addressCountry: 'US',
        },
        telephone: CONTACT_PHONE,
        email: CONTACT_EMAIL,
        priceRange: '$$',
        areaServed: [
          { '@type': 'City', name: 'Chicago', sameAs: 'https://www.wikidata.org/wiki/Q1297' },
          { '@type': 'AdministrativeArea', name: 'Cook County' },
          { '@type': 'AdministrativeArea', name: 'DuPage County' },
          { '@type': 'AdministrativeArea', name: 'Lake County' },
          { '@type': 'AdministrativeArea', name: 'Will County' },
          { '@type': 'AdministrativeArea', name: 'Kane County' },
        ],
        sameAs: [
          // [NEEDS CLIENT INPUT: LinkedIn, Facebook, Twitter/X, GBP URLs]
        ],
      },
    ],
  }
}

export function serviceSchema({
  name,
  description,
  serviceType,
  url,
}: {
  name: string
  description: string
  serviceType: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: { '@id': ORG_ID },
    areaServed: [
      { '@type': 'City', name: 'Chicago' },
      { '@type': 'AdministrativeArea', name: 'Cook County' },
      { '@type': 'AdministrativeArea', name: 'DuPage County' },
      { '@type': 'AdministrativeArea', name: 'Lake County' },
      { '@type': 'AdministrativeArea', name: 'Will County' },
      { '@type': 'AdministrativeArea', name: 'Kane County' },
    ],
    serviceType,
    url,
  }
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function blogPostSchema({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  image,
}: {
  headline: string
  description: string
  url: string
  datePublished: string
  dateModified: string
  image: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    description,
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    datePublished,
    dateModified,
    image: `${SITE_URL}${image}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }
}

export function breadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.item,
    })),
  }
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    name: SITE_LEGAL_NAME,
    url: SITE_URL,
    telephone: CONTACT_PHONE,
    email: CONTACT_EMAIL,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chicago',
      addressRegion: 'IL',
      addressCountry: 'US',
      streetAddress: CONTACT_ADDRESS,
    },
    openingHours: BUSINESS_HOURS,
    hasMap: 'https://maps.google.com/?q=Chicago+IL',
    priceRange: '$$',
    areaServed: 'Chicagoland',
  }
}
