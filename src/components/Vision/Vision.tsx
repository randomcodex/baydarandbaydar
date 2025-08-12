import { motion } from 'framer-motion'
import { Container } from '@ui/Container'
import { useBackgroundImage } from '@hooks/useBackgroundImage'
import './Vision.scss'

export interface VisionProps {
  className?: string
  backgroundImage?: string
  containerId?: string
}

export const Vision = ({ 
  className = '', 
  backgroundImage = '/assets/images/vision/bgvision.webp',
  containerId = 'vision-container'
}: VisionProps) => {
  useBackgroundImage({
    backgroundImage,
    containerId,
    backgroundAttachment: 'parallax',
    parallaxSpeed: 0.5
  })

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
      y: 40,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.section
      className={`vision ${className}`.trim()}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      id={containerId}
    >
      <Container className="vision__container">
        <div className="vision__content">
          <div className="vision__card-container">
            <motion.div 
              className="vision__mission-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
            <motion.div 
              className="vision__card"
              variants={itemVariants}
            >
              <motion.section 
                className="vision__card-section"
                variants={itemVariants}
              >
                <motion.div 
                  className="vision__header"
                  variants={itemVariants}
                >
                  <motion.h2 
                    className="vision__title"
                    variants={itemVariants}
                  >
                    <span className="vision__title-text">
                      Our Mission
                      <span className="vision__title-underline"></span>
                    </span>
                  </motion.h2>
                  <motion.p 
                    className="vision__intro"
                    variants={itemVariants}
                  >
                    At <strong>Baydar &amp; Baydar</strong>, we believe that great wine is not just produced — it is discovered, understood, and shared with reverence. Our mission is to seek out Italy's most exceptional wines — bottles shaped by land, legacy, and the quiet mastery of dedicated artisans. We partner with producers who work not for scale, but for purity and depth: limited-production wines rooted in history and terroir, expressing the very soul of their region. Each selection in our portfolio is the result of thoughtful curation — an invitation to experience a deeper narrative of Italian viticulture, one bottle at a time. Whether born of ancient volcanic soils or alpine breezes, our wines are chosen for those who seek not only taste, but truth.
                  </motion.p>
                </motion.div>
                
                <motion.div 
                  className="vision__sections"
                  variants={itemVariants}
                >
                  <motion.div 
                    className="vision__section"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={sectionVariants}
                  >
                    <h3 className="vision__section-title">
                      <span className="vision__section-title-text">
                        A Journey Through Italy
                        <span className="vision__section-title-underline"></span>
                      </span>
                    </h3>
                    <p className="vision__section-text">
                      Our portfolio celebrates the vast diversity of Italy's twenty wine regions—from the sunlit coasts of Sicily to the alpine peaks of Valle d'Aosta. Each bottle is a faithful expression of its origin, shaped by soil, climate, and centuries of tradition. We showcase the elegance of Piedmont's Barolo, the charm of Veneto's Prosecco, the soul of Tuscany's Sangiovese, and the volcanic depth of Campania's ancient grapes. These wines are more than regional—each one carries the voice of its land and the vision of its maker.
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    className="vision__section"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={sectionVariants}
                  >
                    <h3 className="vision__section-title">
                      <span className="vision__section-title-text">
                        Artisans, Not Factories
                        <span className="vision__section-title-underline"></span>
                      </span>
                    </h3>
                    <p className="vision__section-text">
                      We partner exclusively with visionary producers—reclusive oenologists, multigenerational family estates, and world-renowned names. Regardless of scale, what unites them is a shared philosophy: respect for nature, excellence in craft, and a passion for storytelling through wine.
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    className="vision__sections-row"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.2
                        }
                      }
                    }}
                  >
                    <motion.div 
                      className="vision__section vision__section--half"
                      variants={sectionVariants}
                    >
                      <h3 className="vision__section-title">
                        <span className="vision__section-title-text">
                          Wine as Cultural Memory
                          <span className="vision__section-title-underline"></span>
                        </span>
                      </h3>
                      <p className="vision__section-text">
                        At Baydar &amp; Baydar, we believe wine is more than a beverage—it is an art form. Like Caravaggio's <em>Bacchus</em>, each bottle holds a mirror to beauty, indulgence, and history. These are vessels of cultural memory, infused with myth, artistry, and centuries of enological wisdom.
                      </p>
                    </motion.div>
                    
                    <motion.div 
                      className="vision__section vision__section--half"
                      variants={sectionVariants}
                    >
                      <h3 className="vision__section-title">
                        <span className="vision__section-title-text">
                          Serving the Refined
                          <span className="vision__section-title-underline"></span>
                        </span>
                      </h3>
                      <p className="vision__section-text">
                        Our clients include luxury hotels, haute cuisine establishments, private collectors, and cultural tastemakers—those who seek not only exceptional wines, but also the stories behind them.
                      </p>
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="vision__section"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={sectionVariants}
                  >
                    <h3 className="vision__section-title">
                      <span className="vision__section-title-text">
                        Excellence with Every Vintage
                        <span className="vision__section-title-underline"></span>
                      </span>
                    </h3>
                    <p className="vision__section-text">
                      With every wine we import, we offer more than quality. We offer nuance, narrative, and a true sense of place.
                    </p>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="vision__signature"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={sectionVariants}
                >
                  <div className="vision__signature-content">
                    <p className="vision__signature-name">- Barış Baydar -</p>
                    <p className="vision__signature-title">Director, Baydar &amp; Baydar</p>
                  </div>
                </motion.div>
              </motion.section>
            </motion.div>
          </motion.div>
        </div>
      </div>
      </Container>
    </motion.section>
  )
}
