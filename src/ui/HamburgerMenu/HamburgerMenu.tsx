import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { cn } from '../../utils'
import './HamburgerMenu.scss'

export interface HamburgerMenuProps {
  className?: string
  onLinkClick?: () => void
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  className,
  onLinkClick
}) => {
  const [isOpen, setIsOpen] = useState(false)

  // Handle body scroll lock when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('hamburger-menu-open')
    } else {
      document.body.classList.remove('hamburger-menu-open')
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('hamburger-menu-open')
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleLinkClick = () => {
    setIsOpen(false)
    onLinkClick?.()
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handleNavLinkClick = () => {
    scrollToTop()
    handleLinkClick()
  }

  return (
    <div className={cn('hamburger-menu', className)}>
      {/* Hamburger Button */}
      <button
        className={cn('hamburger-menu__button', {
          'hamburger-menu__button--open': isOpen
        })}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span className="hamburger-menu__line hamburger-menu__line--top"></span>
        <span className="hamburger-menu__line hamburger-menu__line--middle"></span>
        <span className="hamburger-menu__line hamburger-menu__line--bottom"></span>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="hamburger-menu__overlay"
          onClick={handleLinkClick}
        />
      )}

      {/* Mobile Menu */}
      <div className={cn('hamburger-menu__menu', {
        'hamburger-menu__menu--open': isOpen
      })}>
        <div className="hamburger-menu__panel">
          <div className="hamburger-menu__panel-inner">
            {/* Portfolio Link */}
            <div className="hamburger-menu__divider" />
            <div className="hamburger-menu__link-row">
              <NavLink
                to="/portfolio"
                className="hamburger-menu__nav-link"
                onClick={handleNavLinkClick}
                tabIndex={0}
              >
                Portfolio
              </NavLink>
            </div>
            <div className="hamburger-menu__divider" />
            {/* Vision Link */}
            <div className="hamburger-menu__link-row">
              <NavLink
                to="/vision"
                className="hamburger-menu__nav-link"
                onClick={handleNavLinkClick}
                tabIndex={0}
              >
                Vision
              </NavLink>
            </div>
            <div className="hamburger-menu__divider" />
            {/* IGM Link */}
            <div className="hamburger-menu__link-row">
              <NavLink
                to="/igm"
                className="hamburger-menu__nav-link"
                onClick={handleNavLinkClick}
                tabIndex={0}
              >
                IGM
              </NavLink>
            </div>
            <div className="hamburger-menu__divider" />
          </div>
        </div>
      </div>
    </div>
  )
}
