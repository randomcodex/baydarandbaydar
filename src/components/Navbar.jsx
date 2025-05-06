import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleEmailClick = () => {
    window.location.href = 'mailto:baydarandbaydar@gmail.com';
  };

  return (
    <nav className="sticky top-0 bg-[#051905] text-white py-6 px-6 text-lg sm:text-xl relative z-50">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6">
        <Link to="/" className="text-lg sm:text-2xl font-serif text-[#ffe19b] sm:hidden">Baydar & Baydar</Link>
        <button
          className="sm:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setMenuOpen(m => !m)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#ffe19b] mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-[#ffe19b] mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-[#ffe19b] transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>
      <div className="hidden sm:flex justify-center space-x-8 w-full">
        <NavLink to="/" className={({isActive}) => isActive ? 'text-[#f6d484]' : 'text-white'}>Home</NavLink>
        <NavLink to="/brands" className={({isActive}) => isActive ? 'text-[#f6d484]' : 'text-white'}>Portfolio</NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? 'text-[#f6d484]' : 'text-white'}>About</NavLink>
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
        <div className="sm:hidden flex flex-col items-center space-y-4 mt-4 bg-[#051905] py-4 rounded-md shadow-lg">
          <NavLink to="/" className={({isActive}) => isActive ? 'text-[#f6d484]' : 'text-white'}>Home</NavLink>
          <NavLink to="/brands" className={({isActive}) => isActive ? 'text-[#f6d484]' : 'text-white'}>Portfolio</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'text-[#f6d484]' : 'text-white'}>About</NavLink>
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
      )}
    </nav>
  )
}
