import { usePageMetadata } from '@hooks/usePageMetadata'
import { Portfolio as PortfolioComponent } from '@/components/Portfolio/Portfolio'

export const Portfolio = () => {
  usePageMetadata({
    title: 'Wine Portfolio | Baydar & Baydar',
    description: 'Explore our curated collection of premium Italian wines from the finest vineyards.',
    keywords: 'wine portfolio, Italian wines, premium wine collection, Baydar & Baydar wines',
  })

  return (
    <PortfolioComponent
      backgroundImage="./assets/images/portfolio/bgportfolio.webp"
      containerId="portfolio-container"
    />
  )
}
