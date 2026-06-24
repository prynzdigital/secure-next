'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Phone, Mail, MapPin, CheckCircle, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { CONTACT_PHONE, CONTACT_EMAIL, CONTACT_ADDRESS, BUSINESS_HOURS } from '@/lib/constants'

const assessmentSchema = z.object({
  name: z.string().min(2, 'Full name is required'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(1, 'Company or organization name is required'),
  phone: z.string().optional(),
  serviceInterest: z.string().optional(),
  message: z.string().min(20, 'Please provide at least 20 characters describing your needs'),
})

const consultationSchema = z.object({
  name: z.string().min(2, 'Full name is required'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(1, 'Company or organization name is required'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Please describe what you need'),
})

type AssessmentFormValues = z.infer<typeof assessmentSchema>
type ConsultationFormValues = z.infer<typeof consultationSchema>

function AssessmentForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AssessmentFormValues>({ resolver: zodResolver(assessmentSchema) })

  const onSubmit = async (data: AssessmentFormValues) => {
    setStatus('submitting')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, type: 'assessment' }),
      })
      const json = await res.json() as { success: boolean; message?: string }
      if (json.success) {
        setStatus('success')
        reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-securenext-green/15">
          <CheckCircle className="h-8 w-8 text-securenext-green" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-bold text-securenext-navy">Request Received</h3>
        <p className="text-gray-600 max-w-md">
          Thank you for requesting a security assessment. A member of our team will respond within one business day.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-sm text-securenext-accent underline hover:text-securenext-accent-dark transition-colors"
        >
          Submit another request
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      {status === 'error' && (
        <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700" role="alert">
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          <p>An error occurred. Please try again or contact us directly.</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="assess-name">Full Name <span aria-hidden="true" className="text-red-500">*</span></Label>
          <Input
            id="assess-name"
            type="text"
            autoComplete="name"
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'assess-name-error' : undefined}
            {...register('name')}
          />
          {errors.name && (
            <p id="assess-name-error" className="mt-1 text-sm text-red-600" role="alert">{errors.name.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="assess-company">Company / Organization <span aria-hidden="true" className="text-red-500">*</span></Label>
          <Input
            id="assess-company"
            type="text"
            autoComplete="organization"
            aria-required="true"
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? 'assess-company-error' : undefined}
            {...register('company')}
          />
          {errors.company && (
            <p id="assess-company-error" className="mt-1 text-sm text-red-600" role="alert">{errors.company.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="assess-email">Work Email <span aria-hidden="true" className="text-red-500">*</span></Label>
          <Input
            id="assess-email"
            type="email"
            autoComplete="email"
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'assess-email-error' : undefined}
            {...register('email')}
          />
          {errors.email && (
            <p id="assess-email-error" className="mt-1 text-sm text-red-600" role="alert">{errors.email.message}</p>
          )}
        </div>
        <div>
          {/* Phone is optional in Zod schema — aria-required="false" matches schema intent */}
          <Label htmlFor="assess-phone">Phone Number</Label>
          <Input
            id="assess-phone"
            type="tel"
            autoComplete="tel"
            aria-required="false"
            {...register('phone')}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="assess-service">Service Interest</Label>
        <select
          id="assess-service"
          className="flex h-11 w-full items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-securenext-navy focus:outline-none focus:ring-2 focus:ring-securenext-accent focus:ring-offset-2 focus:border-transparent"
          aria-required="false"
          aria-invalid={false}
          {...register('serviceInterest')}
        >
          <option value="">Select a service (optional)</option>
          <option value="cybersecurity-consulting">Cybersecurity Consulting</option>
          <option value="network-infrastructure-design">Network Infrastructure Design</option>
          <option value="network-security-assessments">Network Security Assessment</option>
          <option value="security-risk-compliance">Security Risk &amp; Compliance (HIPAA/NIST/CMMC)</option>
          <option value="firewall-vpn-solutions">Firewall &amp; VPN Solutions</option>
          <option value="cloud-security-solutions">Cloud Security Solutions</option>
          <option value="security-monitoring">Security Monitoring</option>
          <option value="incident-response">Incident Response</option>
          <option value="penetration-testing">Penetration Testing</option>
          <option value="cybersecurity-training">Cybersecurity Training</option>
          <option value="general">General Inquiry</option>
        </select>
      </div>

      <div>
        <Label htmlFor="assess-message">Message / Notes <span aria-hidden="true" className="text-red-500">*</span></Label>
        <Textarea
          id="assess-message"
          placeholder="Tell us about your organization, any specific concerns, or questions. (minimum 20 characters)"
          rows={4}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'assess-message-error' : undefined}
          {...register('message')}
        />
        {errors.message && (
          <p id="assess-message-error" className="mt-1 text-sm text-red-600" role="alert">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === 'submitting'}
        className="w-full sm:w-auto"
      >
        {status === 'submitting' ? 'Sending...' : 'Send Assessment Request'}
      </Button>

      <p className="text-xs text-gray-400">
        We will respond within one business day. No sales calls without your explicit permission.
      </p>
    </form>
  )
}

function ConsultationForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ConsultationFormValues>({ resolver: zodResolver(consultationSchema) })

  const onSubmit = async (data: ConsultationFormValues) => {
    setStatus('submitting')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, type: 'consultation' }),
      })
      const json = await res.json() as { success: boolean }
      if (json.success) {
        setStatus('success')
        reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
        <CheckCircle className="h-10 w-10 text-securenext-green" aria-hidden="true" />
        <h3 className="text-xl font-bold text-securenext-navy">Consultation Request Received</h3>
        <p className="text-gray-600">We will contact you within one business day to schedule your consultation.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      {status === 'error' && (
        <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700" role="alert">
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          <p>An error occurred. Please try again.</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="consult-name">Full Name <span aria-hidden="true" className="text-red-500">*</span></Label>
          <Input
            id="consult-name"
            type="text"
            autoComplete="name"
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'consult-name-error' : undefined}
            {...register('name')}
          />
          {errors.name && <p id="consult-name-error" className="mt-1 text-sm text-red-600" role="alert">{errors.name.message}</p>}
        </div>
        <div>
          <Label htmlFor="consult-email">Work Email <span aria-hidden="true" className="text-red-500">*</span></Label>
          <Input
            id="consult-email"
            type="email"
            autoComplete="email"
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'consult-email-error' : undefined}
            {...register('email')}
          />
          {errors.email && <p id="consult-email-error" className="mt-1 text-sm text-red-600" role="alert">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="consult-company">Company <span aria-hidden="true" className="text-red-500">*</span></Label>
          <Input
            id="consult-company"
            type="text"
            autoComplete="organization"
            aria-required="true"
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? 'consult-company-error' : undefined}
            {...register('company')}
          />
          {errors.company && <p id="consult-company-error" className="mt-1 text-sm text-red-600" role="alert">{errors.company.message}</p>}
        </div>
        <div>
          <Label htmlFor="consult-phone">Phone Number</Label>
          <Input id="consult-phone" type="tel" autoComplete="tel" aria-required="false" {...register('phone')} />
        </div>
      </div>

      <div>
        <Label htmlFor="consult-message">How can we help? <span aria-hidden="true" className="text-red-500">*</span></Label>
        <Textarea
          id="consult-message"
          placeholder="Describe your situation, what you are trying to accomplish, or what prompted you to reach out."
          rows={4}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'consult-message-error' : undefined}
          {...register('message')}
        />
        {errors.message && <p id="consult-message-error" className="mt-1 text-sm text-red-600" role="alert">{errors.message.message}</p>}
      </div>

      <Button type="submit" variant="primary" size="lg" disabled={status === 'submitting'} className="w-full sm:w-auto">
        {status === 'submitting' ? 'Sending...' : 'Schedule My Consultation'}
      </Button>
    </form>
  )
}

export function ContactPageClient() {
  const hasPhone = CONTACT_PHONE && !CONTACT_PHONE.includes('NEEDS')
  const hasEmail = CONTACT_EMAIL && !CONTACT_EMAIL.includes('NEEDS')
  const hasAddress = CONTACT_ADDRESS && !CONTACT_ADDRESS.includes('NEEDS')
  const hasHours = BUSINESS_HOURS && !BUSINESS_HOURS.includes('NEEDS')

  return (
    <>
      {/* Page header */}
      <section className="bg-securenext-navy py-16 lg:py-20" aria-labelledby="contact-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 id="contact-heading" className="text-4xl sm:text-5xl font-bold text-white">
            Get in Touch with SecureNext Networks
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl">
            Request a security assessment, schedule a consultation, or call us directly. We serve all of Chicagoland.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-16 bg-securenext-gray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Contact info sidebar */}
            <div className="flex flex-col gap-6">
              <div className="bg-securenext-navy rounded-xl p-6 text-white">
                <h2 className="font-bold text-lg mb-5">Contact Information</h2>
                <div className="flex flex-col gap-4">
                  {hasPhone ? (
                    <a href={`tel:${CONTACT_PHONE.replace(/\D/g, '')}`} className="flex items-start gap-3 text-sm text-white/80 hover:text-securenext-accent transition-colors">
                      <Phone className="h-4 w-4 text-securenext-accent shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{CONTACT_PHONE}</span>
                    </a>
                  ) : (
                    <div className="flex items-start gap-3 text-sm text-white/50">
                      <Phone className="h-4 w-4 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>[NEEDS CLIENT INPUT: phone number]</span>
                    </div>
                  )}
                  {hasEmail ? (
                    <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-start gap-3 text-sm text-white/80 hover:text-securenext-accent transition-colors">
                      <Mail className="h-4 w-4 text-securenext-accent shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{CONTACT_EMAIL}</span>
                    </a>
                  ) : (
                    <div className="flex items-start gap-3 text-sm text-white/50">
                      <Mail className="h-4 w-4 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>[NEEDS CLIENT INPUT: email address]</span>
                    </div>
                  )}
                  {hasAddress && (
                    <div className="flex items-start gap-3 text-sm text-white/70">
                      <MapPin className="h-4 w-4 text-securenext-accent shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{CONTACT_ADDRESS}</span>
                    </div>
                  )}
                  {!hasAddress && (
                    <div className="flex items-start gap-3 text-sm text-white/50">
                      <MapPin className="h-4 w-4 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>Chicago, Illinois</span>
                    </div>
                  )}
                  {hasHours && (
                    <div className="text-sm text-white/70 mt-2 pt-4 border-t border-white/10">
                      <p className="font-semibold text-white/90 mb-1">Business Hours</p>
                      <p>{BUSINESS_HOURS}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-red-100">
                <h2 className="font-bold text-securenext-navy mb-2">Experiencing an Incident?</h2>
                <p className="text-sm text-gray-600 mb-4">
                  If you are dealing with an active security breach, ransomware, or suspected compromise — do not fill out a form. Call us directly.
                </p>
                {hasPhone ? (
                  <a
                    href={`tel:${CONTACT_PHONE.replace(/\D/g, '')}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-red-600 text-white rounded-lg font-semibold text-sm hover:bg-red-700 transition-colors"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    Call {CONTACT_PHONE}
                  </a>
                ) : (
                  <p className="text-sm text-red-600 font-semibold">[NEEDS CLIENT INPUT: emergency phone number]</p>
                )}
              </div>

              {/* Service area */}
              <div className="bg-securenext-gray rounded-xl p-6 border border-securenext-silver/30">
                <h2 className="font-bold text-securenext-navy mb-2">Service Area</h2>
                <p className="text-sm text-gray-600">
                  Cook · DuPage · Lake · Will · Kane Counties and throughout Illinois.
                </p>
              </div>
            </div>

            {/* Forms */}
            <div className="lg:col-span-2 flex flex-col gap-12">
              {/* Assessment form */}
              <div id="assessment-form" className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-securenext-navy mb-2">Request a Free Security Assessment</h2>
                <p className="text-gray-600 mb-6 text-sm">
                  Start with an honest baseline. Tell us about your organization and we will schedule a scoped assessment at no charge.
                </p>
                <AssessmentForm />
              </div>

              {/* Consultation form */}
              <div id="consultation-form" className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-securenext-navy mb-2">Schedule a Consultation</h2>
                <p className="text-gray-600 mb-6 text-sm">
                  Already know what you need? Tell us what you are working on and we will schedule a focused conversation.
                </p>
                <ConsultationForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
