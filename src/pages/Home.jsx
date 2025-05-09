import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import landingImage from '../assets/images/landing.jpg';

export default function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = landingImage;
    
    img.onload = () => {
      console.log('Background image loaded successfully');
      setImageLoaded(true);
    };
    
    img.onerror = () => {
      console.error('Background image failed to load');
      setImageLoaded(true); 
    };

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, []);

  return (
    <>
      <section
        className={`relative bg-cover bg-center min-h-screen transition-opacity duration-300 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        } drop-shadow-2xl`}
        style={{ 
          backgroundImage: `url(${landingImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          // fallback for browsers that don't support drop-shadow utility
          filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.35))'
        }}
        aria-label="Baydar & Baydar Construction Company Homepage"
        role="region"
      >
        {imageLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 animate-fade-in">
            {/* Main Heading - recolored to match footer */}
            <h1 className="text-4xl font-bold text-[#ffe19b] mb-2 text-center px-4 drop-shadow-lg">
              Welcome to Baydar & Baydar 
            </h1>

            {/* Wine business subtext, recolored to match footer */}
            <p className="text-xl text-[#ffe19b]/90 mb-8 text-center px-4 max-w-md drop-shadow-md">
              Sourcing exquisite tastes for the discerning palate. <br />
            </p>

            {/* Call-to-Action Button - recolored to match footer */}
            <Link
              to="/portfolio"
              className="px-6 py-2 bg-[#ffe19b] text-[#051905] rounded-lg hover:bg-[#ffe19b]/90 transition-colors duration-300 font-medium drop-shadow"
              aria-label="View our wine portfolio"
            >
              Visit our Portfolio
            </Link>
          </div>
        )}
      </section>
    </>
  );
}