/**
 * Updated Portfolio Component
 * 
 * Features:
 * - Displays a grid of brand and equipment portfolios with:
 *   - Full-screen background image with overlay effect.
 *   - Responsive card layout (1-column mobile, 2-column desktop).
 *   - Brand logos and descriptions with consistent aspect ratios.
 *   - Interactive hover effects and smooth transitions.
 * - Cards:
 *   - Use flex-row layout for all screen sizes.
 *   - Auto-adjust height to fit content.
 *   - Include left-aligned images and text.
 * - Design:
 *   - Mobile-first responsive design.
 *   - Background blend mode for improved readability.
 *   - Consistent brand color scheme.
 *   - Stylish dividers with solid color or gradient effects.
 */

import { brands, equipment } from '../data/portfolio';
import baccanalImage from '../assets/images/portfolio/bgportfolio.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

// Portfolio page component for Baydar & Baydar
// Displays a grid of brand portfolios with logos and descriptions

export default function Portfolio() {
  // Initialize AOS for scroll animations
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function for animations
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    /* 
      Main Container
      - Full viewport height (min-h-screen)
      - Responsive padding (smaller on mobile)
      - Background image with overlay effect:
        * Image covers entire area
        * Dark overlay (rgba(0,0,0,0.3))
        * overlay blend mode
      - Light gray fallback background
    */    <div
      className="min-h-screen w-full bg-gray-100 py-8 sm:py-12 px-2 sm:px-0"
      style={{
        backgroundImage: `url(${baccanalImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // 30% opacity black overlay
        backgroundBlendMode: 'overlay', // Blends image with color overlay
      }}
    >
      {/*
        Content Container
        - Centered with max-width
        - Responsive spacing
        - Gold text color (#ffe19b) for headings
      */}
      <div className="container mx-auto px-2 sm:px-6 space-y-8 sm:space-y-12 text-[#ffe19b]">
        {/* 
          Section Header (currently empty - reserved for future title)
          - Responsive font sizing
          - Centered text alignment
          - White text for contrast
        */}
        <h1 className="text-3xl sm:text-4xl font-serif mb-6 sm:mb-10 text-center text-white">
          {/* Title can be added here when needed */}
        </h1>

        <div className="w-full flex items-center justify-center my-8">
          <div className="flex-grow h-0.5 bg-[#ffe19b]"></div>
          <span className="mx-4 text-[#ffe19b] text-lg sm:text-xl font-serif">Wineries</span>
          <div className="flex-grow h-0.5 bg-[#ffe19b]"></div>
        </div>
        {/* Added a stylish border with title above the brands section */}

        {/* 
          Brand Portfolio Grid
          - 1 column on mobile, 2 columns on desktop (lg:)
          - Responsive gap spacing
          - Each card contains:
            * Brand logo
            * Name and description
            * Website link
        */}        <div className="grid gap-12 sm:gap-16 grid-cols-1 lg:grid-cols-2 brand-section" data-aos="fade-up">
          {brands.sort((a, b) => a.name.localeCompare(b.name)).map((brand) => (
            <div 
              key={brand.id}
              className="portfolio-box"
              onClick={() => window.open(brand.website, '_blank', 'noopener noreferrer')}
              data-aos="fade-up"
            >
              {/* Brand Logo - Using global img styling from global.css */}
              <img 
                src={brand.logo} 
                alt={`${brand.name} logo`} 
                className="img"
                data-aos="zoom-in"
              />

              {/* 
                Brand Info Container
                - Takes remaining space (flex-1)
                - Left-aligned
                - Text wrapping (break-words)
              */}
              <div 
                className="flex-1 flex flex-col items-start text-left break-words"
                data-aos="fade-up"
              >
                {/* 
                  Brand Name
                  - Dark green text (#051905)
                  - Responsive font sizing
                  - Tight line height
                */}
                <h2 className="text-lg sm:text-xl font-serif text-[#051905] mb-2 max-w-full leading-tight break-words">
                  {brand.name}
                </h2>

                {/* 
                  Brand Description
                  - Dark green text
                  - Relaxed line height
                  - Responsive font sizing
                */}
                <p className="text-sm sm:text-base text-[#051905] leading-relaxed break-words">
                  {brand.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full flex items-center justify-center my-8">
          <div className="flex-grow h-0.5 bg-[#ffe19b]"></div>
          <span className="mx-4 text-[#ffe19b] text-lg sm:text-xl font-serif">Dispensing & Preservation</span>
          <div className="flex-grow h-0.5 bg-[#ffe19b]"></div>
        </div>
        {/* Added a stylish border with title above the equipment section */}        <div className="grid gap-12 sm:gap-16 grid-cols-1 lg:grid-cols-2 equipment-section" data-aos="fade-up">
          {equipment.map((item) => (
            <div 
              key={item.id}
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
                <h2 className="text-lg sm:text-xl font-serif text-[#051905] mb-2 max-w-full leading-tight break-words">
                  {item.name}
                </h2>
                <p className="text-sm sm:text-base text-[#051905] leading-relaxed break-words">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16"></div> {/* Increased margin for more distance */}
      </div>
    </div>
  );
}

