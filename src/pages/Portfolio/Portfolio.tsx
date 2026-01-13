import { usePageMetadata } from '@hooks/usePageMetadata'
import { Portfolio as PortfolioComponent } from '@/components/Portfolio/Portfolio'

export const Portfolio = () => {
  usePageMetadata({
    title: 'Our Wineries | Baydar & Baydar',
    description: 'Our portfolio of select Italian wineries represented across international wine markets.',
    keywords: 'Italian wineries, wine partners, fine wine representation, winery portfolio, wine trade, Baydar & Baydar',
  })

  return (
    <PortfolioComponent
      backgroundImage="./assets/images/portfolio/bgportfolio.webp"
      containerId="portfolio-container"
    />
  )
}
