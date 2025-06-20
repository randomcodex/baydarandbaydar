import './Navbar.scss'
import SocialMediaIcons from '../SocialMediaIcons'
import Logo from '../Logo'

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo className="navbar__logo" size="large" />
      <div className="navbar__container">
        <SocialMediaIcons
          className="navbar__social"
          size="medium"
          variant="compact"
        />
      </div>
    </nav>
  )
}
