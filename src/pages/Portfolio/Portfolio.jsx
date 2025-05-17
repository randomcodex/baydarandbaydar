import { brands, equipment } from './index.js';
import { animationConfig, portfolioContent } from './index';
import baccanalImage from '../../assets/images/portfolio/bgportfolio.webp';
import AOS from 'aos';
import { useEffect } from 'react';

const portfolioStyles = {
  colors: {
    gold: '#ffe19b',
    darkGreen: '#051905',
    overlay: 'rgba(0, 0, 0, 0.3)'
  },
  backgroundStyles: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundBlendMode: 'overlay'
  }
};

export default function Portfolio() {
  const { colors, backgroundStyles } = portfolioStyles;
  const { sections } = portfolioContent;
  
  useEffect(() => {
    AOS.init(animationConfig);
  }, []);

  return (
    <div
      className="min-h-screen w-full bg-gray-100 py-8 sm:py-12 px-2 sm:px-0"
      style={{
        backgroundImage: `url(${baccanalImage})`,
        backgroundColor: colors.overlay,
        ...backgroundStyles
      }}
    >
      <div className="container mx-auto px-2 sm:px-6 space-y-8 sm:space-y-12" style={{ color: colors.gold }}>
        <h1 className="text-3xl sm:text-4xl font-serif mb-6 sm:mb-10 text-center text-white">
        </h1>
        <SectionDivider title={sections.wineries} />
        <div className="grid gap-12 sm:gap-16 grid-cols-1 lg:grid-cols-2 brand-section" data-aos="fade-up">
          {brands.sort((a, b) => a.name.localeCompare(b.name)).map((brand) => (
            <BrandCard key={brand.id} item={brand} />
          ))}
        </div>
        <SectionDivider title={sections.equipment} />
        <div className="grid gap-12 sm:gap-16 grid-cols-1 lg:grid-cols-2 equipment-section" data-aos="fade-up">
          {equipment.map((item) => (
            <BrandCard key={item.id} item={item} />
          ))}
        </div>
        <div className="mt-16"></div>
      </div>
    </div>
  );
}

function SectionDivider({ title }) {
  const { gold } = portfolioStyles.colors;
  
  return (
    <div className="w-full flex items-center justify-center my-8">
      <div className="flex-grow h-0.5" style={{ backgroundColor: gold }}></div>
      <span className="mx-4 text-lg sm:text-xl font-serif" style={{ color: gold }}>{title}</span>
      <div className="flex-grow h-0.5" style={{ backgroundColor: gold }}></div>
    </div>
  );
}

function BrandCard({ item }) {
  const { darkGreen } = portfolioStyles.colors;
  
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

