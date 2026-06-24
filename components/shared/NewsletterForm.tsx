'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, CheckCircle, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
})

type NewsletterFormValues = z.infer<typeof newsletterSchema>

export function NewsletterForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormValues>({ resolver: zodResolver(newsletterSchema) })

  const onSubmit = async (data: NewsletterFormValues) => {
    setStatus('submitting')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
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
      <div className="flex items-center gap-3 py-3">
        <CheckCircle className="h-5 w-5 text-securenext-green shrink-0" aria-hidden="true" />
        <p className="text-sm text-white/80">Thank you! You&apos;re subscribed.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {status === 'error' && (
        <div className="flex items-center gap-2 mb-3 text-sm text-red-400" role="alert">
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          <p>Something went wrong. Please try again.</p>
        </div>
      )}
      <div className="flex flex-col gap-2">
        <Label htmlFor="newsletter-email" className="sr-only">
          Email address
        </Label>
        <div className="flex gap-2">
          <div className="flex-1">
            <Input
              id="newsletter-email"
              type="email"
              autoComplete="email"
              placeholder="your@email.com"
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'newsletter-email-error' : undefined}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:ring-securenext-accent focus:border-transparent"
              {...register('email')}
            />
          </div>
          <Button
            type="submit"
            variant="primary"
            size="sm"
            disabled={status === 'submitting'}
            className="shrink-0"
          >
            <Mail className="h-4 w-4 mr-1" aria-hidden="true" />
            {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
          </Button>
        </div>
        {errors.email && (
          <p id="newsletter-email-error" className="text-xs text-red-400" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>
    </form>
  )
}
