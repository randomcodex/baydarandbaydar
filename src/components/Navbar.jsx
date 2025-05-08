import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleEmailClick = () => {
    window.location.href = 'mailto:baydarandbaydar@gmail.com';
  };

  const handleMenuClick = () => {
    setMenuOpen(false);
  };

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="sticky top-0 bg-[#051905] text-white py-6 px-6 text-lg sm:text-xl relative z-50">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6">
        <button
          className="sm:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#ffe19b] mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-[#ffe19b] mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-[#ffe19b] transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>
      <div className="hidden sm:flex justify-center space-x-6 w-full">
        <NavLink to="/" className={({isActive}) => isActive ? 'text-[#f6d484]' : 'text-white'}>Home</NavLink>
        <NavLink to="/portfolio" className={({isActive}) => isActive ? 'text-[#f6d484]' : 'text-white'}>Portfolio</NavLink>
        <NavLink to="/vision" className={({isActive}) => isActive ? 'text-[#f6d484]' : 'text-white'}>Vision</NavLink>
        <NavLink to="/igm" className={({isActive}) => isActive ? 'text-[#f6d484]' : 'text-white'}>IGM</NavLink>
        <a
          href="https://wa.me/905338692852"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#f6d484] transition focus:outline-none"
        >
          WhatsApp
        </a>
        <button
          onClick={handleEmailClick}
          className="text-white hover:text-[#f6d484] transition focus:outline-none"
        >
          Email
        </button>
      </div>
      {menuOpen && (
        <div className="sm:hidden flex flex-col items-center space-y-1 mt-2 bg-[#051905] py-2 rounded-md shadow-lg border border-[#ffe19b]">
          <NavLink to="/" className={({isActive}) => isActive ? 'text-[#f6d484]' : 'text-white'} onClick={handleMenuClick}>Home</NavLink>
          <NavLink to="/portfolio" className={({isActive}) => isActive ? 'text-[#f6d484]' : 'text-white'} onClick={handleMenuClick}>Portfolio</NavLink>
          <NavLink to="/vision" className={({isActive}) => isActive ? 'text-[#f6d484]' : 'text-white'} onClick={handleMenuClick}>Vision</NavLink>
          <NavLink to="/igm" className={({isActive}) => isActive ? 'text-[#f6d484]' : 'text-white'} onClick={handleMenuClick}>IGM</NavLink>
          <a
            href="https://wa.me/905338692852"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#f6d484] transition focus:outline-none"
            onClick={handleMenuClick}
          >
            WhatsApp
          </a>
          <button
            onClick={() => {
              handleEmailClick();
              handleMenuClick();
            }}
            className="text-white hover:text-[#f6d484] transition focus:outline-none"
          >
            Email
          </button>
        </div>
      )}
    </nav>
  )
}
