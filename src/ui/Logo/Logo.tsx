import React from 'react'
import { Link } from 'react-router-dom'
import './Logo.scss'

interface LogoProps {
  className?: string
  size?: 'small' | 'medium' | 'large'
  href?: string
  isLink?: boolean
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'medium', 
  href = '/',
  isLink = true 
}) => {
  const handleClick = () => {
    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const logoContent = (
    <div className={`logo ${size} ${className}`}>
      <div className="logo__text">
        Baydar &amp; Baydar
      </div>
      <div className="logo__underlines">
        {Array.from({ length: 7 }, (_, index) => (
          <span
            key={index}
            className={`logo__underline logo__underline--${index + 1}`}
          />
        ))}
      </div>
    </div>
  )

  if (isLink) {
    return (
      <Link to={href} className="logo-link" onClick={handleClick}>
        {logoContent}
      </Link>
    )
  }

  return logoContent
}
