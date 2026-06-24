import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL, CONTACT_EMAIL } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_NAME}`,
  description: `Privacy Policy for ${SITE_NAME}.`,
  robots: { index: false, follow: true },
}

export default function PrivacyPolicyPage() {
  return (
    <section className="py-16 bg-white" aria-labelledby="privacy-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 id="privacy-heading" className="text-4xl font-bold text-securenext-navy mb-8">
          Privacy Policy
        </h1>
        <div className="prose-securenext">
          <p className="text-gray-600 mb-6">
            <strong>Last Updated:</strong> June 24, 2026
          </p>

          <h2>Overview</h2>
          <p>
            SecureNext Networks & Cyber Defense Solutions LLC (&quot;SecureNext,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website at {SITE_URL}. This Privacy Policy describes how we collect, use, and protect information when you visit our website or contact us.
          </p>

          <h2>Information We Collect</h2>
          <p>We collect information you voluntarily provide, including:</p>
          <ul>
            <li>Name, email address, phone number, and company name submitted through contact forms</li>
            <li>Information about your organization&apos;s security needs provided in inquiry messages</li>
            <li>Standard website analytics data (page views, referral sources, browser type) through analytics tools</li>
          </ul>

          <h2>How We Use Information</h2>
          <p>We use collected information to:</p>
          <ul>
            <li>Respond to your inquiries and provide requested services</li>
            <li>Schedule consultations and security assessments</li>
            <li>Send service-related communications</li>
            <li>Improve our website and services</li>
          </ul>
          <p>We do not sell personal information to third parties.</p>

          <h2>Data Security</h2>
          <p>
            As a cybersecurity firm, we implement appropriate technical and organizational measures to protect personal information against unauthorized access, disclosure, alteration, or destruction. Contact form submissions are transmitted over encrypted connections.
          </p>

          <h2>Illinois Privacy Law</h2>
          <p>
            Illinois residents have rights under the Illinois Personal Information Protection Act (PIPA). If you are an Illinois resident and wish to access, correct, or request deletion of personal information we hold about you, contact us at the email address below.
          </p>

          <h2>Cookies and Analytics</h2>
          <p>
            Our website may use cookies and analytics tools to understand how visitors use the site. You may configure your browser to refuse cookies; this may affect some website functionality. {/* [NEEDS CLIENT INPUT: specify analytics tool and cookie consent approach] */}
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this Privacy Policy should be directed to:
            {CONTACT_EMAIL && !CONTACT_EMAIL.includes('NEEDS') ? (
              <> <a href={`mailto:${CONTACT_EMAIL}`} className="text-securenext-accent underline">{CONTACT_EMAIL}</a></>
            ) : (
              <> [NEEDS CLIENT INPUT: privacy contact email]</>
            )}
          </p>

          <p className="text-sm text-gray-400 mt-8">
            {/* [NEEDS CLIENT INPUT: Have this reviewed by legal counsel before publication] */}
            This Privacy Policy is a placeholder. It should be reviewed and finalized by legal counsel before the website is published.
          </p>
        </div>
      </div>
    </section>
  )
}
