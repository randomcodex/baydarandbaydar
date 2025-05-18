import tailwindUtils from '../../../utils/tailwindUtils';

export default function SectionDivider({ title, color = 'gold-accent' }) {
  const { createColorClass } = tailwindUtils;
  const textColorClass = createColorClass('text', color);
  const bgColorClass = createColorClass('bg', color);
  
  return (
    <div className="w-full flex items-center justify-center my-8">
      <div className={`flex-grow h-0.5 ${bgColorClass}`}></div>
      <span className={`mx-4 text-lg sm:text-xl font-serif ${textColorClass}`}>{title}</span>
      <div className={`flex-grow h-0.5 ${bgColorClass}`}></div>
    </div>
  );
}
