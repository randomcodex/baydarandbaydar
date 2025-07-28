import { usePageMetadata } from '@hooks/usePageMetadata'
import { IGM as IGMComponent } from '@/components/IGM'

export const IGM = () => {
  usePageMetadata({
    title: 'Istituto Grandi Marchi | Baydar & Baydar',
    description: 'At Baydar & Baydar, we embrace the spirit of Istituto Grandi Marchi—united in our devotion to heritage, craftsmanship, and the timeless poetry of Italian wine.',
    keywords: 'Istituto Grandi Marchi, Italian wine heritage, premium wine craftsmanship, Baydar & Baydar IGM, Italian wine tradition',
  })

  return (
    <IGMComponent
      containerId="igm-container"
    />
  )
}
