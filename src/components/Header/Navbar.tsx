import { NavLink } from 'react-router-dom'
import './Navbar.scss'
import SocialMediaIcons from '../SocialMediaIcons'
import Logo from '../Logo'
import { HamburgerMenu } from '../../ui'

export const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handleLinkClick = () => {
    scrollToTop()
  }

  return (
    <nav className="navbar">
      <Logo className="navbar__logo" size="large" />
      <ul className="navbar__nav">
        <li className="navbar__nav-item portfolio-link">
          <NavLink to="/portfolio" className="navbar__link" onClick={handleLinkClick}>Portfolio</NavLink>
        </li>
        <li className="navbar__nav-item vision-link">
          <NavLink to="/vision" className="navbar__link" onClick={handleLinkClick}>Vision</NavLink>
        </li>
        <li className="navbar__nav-item igm-link">
          <NavLink to="/igm" className="navbar__link" onClick={handleLinkClick}>IGM</NavLink>
        </li>
      </ul>
      <div className="hamburger-row">
        <SocialMediaIcons
          className="navbar__social"
          size="medium"
          variant="compact"
        />
        <HamburgerMenu 
          className="navbar__hamburger"
          onLinkClick={handleLinkClick}
        />
      </div>
    </nav>
  )
}
