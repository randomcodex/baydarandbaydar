import { Link } from 'react-router-dom'
import landingImage from '../assets/images/landing.jpg'
import logo from '../assets/images/logotransparent.png'

export default function Home() {
  return (
    <>
      <section
        className="relative bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url(${landingImage})` }}>
      </section>
    </>
  )
}
