import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@/styles/main.scss'
import { initPerformanceMonitoring } from '@/utils/performance'

if (import.meta.env.PROD) {
  initPerformanceMonitoring()
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
