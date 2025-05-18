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
        className={`w-full min-h-[200px] my-4 p-6 border-4 border-gold rounded-none 
                   shadow-gold bg-white/90 flex flex-row justify-start gap-5 
                   cursor-pointer transition-transform duration-300 hover:scale-103`}
        style={{ borderColor: colors.gold }}
        onClick={() => window.open(item.website, '_blank', 'noopener noreferrer')}
      >
        <div className="w-[150px] h-[120px] flex-shrink-0 self-start">
          <img 
            src={item.logo} 
            alt={`${item.name} logo`} 
            className="object-contain block m-0 w-full h-full"
          />
        </div>
        
        <div className="flex-1 flex flex-col justify-between h-full">
          <div>
            <h2 className={`text-lg sm:text-xl font-serif mb-2 leading-tight line-clamp-1 ${textClass}`}>
              {item.name}
            </h2>
            <p className={`text-sm sm:text-lg leading-relaxed line-clamp-3 ${textClass}`}>
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
