import { useLayoutEffect, useRef } from 'react'

/**
 * Hook to prevent layout thrashing by ensuring DOM is ready
 */
export const useStableLayout = () => {
  const isLayoutStableRef = useRef(false)

  useLayoutEffect(() => {
    isLayoutStableRef.current = true
    
    return () => {
      isLayoutStableRef.current = false
    }
  }, [])

  return isLayoutStableRef.current
}
