import { useLayoutEffect, useRef } from 'react'

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
