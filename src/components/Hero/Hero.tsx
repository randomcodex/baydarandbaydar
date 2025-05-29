import { useEffect, useCallback, useMemo, useRef } from 'react'
import { motion } from 'framer-motion'
import { fadeIn, slideInUp, staggerChildren } from '../../animations'
import { Container } from '@ui/Container'
import './Hero.scss'

export interface HeroProps {
  title: string
  subtitle: string
  description: string
  backgroundImage?: string
  containerId?: string
}

export const Hero = ({ 
  title, 
  subtitle, 
  description, 
  backgroundImage = '/assets/images/home/bghome.webp',
  containerId = 'hero-container'
}: HeroProps) => {
  const isBackgroundLoadedRef = useRef(false)
  const memoizedContainerId = useMemo(() => containerId, [containerId])

  const setupBackground = useCallback(() => {
    if (!backgroundImage || isBackgroundLoadedRef.current) return
    
    try {
      const element = document.getElementById(memoizedContainerId)
      if (element) {
        element.style.backgroundImage = `url(${backgroundImage})`
        element.style.backgroundSize = 'cover'
        element.style.backgroundPosition = 'center'
        element.style.backgroundRepeat = 'no-repeat'
        element.classList.add('bg-polish', 'bg-overlay')
        isBackgroundLoadedRef.current = true
      }
    } catch (error) {
      console.error('Failed to load background image:', error)
    }
  }, [backgroundImage, memoizedContainerId])

  useEffect(() => {
    setupBackground()
    
    // Cleanup function to reset the loaded state if component unmounts
    return () => {
      isBackgroundLoadedRef.current = false
    }
  }, [setupBackground])

  return (
    <motion.section 
      id={memoizedContainerId}
      className='hero'
      variants={fadeIn}
      initial="initial"
      animate="animate"
    >
      <Container className="hero__content">
        <motion.div 
          className="hero__text"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          <motion.h1 variants={slideInUp} className="hero__title">
            {title}
          </motion.h1>
          <motion.p variants={slideInUp} className="hero__subtitle">
            {subtitle}
          </motion.p>
          <motion.p variants={slideInUp} className="hero__description">
            {description}
          </motion.p>
        </motion.div>
      </Container>
    </motion.section>
  )
}