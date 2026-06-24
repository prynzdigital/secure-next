import React from 'react'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-white/70">
      <Link
        href="/"
        className="flex items-center gap-1 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-securenext-navy rounded-sm"
        aria-label="Home"
      >
        <Home className="h-3.5 w-3.5" aria-hidden="true" />
      </Link>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="h-3.5 w-3.5 text-white/40 shrink-0" aria-hidden="true" />
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-securenext-navy rounded-sm"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-white/90 font-medium" aria-current="page">
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  )
}
