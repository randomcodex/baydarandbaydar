/**
 * Vision Component
 * 
 * Displays the company's vision, mission, and historical background with:
 * - Full-screen background image with overlay
 * - Responsive content container with semi-transparent background
 * - Structured presentation of vision statements
 * - Image gallery of related visuals
 * - Embedded map image
 * 
 * Data Source:
 * - Imports content from ../data/vision.js
 * - Uses images from ../assets/images/
 * 
 * Design Features:
 * - Mobile-first responsive layout
 * - Carefully balanced opacity for readability
 * - Consistent color scheme with brand guidelines
 * - Smooth shadow and border effects
 */

import { useState } from "react";
import { vision } from "../data/vision";
import mapImage from "../assets/images/map.jpg";
import baccoImage from "../assets/images/bacco.jpg";

// Vision page component for Baydar & Baydar
// Displays the company's vision, mission, and historical background
export default function Vision() {
  return (
    /* 
      Main Container
      - Full viewport height (min-h-screen)
      - Brand background color fallback
      - Background image with controlled opacity
    */
    <div
      className="min-h-screen w-full"
      style={{
        backgroundColor: "#051505", // Dark green background fallback
        backgroundImage: `url(${baccoImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.9, // Slightly reduced opacity for better text contrast
      }}
    >
      {/*
        Content Container
        - Centered with max-width for optimal readability
        - Responsive padding
        - Semi-transparent white background
        - Subtle shadow and border effects
      */}
      <div className="container mx-auto py-16 px-4 sm:px-6 max-w-4xl">
        <div
          className="bg-white rounded-2xl shadow-xl p-4 sm:p-10 space-y-8 border border-gray-100"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.75)" }} // 75% opacity white
        >
          {/* 
            Text Content Section
            - Responsive typography scaling
            - Carefully spaced elements
            - Brand color text
          */}
          <section className="max-w-4xl mx-auto px-10 py-6 text-gray-800 font-serif text-[#0a2e0a]">
            <h2 className="text-4xl font-bold mb-10 pb-0" style={{ color: '#051905' }}>Our Mission</h2>

            <div className="w-full flex items-center justify-center my-10">
              <div className="flex-grow border-t border-[#ffe19b]"></div>
            </div>

            <p className="mb-10" style={{ color: 'rgba(5, 25, 5, 0.85)' }}>
              At <strong>Baydar &amp; Baydar</strong>, we believe that great wine is not just produced — it is discovered, understood, and shared with reverence. Our mission is to seek out Italy’s most exceptional wines — bottles shaped by land, legacy, and the quiet mastery of dedicated artisans. We partner with producers who work not for scale, but for purity and depth: limited-production wines rooted in history and terroir, expressing the very soul of their region. Each selection in our portfolio is the result of thoughtful curation — an invitation to experience a deeper narrative of Italian viticulture, one bottle at a time. Whether born of ancient volcanic soils or alpine breezes, our wines are chosen for those who seek not only taste, but truth.
            </p>

            <div className="w-full flex items-center justify-center my-10">
              <div className="flex-grow border-t border-[#ffe19b]"></div>
            </div>

            <h3 className="text-2xl font-semibold mb-2" style={{ color: '#051905' }}>A Journey Through Italy</h3>
            <p className="mb-6" style={{ color: 'rgba(5, 25, 5, 0.85)' }}>
              Our portfolio celebrates the vast diversity of Italy’s twenty wine regions—from the sunlit coasts of Sicily to the alpine peaks of Valle d'Aosta. Each bottle is a faithful expression of its origin, shaped by soil, climate, and centuries of tradition.
              We showcase the elegance of Piedmont’s Barolo, the charm of Veneto’s Prosecco, the soul of Tuscany’s Sangiovese, and the volcanic depth of Campania’s ancient grapes. These wines are more than regional—each one carries the voice of its land and the vision of its maker.
            </p>

            <h3 className="text-2xl font-semibold mb-2" style={{ color: '#051905' }}>Artisans, Not Factories</h3>
            <p className="mb-6" style={{ color: 'rgba(5, 25, 5, 0.85)' }}>
              We partner exclusively with visionary producers—reclusive oenologists, multigenerational family estates, and world-renowned names. Regardless of scale, what unites them is a shared philosophy: respect for nature, excellence in craft, and a passion for storytelling through wine.
            </p>

            <h3 className="text-2xl font-semibold mb-2" style={{ color: '#051905' }}>Wine as Cultural Memory</h3>
            <p className="mb-6" style={{ color: 'rgba(5, 25, 5, 0.85)' }}>
              At Baydar &amp; Baydar, we believe wine is more than a beverage—it is an art form. Like Caravaggio’s <em>Bacchus</em>, each bottle holds a mirror to beauty, indulgence, and history. These are vessels of cultural memory, infused with myth, artistry, and centuries of enological wisdom.
            </p>

            <h3 className="text-2xl font-semibold mb-2" style={{ color: '#051905' }}>Serving the Refined</h3>
            <p className="mb-6" style={{ color: 'rgba(5, 25, 5, 0.85)' }}>
              Our clients include luxury hotels, haute cuisine establishments, private collectors, and cultural tastemakers—those who seek not only exceptional wines, but also the stories behind them.
            </p>

            <h3 className="text-2xl font-semibold mb-2" style={{ color: '#051905' }}>Excellence with Every Vintage</h3>
            <p className="mb-12" style={{ color: 'rgba(5, 25, 5, 0.85)' }}>
              With every wine we import, we offer more than quality. We offer nuance, narrative, and a true sense of place.
            </p>

            <div className="text-right mt-10">
              <p className="text-2xl font-semibold" style={{ color: '#051905' }}>- Barış Baydar -</p>
              <p className="text-lg italic" style={{ color: 'rgba(5, 25, 5, 0.65)' }}>Director, Baydar &amp; Baydar</p>
            </div>
          </section>

          {/*
            Image Gallery Grid
            - Responsive 1-column (mobile) to 2-column (desktop) layout
            - Consistent image sizing
            - Decorative borders and shadows
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mt-8">
            {vision.images.map((img, idx) => (
              <img
                key={idx}
                src={img.src}
                alt={img.alt}
                className="w-full h-48 sm:h-72 object-cover rounded-xl shadow-lg border border-gray-200"
              />
            ))}
          </div>

          {/*
            Map Section
            - Full-width display
            - Consistent styling with other images
          */}
          <div className="mt-8">
            <img
              src={mapImage}
              alt="Company location map"
              className="rounded-xl shadow-2xl border border-gray-300 cursor-pointer transition-transform duration-500 w-full h-auto hover:scale-105"
              onClick={() => window.open(mapImage, '_blank')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}