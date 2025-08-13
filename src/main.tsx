import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@/styles/main.scss'
import { initPerformanceMonitoring } from '@/utils/performance'

console.log('🚀 Main.tsx starting...')

try {
  console.log('📦 Environment:', import.meta.env.MODE)
  console.log('🌍 Production:', import.meta.env.PROD)
  
  if (import.meta.env.PROD) {
    console.log('🔧 Initializing performance monitoring...')
    initPerformanceMonitoring()
  }

  console.log('🔍 Looking for root element...')
  const rootElement = document.getElementById('root')
  
  if (!rootElement) {
    console.error('❌ Root element not found!')
    throw new Error('Root element not found')
  }
  
  console.log('✅ Root element found, creating React root...')
  const root = ReactDOM.createRoot(rootElement)
  
  console.log('🎯 Rendering App component...')
  root.render(<App />)
  
  console.log('✅ App rendered successfully!')
} catch (error) {
  console.error('💥 Error in main.tsx:', error)
  
  const rootElement = document.getElementById('root')
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="padding: 20px; color: white; font-family: Arial, sans-serif;">
        <h1>App Loading Error</h1>
        <p>There was an error loading the application:</p>
        <pre style="background: rgba(255,255,255,0.1); padding: 10px; border-radius: 4px;">${error}</pre>
        <p>Please check the browser console for more details.</p>
      </div>
    `
  }
}
