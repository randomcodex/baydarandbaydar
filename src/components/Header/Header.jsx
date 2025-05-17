import { useState, useEffect, useCallback } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, SOCIAL_LINKS, LOGO } from './index';

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

function Header() {
  const [menuState, setMenuState] = useState({
    hamburgerOpen: false,
    metaMenuOpen: false,
  });
  const [logoClicked, setLogoClicked] = useState(false);
  const handleMenuToggle = useCallback((menu, event) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    setMenuState((prev) => {
      const newState = { hamburgerOpen: false, metaMenuOpen: false };
      return { ...newState, [menu]: !prev[menu] };
    });
  }, []);

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

  const handleEmailClick = useCallback(() => {
    window.location.href = 'mailto:baydarandbaydar@gmail.com';
  }, []);

  const handleLogoClick = useCallback(() => {
    if (window.innerWidth < 1024) {
      setLogoClicked(true);
      setMenuState({ hamburgerOpen: false, metaMenuOpen: false });
      setTimeout(() => {
        setLogoClicked(false);
      }, 500);
    }
  }, []);

  const navLinkClass = (isActive) =>
    `${isActive ? 'text-[#ffe19b] font-bold' : 'text-white font-bold'} transition-transform duration-200 ease-in-out transform hover:scale-110 hover:underline underline-offset-4 hover:text-[#ffe19b]`;

  return (
    <nav className="sticky top-0 bg-[#051905] text-white py-3 px-5 text-lg sm:text-xl z-50">
      <div className="container mx-auto flex items-center justify-between px-3 sm:px-5">
        <div className="flex items-center">
          <Link 
            to="/" 
            className="focus:outline-none" 
            aria-label="Home Button"
            onClick={() => {
              handleLogoClick();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setMenuState({ hamburgerOpen: false, metaMenuOpen: false });
            }}
          >
            <div className="h-12 w-24 relative group cursor-pointer lg:cursor-default">
              <img
                src={LOGO}
                alt="Company Logo"
                className={`absolute top w-full h-full object-contain transition-transform duration-500 ease-in-out
                  scale-[150%]
                  hover:scale-[165%]
                  active:scale-[165%]
                  lg:scale-[170%]
                  lg:hover:scale-[190%]
                  ${logoClicked ? 'scale-[165%]' : ''}
                  cursor-pointer`}
              />
            </div>
          </Link>
        </div>

        <div className="lg:hidden flex items-center space-x-4">
          {SOCIAL_LINKS.filter(icon => icon.showOn === 'both').map((icon, idx) => (
            <SocialIcon key={idx} {...icon} />
          ))}
          <button
            className="flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
            onClick={(e) => handleMenuToggle('hamburgerOpen', e)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-[#ffe19b] mb-1 transition-all ${menuState.hamburgerOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#ffe19b] mb-1 transition-all ${menuState.hamburgerOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#ffe19b] transition-all ${menuState.hamburgerOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        <div className="hidden lg:flex items-center w-full">          
          <div className="flex-1 flex justify-center space-x-6">            
            {NAV_LINKS.map(link => (
              <NavLink 
                key={link.to}
                to={link.to} 
                className={({ isActive }) => navLinkClass(isActive)} 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <div className="flex space-x-4">
            {SOCIAL_LINKS.filter(icon => icon.showOn === 'desktop' || icon.showOn === 'both').map((icon, idx) => (
              <SocialIcon key={idx} {...icon} />
            ))}
          </div>
        </div>
      </div>      
      <div className="lg:hidden overflow-hidden absolute w-full left-0 right-0">
        <AnimatePresence mode="sync">
          {menuState.hamburgerOpen && (
            <motion.div
              className="flex flex-col items-center mt-2 bg-[#051905] rounded-md shadow-lg overflow-hidden origin-top"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={(e) => e.stopPropagation()}
              layout
            >
              <motion.div 
                variants={itemVariants}
                className="w-full h-0.5 bg-gradient-to-r from-[#ffe19b] via-[#ffffff] to-[#ffe19b] mb-2"
                style={{ opacity: 1, transform: "none", boxShadow: "rgba(255, 225, 155, 0.55) 0px 0px 4.65716px" }}
                animate={{ 
                  boxShadow: [
                    "0 0 4px rgba(255, 225, 155, 0.5)",
                    "0 0 8px rgba(255, 225, 155, 0.8)",
                    "0 0 4px rgba(255, 225, 155, 0.5)"
                  ],
                  transition: { 
                    repeat: Infinity, 
                    duration: 1.5,
                    ease: "easeInOut" 
                  } 
                }}
              ></motion.div>

              {NAV_LINKS.map((link, idx) => (
                <>
                  <motion.div 
                    key={link.to}
                    variants={itemVariants} 
                    className="w-full flex justify-center py-1"
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <NavLink 
                      to={link.to} 
                      className={({ isActive }) => navLinkClass(isActive)} 
                      onClick={(e) => {
                        setMenuState({ hamburgerOpen: false, metaMenuOpen: false });
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                  {idx < NAV_LINKS.length - 1 && (
                    <motion.div 
                      key={link.to + '-divider'}
                      variants={itemVariants}
                      className="w-full h-0.5 bg-gradient-to-r from-[#ffe19b] via-[#ffffff] to-[#ffe19b] mt-2 mb-2"
                      style={{ opacity: 1, transform: "none", boxShadow: "rgba(255, 225, 155, 0.55) 0px 0px 4.65716px" }}
                      animate={{ 
                        boxShadow: [
                          "0 0 4px rgba(255, 225, 155, 0.5)",
                          "0 0 8px rgba(255, 225, 155, 0.8)",
                          "0 0 4px rgba(255, 225, 155, 0.5)"
                        ],
                        transition: { 
                          repeat: Infinity, 
                          duration: 1.5,
                          ease: "easeInOut" 
                        } 
                      }}
                    ></motion.div>
                  )}
                </>
              ))}

              <motion.div 
                variants={itemVariants}
                className="w-full h-0.5 bg-gradient-to-r from-[#ffe19b] via-[#ffffff] to-[#ffe19b] mt-2 mb-2"
                style={{ opacity: 1, transform: "none", boxShadow: "rgba(255, 225, 155, 0.55) 0px 0px 4.65716px" }}
                animate={{ 
                  boxShadow: [
                    "0 0 4px rgba(255, 225, 155, 0.5)",
                    "0 0 8px rgba(255, 225, 155, 0.8)",
                    "0 0 4px rgba(255, 225, 155, 0.5)"
                  ],
                  transition: { 
                    repeat: Infinity, 
                    duration: 1.5,
                    ease: "easeInOut",
                    delay: 0.6
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

export default Header;
