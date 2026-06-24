import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FloatingCTA } from '@/components/layout/FloatingCTA'
import { BackToTop } from '@/components/layout/BackToTop'
import { organizationSchema } from '@/lib/schema'
import {
  SITE_NAME,
  SITE_URL,
  SITE_DESCRIPTION,
  CONTACT_PHONE,
  CONTACT_EMAIL,
} from '@/lib/constants'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: '/images/securenext-icon.jpeg',
    shortcut: '/images/securenext-icon.jpeg',
    apple: '/images/securenext-icon.jpeg',
  },
  title: {
    default: `Cybersecurity Company Chicago | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'cybersecurity Chicago',
    'network security Chicago',
    'HIPAA compliance Chicago',
    'IT security consulting Chicago',
    'managed security services Chicago',
    'penetration testing Chicago',
    'cybersecurity company Chicago',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `Cybersecurity Company Chicago | ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
    // TODO: Add og-default.jpg to /public/images/ before launch [NEEDS CLIENT INPUT: OQ-3 domain required for absolute OG URL]
    // images array omitted until og-default.jpg (1200x630px) is provided and domain is confirmed
  },
  twitter: {
    card: 'summary_large_image',
    title: `Cybersecurity Company Chicago | ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    // [NEEDS CLIENT INPUT: Google Search Console verification token]
    // google: 'GOOGLE_VERIFICATION_TOKEN',
  },
  ...(CONTACT_PHONE && !CONTACT_PHONE.includes('NEEDS') ? {} : {}),
  ...(CONTACT_EMAIL && !CONTACT_EMAIL.includes('NEEDS') ? {} : {}),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const orgSchema = organizationSchema()

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="min-h-screen font-sans antialiased">
        {/* Skip navigation — accessibility requirement */}
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <FloatingCTA />
        <BackToTop />
      </body>
    </html>
  )
}
