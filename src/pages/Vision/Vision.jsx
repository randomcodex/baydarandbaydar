import { useEffect, useRef } from "react";
import { visionData } from "./index";

const Vision = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".animate-on-scroll");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const Section = ({ title, content, className = "" }) => (
    <div className={`animate-on-scroll ${className}`}>
      <h3 className="text-2xl font-semibold mb-3 relative text-[#051905]">
        <span className="relative">
          {title}
          <span className="gradient-span"></span>
        </span>
      </h3>
      <p 
        className="mb-0 text-[rgba(5,25,5,0.85)]"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );

  return (
    <div
      className="min-h-screen w-full relative bg-cover bg-center"
      style={{
        backgroundColor: visionData.background.baseColor,
        backgroundImage: `url(${visionData.background.image})`,
        opacity: visionData.background.opacity,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(5,21,5,0.7)]"></div>
      <div className="container relative z-10 mx-auto py-20 px-4 sm:px-6 max-w-4xl overflow-hidden">
        <div
          ref={contentRef}
          className="rounded-2xl shadow-2xl p-6 sm:p-12 space-y-10 border border-white/20 bg-white/75"
        >
          <section className="max-w-4xl mx-auto px-6 sm:px-10 py-8 font-serif text-[#0a2e0a] animate-on-scroll">
            <h2 className="text-4xl sm:text-5xl font-bold mb-10 tracking-tight text-[#051905]">
              <span className="relative">
                {visionData.mission.title}
                <span className="gradient-span"></span>
              </span>
            </h2>
            <p 
              className="mb-8 text-lg leading-relaxed text-[rgba(5,25,5,0.85)] animate-on-scroll"
              dangerouslySetInnerHTML={{ __html: visionData.mission.statement }}
            />
            <div className="space-y-8 mt-12">
              {visionData.sections.slice(0, 2).map((section, i) => (
                <Section key={i} title={section.title} content={section.content} />
              ))}
              <div className="flex flex-col md:flex-row gap-6 animate-on-scroll">
                <Section 
                  title={visionData.sections[2].title} 
                  content={visionData.sections[2].content} 
                  className="flex-1" 
                />
                <Section 
                  title={visionData.sections[3].title} 
                  content={visionData.sections[3].content} 
                  className="flex-1" 
                />
              </div>
              <Section 
                title={visionData.sections[4].title} 
                content={visionData.sections[4].content} 
              />
            </div>
            <div className="text-right mt-16 animate-on-scroll">
              <div className="inline-block relative">
                <p className="text-2xl font-semibold relative text-[#051905]">
                  - {visionData.signature.name} -
                </p>
                <p className="text-lg italic text-[rgba(5,25,5,0.65)]">
                  {visionData.signature.title}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Vision;