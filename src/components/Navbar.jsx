import { useState, useEffect, useCallback } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/images/logotransparent.png';
import emailIcon from '../assets/images/emailsvgrepo.svg';
import whatsappIcon from '../assets/images/whatsappsvgrepo.svg';
import linkedinIcon from '../assets/images/linkedinsvgrepo.svg';
import facebookIcon from '../assets/images/facebooksvgrepo.svg';
import instagramIcon from '../assets/images/instagramsvgrepo.svg';
import twitterIcon from '../assets/images/twittersvgrepo.svg';

/**
 * Updated Navbar Component
 * 
 * Features:
 * - Provides site navigation with a mobile-friendly hamburger menu.
 * - Smooth animations for menu transitions using Framer Motion.
 * - Social media icons with hover effects and external links.
 * - Responsive design adapts to screen size with a collapsible menu on smaller screens.
 * - Hamburger menu includes glowing gradient dividers between links.
 * - Logo animations for hover and click interactions.
 */

// Define a reusable SocialIcon component
const SocialIcon = ({ src, alt, link, onClick }) => (
  <img
    src={src}
    alt={alt}
    className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
    onClick={() => {
      window.open(link, '_blank');
      if (onClick) onClick();
    }}
  />
);
// Define animation variants for the menus
const menuVariants = {
  open: {
    opacity: 1,
    height: "auto",
    scale: 1,
    transition: {
      height: { duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] },
      opacity: { duration: 0.4 },
      scale: { duration: 0.4, ease: "easeOut" },
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
  closed: {
    opacity: 0,
    height: 0,
    scale: 0.95,
    transition: {
      height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
      opacity: { duration: 0.35 },
      scale: { duration: 0.3, ease: "easeIn" },
      when: "afterChildren",
      staggerChildren: 0.07,
      staggerDirection: -1,
    },
  },
};

// Animation variants for individual menu items
const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      y: { type: "spring", stiffness: 300, damping: 20 },
    },
  },
  closed: {
    opacity: 0,
    y: -16,
    scale: 0.9,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

export default function Navbar() {
  // State to manage both menus
  const [menuState, setMenuState] = useState({
    hamburgerOpen: false,
    metaMenuOpen: false,
  });
  // State for logo click animation
  const [logoClicked, setLogoClicked] = useState(false);
  // Update handleMenuToggle to close both menus when a navlink is clicked
  // Added event parameter to prevent default behavior and stop scrolling to top
  const handleMenuToggle = useCallback((menu, event) => {
    // Prevent default browser behavior that might cause scrolling
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    setMenuState((prev) => {
      const newState = { hamburgerOpen: false, metaMenuOpen: false };
      return { ...newState, [menu]: !prev[menu] };
    });
  }, []);

  // Update the handleClickOutside function to close all menus on any interaction outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('nav')) {
        setMenuState({ hamburgerOpen: false, metaMenuOpen: false });
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Opens default email client with pre-filled recipient
  const handleEmailClick = useCallback(() => {
    window.location.href = 'mailto:baydarandbaydar@gmail.com';
  }, []);

  // Handles logo click animation and navigation
  const handleLogoClick = useCallback(() => {
    // Only apply animation on mobile
    if (window.innerWidth < 1024) {
      setLogoClicked(true);
      setMenuState({ hamburgerOpen: false, metaMenuOpen: false }); // Close both menus on logo click
      // Reset after animation completes (500ms matches CSS duration)
      setTimeout(() => {
        setLogoClicked(false);
      }, 500);
    }
  }, []);

  // Dynamic class for navigation links (applies active state styling)
  const navLinkClass = (isActive) =>
    `${isActive ? 'text-[#ffe19b] font-bold' : 'text-white font-bold'} transition-transform duration-200 ease-in-out transform hover:scale-110 hover:underline underline-offset-4 hover:text-[#ffe19b]`;

  // Static class for non-NavLink elements (WhatsApp, Email)
  const staticLinkClass =
    'text-white hover:text-[#ffe19b] transition-transform duration-200 ease-in-out transform hover:scale-110 hover:underline underline-offset-4 focus:outline-none';

  return (
    /* Main navigation container - sticky at the top */
    <nav className="sticky top-0 bg-[#051905] text-white py-3 px-5 text-lg sm:text-xl relative z-50">
      {/* Inner container for layout */}
      <div className="container mx-auto flex items-center justify-between px-3 sm:px-5">
        {/* Logo section - acts as home link */}
        <div className="flex items-center">
          <Link 
            to="/" 
            className="focus:outline-none"
            onClick={handleLogoClick}
          >
            <div className="h-12 w-24 relative group cursor-pointer lg:cursor-default">
              {/* Logo image with hover/click animations */}
              <img
                src={logo}
                alt="Company Logo"
                className={`absolute top w-full h-full object-contain transition-transform duration-500 ease-in-out
                  scale-[150%]
                  hover:scale-[165%]
                  active:scale-[165%]
                  lg:scale-[170%]
                  lg:hover:scale-[190%]
                  ${logoClicked ? 'scale-[165%]' : ''}
                  cursor-pointer` // Added cursor-pointer for hover effect on logo
                }
              />
            </div>
          </Link>
        </div>

        {/* Mobile icons and hamburger menu button (hidden on desktop) */}
        <div className="lg:hidden flex items-center space-x-4">
          <SocialIcon 
            src={whatsappIcon} 
            alt="WhatsApp Icon" 
            link="https://wa.me/905338692852" 
          />
          <SocialIcon 
            src={linkedinIcon} 
            alt="LinkedIn Icon" 
            link="https://www.linkedin.com/company/baydarandbaydar" 
          />
          <SocialIcon 
            src={emailIcon} 
            alt="Email Icon" 
            link="mailto:baydarandbaydar@gmail.com" 
          />          <button
            className="flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
            onClick={(e) => handleMenuToggle('hamburgerOpen', e)}
            aria-label="Toggle menu"
          >
            {/* Animated hamburger icon lines */}
            <span className={`block w-6 h-0.5 bg-[#ffe19b] mb-1 transition-all ${menuState.hamburgerOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#ffe19b] mb-1 transition-all ${menuState.hamburgerOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#ffe19b] transition-all ${menuState.hamburgerOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Desktop navigation links (hidden on mobile) */}
        <div className="hidden lg:flex items-center w-full">          <div className="flex-1 flex justify-center space-x-6">            <NavLink 
              to="/portfolio" 
              className={({ isActive }) => navLinkClass(isActive)} 
              onClick={() => {
                // Explicitly scroll to top when navigating
                window.scrollTo(0, 0);
              }}
            >
              Portfolio
            </NavLink>
            <NavLink 
              to="/vision" 
              className={({ isActive }) => navLinkClass(isActive)} 
              onClick={() => {
                // Explicitly scroll to top when navigating
                window.scrollTo(0, 0);
              }}
            >
              Vision
            </NavLink>
            <NavLink 
              to="/igm" 
              className={({ isActive }) => navLinkClass(isActive)} 
              onClick={() => {
                // Explicitly scroll to top when navigating
                window.scrollTo(0, 0);
              }}
            >
              IGM
            </NavLink>
          </div>
          <div className="flex space-x-4">
            <SocialIcon 
              src={facebookIcon} 
              alt="Facebook Icon" 
              link="https://www.facebook.com/people/Baydar-Baydar/61565184459208/" 
            />
            <SocialIcon 
              src={instagramIcon} 
              alt="Instagram Icon" 
              link="https://www.instagram.com/baydarandbaydar" 
            />
            <SocialIcon 
              src={twitterIcon} 
              alt="Twitter Icon" 
              link="https://twitter.com/baydarandbaydar" 
            />
            <SocialIcon 
              src={whatsappIcon} 
              alt="WhatsApp Icon" 
              link="https://wa.me/905338692852" 
            />
            <SocialIcon 
              src={linkedinIcon} 
              alt="LinkedIn Icon" 
              link="https://www.linkedin.com/company/baydarandbaydar" 
            />
            <SocialIcon 
              src={emailIcon} 
              alt="Email Icon" 
              link="mailto:baydarandbaydar@gmail.com" 
            />
          </div>
        </div>
      </div>      {/* Hamburger menu dropdown with enhanced animations */}
      <div className="lg:hidden overflow-hidden absolute w-full left-0 right-0">
        <AnimatePresence mode="sync">
          {menuState.hamburgerOpen && (
            <motion.div
              className="flex flex-col items-center mt-2 bg-[#051905] rounded-md shadow-lg overflow-hidden origin-top"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={(e) => e.stopPropagation()} // Prevent click inside menu from closing it
              layout
            >              {/* Top glowing divider with enhanced animation */}
              <motion.div 
                variants={itemVariants}
                className="w-full h-0.5 bg-gradient-to-r from-[#ffe19b] via-[#ffffff] to-[#ffe19b] mb-2"
                animate={{ 
                  boxShadow: ["0 0 4px rgba(255, 225, 155, 0.5)", "0 0 8px rgba(255, 225, 155, 0.8)", "0 0 4px rgba(255, 225, 155, 0.5)"],
                  transition: { 
                    repeat: Infinity, 
                    duration: 1.5,
                    ease: "easeInOut" 
                  } 
                }}
              ></motion.div>
              
              {/* Portfolio link with animation */}              <motion.div 
                variants={itemVariants} 
                className="w-full flex justify-center py-1"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink 
                  to="/portfolio" 
                  className={({ isActive }) => navLinkClass(isActive)} 
                  onClick={(e) => {
                    // Close the menu
                    setMenuState({ hamburgerOpen: false, metaMenuOpen: false });
                    // Scroll to top after navigation
                    window.scrollTo(0, 0);
                  }}
                >
                  Portfolio
                </NavLink>
              </motion.div>
                {/* Divider with enhanced animation */}
              <motion.div 
                variants={itemVariants}
                className="w-full h-0.5 bg-gradient-to-r from-[#ffe19b] via-[#ffffff] to-[#ffe19b] my-2"
                animate={{ 
                  boxShadow: ["0 0 4px rgba(255, 225, 155, 0.5)", "0 0 8px rgba(255, 225, 155, 0.8)", "0 0 4px rgba(255, 225, 155, 0.5)"],
                  transition: { 
                    repeat: Infinity, 
                    duration: 1.5,
                    ease: "easeInOut",
                    delay: 0.2 // slight delay for staggered effect between dividers
                  } 
                }}
              ></motion.div>
              
              {/* Vision link with animation */}              <motion.div 
                variants={itemVariants} 
                className="w-full flex justify-center py-1"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink
                  to="/vision"
                  className={({ isActive }) => navLinkClass(isActive)} 
                  onClick={(e) => {
                    // Close the menu
                    setMenuState({ hamburgerOpen: false, metaMenuOpen: false });
                    // Scroll to top after navigation
                    window.scrollTo(0, 0);
                  }}
                >
                  Vision
                </NavLink>
              </motion.div>
                {/* Divider with enhanced animation */}
              <motion.div 
                variants={itemVariants}
                className="w-full h-0.5 bg-gradient-to-r from-[#ffe19b] via-[#ffffff] to-[#ffe19b] my-2"
                animate={{ 
                  boxShadow: ["0 0 4px rgba(255, 225, 155, 0.5)", "0 0 8px rgba(255, 225, 155, 0.8)", "0 0 4px rgba(255, 225, 155, 0.5)"],
                  transition: { 
                    repeat: Infinity, 
                    duration: 1.5,
                    ease: "easeInOut",
                    delay: 0.4 // increased delay for staggered effect
                  } 
                }}
              ></motion.div>
              
              {/* IGM link with animation */}              <motion.div 
                variants={itemVariants} 
                className="w-full flex justify-center py-1"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink
                  to="/igm"
                  className={({ isActive }) => navLinkClass(isActive)}
                  onClick={(e) => {
                    // Close the menu
                    setMenuState({ hamburgerOpen: false, metaMenuOpen: false });
                    // Scroll to top after navigation
                    window.scrollTo(0, 0);
                  }}
                >
                  IGM
                </NavLink>
              </motion.div>
                {/* Bottom glowing divider with enhanced animation */}
              <motion.div 
                variants={itemVariants}
                className="w-full h-0.5 bg-gradient-to-r from-[#ffe19b] via-[#ffffff] to-[#ffe19b] mt-2 mb-2"
                animate={{ 
                  boxShadow: ["0 0 4px rgba(255, 225, 155, 0.5)", "0 0 8px rgba(255, 225, 155, 0.8)", "0 0 4px rgba(255, 225, 155, 0.5)"],
                  transition: { 
                    repeat: Infinity, 
                    duration: 1.5,
                    ease: "easeInOut",
                    delay: 0.6 // highest delay for the last divider in the sequence
                  } 
                }}
              ></motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}