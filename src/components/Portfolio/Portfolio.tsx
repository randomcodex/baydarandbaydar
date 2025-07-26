import { useEffect, useCallback, useMemo, useRef } from 'react'
import { motion } from 'framer-motion'
import { Container } from '@ui/Container'
import { Card, CardHeader, CardBody, CardFooter } from '@ui/Card'
import { Button } from '@ui/Button'
import './Portfolio.scss'

export interface PortfolioProps {
  className?: string
  backgroundImage?: string
  containerId?: string
}

interface Winery {
  id: string
  name: string
  region: string
  description: string
  image: string
  established?: number
  specialty: string
  website: string
}

const wineries: Winery[] = [
  {
    id: '1',
    name: 'Agricola Cottini',
    region: 'Valpolicella, Veneto',
    description: 'Family estate in the prestigious Valpolicella region, crafting traditional Amarone and Ripasso wines with passion and expertise.',
    image: '/assets/images/wineries/agricola-cottini.webp',
    established: 1950,
    specialty: 'Amarone & Valpolicella Classics',
    website: 'https://www.agricolacottini.it'
  },
  {
    id: '2',
    name: 'Brancaia',
    region: 'Chianti Classico, Tuscany',
    description: 'Family-owned estate producing exceptional Chianti Classico and Super Tuscan wines with Swiss precision and Italian passion.',
    image: '/assets/images/wineries/brancaia.webp',
    established: 1981,
    specialty: 'Chianti Classico & Super Tuscans',
    website: 'https://www.brancaia.com'
  },
  {
    id: '3',
    name: 'Castello di Ama',
    region: 'Chianti Classico, Tuscany',
    description: 'Prestigious estate combining traditional winemaking with contemporary art, creating iconic Chianti Classico wines.',
    image: '/assets/images/wineries/castello-di-ama.webp',
    established: 1972,
    specialty: 'Chianti Classico & Single Vineyard',
    website: 'https://www.castellodiama.com'
  },
  {
    id: '4',
    name: 'Col Sandago',
    region: 'Conegliano Valdobbiadene, Veneto',
    description: 'Boutique winery in the heart of Prosecco country, specializing in premium DOCG Prosecco and unique Wildbacher varietals.',
    image: '/assets/images/wineries/col-sandago.webp',
    established: 1990,
    specialty: 'Prosecco DOCG & Wildbacher',
    website: 'https://www.colsandago.it'
  },  {
    id: '5',
    name: 'De Bartoli Etna',
    region: 'Sicily',
    description: 'Sicilian producer specializing in exceptional wines from the volcanic soils of Mount Etna, crafting elegant reds and distinctive whites.',
    image: '/assets/images/wineries/de-bartoli.webp',
    established: 1980,
    specialty: 'Etna Wines & Volcanic Terroir',
    website: 'https://debartolietna.it'
  },
  {
    id: '6',
    name: 'Francesco Marra',
    region: 'Salento, Puglia',
    description: 'Natural wine producer crafting naked, unfiltered wines from indigenous Salento grapes with minimal intervention.',
    image: '/assets/images/wineries/francesco-marra.webp',
    established: 2010,
    specialty: 'Natural Wines & Native Varietals',
    website: 'https://www.francescomarra.it'
  },  {
    id: '7',
    name: 'San Giovenale',
    region: 'Lazio',
    description: 'Innovative winery led by winemaker Emanuele Pangrazi, focused on sustainable viticulture and modern winemaking techniques in the heart of Lazio.',
    image: '/assets/images/wineries/habemus.webp',
    established: 2005,
    specialty: 'Sustainable & Modern Wines',
    website: 'https://www.roscioliwineclub.com/san-giovenale-emanuele-pangrazi-habemus/'
  },
  {
    id: '8',
    name: 'Inama',
    region: 'Soave, Veneto',
    description: 'Family estate specializing in premium Soave wines and Colli Berici reds from volcanic soils.',
    image: '/assets/images/wineries/inama.webp',
    established: 1964,
    specialty: 'Soave & Volcanic Terroir',
    website: 'https://www.inama.wine/en'
  },
  {
    id: '9',
    name: 'La Togata',
    region: 'Tuscany',
    description: 'Boutique winery producing elegant wines with a focus on terroir expression and traditional methods.',
    image: '/assets/images/wineries/la-togata.webp',
    established: 1995,
    specialty: 'Brunello di Montalcino & Sangiovese',
    website: 'https://www.latogata.com/'
  },
  {
    id: '10',
    name: 'La Valentina',
    region: 'Abruzzo',
    description: 'Family winery in Abruzzo producing exceptional wines from native grapes, combining tradition with innovation.',
    image: '/assets/images/wineries/la-valentina.webp',
    established: 1990,
    specialty: 'Abruzzese Varietals',
    website: 'https://www.lavalentina.it'
  },  {
    id: '11',
    name: 'Mastroberardino',
    region: 'Campania',
    description: 'Historic family winery preserving ancient grape varieties, pioneering southern Italian wines, and famous for the Villa dei Misteri project recreating ancient Pompeii wines.',
    image: '/assets/images/wineries/mastroberardino.webp',
    established: 1878,
    specialty: 'Ancient Grape Varieties',
    website: 'https://www.mastroberardino.com'
  },
  {
    id: '12',
    name: 'Montevetrano',
    region: 'Campania',
    description: 'Cult winery producing world-renowned Super Italian wines from Cabernet Sauvignon and Aglianico blends.',
    image: '/assets/images/wineries/montevetrano.webp',
    established: 1983,
    specialty: 'Super Italian Blends',
    website: 'https://www.montevetrano.it'
  },
  {
    id: '13',
    name: 'Oasi degli Angeli',
    region: 'Marche',
    description: 'Boutique producer crafting exceptional wines from carefully selected vineyard sites in the Marche region.',
    image: '/assets/images/wineries/oasi-degli-angeli.webp',
    established: 1999,
    specialty: 'Premium Marche Wines',
    website: 'https://www.kurni.it/'
  },
  {
    id: '14',
    name: 'Vignedileo',
    region: 'Marche',
    description: 'Family winery specializing in Verdicchio dei Castelli di Jesi and other premium wines from the Marche hills.',
    image: '/assets/images/wineries/vignedileo.webp',
    established: 1990,
    specialty: 'Verdicchio dei Castelli di Jesi',
    website: 'https://www.vignedileo.it'
  },
  {
    id: '15',
    name: 'Wine Emotion',
    region: 'Technology Solutions',
    description: 'Premium wine dispensing systems providing perfect preservation and serving solutions for wine by the glass programs.',
    image: '/assets/images/wineries/wine-emotion.webp',
    established: 2003,
    specialty: 'Wine Dispensers & Preservation Technology',
    website: 'https://www.wineemotion.com'
  }
]

export const Portfolio = ({ 
  className,
  backgroundImage = '/assets/images/portfolio/bgportfolio.webp',
  containerId = 'portfolio-container'
}: PortfolioProps) => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section
      id={memoizedContainerId}
      className={`portfolio ${className || ''}`}
    >
      <Container className="portfolio__content">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="portfolio__header"
        >
          <motion.h1 variants={cardVariants} className="portfolio__title">
            Our Wine Partners
          </motion.h1>
          <motion.p variants={cardVariants} className="portfolio__description">
            Discover exceptional wines from Italy's most prestigious estates and family-owned wineries
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="portfolio__grid"
        >
          {wineries.map((winery) => (
            <motion.div key={winery.id} variants={cardVariants}>
              <Card variant="wine" className="portfolio__card">
                <div className="portfolio__card-image">
                  <img 
                    src={winery.image} 
                    alt={winery.name}
                    onError={(e) => {
                      e.currentTarget.src = '/assets/images/placeholder-winery.webp'
                    }}
                  />
                </div>
                <CardHeader>
                  <h3 className="portfolio__card-title">{winery.name}</h3>
                  <p className="portfolio__card-region">{winery.region}</p>
                  {winery.established && (
                    <span className="portfolio__card-established">Est. {winery.established}</span>
                  )}
                </CardHeader>
                <CardBody>
                  <p className="portfolio__card-description">{winery.description}</p>
                  <div className="portfolio__card-specialty">
                    <strong>Specialty: </strong>{winery.specialty}
                  </div>
                </CardBody>                <CardFooter>
                  <Button 
                    variant="gold" 
                    size="sm" 
                    fullWidth
                    onClick={() => window.open(winery.website, '_blank', 'noopener,noreferrer')}
                  >
                    {winery.name === 'Wine Emotion' ? 'View Products' : 'View Wines'}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>          ))}
        </motion.div>
      </Container>
    </section>
  )
}
