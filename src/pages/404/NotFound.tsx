import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { usePageMetadata } from '@hooks/usePageMetadata'
import { fadeIn, slideInUp } from '../../animations'
import './NotFound.scss'

export const NotFound = () => {
  usePageMetadata({
    title: 'Page Not Found | Baydar & Baydar',
    description:
      'The page you are looking for could not be found. Return to our homepage to explore our premium Italian wine collection.',
    keywords: '404, page not found, Baydar Baydar',
  })

  return (
    <motion.div className='not-found' variants={fadeIn} initial='initial' animate='animate'>
      <div className='container'>
        <div className='not-found__content'>
          <motion.div className='not-found__image' variants={slideInUp}>
            <img src='/assets/images/wine-glass-404.svg' alt='Wine glass' />
          </motion.div>

          <motion.h1 variants={slideInUp}>Page Not Found</motion.h1>

          <motion.p className='not-found__description' variants={slideInUp}>
            Oops! It looks like this page has aged out of existence. Perhaps it's time to explore
            our exceptional wine collection instead?
          </motion.p>

          <motion.div className='not-found__actions' variants={slideInUp}>
            <Link to='/' className='not-found__btn not-found__btn--primary'>
              Return Home
            </Link>
          </motion.div>

          <motion.div className='not-found__suggestions' variants={slideInUp}>
            <h3>You might be looking for:</h3>
            <ul>
              <li>
                <Link to='/'>Home Page</Link>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
