import './Footer.scss'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__copyright'>
          © {currentYear} Baydar & Baydar. All rights reserved.
        </div>
        <a 
          href='https://toyomuhendislik.com' 
          target='_blank' 
          rel='noopener noreferrer'
          className='footer__powered-by'
        >
          Powered by Toyo Engineering
        </a>
      </div>
    </footer>
  )
}
