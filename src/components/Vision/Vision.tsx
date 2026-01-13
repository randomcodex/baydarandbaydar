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
              viewport={{ once: true, amount: 0.1 }}
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
                      Our Vision
                      <span className="vision__title-underline"></span>
                    </span>
                  </motion.h2>
                  <motion.p 
                    className="vision__intro"
                    variants={itemVariants}
                  >
                    At <strong>Baydar &amp; Baydar</strong>, we believe that great wine is not merely produced — it is understood, positioned, and shared with respect. Our mission is to identify and represent Italy’s most distinctive wineries, estates shaped by land, legacy, and the quiet mastery of dedicated producers. We work alongside independent wineries whose focus is not scale, but purity and depth: limited-production estates rooted in history and terroir, expressing the identity of their region. Each winery within our portfolio is selected through thoughtful evaluation, with a focus on long-term representation and international relevance.
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
                      Our portfolio reflects the diversity of Italy’s twenty wine regions, from the sunlit coasts of the south to the alpine landscapes of the north. Each estate is defined by its geography, climate, and generations of accumulated knowledge, resulting in wines that speak clearly of their origin. From historic regions shaped by ancient trade routes to lesser-known areas preserving indigenous varieties, the wineries we represent embody Italy’s extraordinary viticultural heritage. Together, they form a landscape of expression where tradition, place, and individual vision remain inseparable.
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
                        Our work is dedicated to professional partners within the premium on-trade and specialist trade. We collaborate with luxury hotels, fine dining establishments, and hospitality groups that value provenance, consistency, and long-term collaboration.
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
                      With every winery we represent, we commit to clarity of identity, consistency of quality, and respect for origin. Our role is to ensure that each estate’s philosophy is preserved as it enters new markets, maintaining integrity across borders and vintages alike.
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
