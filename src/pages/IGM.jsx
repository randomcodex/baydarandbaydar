/**
 * IGM (Istituto Grandi Marchi) Component
 * 
 * Displays information about the IGM partnership with:
 * - Full-screen dark green background (#051505)
 * - Centered content layout
 * - Responsive typography
 * - Official IGM logo display
 * - Link to external IGM website
 * 
 * Design Features:
 * - Mobile-first responsive design
 * - Consistent brand color scheme (#051505 background, #ffe19b text)
 * - Balanced spacing and typography hierarchy
 * - Secure external link implementation
 */

import logo from '../assets/images/igm/logoigm.png';

// IGM page component for Baydar & Baydar
// Displays information about the Istituto Grandi Marchi partnership
export default function IGM() {
  return (
    /* 
      Main Container
      - Full viewport height (min-h-screen)
      - Dark green brand background (#051505)
      - Responsive padding (larger on desktop)
      - Gold text color (#ffe19b)
    */    <div className="min-h-screen w-full bg-[#051505] py-8 sm:py-12 px-4 sm:px-6 text-[#ffe19b]">
      {/*
        Content Container
        - Centered with automatic margins
        - Responsive vertical spacing
        - Max-width constrained by container
        - Group hover for enhanced glow effects      */}      <div className="container mx-auto space-y-8 sm:space-y-12 group">
        {/* Top Gradient Glow Line with subtle effect */}
        <div className="w-full h-0.5 bg-gradient-to-r from-[#ffe19b] via-[#ffffff] to-[#ffe19b] shadow-[0_0_8px_1px_rgba(255,225,155,0.4)] animate-pulse transition-all duration-300 group-hover:shadow-[0_0_12px_2px_rgba(255,225,155,0.5)] group-hover:h-0.5"></div>

        {/* 
          Main Heading
          - Responsive font sizing (4xl mobile, 5xl desktop)
          - Centered text alignment
          - Serif font family
        */}
        <h1 className="text-4xl sm:text-5xl font-serif text-center">
          Istituto Grandi Marchi
        </h1>

        {/*
          Description Paragraph
          - Responsive font sizing (lg mobile, xl desktop)
          - Centered text alignment
          - Appropriate line length for readability
        */}
        <p className="text-center text-lg sm:text-xl">
          At Baydar & Baydar, we embrace the spirit of Istituto Grandi Marchi—united in our devotion to heritage, craftsmanship, and the timeless poetry of Italian wine.
        </p>        {/* Logo Display with integrated link */}
        <div className="flex flex-col justify-center items-center space-y-4 relative">
          {/* Radial glow effect that appears on group hover */}
          <div className="absolute inset-0 bg-radial-gradient rounded-full opacity-30 sm:opacity-0 sm:group-hover:opacity-30 transition-opacity duration-700 blur-xl" 
               style={{background: 'radial-gradient(circle, rgba(255,225,155,0.3) 0%, rgba(5,21,5,0) 70%)'}}></div>
          <a
            href="https://www.istitutograndimarchi.it/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src={logo} 
              alt="Istituto Grandi Marchi Official Logo" 
              className="w-80 h-auto relative transition-all duration-300 group-hover:scale-105"
            />
          </a>
        </div>        {/* Bottom Gradient Glow Line with subtle effect */}
        <div className="w-full h-0.5 bg-gradient-to-r from-[#ffe19b] via-[#ffffff] to-[#ffe19b] shadow-[0_0_8px_1px_rgba(255,225,155,0.4)] animate-pulse transition-all duration-300 group-hover:shadow-[0_0_12px_2px_rgba(255,225,155,0.5)] group-hover:h-0.5"></div>
      </div>
    </div>
  );
}