import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface IndustryCardProps {
  slug: string
  title: string
  intro: string
  icon?: React.ReactNode
  light?: boolean
  className?: string
}

export function IndustryCard({ slug, title, intro, icon, light = false, className }: IndustryCardProps) {
  return (
    <Link
      href={`/industries/${slug}`}
      className={cn(
        'group flex flex-col p-6 transition-all duration-300',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-securenext-accent focus-visible:ring-offset-2',
        light
          ? 'bg-white rounded-xl border border-gray-100 shadow-sm hover:border-securenext-accent/30 hover:shadow-md focus-visible:ring-offset-white'
          : 'glass-card hover:shadow-lg hover:shadow-securenext-accent/10 hover:border-securenext-accent/40 focus-visible:ring-offset-transparent',
        className
      )}
    >
      {icon && (
        <div className={cn(
          'mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-all duration-300',
          light
            ? 'bg-securenext-accent/10 text-securenext-accent group-hover:bg-securenext-accent group-hover:text-white'
            : 'bg-white/10 text-white group-hover:bg-securenext-accent group-hover:text-white'
        )}>
          {icon}
        </div>
      )}
      <h3 className={cn(
        'text-lg font-semibold mb-2 transition-colors duration-200 group-hover:text-securenext-accent',
        light ? 'text-securenext-navy' : 'text-white'
      )}>
        {title}
      </h3>
      <p className={cn(
        'text-sm leading-relaxed flex-1 line-clamp-3',
        light ? 'text-gray-600' : 'text-white/70'
      )}>{intro}</p>
      <div className={cn(
        'mt-4 flex items-center gap-1 text-sm font-semibold transition-colors group-hover:text-securenext-accent',
        light ? 'text-securenext-navy/70' : 'text-white/80'
      )}>
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
      </div>
    </Link>
  )
}
