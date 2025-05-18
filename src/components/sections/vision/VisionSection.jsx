import GradientUnderline from '../../ui/GradientUnderline';
import { useEffect, useRef } from 'react';

export default function VisionSection({ title, content, className = "" }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-scroll-fade-in");
            entry.target.style.opacity = 1;
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <div 
      ref={sectionRef} 
      className={`opacity-0 transition-opacity duration-700 ${className}`}
    >
      <h3 className="text-2xl font-semibold mb-3 relative text-[#051905]">
        <span className="relative">
          {title}
          <GradientUnderline />
        </span>
      </h3>
      <p 
        className="mb-0 text-[rgba(5,25,5,0.85)]"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
