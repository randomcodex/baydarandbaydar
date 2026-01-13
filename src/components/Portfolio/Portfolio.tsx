import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Container } from '@ui/Container'
import { Card, CardHeader, CardBody, CardFooter } from '@ui/Card'
import { useBackgroundImage } from '@hooks/useBackgroundImage'
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
    image: 'https://www.agricolacottini.it/wp-content/uploads/2021/10/agricola-cottini-logo-white.png',
    established: 1950,
    specialty: 'Amarone & Valpolicella Classics',
    website: 'https://www.agricolacottini.it'
  },
  {
    id: '2',
    name: 'Brancaia',
    region: 'Chianti Classico, Tuscany',
    description: 'Family-owned estate producing exceptional Chianti Classico and Super Tuscan wines with Swiss precision and Italian passion.',
    image: 'https://brancaia.com/wp-content/uploads/Casa_Brancaia_Logo_400px.png',
    established: 1981,
    specialty: 'Chianti Classico & Super Tuscans',
    website: 'https://www.brancaia.com'
  },
  {
    id: '4',
    name: 'Col Sandago',
    region: 'Conegliano Valdobbiadene, Veneto',
    description: 'Boutique winery in the heart of Prosecco country, specializing in premium DOCG Prosecco and unique Wildbacher varietals.',
    image: 'https://colsandago.it/wp-content/themes/gootheme-v2/static/img/cs_logo.svg',
    established: 1960,
    specialty: 'Prosecco DOCG & Wildbacher',
    website: 'https://www.colsandago.it'
  },  {
    id: '5',
    name: 'De Bartoli Etna',
    region: 'Sicily',
    description: 'Sicilian producer specializing in exceptional wines from the volcanic soils of Mount Etna, crafting elegant reds and distinctive whites.',
    image: 'https://debartolietna.it/wp-content/uploads/2024/03/DBE_logo-1-1-900x164.png',
    established: 1980,
    specialty: 'Etna Wines & Volcanic Terroir',
    website: 'https://debartolietna.it'
  },
  {
    id: '6',
    name: 'Francesco Marra',
    region: 'Salento, Puglia',
    description: 'Natural wine producer crafting naked, unfiltered wines from indigenous Salento grapes with minimal intervention.',
    image: 'https://www.francescomarra.it/wp-content/uploads/2021/09/LOGO-MARRA-WHT.png',
    established: 2010,
    specialty: 'Natural Wines & Native Varietals',
    website: 'https://www.francescomarra.it'
  },  {
    id: '7',
    name: 'San Giovenale',
    region: 'Lazio',
    description: 'Innovative winery led by winemaker Emanuele Pangrazi, focused on sustainable viticulture and modern winemaking techniques in the heart of Lazio.',
    image: './assets/images/portfolio/hab.png',
    established: 2005,
    specialty: 'Sustainable & Modern Wines',
    website: 'http://www.sangiovenale.it/'
  },
  {
    id: '8',
    name: 'Inama',
    region: 'Soave, Veneto',
    description: 'Family estate specializing in premium Soave wines and Colli Berici reds from volcanic soils.',
    image: 'https://www.inama.wine/wp-content/themes/inama/images/logo-inama.png',
    established: 1964,
    specialty: 'Soave & Volcanic Terroir',
    website: 'https://www.inama.wine/en'
  },
  {
    id: '9',
    name: 'La Togata',
    region: 'Tuscany',
    description: 'Boutique winery producing elegant wines with a focus on terroir expression and traditional methods.',
    image: 'https://cdn.prod.website-files.com/62d5723c3038e04b6484b3c8/634ef407b912887e1077cd23_logo_vertica_black%402x-p-500.png',
    established: 1995,
    specialty: 'Brunello di Montalcino & Sangiovese',
    website: 'https://www.latogata.com/'
  },
  {
    id: '10',
    name: 'La Valentina',
    region: 'Abruzzo',
    description: 'Family winery in Abruzzo producing exceptional wines from native grapes, combining tradition with innovation.',
    image: 'https://www.lavalentina.it/wp-content/uploads/2022/02/logo-fattoria-la-valentina2.svg',
    established: 1990,
    specialty: 'Abruzzese Varietals',
    website: 'https://www.lavalentina.it'
  },  {
    id: '11',
    name: 'Mastroberardino',
    region: 'Campania',
    description: 'Historic family winery preserving ancient grape varieties, pioneering southern Italian wines, and famous for the Villa dei Misteri project recreating ancient Pompeii wines.',
    image: 'https://mastroberardino.com/wp-content/uploads/2020/09/logo-1.png',
    established: 1878,
    specialty: 'Ancient Grape Varieties',
    website: 'https://www.mastroberardino.com'
  },
  {
    id: '12',
    name: 'Montevetrano',
    region: 'Campania',
    description: 'Cult winery producing world-renowned Super Italian wines from Cabernet Sauvignon and Aglianico blends.',
    image: 'https://vinodabere.it/wp-content/uploads/2021/12/montevetrano-logo.png',
    established: 1983,
    specialty: 'Super Italian Blends',
    website: 'https://www.montevetrano.it'
  },
  {
    id: '13',
    name: 'Oasi degli Angeli',
    region: 'Marche',
    description: 'Boutique producer crafting renowned Kurni and Kupra wines from the Marche region.',
    image: 'https://www.diemmevini.com/open2b/var/products/foto/kurni.png',
    established: 1999,
    specialty: 'Kurni & Kupra Premium Wines',
    website: 'https://www.kurni.it/'
  },
  {
    id: '14',
    name: 'Vignedileo',
    region: 'Marche',
    description: 'Family winery specializing in Verdicchio dei Castelli di Jesi and other premium wines from the Marche hills.',
    image: './assets/images/portfolio/vdl.webp',
    established: 1990,
    specialty: 'Verdicchio dei Castelli di Jesi',
    website: 'https://www.vignedileo.it'
  },
  {
    id: '15',
    name: 'Wine Emotion',
    region: 'Technology Solutions',
    description: 'Premium wine dispensing systems providing perfect preservation and serving solutions for wine by the glass programs.',
    image: './assets/images/portfolio/wem.png',
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
  useBackgroundImage({
    backgroundImage,
    containerId,
    backgroundAttachment: 'parallax',
    parallaxSpeed: 0.3
  })

  const sortedWineries = useMemo(() => {
    return [...wineries].sort((a, b) => a.name.localeCompare(b.name))
  }, [])

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
      id={containerId}
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
            Our Wineries
          </motion.h1>
          <motion.p variants={cardVariants} className="portfolio__description">
            Select Italian estates and family-owned wineries.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="portfolio__grid"
        >
          {sortedWineries.map((winery) => (
            <motion.div key={winery.id} variants={cardVariants}>
              <Card 
                variant="wine" 
                className="portfolio__card"
                onClick={() => window.open(winery.website, '_blank', 'noopener,noreferrer')}
                style={{ cursor: 'pointer' }}
              >
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
                </CardBody>
                <CardFooter>
                  <div className="portfolio__card-specialty">
                    <strong>Specialty: </strong>{winery.specialty}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
