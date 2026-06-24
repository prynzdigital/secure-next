import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface IndustryCardProps {
  slug: string
  title: string
  intro: string
  icon?: React.ReactNode
  className?: string
}

export function IndustryCard({ slug, title, intro, icon, className }: IndustryCardProps) {
  return (
    <Link
      href={`/industries/${slug}`}
      className={cn(
        'group flex flex-col bg-white rounded-xl p-6 shadow-sm border border-gray-100',
        'hover:shadow-md hover:border-securenext-navy/20 transition-all duration-300',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-securenext-accent focus-visible:ring-offset-2',
        className
      )}
    >
      {icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-securenext-navy/10 text-securenext-navy group-hover:bg-securenext-navy group-hover:text-white transition-all duration-300">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-securenext-navy mb-2 group-hover:text-securenext-accent transition-colors duration-200">
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed flex-1 line-clamp-3">{intro}</p>
      <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-securenext-navy group-hover:text-securenext-accent transition-colors">
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
      </div>
    </Link>
  )
}
