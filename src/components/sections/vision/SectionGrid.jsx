import VisionSection from './VisionSection';

export default function SectionGrid({ sections }) {
  return (
    <div className="space-y-8 mt-12">
      {sections.slice(0, 2).map((section, i) => (
        <VisionSection key={i} title={section.title} content={section.content} />
      ))}
      
      <div className="flex flex-col md:flex-row gap-6 animate-on-scroll">
        <VisionSection 
          title={sections[2].title} 
          content={sections[2].content} 
          className="flex-1" 
        />
        <VisionSection 
          title={sections[3].title} 
          content={sections[3].content} 
          className="flex-1" 
        />
      </div>
      
      <VisionSection 
        title={sections[4].title} 
        content={sections[4].content} 
      />
    </div>
  );
}
