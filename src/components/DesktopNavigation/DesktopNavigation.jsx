import { NavLink } from 'react-router-dom';

function DesktopNavigation({ navLinks, navLinkClass }) {
  return (
    <div className="flex-1 flex justify-center space-x-6">            
      {navLinks.map(link => (
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
  );
}

export default DesktopNavigation;
