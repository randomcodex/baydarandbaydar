import { usePageMetadata } from '@hooks/usePageMetadata'
import { Vision as VisionComponent } from '@/components/Vision'

export const Vision = () => {
  usePageMetadata({
    title: 'Our Vision | Baydar & Baydar',
    description: 'Our vision for representing select Italian wineries through long-term partnerships, market positioning, and international wine trade.',
    keywords: 'fine wine representation, Italian wineries, wine trade philosophy, winery partnerships, Baydar & Baydar',
  })

  return (
    <VisionComponent
      backgroundImage="./assets/images/vision/bgvision.webp"
      containerId="vision-container"
    />
  )
}
