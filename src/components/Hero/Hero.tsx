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
  backgroundSources?: string[]
  backgroundAvifSources?: string[]
  backgroundPlaceholder?: string
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
  backgroundPlaceholder,
  containerId = 'hero-container',
  buttonText,
  buttonVariant = 'secondary',
  buttonSize = 'sm',
  onButtonClick
}: HeroProps) => {
  const [resolvedBg, setResolvedBg] = useState(backgroundPlaceholder || backgroundImage)

  useEffect(() => {
    if (!backgroundSources || backgroundSources.length === 0) return
    const width = window.innerWidth
    const dpr = window.devicePixelRatio || 1
    const effectiveWidth = width * dpr

    const pick = (sources: string[]) => {
      if (effectiveWidth < 750) return sources[0]
      if (effectiveWidth < 1400) return sources[Math.min(1, sources.length - 1)]
      return sources[sources.length - 1]
    }

    const webpCandidate = pick(backgroundSources)

    if (backgroundAvifSources && backgroundAvifSources.length === backgroundSources.length) {
      const avifCandidate = pick(backgroundAvifSources)
      const testImg = new Image()
      testImg.onload = () => setResolvedBg(avifCandidate)
      testImg.onerror = () => {
        const fallbackImg = new Image()
        fallbackImg.onload = () => setResolvedBg(webpCandidate)
        fallbackImg.onerror = () => setResolvedBg(webpCandidate)
        fallbackImg.src = webpCandidate
      }
      testImg.src = avifCandidate
    } else {
      const fallbackImg = new Image()
      fallbackImg.onload = () => setResolvedBg(webpCandidate)
      fallbackImg.onerror = () => setResolvedBg(webpCandidate)
      fallbackImg.src = webpCandidate
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
