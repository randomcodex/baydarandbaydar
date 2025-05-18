import { useState, useEffect, useCallback } from 'react';
import { NAV_LINKS, SOCIAL_LINKS } from './index';
import Logo from '../../navigation/Logo/Logo';
import DesktopNavigation from '../../navigation/DesktopNavigation/DesktopNavigation';
import SocialIconsGroup from '../../ui/SocialMedia/SocialIconsGroup';
import MobileMenu from '../../navigation/MobileMenu';

function Header() {  
  const [menuState, setMenuState] = useState({
    hamburgerOpen: false,
    metaMenuOpen: false,
  });
  
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

  const navLinkClass = (isActive) =>
    `${isActive ? 'text-[#ffe19b] font-bold' : 'text-white font-bold'} transition-transform duration-200 ease-in-out transform hover:scale-110 hover:underline underline-offset-4 hover:text-[#ffe19b]`;

  return (
    <nav className="sticky top-0 bg-[#051905] text-white py-3 px-5 text-lg sm:text-xl z-50">      
      <div className="container mx-auto flex items-center justify-between px-3 sm:px-5">
        <Logo setMenuState={setMenuState} />

        <MobileMenu 
          menuState={menuState}
          handleMenuToggle={handleMenuToggle}
          navLinks={NAV_LINKS}
          socialLinks={SOCIAL_LINKS}
          navLinkClass={navLinkClass}
          setMenuState={setMenuState}
        />

        <div className="hidden lg:flex items-center w-full">          
          <DesktopNavigation navLinks={NAV_LINKS} navLinkClass={navLinkClass} />
          <SocialIconsGroup socialLinks={SOCIAL_LINKS.filter(icon => icon.showOn === 'desktop' || icon.showOn === 'both')} />
        </div>
      </div>      
    </nav>
  );
}

export default Header;
