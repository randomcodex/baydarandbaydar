import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Logo.scss'

interface LogoProps {
  className?: string
  size?: 'small' | 'medium' | 'large'
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'large' }) => {
  const navigate = useNavigate()
  const [isAnimating, setIsAnimating] = useState(false)

  const handleLogoClick = () => {
    // Trigger pulse animation on mobile and tablet (below 1024px)
    if (window.innerWidth < 1024) {
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 1500)
    }

    navigate('/')

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      className={`logo ${className} logo--${size} ${isAnimating ? 'logo--pulse' : ''}`}
      onClick={handleLogoClick}
      role='button'
      tabIndex={0}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleLogoClick()
        }
      }}
      aria-label='Go to home page'
    >
      <img
        src='./assets/images/header/android-launchericon-96-96.svg'
        alt='Baydar & Baydar Logo'
        className='logo__image'
        width={96}
        height={96}
        decoding='async'
        fetchPriority='high'
      />
    </div>
  )
}

export default Logo
