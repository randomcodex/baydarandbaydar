import { useEffect } from 'react'

export const useScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    if (typeof window === 'undefined') return

    if (isLocked) {
      // Get current scroll position
      const scrollY = window.scrollY

      // Apply styles to prevent scrolling
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'

      return () => {
        // Restore styles
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.width = ''
        document.body.style.overflow = ''

        // Restore scroll position
        window.scrollTo(0, scrollY)
      }
    }
  }, [isLocked])
}
