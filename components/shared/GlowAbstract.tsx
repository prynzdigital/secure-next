import React from 'react'
import { cn } from '@/lib/utils'

interface GlowAbstractProps {
  className?: string
  variant?: 'default' | 'dense' | 'subtle'
}

/**
 * Decorative glowing light-blue abstract background for navy sections.
 * Place inside a `relative overflow-hidden` container.
 */
export function GlowAbstract({ className, variant = 'default' }: GlowAbstractProps) {
  const opacity = variant === 'subtle' ? 0.08 : variant === 'dense' ? 0.20 : 0.13

  return (
    <div
      className={cn('absolute inset-0 overflow-hidden pointer-events-none select-none', className)}
      aria-hidden="true"
    >
      {/* Primary orb — top right */}
      <div
        className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle, rgba(56,182,255,${opacity}) 0%, rgba(29,123,255,${opacity * 0.6}) 50%, transparent 75%)` }}
      />

      {/* Secondary orb — bottom left */}
      <div
        className="absolute -bottom-32 -left-16 w-96 h-96 rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle, rgba(100,210,255,${opacity * 0.7}) 0%, rgba(29,123,255,${opacity * 0.4}) 50%, transparent 75%)` }}
      />

      {/* Accent orb — center-ish */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/2 w-64 h-64 rounded-full blur-2xl"
        style={{ background: `radial-gradient(circle, rgba(147,231,255,${opacity * 0.5}) 0%, transparent 70%)` }}
      />

      {/* Circuit trace lines — SVG */}
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ opacity: variant === 'subtle' ? 0.04 : 0.07 }}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Horizontal trace lines */}
        <line x1="0" y1="30%" x2="15%" y2="30%" stroke="#38b6ff" strokeWidth="1" />
        <circle cx="15%" cy="30%" r="3" fill="none" stroke="#38b6ff" strokeWidth="1" />
        <line x1="15%" y1="30%" x2="15%" y2="50%" stroke="#38b6ff" strokeWidth="1" />
        <line x1="15%" y1="50%" x2="25%" y2="50%" stroke="#38b6ff" strokeWidth="1" />
        <circle cx="25%" cy="50%" r="2" fill="#38b6ff" />

        {/* Right side trace */}
        <line x1="100%" y1="20%" x2="82%" y2="20%" stroke="#64d2ff" strokeWidth="1" />
        <circle cx="82%" cy="20%" r="3" fill="none" stroke="#64d2ff" strokeWidth="1" />
        <line x1="82%" y1="20%" x2="82%" y2="40%" stroke="#64d2ff" strokeWidth="1" />
        <line x1="82%" y1="40%" x2="70%" y2="40%" stroke="#64d2ff" strokeWidth="1" />
        <circle cx="70%" cy="40%" r="2" fill="#64d2ff" />

        {/* Bottom trace */}
        <line x1="40%" y1="100%" x2="40%" y2="80%" stroke="#38b6ff" strokeWidth="1" />
        <circle cx="40%" cy="80%" r="3" fill="none" stroke="#38b6ff" strokeWidth="1" />
        <line x1="40%" y1="80%" x2="55%" y2="80%" stroke="#38b6ff" strokeWidth="1" />
        <circle cx="55%" cy="80%" r="2" fill="#38b6ff" />

        {/* Scattered dots */}
        <circle cx="8%" cy="65%" r="1.5" fill="#38b6ff" opacity="0.6" />
        <circle cx="92%" cy="70%" r="1.5" fill="#64d2ff" opacity="0.6" />
        <circle cx="60%" cy="15%" r="1.5" fill="#38b6ff" opacity="0.5" />
        <circle cx="35%" cy="88%" r="1" fill="#64d2ff" opacity="0.5" />
      </svg>
    </div>
  )
}
