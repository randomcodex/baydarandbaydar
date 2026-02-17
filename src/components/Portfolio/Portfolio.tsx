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
  image: string
  website: string
}

const wineries: Winery[] = [
  {
    id: '1',
    name: 'Agricola Cottini',
    region: 'Valpolicella, Veneto',
    image:
      'https://www.agricolacottini.it/wp-content/uploads/2021/10/agricola-cottini-logo-white.png',
    website: 'https://www.agricolacottini.it',
  },
  {
    id: '2',
    name: 'Brancaia',
    region: 'Chianti Classico, Tuscany',
    image: 'https://brancaia.com/wp-content/uploads/Casa_Brancaia_Logo_400px.png',
    website: 'https://www.brancaia.com',
  },
  {
    id: '4',
    name: 'Col Sandago',
    region: 'Conegliano Valdobbiadene, Veneto',
    image: 'https://colsandago.it/wp-content/themes/gootheme-v2/static/img/cs_logo.svg',
    website: 'https://www.colsandago.it',
  },
  {
    id: '5',
    name: 'De Bartoli Etna',
    region: 'Etna, Sicily',
    image: 'https://debartolietna.it/wp-content/uploads/2024/03/DBE_logo-1-1-900x164.png',
    website: 'https://debartolietna.it',
  },
  {
    id: '6',
    name: 'Francesco Marra',
    region: 'Salento, Puglia',
    image: 'https://www.francescomarra.it/wp-content/uploads/2021/09/LOGO-MARRA-WHT.png',
    website: 'https://www.francescomarra.it',
  },
  {
    id: '7',
    name: 'San Giovenale',
    region: 'Rome, Lazio',
    image: './assets/images/portfolio/hab.png',
    website: 'http://www.sangiovenale.it/',
  },
  {
    id: '8',
    name: 'Inama',
    region: 'Soave, Veneto',
    image: 'https://inama.wine/wp-content/uploads/2025/10/logo-inama-solo.svg',
    website: 'https://www.inama.wine/en',
  },
  {
    id: '9',
    name: 'La Togata',
    region: 'Montalcino, Tuscany',
    image:
      'https://cdn.prod.website-files.com/62d5723c3038e04b6484b3c8/634ef407b912887e1077cd23_logo_vertica_black%402x-p-500.png',
    website: 'https://www.latogata.com/',
  },
  {
    id: '10',
    name: 'La Valentina',
    region: 'Teramo, Abruzzo',
    image: 'https://www.lavalentina.it/wp-content/uploads/2022/02/logo-fattoria-la-valentina2.svg',
    website: 'https://www.lavalentina.it',
  },
  {
    id: '11',
    name: 'Mastroberardino',
    region: 'Avellino, Campania',
    image: 'https://mastroberardino.com/wp-content/uploads/2020/09/logo-1.png',
    website: 'https://www.mastroberardino.com',
  },
  {
    id: '12',
    name: 'Montevetrano',
    region: 'Salerno, Campania',
    image: 'https://vinodabere.it/wp-content/uploads/2021/12/montevetrano-logo.png',
    website: 'https://www.montevetrano.it',
  },
  {
    id: '13',
    name: 'Oasi degli Angeli',
    region: 'Cupra Marittima, Marche',
    image: 'https://www.diemmevini.com/open2b/var/products/foto/kurni.png',
    website: 'https://www.kurni.it/',
  },
  {
    id: '14',
    name: 'Vignedileo',
    region: 'Castelli di Jesi, Marche',
    image: './assets/images/portfolio/vdl.webp',
    website: 'https://www.vignedileo.it',
  },
  {
    id: '15',
    name: 'Wine Emotion',
    region: 'Technology Solutions',
    image: './assets/images/portfolio/wem.png',
    website: 'https://www.wineemotion.com',
  },
]

export const Portfolio = ({
  className,
  backgroundImage = '/assets/images/portfolio/bgportfolio.webp',
  containerId = 'portfolio-container',
}: PortfolioProps) => {
  useBackgroundImage({
    backgroundImage,
    containerId,
    backgroundAttachment: 'parallax',
    parallaxSpeed: 0.3,
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
        delayChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id={containerId} className={`portfolio ${className || ''}`}>
      <Container className='portfolio__content'>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={containerVariants}
          className='portfolio__header'
        >
          <motion.h1 variants={cardVariants} className='portfolio__title'>
            Our Wineries
          </motion.h1>
          <motion.p variants={cardVariants} className='portfolio__description'>
            Select Italian estates and family-owned wineries.
          </motion.p>
        </motion.div>

        <motion.div
          initial='hidden'
          animate='visible'
          variants={containerVariants}
          className='portfolio__grid'
        >
          {sortedWineries.map(winery => (
            <motion.div key={winery.id} variants={cardVariants}>
              <Card
                variant='wine'
                className='portfolio__card'
                onClick={() => window.open(winery.website, '_blank', 'noopener,noreferrer')}
                style={{ cursor: 'pointer' }}
              >
                <div className='portfolio__card-image'>
                  <img
                    src={winery.image}
                    alt={winery.name}
                    onError={e => {
                      e.currentTarget.src = '/assets/images/placeholder-winery.webp'
                    }}
                  />
                </div>
                <CardHeader>
                  <h3 className='portfolio__card-title'>{winery.name}</h3>
                  <p className='portfolio__card-region'>{winery.region}</p>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
