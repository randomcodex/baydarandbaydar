import { Routes, Route } from 'react-router-dom'
import { MainLayout } from '@/ui/Layout/MainLayout'
import { Home } from '@/pages/Home/Home'
import { NotFound } from '@/pages/404/NotFound'

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}
