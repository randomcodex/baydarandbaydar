import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/images/logotransparent.png';
import emailIcon from '../assets/images/emailsvgrepo.svg';
import whatsappIcon from '../assets/images/whatsappsvgrepo.svg';
import linkedinIcon from '../assets/images/linkedinsvgrepo.svg';

// Navbar component for Baydar & Baydar
// Provides site navigation with a mobile-friendly hamburger menu
export default function Navbar() {
  // State for mobile menu toggle
  const [menuOpen, setMenuOpen] = useState(false);
  // State for logo click animation
  const [logoClicked, setLogoClicked] = useState(false);

  // Opens default email client with pre-filled recipient
  const handleEmailClick = () => {
    window.location.href = 'mailto:baydarandbaydar@gmail.com';
  };

  // Closes mobile menu when a link is clicked
  const handleMenuClick = () => {
    setMenuOpen(false);
  };

  // Toggles mobile menu visibility
  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  // Handles logo click animation and navigation
  const handleLogoClick = () => {
    // Only apply animation on mobile
    if (window.innerWidth < 1024) {
      setLogoClicked(true);
      setMenuOpen(false); // Close mobile menu on logo click
      // Reset after animation completes (500ms matches CSS duration)
      setTimeout(() => {
        setLogoClicked(false);
      }, 500);
    }
  };

  // Dynamic class for navigation links (applies active state styling)
  const navLinkClass = (isActive) =>
    `${isActive ? 'text-[#f6d484]' : 'text-white'} transition-transform duration-200 ease-in-out transform hover:scale-110 hover:underline underline-offset-4`;

  // Static class for non-NavLink elements (WhatsApp, Email)
  const staticLinkClass =
    'text-white hover:text-[#f6d484] transition-transform duration-200 ease-in-out transform hover:scale-110 hover:underline underline-offset-4 focus:outline-none';

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
                className={`absolute top-1 w-full h-full object-contain transition-transform duration-250 ease-in-out
                  scale-[135%]
                  hover:scale-[150%]
                  active:scale-[150%]
                  lg:scale-[150%]
                  lg:hover:scale-[175%]
                  ${logoClicked ? 'scale-[150%]' : ''}
                `}
              />
            </div>
          </Link>
        </div>

        {/* Mobile icons and hamburger menu button (hidden on desktop) */}
        <div className="lg:hidden flex items-center space-x-4">
          <img
            src={whatsappIcon}
            alt="WhatsApp Icon"
            className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
            onClick={() => window.open('https://wa.me/905338692852', '_blank')}
          />
          <img
            src={linkedinIcon}
            alt="LinkedIn Icon"
            className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
            onClick={() => window.open('https://www.linkedin.com/company/baydarandbaydar', '_blank')}
          />
          <img
            src={emailIcon}
            alt="Email Icon"
            className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
            onClick={handleEmailClick}
          />
          <button
            className="flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
          >
            {/* Animated hamburger icon lines */}
            <span className={`block w-6 h-0.5 bg-[#ffe19b] mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#ffe19b] mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#ffe19b] transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Desktop navigation links (hidden on mobile) */}
        <div className="hidden lg:flex items-center w-full">
          <div className="flex-1 flex justify-center space-x-6">
            <NavLink to="/portfolio" className={({ isActive }) => navLinkClass(isActive)}>Portfolio</NavLink>
            <NavLink to="/vision" className={({ isActive }) => navLinkClass(isActive)}>Vision</NavLink>
            <NavLink to="/igm" className={({ isActive }) => navLinkClass(isActive)}>IGM</NavLink>
          </div>
          <div className="flex space-x-4">
            <img
              src={whatsappIcon}
              alt="WhatsApp Icon"
              className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
              onClick={() => window.open('https://wa.me/905338692852', '_blank')}
            />
            <img
              src={linkedinIcon}
              alt="LinkedIn Icon"
              className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
              onClick={() => window.open('https://www.linkedin.com/company/baydarandbaydar', '_blank')}
            />
            <img
              src={emailIcon}
              alt="Email Icon"
              className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
              onClick={handleEmailClick}
            />
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col items-center space-y-1 mt-2 bg-[#051905] py-2 rounded-md shadow-lg border border-[#ffe19b]">
          <NavLink to="/portfolio" className={({ isActive }) => navLinkClass(isActive)} onClick={handleMenuClick}>Portfolio</NavLink>
          <NavLink to="/vision" className={({ isActive }) => navLinkClass(isActive)} onClick={handleMenuClick}>Vision</NavLink>
          <NavLink to="/igm" className={({ isActive }) => navLinkClass(isActive)} onClick={handleMenuClick}>IGM</NavLink>
        </div>
      )}
    </nav>
  );
}