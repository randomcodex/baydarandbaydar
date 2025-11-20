import { useNavigate } from 'react-router-dom'
import { usePageMetadata } from '@hooks/usePageMetadata'
import { Hero } from '@components/Hero'
// Responsive background variants generated via vite-imagetools
// @ts-ignore imagetools query import (resize & convert to webp)
import bgSmall from '../../assets/images/home/bghome.webp?w=640&format=webp'
// @ts-ignore imagetools query import
import bgMedium from '../../assets/images/home/bghome.webp?w=1280&format=webp'
// @ts-ignore imagetools query import
import bgLarge from '../../assets/images/home/bghome.webp?w=1920&format=webp'
// AVIF variants
// @ts-ignore
import bgSmallAvif from '../../assets/images/home/bghome.webp?w=640&format=avif'
// @ts-ignore
import bgMediumAvif from '../../assets/images/home/bghome.webp?w=1280&format=avif'
// @ts-ignore
import bgLargeAvif from '../../assets/images/home/bghome.webp?w=1920&format=avif'

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
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  return (
    <Hero
      title="Baydar & Baydar"
      subtitle="Sourcing exquisite tastes for the discerning palate."
      backgroundImage={bgLarge}
      backgroundSources={[bgSmall, bgMedium, bgLarge]}
      backgroundAvifSources={[bgSmallAvif, bgMediumAvif, bgLargeAvif]}
      containerId="home-container"
      buttonText="View Selection"
      onButtonClick={handleViewSelection}
    />
  )
}
