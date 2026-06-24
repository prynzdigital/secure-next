import * as React from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary' | 'success' | 'outline'
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold',
        variant === 'default' && 'bg-securenext-accent text-white',
        variant === 'secondary' && 'bg-securenext-navy text-white',
        variant === 'success' && 'bg-securenext-green text-white',
        variant === 'outline' && 'border border-securenext-navy text-securenext-navy',
        className
      )}
      {...props}
    />
  )
}
