import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

/**
 * TODO: Replace this stub with a real email/CRM integration.
 * Required env vars (list only — no values in source):
 *   - CONTACT_FORM_EMAIL_TO  (recipient address)
 *   - SENDGRID_API_KEY       (or equivalent mail service key)
 *   - RECAPTCHA_SECRET_KEY   (Google reCAPTCHA v3 secret for spam protection)
 *
 * This mock returns 200 with a success payload so the UI flow works in dev.
 */

const contactSchema = z.object({
  type: z.enum(['assessment', 'consultation']).optional(),
  name: z.string().min(2).max(200),
  email: z.string().email().max(254),
  company: z.string().min(1).max(200),
  phone: z.string().max(30).optional(),
  serviceInterest: z.string().max(100).optional(),
  message: z.string().min(10).max(5000),
  industry: z.string().max(100).optional(),
})

export async function POST(request: NextRequest) {
  try {
    const raw = await request.json() as unknown

    const parsed = contactSchema.safeParse(raw)
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: 'Invalid form data', details: parsed.error.flatten() },
        { status: 400 }
      )
    }

    const { name, email, company, phone, serviceInterest, message, type, industry } = parsed.data

    // TODO: Send email via SENDGRID_API_KEY or equivalent
    // TODO: Write lead to CRM via CRM_API_KEY
    // TODO: Validate reCAPTCHA token against RECAPTCHA_SECRET_KEY
    // Submission received — connect to CRM [NEEDS CLIENT INPUT: OQ-2]
    if (process.env.NODE_ENV === 'development') {
      console.log('[Contact API] Form submission received:', {
        type,
        name,
        email,
        company,
        phone,
        serviceInterest,
        industry,
        messageLength: message.length,
      })
    }

    return NextResponse.json(
      {
        success: true,
        message:
          'Thank you for contacting SecureNext Networks. A member of our team will respond within one business day.',
      },
      { status: 200 }
    )
  } catch (err) {
    if (process.env.NODE_ENV === 'development') {
      console.error('[Contact API] Error processing submission:', err)
    }
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
}
