import { useEffect, useState, useRef } from 'react';

export function useIntersectionObserver({
  threshold = 0.1,
  root = null,
  rootMargin = '0px',
} = {}) {
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        
        if (isVisible && !hasAnimated) {
          setIsInView(true);
          setHasAnimated(true);
        }
      },
      {
        threshold,
        root: root ? document.querySelector(root) : null,
        rootMargin,
      }
    );
    
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, root, rootMargin, hasAnimated]);
  
  return [ref, isInView];
}
