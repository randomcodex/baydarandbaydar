import { igmContent } from './index';
import { igmStyles } from './styles';
import logo from '../../assets/images/igm/logoigm.png';
import { PageContainer, GradientLine, LogoSection } from '../../components';

export default function IGM() {
  const { colors } = igmStyles;
  
  return (
    <PageContainer 
      backgroundColor={colors.background} 
      textColor={colors.text}
    >
      <GradientLine 
        colors={[colors.gradientStart, colors.gradientMiddle, colors.gradientEnd]} 
        glowColor={colors.glow} 
      />
      
      <h1 className="text-4xl sm:text-5xl font-serif text-center">
        {igmContent.title}
      </h1>
      
      <p className="text-center text-lg sm:text-xl max-w-3xl mx-auto">
        {igmContent.description}
      </p>
      
      <LogoSection 
        logo={logo}
        logoAlt={igmContent.logoAlt}
        externalLink={igmContent.externalLink}
      />
      
      <GradientLine 
        colors={[colors.gradientStart, colors.gradientMiddle, colors.gradientEnd]} 
        glowColor={colors.glow}
      />
    </PageContainer>
  );
}