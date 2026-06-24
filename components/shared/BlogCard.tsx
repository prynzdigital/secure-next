import React from 'react'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface BlogCardProps {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  datePublished: string
  className?: string
}

export function BlogCard({
  slug,
  title,
  excerpt,
  category,
  readTime,
  datePublished,
  className,
}: BlogCardProps) {
  const formattedDate = new Date(datePublished).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article
      className={cn(
        'group flex flex-col glass-card overflow-hidden transition-all duration-300',
        'hover:shadow-lg hover:shadow-securenext-accent/10 hover:border-securenext-accent/40',
        className
      )}
    >
      {/* Category header bar */}
      <div className="h-1.5 bg-securenext-accent" aria-hidden="true" />

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-4">
          <Badge variant="default">{category}</Badge>
          <span className="flex items-center gap-1 text-xs text-white/50">
            <Clock className="h-3 w-3" aria-hidden="true" />
            {readTime}
          </span>
        </div>

        <Link
          href={`/blog/${slug}`}
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-securenext-accent focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-sm"
        >
          <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-securenext-accent transition-colors duration-200 leading-snug">
            {title}
          </h3>
        </Link>

        <p className="text-sm text-white/70 leading-relaxed flex-1">{excerpt}</p>

        <div className="mt-5 flex items-center justify-between">
          <time className="text-xs text-white/50" dateTime={datePublished}>
            {formattedDate}
          </time>
          <Link
            href={`/blog/${slug}`}
            className="flex items-center gap-1 text-sm font-semibold text-securenext-accent hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-securenext-accent focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-sm"
          >
            Read more
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  )
}
