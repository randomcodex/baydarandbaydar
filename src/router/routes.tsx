import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { MainLayout } from '@/components/Layout/MainLayout'

const Home = lazy(() => import('@/pages/Home/Home').then((m) => ({ default: m.Home })))
const Portfolio = lazy(() => import('@/pages/Portfolio/Portfolio').then((m) => ({ default: m.Portfolio })))
const Vision = lazy(() => import('@/pages/Vision/Vision').then((m) => ({ default: m.Vision })))
const IGM = lazy(() => import('@/pages/IGM/IGM').then((m) => ({ default: m.IGM })))
const NotFound = lazy(() => import('@/pages/404/NotFound').then((m) => ({ default: m.NotFound })))

export const Router = () => {
  try {
    return (
      <Suspense fallback={<div aria-busy="true">Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/igm" element={<IGM />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    )
  } catch (error) {
    return (
      <div style={{
        color: 'white',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
      }}>
        <h1>Router Error</h1>
        <p>Error in router: {String(error)}</p>
      </div>
    )
  }
}
