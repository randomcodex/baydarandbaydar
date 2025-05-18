import { brands, equipment } from './index.js';
import { animationConfig, portfolioContent } from './index';
import baccanalImage from '../../assets/images/portfolio/bgportfolio.webp';
import { useAOSInit } from '../../hooks/useAOSInit';
import { BackgroundContainer } from '../../components';
import { PortfolioSection } from '../../components';
import { portfolioStyles } from './styles.js';

export default function Portfolio() {
  const { colors, backgroundStyles } = portfolioStyles;
  const { sections } = portfolioContent;
  
  useAOSInit(animationConfig);

  return (
    <BackgroundContainer
      backgroundImage={baccanalImage}
      overlayColor={colors.overlay}
      styles={backgroundStyles}
    >
      <div className="container mx-auto px-2 sm:px-6 space-y-8 sm:space-y-12">
        <h1 className="text-3xl sm:text-4xl font-serif mb-6 sm:mb-10 text-center text-white">
        </h1>
        
        <PortfolioSection 
          title={sections.wineries} 
          items={brands} 
          borderColor={colors.gold}
          textColor={colors.white}
        />
        
        <PortfolioSection 
          title={sections.equipment} 
          items={equipment} 
          sortItems={false}
          borderColor={colors.gold}
          textColor={colors.white}
        />
        
        <div className="mt-16"></div>
      </div>
    </BackgroundContainer>
  );
}

