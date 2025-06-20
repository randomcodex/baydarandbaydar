import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

interface UseScrollAnimationOptions {
  threshold?: number
  triggerOnce?: boolean
  rootMargin?: string
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, triggerOnce = true, rootMargin = '0px' } = options
  const ref = useRef(null)
    const isInView = useInView(ref, {
    amount: threshold,
    once: triggerOnce,
    margin: rootMargin,
  })

  return { ref, isInView }
}

export const useStaggeredScrollAnimation = (
  delay: number = 0.1,
  options: UseScrollAnimationOptions = {}
) => {
  const { ref, isInView } = useScrollAnimation(options)
    return {
    ref,
    isInView,
    animate: isInView ? 'visible' : 'hidden',
    transition: {
      staggerChildren: delay,
      delayChildren: 0.2,
    },
  }
}

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
