'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-securenext-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-securenext-accent text-white hover:bg-securenext-accent-dark active:scale-[0.98] shadow-sm hover:shadow-md',
        secondary:
          'border-2 border-securenext-accent text-securenext-accent bg-transparent hover:bg-securenext-accent hover:text-white active:scale-[0.98]',
        navy:
          'bg-securenext-navy text-white hover:bg-securenext-navy-dark active:scale-[0.98] shadow-sm hover:shadow-md',
        'navy-outline':
          'border-2 border-white text-white bg-transparent hover:bg-white hover:text-securenext-navy active:scale-[0.98]',
        ghost:
          'text-securenext-navy hover:bg-securenext-gray active:scale-[0.98]',
        link: 'text-securenext-accent underline-offset-4 hover:underline p-0 h-auto',
        destructive:
          'bg-red-600 text-white hover:bg-red-700 active:scale-[0.98]',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-base',
        lg: 'h-14 px-8 text-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
