import { Routes, Route } from 'react-router-dom'
import { MainLayout } from '@/components/Layout/MainLayout'
import { Home, Portfolio, Vision, IGM } from '@/pages'
import { NotFound } from '@/pages/404/NotFound'

export const Router = () => {
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
}
