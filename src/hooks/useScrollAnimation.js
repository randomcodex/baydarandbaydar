import { useEffect } from 'react';

export function useScrollAnimation(options = {}) {
  const { 
    selector = '.animate-on-scroll', 
    threshold = 0.1,
    className = 'animate-fade-in'
  } = options;
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(className);
          }
        });
      },
      { threshold }
    );

    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => observer.observe(element));

    return () => elements.forEach((element) => observer.unobserve(element));
  }, [selector, threshold, className]);
}
