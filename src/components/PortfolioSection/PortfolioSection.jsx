import BrandCard from '../BrandCard';
import SectionDivider from '../SectionDivider';

export default function PortfolioSection({ title, items, sortItems = true, color }) {
  const displayItems = sortItems 
    ? [...items].sort((a, b) => a.name.localeCompare(b.name))
    : items;
    
  return (
    <>
      <SectionDivider title={title} color={color} />
      <div className="grid gap-12 sm:gap-16 grid-cols-1 lg:grid-cols-2" data-aos="fade-up">
        {displayItems.map((item) => (
          <BrandCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
