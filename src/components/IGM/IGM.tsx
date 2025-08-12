import { motion } from 'framer-motion'
import { Container } from '@ui/Container'
import './IGM.scss'

export interface IGMProps {
  className?: string
  containerId?: string
}

export const IGM = ({ 
  className = '', 
  containerId = 'igm-container'
}: IGMProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const logoVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <div id={containerId} className={`igm ${className}`}>
      <Container>
        <motion.div 
          className="igm__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="igm__divider igm__divider--top"
            variants={itemVariants}
          />
          
          <motion.h1 
            className="igm__title"
            variants={itemVariants}
          >
            Istituto Grandi Marchi
          </motion.h1>
          
          <motion.p 
            className="igm__description"
            variants={itemVariants}
          >
            At Baydar & Baydar, we embrace the spirit of Istituto Grandi Marchi—united in our devotion to heritage, craftsmanship, and the timeless poetry of Italian wine.
          </motion.p>
          
          <motion.div 
            className="igm__logo-container"
            variants={logoVariants}
          >
            <div className="igm__logo-glow" />
            <a 
              href="https://www.istitutograndimarchi.it/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="igm__logo-link"
            >
              <img 
                alt="Istituto Grandi Marchi Official Logo" 
                className="igm__logo-image"
                src="/assets/images/igm/logoigm.png"
              />
            </a>
          </motion.div>
          
          <motion.div 
            className="igm__divider igm__divider--bottom"
            variants={itemVariants}
          />
        </motion.div>
      </Container>
    </div>
  )
}
