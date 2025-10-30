'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion, useSpring, useTransform, type SpringOptions } from 'motion/react'
import { cn } from '@/lib/utils'

export type SpotlightProps = {
  className?: string
  size?: number
  springOptions?: SpringOptions
  trackWindow?: boolean
}

export function Spotlight({
  className,
  size = 200,
  springOptions = { bounce: 0 },
  trackWindow = false,
}: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isPointerActive, setIsPointerActive] = useState(false)

  const mouseX = useSpring(0, springOptions)
  const mouseY = useSpring(0, springOptions)

  const spotlightLeft = useTransform(mouseX, (x) => `${x - size / 2}px`)
  const spotlightTop = useTransform(mouseY, (y) => `${y - size / 2}px`)

  useEffect(() => {
    if (!trackWindow) return
    if (typeof window === 'undefined') return

    const initialX = window.innerWidth / 2
    const initialY = window.innerHeight / 2
    mouseX.set(initialX)
    mouseY.set(initialY)

    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX)
      mouseY.set(event.clientY)
      setIsPointerActive(true)
    }

    const handleMouseOut = (event: MouseEvent) => {
      if (event.relatedTarget === null) {
        setIsPointerActive(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseout', handleMouseOut)
    }
  }, [trackWindow, mouseX, mouseY])

  useEffect(() => {
    if (trackWindow) return
    if (typeof window === 'undefined') return

    const parent = containerRef.current?.parentElement
    if (!parent) return

    const rect = parent.getBoundingClientRect()
    mouseX.set(rect.width / 2)
    mouseY.set(rect.height / 2)

    const previousPosition = parent.style.position
    const previousOverflow = parent.style.overflow
    const computedPosition = window.getComputedStyle(parent).position
    const positionChanged =
      computedPosition === 'static' && previousPosition === ''
    const overflowChanged = previousOverflow === ''

    if (positionChanged) {
      parent.style.position = 'relative'
    }

    if (overflowChanged) {
      parent.style.overflow = 'hidden'
    }

    const handleMouseMove = (event: MouseEvent) => {
      const { left, top } = parent.getBoundingClientRect()
      mouseX.set(event.clientX - left)
      mouseY.set(event.clientY - top)
      setIsPointerActive(true)
    }

    const handleMouseEnter = () => setIsPointerActive(true)
    const handleMouseLeave = () => setIsPointerActive(false)

    parent.addEventListener('mousemove', handleMouseMove)
    parent.addEventListener('mouseenter', handleMouseEnter)
    parent.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      parent.removeEventListener('mousemove', handleMouseMove)
      parent.removeEventListener('mouseenter', handleMouseEnter)
      parent.removeEventListener('mouseleave', handleMouseLeave)

      if (positionChanged) {
        parent.style.position = previousPosition
      }

      if (overflowChanged) {
        parent.style.overflow = previousOverflow
      }
    }
  }, [trackWindow, mouseX, mouseY])

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        'pointer-events-none rounded-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops),transparent_80%)] blur-xl transition-opacity duration-200',
        trackWindow ? 'fixed' : 'absolute',
        'from-zinc-50 via-zinc-100 to-zinc-200',
        isPointerActive ? 'opacity-100' : 'opacity-0',
        className,
      )}
      style={{
        width: size,
        height: size,
        left: spotlightLeft,
        top: spotlightTop,
      }}
    />
  )
}
