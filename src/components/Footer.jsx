/**
 * Footer Component
 * 
 * Displays copyright information and designer credit at the bottom of every page.
 * Features responsive text sizing and layout adjustments for different screen sizes.
 */
export default function Footer() {
    return (
      /* Main footer container with background color and responsive padding */
      <footer className="bg-[#051905] py-3 sm:py-3 text-center text-sm sm:text-base flex flex-col items-center justify-center px-5 text-[#ffe19b]">
        
        {/* Copyright section - takes full width and centers content */}
        <div className="w-full flex flex-col items-center">
          {/* Copyright text with dynamic year - responsive font sizing */}
          <span className="text-xs sm:text-sm">
           © {new Date().getFullYear()} Baydar & Baydar. All rights reserved.
          </span>
          <span className="mt-0">
          </span>
        </div>

        {/* Designer credit section - aligned to the right */}
        <div className="w-full flex justify-end">
          {/* Designer link with responsive text sizing - opens in new tab */}
          <span className="text-xs sm:text-sm">
            <a 
              href="https://toyomuhendislik.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              Developed by Toyo Engineering Ltd.
            </a>
          </span>
        </div>
      </footer>
    )
}