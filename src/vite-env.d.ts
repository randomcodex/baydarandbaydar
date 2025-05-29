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
