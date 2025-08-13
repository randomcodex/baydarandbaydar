import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Logo.scss';

interface LogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'large' }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`logo ${className} logo--${size}`}
      onClick={handleLogoClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleLogoClick();
        }
      }}
      aria-label="Go to home page"
    >
      <img
        src="./assets/images/header/logotransparent.png"
        alt="Baydar & Baydar Logo"
        className="logo__image"
      />
    </div>
  );
};

export default Logo;
