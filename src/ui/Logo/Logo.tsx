import { Link } from 'react-router-dom'
import './Logo.scss'

export const Logo = () => {
  return (
    <Link to='/' className='logo'>
      <div className='logo__container'>
        <div className='logo__text'>
          <span className='logo__title'>Baydar & Baydar</span>
          <span className='logo__handshake'>🤝</span>
        </div>
      </div>
    </Link>
  )
}
