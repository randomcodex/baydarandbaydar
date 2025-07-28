import { useEffect, useCallback, useMemo, useRef } from 'react'

export interface UseBackgroundImageOptions {
  backgroundImage?: string
  containerId: string
  backgroundSize?: string
  backgroundPosition?: string
  backgroundRepeat?: string
  backgroundAttachment?: 'fixed' | 'scroll' | 'parallax'
  parallaxSpeed?: number
}

export const useBackgroundImage = ({
  backgroundImage,
  containerId,
  backgroundSize = 'cover',
  backgroundPosition = 'center',
  backgroundRepeat = 'no-repeat',
  backgroundAttachment = 'parallax',
  parallaxSpeed = 0.5
}: UseBackgroundImageOptions) => {
  const isBackgroundLoadedRef = useRef(false)
  const elementRef = useRef<HTMLElement | null>(null)

  const memoizedContainerId = useMemo(() => containerId, [containerId])

  const handleScroll = useCallback(() => {
    if (!elementRef.current || backgroundAttachment !== 'parallax') return

    const rect = elementRef.current.getBoundingClientRect()
    const scrolled = window.pageYOffset
    const elementTop = elementRef.current.offsetTop
    const rate = (scrolled - elementTop) * parallaxSpeed

    if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
      elementRef.current.style.backgroundPosition = `center ${rate}px`
    }
  }, [backgroundAttachment, parallaxSpeed])

  const setupBackground = useCallback(async () => {
    if (!backgroundImage || isBackgroundLoadedRef.current) return

    try {
      const element = document.getElementById(memoizedContainerId)
      if (element) {
        elementRef.current = element
        
        element.style.backgroundImage = `url(${backgroundImage})`
        element.style.backgroundSize = backgroundSize
        element.style.backgroundPosition = backgroundPosition
        element.style.backgroundRepeat = backgroundRepeat
        
        if (backgroundAttachment === 'parallax') {
          element.style.backgroundAttachment = 'scroll'
          window.addEventListener('scroll', handleScroll, { passive: true })
          handleScroll()
        } else {
          element.style.backgroundAttachment = backgroundAttachment
        }
        
        isBackgroundLoadedRef.current = true
      }
    } catch (error) {
      console.error('Failed to load background image:', error)
    }
  }, [backgroundImage, memoizedContainerId, backgroundSize, backgroundPosition, backgroundRepeat, backgroundAttachment, handleScroll])

  useEffect(() => {
    setupBackground()

    return () => {
      isBackgroundLoadedRef.current = false
      if (backgroundAttachment === 'parallax') {
        window.removeEventListener('scroll', handleScroll)
      }
      if (elementRef.current) {
        elementRef.current.style.backgroundPosition = backgroundPosition
      }
    }
  }, [setupBackground, backgroundAttachment, handleScroll])

  const resetBackground = useCallback(() => {
    isBackgroundLoadedRef.current = false
    if (backgroundAttachment === 'parallax') {
      window.removeEventListener('scroll', handleScroll)
    }
    if (elementRef.current) {
      elementRef.current.style.backgroundPosition = backgroundPosition
    }
  }, [backgroundAttachment, handleScroll])

  return { resetBackground }
}
