'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2.5 whitespace-nowrap font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-securenext-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: cn(
          'rounded-full text-white active:scale-[0.98]',
          'bg-gradient-to-r from-[#4ea3ff] via-securenext-accent to-[#1255cc]',
          'shadow-md shadow-securenext-accent/40 hover:shadow-lg hover:shadow-securenext-accent/50 hover:brightness-110',
          /* White circle around trailing icon */
          '[&_svg]:bg-white [&_svg]:rounded-full [&_svg]:text-securenext-accent [&_svg]:shrink-0 [&_svg]:p-1'
        ),
        secondary:
          'rounded-full border-2 border-securenext-accent text-securenext-accent bg-transparent hover:bg-securenext-accent hover:text-white active:scale-[0.98]',
        navy:
          'rounded-full bg-securenext-navy text-white hover:bg-securenext-navy-dark active:scale-[0.98] shadow-sm hover:shadow-md',
        'navy-outline':
          'rounded-full border-2 border-white text-white bg-transparent hover:bg-white hover:text-securenext-navy active:scale-[0.98]',
        ghost:
          'rounded-md text-securenext-navy hover:bg-securenext-gray active:scale-[0.98]',
        link: 'text-securenext-accent underline-offset-4 hover:underline p-0 h-auto',
        destructive:
          'rounded-full bg-red-600 text-white hover:bg-red-700 active:scale-[0.98]',
      },
      size: {
        sm: 'h-9 px-5 text-sm [&_svg]:h-4 [&_svg]:w-4',
        md: 'h-11 px-6 text-base [&_svg]:h-5 [&_svg]:w-5',
        lg: 'h-14 px-8 text-lg [&_svg]:h-5 [&_svg]:w-5',
        icon: 'h-10 w-10 rounded-full',
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
