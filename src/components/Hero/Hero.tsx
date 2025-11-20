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
import { useBackgroundImage } from '@hooks/useBackgroundImage'
import './Hero.scss'
import { useEffect, useState } from 'react'

export interface HeroProps {
  title: string
  subtitle: string
  description?: string
  backgroundImage?: string
  /** Ordered low->high resolution image URLs; first used on small screens */
  backgroundSources?: string[]
  /** Optional AVIF variants matching backgroundSources ordering */
  backgroundAvifSources?: string[]
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
  backgroundImage = './assets/images/home/bghome.webp',
  backgroundSources,
  backgroundAvifSources,
  containerId = 'hero-container',
  buttonText,
  buttonVariant = 'secondary',
  buttonSize = 'md',
  onButtonClick
}: HeroProps) => {
  const [resolvedBg, setResolvedBg] = useState(backgroundImage)

  useEffect(() => {
    if (!backgroundSources || backgroundSources.length === 0) return
    const width = window.innerWidth
    const pick = (sources: string[]) => {
      if (width < 640) return sources[0]
      if (width < 1280) return sources[Math.min(1, sources.length - 1)]
      return sources[sources.length - 1]
    }
    const webpCandidate = pick(backgroundSources)

    // Try AVIF if provided
    if (backgroundAvifSources && backgroundAvifSources.length === backgroundSources.length) {
      const avifCandidate = pick(backgroundAvifSources)
      const testImg = new Image()
      testImg.onload = () => setResolvedBg(avifCandidate)
      testImg.onerror = () => setResolvedBg(webpCandidate)
      testImg.src = avifCandidate
    } else {
      setResolvedBg(webpCandidate)
    }
  }, [backgroundSources, backgroundAvifSources])

  useBackgroundImage({
    backgroundImage: resolvedBg,
    containerId,
    backgroundAttachment: 'parallax',
    parallaxSpeed: 0.2
  })

  return (
    <section
      id={containerId}
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
