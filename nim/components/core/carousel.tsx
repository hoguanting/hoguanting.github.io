'use client'
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type CarouselContextValue = {
  registerContent: (node: HTMLDivElement | null) => void
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
}

const CarouselContext = createContext<CarouselContextValue | null>(null)

const useCarouselContext = () => {
  const context = useContext(CarouselContext)
  if (!context) {
    throw new Error('Carousel components must be used within a <Carousel>')
  }
  return context
}

type CarouselProps = React.HTMLAttributes<HTMLDivElement>

export function Carousel({ className, children, ...props }: CarouselProps) {
  const contentRef = useRef<HTMLDivElement | null>(null)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const updateScrollState = useCallback(() => {
    const node = contentRef.current
    if (!node) return
    const { scrollLeft, scrollWidth, clientWidth } = node
    setCanScrollPrev(scrollLeft > 0)
    setCanScrollNext(scrollLeft < scrollWidth - clientWidth - 1)
  }, [])

  const registerContent = useCallback(
    (node: HTMLDivElement | null) => {
      contentRef.current = node
      updateScrollState()
    },
    [updateScrollState],
  )

  const scrollBy = useCallback(
    (direction: 1 | -1) => {
      const node = contentRef.current
      if (!node) return
      const offset = node.clientWidth * 0.9
      node.scrollBy({
        left: direction * offset,
        behavior: 'smooth',
      })
    },
    [],
  )

  const scrollPrev = useCallback(() => scrollBy(-1), [scrollBy])
  const scrollNext = useCallback(() => scrollBy(1), [scrollBy])

  useEffect(() => {
    const node = contentRef.current
    if (!node) return
    updateScrollState()
    const handleScroll = () => updateScrollState()
    node.addEventListener('scroll', handleScroll)
    const resizeObserver = new ResizeObserver(() => updateScrollState())
    resizeObserver.observe(node)
    return () => {
      node.removeEventListener('scroll', handleScroll)
      resizeObserver.disconnect()
    }
  }, [updateScrollState])

  const value = useMemo(
    () => ({
      registerContent,
      scrollPrev,
      scrollNext,
      canScrollPrev,
      canScrollNext,
    }),
    [registerContent, scrollPrev, scrollNext, canScrollPrev, canScrollNext],
  )

  return (
    <CarouselContext.Provider value={value}>
      <div className={cn('relative', className)} {...props}>
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

type CarouselContentProps = React.HTMLAttributes<HTMLDivElement>

export function CarouselContent({
  className,
  children,
  ...props
}: CarouselContentProps) {
  const { registerContent } = useCarouselContext()
  return (
    <div
      ref={registerContent}
      className={cn(
        'flex w-full snap-x snap-mandatory items-stretch overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

type CarouselItemProps = React.HTMLAttributes<HTMLDivElement>

export function CarouselItem({
  className,
  children,
  ...props
}: CarouselItemProps) {
  return (
    <div
      className={cn(
        'flex-none snap-center snap-always',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

type CarouselNavigationProps = {
  className?: string
  classNameButton?: string
  alwaysShow?: boolean
}

export function CarouselNavigation({
  className,
  classNameButton,
  alwaysShow = false,
}: CarouselNavigationProps) {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } =
    useCarouselContext()

  if (!alwaysShow && !canScrollPrev && !canScrollNext) {
    return null
  }

  return (
    <div className={cn('mt-6 flex items-center gap-2', className)}>
      <button
        type="button"
        aria-label="Previous slide"
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        className={cn(
          'inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-900 transition-colors hover:bg-zinc-50 disabled:opacity-40 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800',
          !canScrollPrev && 'pointer-events-none',
          classNameButton,
        )}
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={scrollNext}
        disabled={!canScrollNext}
        className={cn(
          'inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-900 transition-colors hover:bg-zinc-50 disabled:opacity-40 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800',
          !canScrollNext && 'pointer-events-none',
          classNameButton,
        )}
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  )
}
