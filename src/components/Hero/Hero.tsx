import { useEffect, useCallback, useMemo, useRef } from 'react'
import { motion } from 'framer-motion'
import {
  heroTitle,
  heroSubtitle,
  heroDescription,
  heroButton,
  heroTextContainer
} from '../../animations'
import { Container } from '@ui/Container'
import { Button } from '@ui/Button'
import './Hero.scss'

export interface HeroProps {
  title: string
  subtitle: string
  description?: string
  backgroundImage?: string
  containerId?: string
  buttonText?: string
  buttonVariant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  buttonSize?: 'xs' | 'sm' | 'md' | 'lg'
  onButtonClick?: () => void
}

export const Hero = ({
  title,
  subtitle,
  description,
  backgroundImage = '/assets/images/home/bghome.webp',
  containerId = 'hero-container',
  buttonText,
  buttonVariant = 'secondary',
  buttonSize = 'md',
  onButtonClick
}: HeroProps) => {
  const isBackgroundLoadedRef = useRef(false)
  const memoizedContainerId = useMemo(() => containerId, [containerId])

  const setupBackground = useCallback(() => {
    if (!backgroundImage || isBackgroundLoadedRef.current) return

    try {
      const element = document.getElementById(memoizedContainerId)
      if (element) {        element.style.backgroundImage = `url(${backgroundImage})`
        element.style.backgroundSize = 'cover'
        element.style.backgroundPosition = 'center'
        element.style.backgroundRepeat = 'no-repeat'
        element.classList.add('bg-polish')
        isBackgroundLoadedRef.current = true
      }
    } catch (error) {
      console.error('Failed to load background image:', error)
    }
  }, [backgroundImage, memoizedContainerId])

  useEffect(() => {
    setupBackground()

    return () => {
      isBackgroundLoadedRef.current = false
    }
  }, [setupBackground])

  return (
    <section
      id={memoizedContainerId}
      className='hero'
    >
      <Container className="hero__content">
        <motion.div
          className="hero__text"
          variants={heroTextContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h1 variants={heroTitle} className="hero__title">
            {title}
          </motion.h1>
          <motion.p variants={heroSubtitle} className="hero__subtitle">
            {subtitle}
          </motion.p>
          {description && (
            <motion.p variants={heroDescription} className="hero__description">
              {description}
            </motion.p>
          )}          {buttonText && (
            <motion.div variants={heroButton} className="hero__actions">
              <Button
                variant={buttonVariant}
                size={buttonSize}
                onClick={onButtonClick}
              >
                {buttonText}
              </Button>
            </motion.div>
          )}        </motion.div>
      </Container>
    </section>
  )
}
