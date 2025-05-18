export default function BrandCard({ item }) {
  const darkGreen = '#051905';
  
  return (
    <div 
      className="portfolio-box"
      onClick={() => window.open(item.website, '_blank', 'noopener noreferrer')}
      data-aos="fade-up"
    >
      <img 
        src={item.logo} 
        alt={`${item.name} logo`} 
        className="img"
        data-aos="zoom-in"
      />
      <div 
        className="flex-1 flex flex-col items-start text-left break-words"
        data-aos="fade-up"
      >
        <h2 
          className="text-lg sm:text-xl font-serif mb-2 max-w-full leading-tight break-words"
          style={{ color: darkGreen }}
        >
          {item.name}
        </h2>
        <p 
          className="text-sm sm:text-base leading-relaxed break-words"
          style={{ color: darkGreen }}
        >
          {item.description}
        </p>
      </div>
    </div>
  );
}
