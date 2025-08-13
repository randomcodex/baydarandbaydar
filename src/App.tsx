import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'
import { Suspense } from 'react'
import { ErrorBoundary } from './components'

function AppContent() {
  console.log('🏠 AppContent rendering...')
  return (
    <div className='app'>
      <Router />
    </div>
  )
}

function App() {
  console.log('🎯 App component rendering...')
  
  try {
    return (
      <ErrorBoundary>
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true
          }}
        >
          <Suspense fallback={
            <div className="loading-spinner" style={{ 
              color: 'white', 
              padding: '20px', 
              textAlign: 'center' 
            }}>
              Loading...
            </div>
          }>
            <AppContent />
          </Suspense>
        </BrowserRouter>
      </ErrorBoundary>
    )
  } catch (error) {
    console.error('💥 Error in App component:', error)
    return (
      <div style={{ 
        color: 'white', 
        padding: '20px', 
        fontFamily: 'Arial, sans-serif' 
      }}>
        <h1>App Error</h1>
        <p>Error in App component: {String(error)}</p>
      </div>
    )
  }
}

export default App
