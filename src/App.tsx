import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'
import { Suspense } from 'react'
import { ErrorBoundary } from './components'

function AppContent() {
  return (
    <div className='app'>
      <Router />
    </div>
  )
}

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true
        }}
      >
        <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
          <AppContent />
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
