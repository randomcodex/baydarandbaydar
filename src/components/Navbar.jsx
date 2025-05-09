import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logotransparent.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoClicked, setLogoClicked] = useState(false);

  const handleEmailClick = () => {
    window.location.href = 'mailto:baydarandbaydar@gmail.com';
  };

  const handleMenuClick = () => {
    setMenuOpen(false);
  };

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleLogoScale = () => {
    if (window.innerWidth < 1024) {
      setLogoClicked(true);
      setTimeout(() => setLogoClicked(false), 500);
    }
  };

  // Shared classes for NavLinks (active + animation)
  const navLinkClass = (isActive) =>
    `${isActive ? 'text-[#f6d484]' : 'text-white'} transition-transform duration-200 ease-in-out transform hover:scale-110 hover:underline underline-offset-4`;

  // Shared classes for static links (WhatsApp, Email)
  const staticLinkClass =
    'text-white hover:text-[#f6d484] transition-transform duration-200 ease-in-out transform hover:scale-110 hover:underline underline-offset-4 focus:outline-none';

  return (
    <nav className="sticky top-0 bg-[#051905] text-white py-3 px-5 text-lg sm:text-xl relative z-50">
      <div className="container mx-auto flex items-center justify-between px-3 sm:px-5">
        {/* Logo */}
        <div className="flex items-center">
          <div
            className="h-12 w-24 relative group cursor-pointer lg:cursor-default"
            onClick={toggleLogoScale}
          >
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
        </div>

        {/* Hamburger icon */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#ffe19b] mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-[#ffe19b] mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-[#ffe19b] transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

        {/* Desktop navigation */}
        <div className="hidden lg:flex justify-center space-x-6 w-full">
          <NavLink to="/" className={({ isActive }) => navLinkClass(isActive)}>Home</NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => navLinkClass(isActive)}>Portfolio</NavLink>
          <NavLink to="/vision" className={({ isActive }) => navLinkClass(isActive)}>Vision</NavLink>
          <NavLink to="/igm" className={({ isActive }) => navLinkClass(isActive)}>IGM</NavLink>
          <a
            href="https://wa.me/905338692852"
            target="_blank"
            rel="noopener noreferrer"
            className={staticLinkClass}
          >
            WhatsApp
          </a>
          <button onClick={handleEmailClick} className={staticLinkClass}>
            Email
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col items-center space-y-1 mt-2 bg-[#051905] py-2 rounded-md shadow-lg border border-[#ffe19b]">
          <NavLink to="/" className={({ isActive }) => navLinkClass(isActive)} onClick={handleMenuClick}>Home</NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => navLinkClass(isActive)} onClick={handleMenuClick}>Portfolio</NavLink>
          <NavLink to="/vision" className={({ isActive }) => navLinkClass(isActive)} onClick={handleMenuClick}>Vision</NavLink>
          <NavLink to="/igm" className={({ isActive }) => navLinkClass(isActive)} onClick={handleMenuClick}>IGM</NavLink>
          <a
            href="https://wa.me/905338692852"
            target="_blank"
            rel="noopener noreferrer"
            className={staticLinkClass}
            onClick={handleMenuClick}
          >
            WhatsApp
          </a>
          <button
            onClick={() => {
              handleEmailClick();
              handleMenuClick();
            }}
            className={staticLinkClass}
          >
            Email
          </button>
        </div>
      )}
    </nav>
  );
}
