export default function SectionDivider({ title, color = '#ffe19b' }) {
  return (
    <div className="w-full flex items-center justify-center my-8">
      <div className="flex-grow h-0.5" style={{ backgroundColor: color }}></div>
      <span className="mx-4 text-lg sm:text-xl font-serif" style={{ color }}>{title}</span>
      <div className="flex-grow h-0.5" style={{ backgroundColor: color }}></div>
    </div>
  );
}
