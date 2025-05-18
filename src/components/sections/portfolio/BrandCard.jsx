import InViewWrapper from '../../ui/InViewWrapper';
import tailwindUtils from '../../../utils/tailwindUtils';
import { portfolioStyles } from '../../../pages/Portfolio/styles';

export default function BrandCard({ item, borderColor, textColor }) {
  const { colors } = portfolioStyles;
  
  const { createColorClass } = tailwindUtils;
  const textClass = createColorClass('text', textColor);
  
  return (
    <InViewWrapper>
      <div 
        className={`w-full min-h-[200px] my-4 p-4 sm:p-6 border-4 border-gold rounded-none 
                   shadow-gold bg-white/90 flex flex-col sm:flex-row justify-start gap-3 sm:gap-5 
                   cursor-pointer transition-transform duration-300 hover:scale-103`}
        style={{ borderColor: colors.gold }}
        onClick={() => window.open(item.website, '_blank', 'noopener noreferrer')}
      >
        <div className="w-full sm:w-[150px] h-[100px] sm:h-[120px] flex-shrink-0 self-center sm:self-start mx-auto sm:mx-0">
          <img 
            src={item.logo} 
            alt={`${item.name} logo`} 
            className="object-contain block m-0 w-full h-full"
          />
        </div>
        
        <div className="flex-1 flex flex-col justify-between h-full">
          <div>
            <h2 
              className={`text-base sm:text-lg md:text-xl font-serif mb-1 sm:mb-2 truncate w-full ${textClass}`} 
              title={item.name}
            >
              {item.name}
            </h2>
            <p className={`text-xs sm:text-sm md:text-lg leading-tight sm:leading-relaxed overflow-hidden ${textClass}`} style={{ 
              display: '-webkit-box',
              WebkitLineClamp: '3',
              WebkitBoxOrient: 'vertical'
            }}>
              {item.description}
            </p>
          </div>
          
          <div className="mt-auto pt-2">
          </div>
        </div>
      </div>
    </InViewWrapper>
  );
}
