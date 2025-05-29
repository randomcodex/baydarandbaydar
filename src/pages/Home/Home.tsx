import { usePageMetadata } from '@hooks/usePageMetadata'
import { Hero } from '@components/Hero'

export const Home = () => {
  usePageMetadata({
    title: 'Premium Italian Wine Imports | Baydar & Baydar',
    description:
      'Discover exceptional wines from Italy\'s finest vineyards. Baydar & Baydar brings you premium Italian wine imports with unmatched quality and authenticity.',
    keywords: 'Italian wine, premium wine imports, Baydar Baydar, wine collection, authentic Italian wines',
  })

  return (
    <Hero
      title="Baydar & Baydar"
      subtitle="Premium Italian Wine Imports"
      description="Discover exceptional wines from Italy's finest vineyards. We bring you authentic Italian wines with unmatched quality and heritage."
      backgroundImage="/assets/images/home/bghome.webp"
      containerId="home-container"
    />
  )
}
