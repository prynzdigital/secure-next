import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL, CONTACT_EMAIL } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Terms of Service | ${SITE_NAME}`,
  description: `Terms of Service for ${SITE_NAME}.`,
  robots: { index: false, follow: true },
}

export default function TermsOfServicePage() {
  return (
    <section className="py-16 bg-white" aria-labelledby="terms-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 id="terms-heading" className="text-4xl font-bold text-securenext-navy mb-8">
          Terms of Service
        </h1>
        <div className="prose-light">
          <p className="text-gray-600 mb-6">
            <strong>Last Updated:</strong> June 24, 2026
          </p>

          <h2>Use of This Website</h2>
          <p>
            By accessing the SecureNext Networks & Cyber Defense Solutions LLC website at {SITE_URL}, you agree to these Terms of Service. If you do not agree, do not use this website.
          </p>

          <h2>Website Content</h2>
          <p>
            Content on this website is provided for informational purposes only and does not constitute legal, compliance, or security advice specific to your organization. Engaging with website content does not establish a client relationship.
          </p>

          <h2>Contact Form Submissions</h2>
          <p>
            Information submitted through contact forms on this website is used solely to respond to your inquiry. Submission of a contact form does not create a client relationship or obligate SecureNext to provide services.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content on this website — including text, graphics, logos, and images — is the property of SecureNext Networks & Cyber Defense Solutions LLC or its content suppliers and is protected by applicable copyright law. You may not reproduce, distribute, or create derivative works from website content without prior written permission.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            SecureNext Networks & Cyber Defense Solutions LLC is not liable for any damages arising from use of this website or reliance on its content. The website is provided &quot;as is&quot; without warranties of any kind.
          </p>

          <h2>External Links</h2>
          <p>
            This website may contain links to third-party websites. SecureNext is not responsible for the content or practices of linked websites.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms of Service are governed by the laws of the State of Illinois. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Cook County, Illinois.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We may update these Terms of Service at any time. Continued use of the website following any changes constitutes acceptance of the updated terms.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these Terms of Service should be directed to:
            {CONTACT_EMAIL && !CONTACT_EMAIL.includes('NEEDS') ? (
              <> <a href={`mailto:${CONTACT_EMAIL}`} className="text-securenext-accent underline">{CONTACT_EMAIL}</a></>
            ) : (
              <> [NEEDS CLIENT INPUT: contact email]</>
            )}
          </p>

          <p className="text-sm text-gray-400 mt-8">
            {/* [NEEDS CLIENT INPUT: Have these Terms reviewed by legal counsel before publication] */}
            These Terms of Service are a placeholder and should be reviewed and finalized by legal counsel before the website is published.
          </p>
        </div>
      </div>
    </section>
  )
}
