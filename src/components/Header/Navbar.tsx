import { Link } from 'react-router-dom'
import './Navbar.scss'
import SocialMediaIcons from '../SocialMediaIcons'
import Logo from '../Logo'

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
          <Link to="/portfolio" className="navbar__link" onClick={handleLinkClick}>Portfolio</Link>
        </li>
        <li className="navbar__nav-item vision-link">
          <a href="#vision" className="navbar__link" onClick={handleLinkClick}>Vision</a>
        </li>
        <li className="navbar__nav-item igm-link">
          <a href="#igm" className="navbar__link" onClick={handleLinkClick}>IGM</a>
        </li>
      </ul>
      <SocialMediaIcons
        className="navbar__social"
        size="medium"
        variant="compact"
      />
    </nav>
  )
}
