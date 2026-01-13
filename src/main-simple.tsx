import ReactDOM from 'react-dom/client'
import '@/styles/main.scss'

console.log('🚀 Simple main.tsx starting...')

const SimpleApp = () => {
  return (
    <div style={{ 
      color: 'white', 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1>🎉 React App is Working!</h1>
      <p>If you can see this, React is mounting correctly.</p>
      <p>Environment: {import.meta.env.MODE}</p>
      <p>Production: {import.meta.env.PROD ? 'Yes' : 'No'}</p>
      <p>Site URL: {import.meta.env.VITE_SITE_URL}</p>
    </div>
  )
}

try {
  console.log('📦 Environment:', import.meta.env.MODE)
  console.log('🌍 Production:', import.meta.env.PROD)
  
  console.log('🔍 Looking for root element...')
  const rootElement = document.getElementById('root')
  
  if (!rootElement) {
    console.error('❌ Root element not found!')
    throw new Error('Root element not found')
  }
  
  console.log('✅ Root element found, creating React root...')
  const root = ReactDOM.createRoot(rootElement)
  
  console.log('🎯 Rendering Simple App component...')
  root.render(<SimpleApp />)
  
  console.log('✅ Simple App rendered successfully!')
} catch (error) {
  console.error('💥 Error in simple main.tsx:', error)
  
  const rootElement = document.getElementById('root')
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="padding: 20px; color: white; font-family: Arial, sans-serif; text-align: center; min-height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <h1>❌ JavaScript Error</h1>
        <p>There was an error loading the application:</p>
        <pre style="background: rgba(255,255,255,0.1); padding: 10px; border-radius: 4px; max-width: 600px; text-align: left;">${error}</pre>
        <p>Please check the browser console for more details.</p>
      </div>
    `
  }
}
