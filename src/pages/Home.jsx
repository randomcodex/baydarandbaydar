import { Link } from 'react-router-dom'
import landingImage from '../assets/images/landing.jpg'

export default function Home() {
  // Set navbar height in px (py-4 = 2rem = 32px, plus 12px for px-6 padding if needed)
  // Adjust 64px if you change navbar height
  return (
    <>
      <section
        className="relative bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url(${landingImage})` }}
      >
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl sm:text-6xl font-serif mb-4 text-[#ffe19b]">Baydar & Baydar</h1>
          <p className="mb-6 max-w-xs sm:max-w-lg text-lg sm:text-xl italic text-[#ffe19b]">Sourcing exquisite tastes for the discerning palate.</p>
          <title style={{ fontFamily: 'Abhaya Libre, serif' }}>Baydar & Baydar</title>
        </div>
      </section>
    </>
  )
}
