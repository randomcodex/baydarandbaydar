/// <reference types="vite/client" />
/// <reference types="vite-imagetools" />

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

// Image module declarations - base
declare module '*.webp' {
  const src: string
  export default src
}

declare module '*.png' {
  const src: string
  export default src
}

declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.jpeg' {
  const src: string
  export default src
}

declare module '*.avif' {
  const src: string
  export default src
}

declare module '*.gif' {
  const src: string
  export default src
}

declare module '*.svg' {
  const src: string
  export default src
}

// Image module declarations - with query parameters (vite-imagetools)
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

declare module '*.gif?*' {
  const src: string
  export default src
}

declare module '*.svg?*' {
  const src: string
  export default src
}

// Assets modules
declare module '@assets/*' {
  const src: string
  export default src
}

declare module '@assets/*?*' {
  const src: string
  export default src
}
