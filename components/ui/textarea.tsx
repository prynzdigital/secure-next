import * as React from 'react'
import { cn } from '@/lib/utils'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[120px] w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-base text-securenext-navy placeholder:text-securenext-navy/50',
          'focus:outline-none focus:ring-2 focus:ring-securenext-accent focus:ring-offset-2 focus:border-transparent',
          'disabled:cursor-not-allowed disabled:opacity-50',
          'transition-shadow duration-200 resize-y',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = 'Textarea'

export { Textarea }
