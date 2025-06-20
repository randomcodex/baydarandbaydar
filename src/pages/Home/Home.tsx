import { usePageMetadata } from '@hooks/usePageMetadata'
import { Hero } from '@components/Hero'
import { HomePageTransition } from '@components/PageTransition'

export const Home = () => {
  usePageMetadata({
    title: 'Premium Italian Wine Imports | Baydar & Baydar',
    description:
      'Discover exceptional wines from Italy\'s finest vineyards. Baydar & Baydar brings you premium Italian wine imports with unmatched quality and authenticity.',
    keywords: 'Italian wine, premium wine imports, Baydar Baydar, wine collection, authentic Italian wines',
  })

  return (
    <HomePageTransition>
      <Hero
        title="Baydar & Baydar"
        subtitle="Sourcing exquisite tastes for the discerning palate."
        backgroundImage="/assets/images/home/bghome.webp"
        containerId="home-container"
        buttonText="View Selection"
        onButtonClick={() => {

          console.log('Navigate to wine collection')
        }}
      />
    </HomePageTransition>
  )
}
