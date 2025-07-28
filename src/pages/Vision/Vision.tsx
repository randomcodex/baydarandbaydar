import { usePageMetadata } from '@hooks/usePageMetadata'
import { Vision as VisionComponent } from '@/components/Vision'

export const Vision = () => {
  usePageMetadata({
    title: 'Our Vision | Baydar & Baydar',
    description: 'Discover our vision for bringing exceptional Italian wines to discerning palates worldwide.',
    keywords: 'vision, Italian wines, premium wine imports, Baydar & Baydar vision, wine philosophy',
  })

  return (
    <VisionComponent
      backgroundImage="/assets/images/vision/bgvision.webp"
      containerId="vision-container"
    />
  )
}
