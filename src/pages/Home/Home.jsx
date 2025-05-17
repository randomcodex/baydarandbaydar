import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import { homeData } from './index';

export default function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { hero, animation } = homeData;

  useEffect(() => {
    const img = new Image();
    img.src = hero.backgroundImage;
    const handleLoad = () => setImageLoaded(true);
    img.onload = handleLoad;
    img.onerror = handleLoad;
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [hero.backgroundImage]);

  useEffect(() => {
    AOS.init(animation);
  }, [animation]);

  return (
    <section
      className={`
        relative min-h-screen bg-cover bg-center
        transition-opacity duration-300
        ${imageLoaded ? 'opacity-100' : 'opacity-0'}
      `}
      style={{ 
        backgroundImage: `url(${hero.backgroundImage})`,
        filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.35))'
      }}
      aria-label="Baydar & Baydar Construction Company Homepage"
      role="region"
    >
      {imageLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20">
          <h1
            className="text-4xl font-bold text-[#ffe19b] mb-2 text-center px-4 drop-shadow-lg"
            data-aos="zoom-in"
          >
            {hero.heading}
          </h1>
          <p
            className="text-xl text-[#ffe19b]/90 mb-8 text-center px-4 max-w-md drop-shadow-md"
            data-aos="fade-up"
          >
            {hero.subheading}
          </p>
          <Link
            to={hero.ctaButton.link}
            className="px-6 py-2 bg-[#ffe19b] text-[#051905] rounded-lg hover:bg-[#ffe19b]/90 transition-colors duration-300 font-medium drop-shadow"
            aria-label={hero.ctaButton.ariaLabel}
            data-aos="fade-up"
          >
            {hero.ctaButton.text}
          </Link>
        </div>
      )}
    </section>
  );
}