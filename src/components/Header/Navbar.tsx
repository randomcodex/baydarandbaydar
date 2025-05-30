import './Navbar.scss'
import SocialMediaIcons from '../SocialMediaIcons'
import { Logo } from '@/ui/Logo'

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__brand">
          <Logo size="small" />
        </div>
        
        <SocialMediaIcons 
          className="navbar__social"
          size="medium"
          variant="compact"
        />
      </div>
    </nav>
  )
}
