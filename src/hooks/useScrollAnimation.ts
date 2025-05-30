import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

interface UseScrollAnimationOptions {
  threshold?: number
  triggerOnce?: boolean
  rootMargin?: string
}

/**
 * Custom hook for scroll-triggered animations
 * Uses Framer Motion's useInView hook to detect when elements come into viewport
 */
export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, triggerOnce = true, rootMargin = '0px' } = options
  const ref = useRef(null)
  
  const isInView = useInView(ref, {
    threshold,
    once: triggerOnce,
    margin: rootMargin,
  })

  return { ref, isInView }
}

/**
 * Hook for staggered scroll animations (useful for lists)
 */
export const useStaggeredScrollAnimation = (
  delay: number = 0.1,
  options: UseScrollAnimationOptions = {}
) => {
  const { ref, isInView } = useScrollAnimation(options)
  
  return {
    ref,
    isInView,
    // Return animation controls for staggered children
    animate: isInView ? 'visible' : 'hidden',
    transition: {
      staggerChildren: delay,
      delayChildren: 0.2,
    },
  }
}

/**
 * Hook for animating elements on page load/refresh
 */
export const usePageLoadAnimation = (delay: number = 0) => {
  const ref = useRef(null)
  const hasAnimated = useRef(false)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      hasAnimated.current = true
    }, delay)
    
    return () => clearTimeout(timer)
  }, [delay])
  
  return {
    ref,
    animate: hasAnimated.current ? 'animate' : 'initial',
  }
}
