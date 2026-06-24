import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface PlaceholderImageProps {
  src?: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  fill?: boolean
  sizes?: string
}

/**
 * PlaceholderImage wraps next/image.
 * When src is missing or a placeholder path, renders a styled placeholder div.
 * All actual images must use next/image per project requirements.
 */
export function PlaceholderImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  fill = false,
  sizes,
}: PlaceholderImageProps) {
  const isPlaceholder =
    !src ||
    src.includes('placeholder') ||
    src.includes('blog-default') ||
    src.includes('industry-') ||
    src.includes('team-') ||
    src.includes('hero-')

  if (isPlaceholder) {
    return (
      <div
        className={cn(
          'bg-gradient-to-br from-securenext-navy to-securenext-accent flex items-center justify-center',
          fill ? 'absolute inset-0' : '',
          className
        )}
        style={!fill ? { width, height } : undefined}
        role="img"
        aria-label={alt}
      >
        <div className="text-center p-4">
          <div className="w-12 h-12 mx-auto mb-2 opacity-40">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
          </div>
          <p className="text-white/60 text-xs">{alt}</p>
        </div>
      </div>
    )
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        priority={priority}
        sizes={sizes ?? '100vw'}
      />
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      sizes={sizes}
    />
  )
}
