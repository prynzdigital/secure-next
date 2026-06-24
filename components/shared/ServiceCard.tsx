import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ServiceCardProps {
  slug: string
  title: string
  excerpt: string
  icon?: React.ReactNode
  className?: string
}

export function ServiceCard({ slug, title, excerpt, icon, className }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${slug}`}
      className={cn(
        'group flex flex-col bg-white rounded-xl p-6 shadow-sm border border-gray-100',
        'hover:shadow-md hover:border-securenext-accent/30 transition-all duration-300',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-securenext-accent focus-visible:ring-offset-2',
        className
      )}
    >
      {icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-securenext-accent/10 text-securenext-accent group-hover:bg-securenext-accent group-hover:text-white transition-all duration-300">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-securenext-navy mb-2 group-hover:text-securenext-accent transition-colors duration-200">
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed flex-1">{excerpt}</p>
      <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-securenext-accent">
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
      </div>
    </Link>
  )
}
