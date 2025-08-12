import './Navbar.scss'
import SocialMediaIcons from '../SocialMediaIcons'
import Logo from '../Logo'
import { HamburgerMenu } from '../../ui/HamburgerMenu'

export const Navbar = () => {
  const menuItems = [
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'Vision', to: '/vision' },
    { label: 'IGM', to: '/igm' },
  ]

  return (
    <nav className="navbar">
      <Logo className="navbar__logo" size="large" />
      <SocialMediaIcons
        className="navbar__social"
        size="medium"
        variant="compact"
      />
      <div className="navbar__hamburger">
        <HamburgerMenu menuItems={menuItems} />
      </div>
    </nav>
  )
}
