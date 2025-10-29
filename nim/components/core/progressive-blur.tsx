'use client'
import React from 'react'
import { cn } from '@/lib/utils'

type ProgressiveBlurDirection = 'left' | 'right'

type ProgressiveBlurProps = {
  className?: string
  blurIntensity?: number
  direction?: ProgressiveBlurDirection
}

const DEFAULT_BLUR_INTENSITY = 1

export function ProgressiveBlur({
  className,
  blurIntensity = DEFAULT_BLUR_INTENSITY,
  direction = 'left',
}: ProgressiveBlurProps) {
  const blurValue = Math.max(0, blurIntensity) * 12

  const gradientClass =
    direction === 'left'
      ? [
          '[background-image:linear-gradient(to_right,rgba(255,255,255,0.85),rgba(255,255,255,0.55),rgba(255,255,255,0))]',
          'dark:[background-image:linear-gradient(to_right,rgba(9,9,11,0.85),rgba(9,9,11,0.55),rgba(9,9,11,0))]',
          '[mask-image:linear-gradient(to_right,rgba(0,0,0,1),rgba(0,0,0,0))]',
        ]
      : [
          '[background-image:linear-gradient(to_left,rgba(255,255,255,0.85),rgba(255,255,255,0.55),rgba(255,255,255,0))]',
          'dark:[background-image:linear-gradient(to_left,rgba(9,9,11,0.85),rgba(9,9,11,0.55),rgba(9,9,11,0))]',
          '[mask-image:linear-gradient(to_left,rgba(0,0,0,1),rgba(0,0,0,0))]',
        ]

  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none select-none',
        gradientClass,
        className,
      )}
      style={{
        backdropFilter: `blur(${blurValue}px)`,
        WebkitBackdropFilter: `blur(${blurValue}px)`,
      }}
    />
  )
}
