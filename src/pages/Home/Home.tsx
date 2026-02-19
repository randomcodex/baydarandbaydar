import { useNavigate } from 'react-router-dom'
import { usePageMetadata } from '@hooks/usePageMetadata'
import { Hero } from '@components/Hero'
// @ts-expect-error vite-imagetools query params
import bgSmall from '../../assets/images/home/bghome.webp?w=640&format=webp&quality=85'
// @ts-expect-error vite-imagetools query params
import bgMedium from '../../assets/images/home/bghome.webp?w=1280&format=webp&quality=85'
// @ts-expect-error vite-imagetools query params
import bgLarge from '../../assets/images/home/bghome.webp?w=1920&format=webp&quality=85'
// @ts-expect-error vite-imagetools query params
import bgSmallAvif from '../../assets/images/home/bghome.webp?w=640&format=avif&quality=70'
// @ts-expect-error vite-imagetools query params
import bgMediumAvif from '../../assets/images/home/bghome.webp?w=1280&format=avif&quality=70'
// @ts-expect-error vite-imagetools query params
import bgLargeAvif from '../../assets/images/home/bghome.webp?w=1920&format=avif&quality=70'
// @ts-expect-error vite-imagetools query params
import bgBlur from '../../assets/images/home/bghome.webp?w=32&format=webp&blur=40&quality=50'

export const Home = () => {
  const navigate = useNavigate()

  usePageMetadata({
    title: 'Italia. Qualità. Vino. | Baydar & Baydar',
    description:
      'Baydar & Baydar works closely with select Italian wine producers, focusing on long-term brand presence, international market positioning, and the development of sustainable partnerships within the on-trade and specialist trade.',
    keywords:
      'Italian wine, fine wine, premium wine, wine import, wine trade, wine representation, Baydar & Baydar',
  })

  const handleViewSelection = () => {
    navigate('/portfolio')
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  return (
    <Hero
      title='Baydar & Baydar'
      subtitle='Italia. Qualità. Vino.'
      backgroundImage={bgLarge}
      backgroundSources={[bgSmall, bgMedium, bgLarge]}
      backgroundAvifSources={[bgSmallAvif, bgMediumAvif, bgLargeAvif]}
      backgroundPlaceholder={bgBlur}
      containerId='home-container'
      buttonText='Visit Portfolio'
      onButtonClick={handleViewSelection}
    />
  )
}
