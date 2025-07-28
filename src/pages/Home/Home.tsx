import { useNavigate } from 'react-router-dom'
import { usePageMetadata } from '@hooks/usePageMetadata'
import { Hero } from '@components/Hero'

export const Home = () => {
  const navigate = useNavigate()

  usePageMetadata({
    title: 'Premium Italian Wines | Baydar & Baydar',
    description:
      'Discover exceptional wines from Italy\'s finest vineyards. Baydar & Baydar brings you premium Italian wines with unmatched quality and authenticity.',
    keywords: 'Italian wine, premium wine imports, Baydar & Baydar, wine collection, authentic Italian wines',
  })

  const handleViewSelection = () => {
    navigate('/portfolio')
  }

  return (
    <Hero
      title="Baydar & Baydar"
      subtitle="Sourcing exquisite tastes for the discerning palate."
      backgroundImage="/assets/images/home/bghome.webp"
      containerId="home-container"
      buttonText="View Selection"
      onButtonClick={handleViewSelection}
    />
  )
}
