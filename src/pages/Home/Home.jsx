import { homeData } from './index';
import { useImageLoader } from '../../hooks/useImageLoader';
import { useAOSInit } from '../../hooks/useAOSInit';
import { HeroSection } from '../../components';

export default function Home() {
  const { hero, animation } = homeData;
  const imageLoaded = useImageLoader(hero.backgroundImage);
  
  useAOSInit(animation);

  return (
    <HeroSection
      backgroundImage={hero.backgroundImage}
      heading={hero.heading}
      subheading={hero.subheading}
      imageLoaded={imageLoaded}
    />
  );
}