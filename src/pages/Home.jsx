import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import landingImageWebP from '../assets/images/home/bghome.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * Home Component
 * 
 * This component renders the landing page for Baydar & Baydar Co. Ltd.
 * It includes a full-screen background image, a welcome message, and a link to the portfolio page.
 * 
 * Features:
 * - Lazy loading of the background image to improve performance.
 * - Smooth opacity transition when the image is loaded.
 * - Responsive design with centered content.
 * - Accessible with ARIA labels for better usability.
 * - Animated scroll effects using AOS (Animate On Scroll) library.
 * 
 * Props:
 * None
 * 
 * State:
 * - imageLoaded (boolean): Tracks whether the background image has been loaded.
 * 
 * Dependencies:
 * - React (useState, useEffect)
 * - react-router-dom (Link)
 * - AOS (Animate On Scroll)
 * 
 * Assets:
 * - landingImageWebP: The WebP version of the landing page background image.
 * 
 * Usage:
 * Import and include this component in the main application or route to display the landing page.
 */

// Home page component for Baydar & Baydar
// Renders the landing page with a background image and welcome message
export default function Home() {
  // State to track whether the background image has been loaded
  const [imageLoaded, setImageLoaded] = useState(false);

  /**
   * Effect:
   * - Preloads the background image and updates the state when the image is loaded or fails to load.
   */
  useEffect(() => {
    const img = new Image();
    img.src = landingImageWebP;

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

  // Initialize AOS for scroll animations
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function for animations
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      <section
        className={`relative bg-cover bg-center min-h-screen transition-opacity duration-300 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        } drop-shadow-2xl`}
        style={{ 
          backgroundImage: `url(${landingImageWebP})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.35))'
        }}
        aria-label="Baydar & Baydar Construction Company Homepage"
        role="region"
      >
        {imageLoaded && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center bg-black/20"
          >
            <h1
              className="text-4xl font-bold text-[#ffe19b] mb-2 text-center px-4 drop-shadow-lg"
              data-aos="zoom-in"
            >
              Welcome to Baydar & Baydar 
            </h1>
            <p
              className="text-xl text-[#ffe19b]/90 mb-8 text-center px-4 max-w-md drop-shadow-md"
              data-aos="fade-up"
            >
              Sourcing exquisite tastes for the discerning palate. <br />
            </p>
            <Link
              to="/portfolio"
              className="px-6 py-2 bg-[#ffe19b] text-[#051905] rounded-lg hover:bg-[#ffe19b]/90 transition-colors duration-300 font-medium drop-shadow"
              aria-label="View our wine portfolio"
              data-aos="fade-up"
            >
              Visit our Portfolio
            </Link>
          </div>
        )}
      </section>
    </>
  );
}