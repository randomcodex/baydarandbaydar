/**
 * Performance monitoring utilities for Netlify deployment
 */

// Web Vitals tracking using native Performance API
export const trackWebVitals = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    // Basic performance tracking without external dependencies
    console.log('Performance monitoring initialized')

    // Track navigation timing
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver(list => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'navigation') {
              console.log(`Page load time: ${entry.duration}ms`)
            }
          }
        })
        observer.observe({ entryTypes: ['navigation'] })
      } catch (error) {
        console.log('Performance observer not supported')
      }
    }

    // Track largest contentful paint
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver(list => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          console.log(`LCP: ${lastEntry.startTime}ms`)
        })
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
      } catch (error) {
        console.log('LCP tracking not supported')
      }
    }
  }
}

// Resource timing
export const logResourceTiming = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const resources = performance.getEntriesByType('resource')
    resources.forEach(resource => {
      if (resource.duration > 1000) {
        // Log slow resources (>1s)
        console.log(`Slow resource: ${resource.name} took ${resource.duration}ms`)
      }
    })
  }
}

// Memory usage (if available)
export const logMemoryUsage = () => {
  if (typeof window !== 'undefined' && 'performance' in window && 'memory' in performance) {
    const memory = (performance as any).memory
    console.log('Memory usage:', {
      used: `${Math.round(memory.usedJSHeapSize / 1048576)} MB`,
      total: `${Math.round(memory.totalJSHeapSize / 1048576)} MB`,
      limit: `${Math.round(memory.jsHeapSizeLimit / 1048576)} MB`,
    })
  }
}

// Initialize performance monitoring
export const initPerformanceMonitoring = () => {
  if (typeof window === 'undefined') return
  
  if (import.meta.env.PROD) {
    trackWebVitals()

    // Log performance metrics after page load
    window.addEventListener('load', () => {
      setTimeout(() => {
        logResourceTiming()
        logMemoryUsage()
      }, 2000)
    })
  }
}
