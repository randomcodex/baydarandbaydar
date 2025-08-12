import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, NavLink } from 'react-router-dom';
import GlowingDivider from '../GlowingDivider';
import { menuVariants, itemVariants, dividerVariants } from '../../styles/menuAnimations';
import './HamburgerMenu.scss';

interface MenuItem {
  label: string;
  to: string;
}

export interface HamburgerMenuProps {
  menuItems?: MenuItem[];
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ 
  menuItems = [
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'Vision', to: '/vision' },
    { label: 'IGM', to: '/igm' }
  ]
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const previousLocationRef = useRef(location.pathname);

  console.log('HamburgerMenu - Current location:', location.pathname);
  console.log('HamburgerMenu - Menu is open:', isOpen);

  const toggleMenu = () => {
    if (isOpen) {
      closeMenu();
    } else {
      setIsOpen(true);
      setIsClosing(false);
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsClosing(false);
  };

  useEffect(() => {
    const currentPath = location.pathname;
    const previousPath = previousLocationRef.current;
    
    console.log('Location changed from:', previousPath, 'to:', currentPath, 'Menu open:', isOpen);
    
    if (currentPath !== previousPath && isOpen) {
      console.log('Navigation detected - closing menu after delay');
      requestAnimationFrame(() => {
        setTimeout(() => {
          closeMenu();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }, 100);
      });
    }
    
    previousLocationRef.current = currentPath;
  }, [location.pathname, isOpen]);

  useEffect(() => {
    const handleCurrentPageClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && isOpen) {
        const linkPath = link.getAttribute('href');
        const currentPath = location.pathname;
        
        if (linkPath === currentPath) {
          console.log('Current page link clicked - scrolling to top');
          closeMenu();
          setTimeout(() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleCurrentPageClick);
    }

    return () => {
      document.removeEventListener('click', handleCurrentPageClick);
    };
  }, [isOpen, location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const menuContent = target.closest('.mobile-menu-content');
      const hamburgerButton = target.closest('.hamburger-menu');
      
      if (isOpen && !menuContent && !hamburgerButton) {
        console.log('Click outside menu detected - closing menu');
        closeMenu();
      }
    };

    if (isOpen) {
      setTimeout(() => {
        document.addEventListener('click', handleClickOutside);
      }, 100);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  const navLinks = menuItems;

  const MobileMenuPortal = () => {    
    return createPortal(
      <AnimatePresence mode="wait">
        {isOpen && (
          <div className="mobile-menu-overlay">
            <div className="mobile-menu-container">
              <motion.div
                className={`mobile-menu-content ${isClosing ? 'closing' : ''}`}
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                layout
              >
                <div className="mobile-menu-item-wrapper">
                  <motion.div variants={dividerVariants} custom={0}>
                    <GlowingDivider />
                  </motion.div>
                </div>
                
                {navLinks.map((link, idx) => (
                  <React.Fragment key={link.to}>
                    <div className="mobile-menu-item-wrapper">
                      <motion.div
                        variants={itemVariants} 
                        className="mobile-menu-item"
                        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <NavLink 
                          to={link.to} 
                          className={({isActive}) => 
                            `mobile-menu-link ${isActive ? 'mobile-menu-link--active' : ''}`
                          }
                          end
                        >
                          {link.label}
                        </NavLink>
                      </motion.div>
                    </div>
                    {idx < navLinks.length - 1 && (
                      <div className="mobile-menu-item-wrapper">
                        <motion.div variants={dividerVariants} custom={idx + 1}>
                          <GlowingDivider />
                        </motion.div>
                      </div>
                    )}
                  </React.Fragment>
                ))}

                <div className="mobile-menu-item-wrapper">
                  <motion.div variants={dividerVariants} custom={navLinks.length + 1}>
                    <GlowingDivider />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>,
      document.body
    );
  };  
  
  return (
    <>
      <div className="hamburger-menu" ref={menuRef}>
        <button
          className={`hamburger-menu__button ${isOpen ? 'hamburger-menu__button--open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <MobileMenuPortal />
    </>
  );
};

export { HamburgerMenu };
export default HamburgerMenu;
