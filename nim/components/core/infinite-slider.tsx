'use client'
import React from 'react'
import { cn } from '@/lib/utils'

type InfiniteSliderProps = {
  children: React.ReactNode
  className?: string
  duration?: number
  direction?: 'left' | 'right'
  gap?: string | number
  pauseOnHover?: boolean
  speedOnHover?: number
}

const DEFAULT_DURATION = 30

export function InfiniteSlider({
  children,
  className,
  duration = DEFAULT_DURATION,
  direction = 'left',
  gap,
  pauseOnHover = true,
  speedOnHover,
}: InfiniteSliderProps) {
  const items = React.Children.toArray(children)
  const [isHovered, setIsHovered] = React.useState(false)

  if (items.length === 0) {
    return null
  }

  const animationClass =
    direction === 'right'
      ? 'animate-infinite-slider-reverse'
      : 'animate-infinite-slider'

  const gapStyle =
    typeof gap === 'number'
      ? { columnGap: `${gap}px` }
      : gap
        ? { columnGap: gap }
        : undefined

  const baseDuration = Math.max(duration, 1)
  const hoverDuration =
    typeof speedOnHover === 'number' ? Math.max(speedOnHover, 1) : undefined
  const effectivePauseOnHover =
    typeof pauseOnHover === 'boolean'
      ? pauseOnHover
      : hoverDuration === undefined
  const appliedDuration =
    isHovered && hoverDuration ? hoverDuration : baseDuration
  const shouldTrackHover = effectivePauseOnHover || Boolean(hoverDuration)
  const shouldPause = effectivePauseOnHover && isHovered

  const handleMouseEnter = () => {
    if (shouldTrackHover) {
      setIsHovered(true)
    }
  }

  const handleMouseLeave = () => {
    if (shouldTrackHover) {
      setIsHovered(false)
    }
  }

  return (
    <div className={cn('relative flex overflow-hidden', className)}>
      <div
        className={cn(
          'flex w-max shrink-0 items-center',
          animationClass,
        )}
        style={{
          ...gapStyle,
          animationDuration: `${appliedDuration}s`,
          animationPlayState: shouldPause ? 'paused' : 'running',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {items.map((child, index) => (
          <div key={`slider-item-${index}`} className="flex-shrink-0">
            {child}
          </div>
        ))}
        {items.map((child, index) => (
          <div key={`slider-duplicate-${index}`} className="flex-shrink-0">
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}
