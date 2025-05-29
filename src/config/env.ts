export const env = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'https://api.baydarandbaydar.com',
  SITE_URL: import.meta.env.VITE_SITE_URL || 'https://baydarandbaydar.com',
  COMPANY_EMAIL: import.meta.env.VITE_COMPANY_EMAIL || 'info@baydarandbaydar.com',
  COMPANY_PHONE: import.meta.env.VITE_COMPANY_PHONE || '+1-555-0123',
  GOOGLE_ANALYTICS_ID: import.meta.env.VITE_GOOGLE_ANALYTICS_ID || '',
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
} as const
