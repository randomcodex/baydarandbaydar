import { useEffect } from 'react'
import { env } from '../config'

interface PageMetadata {
  title?: string
  description?: string
  keywords?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  canonicalUrl?: string
  structuredData?: Record<string, any>
}

export const usePageMetadata = (metadata: PageMetadata) => {
  useEffect(() => {
    // Set page title
    if (metadata.title) {
      document.title = metadata.title
    }

    // Set meta description
    if (metadata.description) {
      let metaDescription = document.querySelector('meta[name="description"]')
      if (!metaDescription) {
        metaDescription = document.createElement('meta')
        metaDescription.setAttribute('name', 'description')
        document.head.appendChild(metaDescription)
      }
      metaDescription.setAttribute('content', metadata.description)
    }

    // Set meta keywords
    if (metadata.keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]')
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta')
        metaKeywords.setAttribute('name', 'keywords')
        document.head.appendChild(metaKeywords)
      }
      metaKeywords.setAttribute('content', metadata.keywords)
    }

    // Set Open Graph title
    if (metadata.ogTitle) {
      let ogTitle = document.querySelector('meta[property="og:title"]')
      if (!ogTitle) {
        ogTitle = document.createElement('meta')
        ogTitle.setAttribute('property', 'og:title')
        document.head.appendChild(ogTitle)
      }
      ogTitle.setAttribute('content', metadata.ogTitle)
    }

    // Set Open Graph description
    if (metadata.ogDescription) {
      let ogDescription = document.querySelector('meta[property="og:description"]')
      if (!ogDescription) {
        ogDescription = document.createElement('meta')
        ogDescription.setAttribute('property', 'og:description')
        document.head.appendChild(ogDescription)
      }
      ogDescription.setAttribute('content', metadata.ogDescription)
    }

    // Set Open Graph image
    if (metadata.ogImage) {
      let ogImage = document.querySelector('meta[property="og:image"]')
      if (!ogImage) {
        ogImage = document.createElement('meta')
        ogImage.setAttribute('property', 'og:image')
        document.head.appendChild(ogImage)
      }
      ogImage.setAttribute('content', metadata.ogImage)
    } // Set canonical URL
    if (metadata.canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]')
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.setAttribute('rel', 'canonical')
        document.head.appendChild(canonical)
      }
      canonical.setAttribute('href', `${env.SITE_URL}${metadata.canonicalUrl}`)
    }

    // Set structured data
    if (metadata.structuredData) {
      // Remove existing structured data
      const existingScript = document.querySelector('script[type="application/ld+json"]')
      if (existingScript) {
        existingScript.remove()
      }

      // Add new structured data
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(metadata.structuredData)
      document.head.appendChild(script)
    }

    // Cleanup function
    return () => {
      // Optional: Clean up dynamically added meta tags if needed
    }
  }, [
    metadata.title,
    metadata.description,
    metadata.keywords,
    metadata.ogTitle,
    metadata.ogDescription,
    metadata.ogImage,
    metadata.canonicalUrl,
    metadata.structuredData
  ])
}
