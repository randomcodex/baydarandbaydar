import { Link } from 'react-router-dom'
import { usePageMetadata } from '@hooks/usePageMetadata'
import './NotFound.scss'

export const NotFound = () => {
  usePageMetadata({
    title: 'Page Not Found | Baydar & Baydar',
    description:
      'The page you are looking for could not be found. Return to our homepage to explore our premium Italian wine collection.',
    keywords: '404, page not found, Baydar Baydar',
  })

  return (
    <div className='not-found'>
      <div className='container'>
        <div className='not-found__content'>
          <div className='not-found__number'>404</div>
          
          <h1>Page Not Found</h1>

          <p className='not-found__description'>
            Oops! It looks like this page has aged out of existence. Perhaps it's time to explore
            our exceptional wine collection instead?
          </p>

          <div className='not-found__actions'>
            <Link to='/' className='not-found__btn not-found__btn--primary'>
              Return Home
            </Link>
          </div>

          <div className='not-found__suggestions'>
            <h3>You might be looking for:</h3>
            <ul>
              <li>
                <Link to='/'>Home Page</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
