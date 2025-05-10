/**
 * Portfolio Component
 * 
 * Displays a grid of brand portfolios with:
 * - Full-screen background image with overlay effect
 * - Responsive card layout (1-column mobile, 2-column desktop)
 * - Brand logos with consistent aspect ratios
 * - Descriptive text and website links
 * - Hover effects and smooth transitions
 * 
 * Data Source:
 * - Imports brand data from ../data/brands.js
 * - Uses background image from ../assets/images/
 * 
 * Design Features:
 * - Mobile-first responsive design
 * - Background blend mode for improved readability
 * - Consistent brand color scheme
 * - Careful opacity balancing
 * - Interactive hover states
 */

import { brands } from '../data/brands.js';
import baccanalImage from '../assets/images/baccanal.jpg';

// Portfolio page component for Baydar & Baydar
// Displays a grid of brand portfolios with logos and descriptions

export default function Portfolio() {
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
    */
    <div
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

        {/*
          Brand Portfolio Grid
          - 1 column on mobile, 2 columns on desktop (md:)
          - Responsive gap spacing
          - Each card contains:
            * Brand logo
            * Name and description
            * Website link
        */}
        <div className="grid gap-6 sm:gap-10 grid-cols-1 md:grid-cols-2">
          {brands.map((brand) => (
            /* 
              Brand Card
              - Semi-transparent white background (bg-opacity-50)
              - Golden border (border-[#ffe19b])
              - Flex layout (column on mobile, row on desktop)
              - Hover scale effect
              - Overflow hidden for contained rounded corners
              - Clickable card to open website
            */
            <div 
              key={brand.id}
              className="bg-white bg-opacity-50 rounded-lg p-3 flex flex-col md:flex-row items-center hover:scale-105 transition-transform duration-300 border-4 border-[#ffe19b] rounded-xl w-full max-w-4xl mx-auto overflow-hidden cursor-pointer"
              onClick={() => window.open(brand.website, '_blank', 'noopener noreferrer')}
            >
              {/* 
                Brand Logo
                - Fixed aspect ratio (square)
                - Responsive sizing
                - Centered on mobile, left-aligned on desktop
                - Contained within bounds (object-contain)
              */}
              <img 
                src={brand.logo} 
                alt={`${brand.name} logo`} 
                className="w-36 h-24 sm:w-80 sm:h-36 mb-3 md:mb-0 md:mr-6 object-contain aspect-square rounded" 
              />

              {/*
                Brand Info Container
                - Takes remaining space (flex-1)
                - Center-aligned on mobile, left on desktop
                - Text wrapping (break-words)
              */}
              <div className="flex-1 flex flex-col items-center text-center md:items-start md:text-left break-words">
                {/* 
                  Brand Name
                  - Dark green text (#051905)
                  - Responsive font sizing
                  - Tight line height
                */}
                <h2 className="text-xl sm:text-2xl font-serif text-[#051905] mb-2 max-w-full leading-tight break-words">
                  {brand.name}
                </h2>

                {/*
                  Brand Description
                  - Dark green text
                  - Relaxed line height
                  - Responsive font sizing
                */}
                <p className="mb-3 text-[#051905] text-base sm:text-lg max-w-full leading-relaxed break-words">
                  {brand.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}