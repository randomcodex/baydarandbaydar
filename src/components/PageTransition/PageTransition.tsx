import { ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PageTransitionProps {
  children: ReactNode
  className?: string
}

// Enhanced page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 1.02,
    transition: {
      duration: 0.4,
      ease: [0.55, 0.085, 0.68, 0.53],
    },
  },
}

// Preload animation (for refreshes/initial visits)
const preloadVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
    filter: 'blur(4px)',
  },
  animate: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 1,
      ease: 'easeOut',
      when: 'beforeChildren',
    },
  },
}

export const PageTransition = ({ children, className = '' }: PageTransitionProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="page-content"
        className={`page-transition ${className}`}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{
          width: '100%',
          minHeight: '100vh',
          willChange: 'transform, opacity',
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

// Enhanced version for homepage with preload effects
export const HomePageTransition = ({ children, className = '' }: PageTransitionProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="home-page-content"
        className={`page-transition page-transition--home ${className}`}
        variants={preloadVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{
          width: '100%',
          minHeight: '100vh',
          willChange: 'transform, opacity, filter',
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
