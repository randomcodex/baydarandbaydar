import { Routes, Route } from 'react-router-dom'
import { MainLayout } from '@/components/Layout/MainLayout'
import { Home, Portfolio, Vision, IGM } from '@/pages'
import { NotFound } from '@/pages/404/NotFound'

export const Router = () => {
  console.log('🛣️ Router rendering...')
  
  try {
    return (
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/vision' element={<Vision />} />
          <Route path='/igm' element={<IGM />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    )
  } catch (error) {
    console.error('💥 Error in Router:', error)
    return (
      <div style={{ 
        color: 'white', 
        padding: '20px', 
        fontFamily: 'Arial, sans-serif' 
      }}>
        <h1>Router Error</h1>
        <p>Error in router: {String(error)}</p>
      </div>
    )
  }
}
