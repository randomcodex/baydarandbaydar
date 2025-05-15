/**
 * Vision Component
 * 
 * Displays the company's vision, mission, and historical background with:
 * - Full-screen background image with parallax effect
 * - Responsive content container with elegant glass-morphism styling
 * - Structured presentation of vision statements with animated reveals
 * 
 * Data Source:
 * - Uses images from ../assets/images/
 * 
 * Design Features:
 * - Mobile-first responsive layout
 * - Glass-morphism effect for modern aesthetics
 * - Consistent brand color scheme with elegant accents
 * - Micro-animations for engaging user experience
 */

import { useState, useEffect, useRef } from "react";
import baccoImage from "../assets/images/bacco.webp";

// Vision page component for Baydar & Baydar
// Displays the company's vision, mission, and historical background with enhanced visuals
const Vision = () => {
  const contentRef = useRef(null);

  // Animate sections on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".animate-on-scroll");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    /* 
      Main Container
      - Full viewport height with overflow handling
      - Layered background with controlled opacity
    */
    <div
      className="min-h-screen w-full relative bg-cover bg-center"
      style={{
        backgroundColor: "#051505", // Dark green background fallback
        backgroundImage: `url(${baccoImage})`,
        opacity: 0.85, // Slightly reduced opacity for better text contrast
      }}
    >
      {/* Overlay with gradient for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(5,21,5,0.7)]"></div>

      {/*
        Content Container with Glass-morphism Effect
        - Centered with max-width for optimal readability
        - Responsive padding with elegant glass styling
        - Elevated with subtle shadow effects
      */}
      <div className="container relative z-10 mx-auto py-20 px-4 sm:px-6 max-w-4xl overflow-hidden">
        <div
          ref={contentRef}
          className="rounded-2xl shadow-2xl p-6 sm:p-12 space-y-10 border border-[rgba(255,255,255,0.2)] bg-white/75"
        >
          {/* 
            Text Content Section with Animated Reveal
            - Elegant typography with varied font weights
            - Animated entrance effects
            - Enhanced visual hierarchy
          */}
          <section className="max-w-4xl mx-auto px-6 sm:px-10 py-8 text-gray-800 font-serif text-[#0a2e0a] animate-on-scroll">
            <h2 className="text-4xl sm:text-5xl font-bold mb-10 pb-0 tracking-tight text-[#051905]">
              <span className="relative">
                Our Mission
                <span className="gradient-span"></span>
              </span>
            </h2>
            
            {/* Main paragraph with subtle animation and enhanced typography */}
            <p className="mb-8 text-lg leading-relaxed text-[rgba(5,25,5,0.85)] animate-on-scroll">
              At <strong className="text-[#051905]">Baydar &amp; Baydar</strong>, we believe that great wine is not just produced — it is discovered, understood, and shared with reverence. Our mission is to seek out Italy's most exceptional wines — bottles shaped by land, legacy, and the quiet mastery of dedicated artisans. We partner with producers who work not for scale, but for purity and depth: limited-production wines rooted in history and terroir, expressing the very soul of their region. Each selection in our portfolio is the result of thoughtful curation — an invitation to experience a deeper narrative of Italian viticulture, one bottle at a time. Whether born of ancient volcanic soils or alpine breezes, our wines are chosen for those who seek not only taste, but truth.
            </p>

            {/* Enhanced section styling */}
            <div className="space-y-8 mt-12 animate-on-scroll">
              <div className="animate-on-scroll">
                <h3 className="text-2xl font-semibold mb-3 relative text-[#051905]">
                  <span className="relative">
                    A Journey Through Italy
                    <span className="gradient-span"></span>
                  </span>
                </h3>
                <p className="mb-0 text-[rgba(5,25,5,0.85)]">
                  Our portfolio celebrates the vast diversity of Italy's twenty wine regions—from the sunlit coasts of Sicily to the alpine peaks of Valle d'Aosta. Each bottle is a faithful expression of its origin, shaped by soil, climate, and centuries of tradition.
                  We showcase the elegance of Piedmont's Barolo, the charm of Veneto's Prosecco, the soul of Tuscany's Sangiovese, and the volcanic depth of Campania's ancient grapes. These wines are more than regional—each one carries the voice of its land and the vision of its maker.
                </p>
              </div>

              <div className="animate-on-scroll">
                <h3 className="text-2xl font-semibold mb-3 relative text-[#051905]">
                  <span className="relative">
                    Artisans, Not Factories
                    <span className="gradient-span"></span>
                  </span>
                </h3>
                <p className="mb-0 text-[rgba(5,25,5,0.85)]">
                  We partner exclusively with visionary producers—reclusive oenologists, multigenerational family estates, and world-renowned names. Regardless of scale, what unites them is a shared philosophy: respect for nature, excellence in craft, and a passion for storytelling through wine.
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-6 animate-on-scroll">
                <div className="flex-1 animate-on-scroll">
                  <h3 className="text-2xl font-semibold mb-3 relative text-[#051905]">
                    <span className="relative">
                      Wine as Cultural Memory
                      <span className="gradient-span"></span>
                    </span>
                  </h3>
                  <p className="mb-0 text-[rgba(5,25,5,0.85)]">
                    At Baydar &amp; Baydar, we believe wine is more than a beverage—it is an art form. Like Caravaggio's <em>Bacchus</em>, each bottle holds a mirror to beauty, indulgence, and history. These are vessels of cultural memory, infused with myth, artistry, and centuries of enological wisdom.
                  </p>
                </div>
                <div className="flex-1 animate-on-scroll">
                  <h3 className="text-2xl font-semibold mb-3 relative text-[#051905]">
                    <span className="relative">
                      Serving the Refined
                      <span className="gradient-span"></span>
                    </span>
                  </h3>
                  <p className="mb-0 text-[rgba(5,25,5,0.85)]">
                    Our clients include luxury hotels, haute cuisine establishments, private collectors, and cultural tastemakers—those who seek not only exceptional wines, but also the stories behind them.
                  </p>
                </div>
              </div>

              <div className="animate-on-scroll">
                <h3 className="text-2xl font-semibold mb-3 relative text-[#051905]">
                  <span className="relative">
                    Excellence with Every Vintage
                    <span className="gradient-span"></span>
                  </span>
                </h3>
                <p className="mb-0 text-[rgba(5,25,5,0.85)]">
                  With every wine we import, we offer more than quality. We offer nuance, narrative, and a true sense of place.
                </p>
              </div>
            </div>
            {/* Signature section with elegant styling */}
            <div className="text-right mt-16 animate-on-scroll">
              <div className="inline-block relative">
                <p className="text-2xl font-semibold relative text-[#051905]">- Barış Baydar -</p>
                <p className="text-lg italic text-[rgba(5,25,5,0.65)]">Director, Baydar &amp; Baydar</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      {/* Add custom styles for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease forwards;
        }
        
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
        }

        .gradient-span {
          position: absolute;
          bottom: -4px; /* Adjusted distance to match the "Our Mission" span */
          left: 0;
          right: 0;
          height: 2px; /* Ensured consistent thickness */
          background: linear-gradient(to right, #ffe19b, #ffffff, #ffe19b);
          box-shadow: 0 0 8px 1px rgba(255, 225, 155, 0.4);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 8px 1px rgba(255, 225, 155, 0.4);
          }
          50% {
            box-shadow: 0 0 12px 2px rgba(255, 225, 155, 0.6);
          }
        }
      `}</style>
    </div>
  );
};

export default Vision;