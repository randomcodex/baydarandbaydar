import { Outlet } from 'react-router-dom'
import { Navbar } from '@ui/Header'
import { Footer } from '@ui/Footer/Footer'
import './MainLayout.scss'

export const MainLayout = () => {
  return (
    <div className='main-layout'>
      <Navbar />
      <main className='main-content'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
