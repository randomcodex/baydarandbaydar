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

import logo from '../assets/images/logoigm.png';

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
    */
    <div className="min-h-screen w-full bg-[#051505] py-8 sm:py-12 px-4 sm:px-6 text-[#ffe19b]">
      {/*
        Content Container
        - Centered with automatic margins
        - Responsive vertical spacing
        - Max-width constrained by container
      */}
      <div className="container mx-auto space-y-8 sm:space-y-12">
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
        </p>

        {/* Logo Display */}
        <div className="flex flex-col justify-center items-center space-y-4">
          <img 
            src={logo} 
            alt="Istituto Grandi Marchi Official Logo" 
            className="w-80 h-auto"
          />
          <a
            href="https://www.istitutograndimarchi.it/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ffe19b] text-[#051505] px-8 py-1 rounded-md text-lg font-semibold hover:bg-[#e6c477] transition-colors"
          >
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
}