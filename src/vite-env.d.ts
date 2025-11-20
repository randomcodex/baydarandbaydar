/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string
  readonly VITE_SITE_URL: string
  readonly VITE_COMPANY_EMAIL: string
  readonly VITE_COMPANY_PHONE: string
  readonly VITE_GOOGLE_ANALYTICS_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// Vite ImageTools query imports (treat processed assets as strings for background urls)
declare module '*.webp?*' {
  const src: string
  export default src
}
declare module '*.png?*' {
  const src: string
  export default src
}
declare module '*.jpg?*' {
  const src: string
  export default src
}
declare module '*.jpeg?*' {
  const src: string
  export default src
}
declare module '*.avif?*' {
  const src: string
  export default src
}
// Alias + query pattern (e.g., @assets/.../image.webp?width=640&format=webp)
declare module '@assets/*?*' {
  const src: string
  export default src
}
