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
  /** Very small blurred placeholder shown until main background resolves */
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
  buttonSize = 'md',
  onButtonClick
}: HeroProps) => {
  const [resolvedBg, setResolvedBg] = useState(backgroundPlaceholder || backgroundImage)

  useEffect(() => {
    if (!backgroundSources || backgroundSources.length === 0) return
    const width = window.innerWidth
    const dpr = window.devicePixelRatio || 1
    const effectiveWidth = width * dpr

    const pick = (sources: string[]) => {
      // More granular breakpoints accounting for high-DPR mobile screens
      if (effectiveWidth < 750) return sources[0]            // small / low DPR mobile
      if (effectiveWidth < 1400) return sources[Math.min(1, sources.length - 1)] // medium phones & small tablets
      return sources[sources.length - 1]                     // large / retina tablets & desktops
    }

    const webpCandidate = pick(backgroundSources)

    // Preload chosen candidate; keep placeholder until one loads
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
