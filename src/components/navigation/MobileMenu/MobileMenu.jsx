import { SocialIcon } from '../../ui/SocialMedia';
import MobileMenuButton from './MobileMenuButton';
import MobileMenuDropdown from './MobileMenuDropdown';

const MobileMenu = ({ 
  menuState, 
  handleMenuToggle, 
  navLinks, 
  socialLinks, 
  navLinkClass, 
  setMenuState 
}) => {
  const closeMenu = () => {
    setMenuState({ hamburgerOpen: false, metaMenuOpen: false });
  };

  return (
    <>
      <div className="lg:hidden flex items-center space-x-4">
        {socialLinks.filter(icon => icon.showOn === 'both').map((icon, idx) => (
          <SocialIcon key={idx} {...icon} />
        ))}
        <MobileMenuButton 
          isOpen={menuState.hamburgerOpen} 
          handleToggle={handleMenuToggle} 
        />
      </div>
      
      <MobileMenuDropdown 
        isOpen={menuState.hamburgerOpen}
        navLinks={navLinks}
        navLinkClass={navLinkClass}
        closeMenu={closeMenu}
      />
    </>
  );
};

export default MobileMenu;
