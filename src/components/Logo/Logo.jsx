import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { LOGO } from '../Header/index';

function Logo({ setMenuState }) {
  const [logoClicked, setLogoClicked] = useState(false);

  const handleLogoClick = useCallback(() => {
    if (window.innerWidth < 1024) {
      setLogoClicked(true);
      setMenuState({ hamburgerOpen: false, metaMenuOpen: false });
      setTimeout(() => {
        setLogoClicked(false);
      }, 500);
    }
  }, [setMenuState]);

  return (
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
  );
}

export default Logo;
