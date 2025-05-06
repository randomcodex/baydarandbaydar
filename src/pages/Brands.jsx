import { brands } from '../data/brands';
import baccanalImage from '../assets/images/baccanal.jpg';

export default function Brands() {
  return (
    <div
      className="min-h-screen w-full bg-gray-100 py-8 sm:py-12 px-2 sm:px-0"
      style={{
        backgroundImage: `url(${baccanalImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Reduced opacity for a brighter effect
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="container mx-auto px-2 sm:px-6 space-y-8 sm:space-y-12">
        <h1 className="text-3xl sm:text-4xl font-serif mb-6 sm:mb-10 text-center text-white"></h1>
        <div className="grid gap-6 sm:gap-10 grid-cols-1 md:grid-cols-2">
          {brands.map(brand => (
            <div key={brand.id} className="bg-white bg-opacity-50 rounded-lg shadow-lg p-4 flex flex-col md:flex-row items-center hover:shadow-2xl transition-shadow border-4 border-[#ffe19b] rounded-xl"> {/* Updated the border to match the background color and added rounded edges */}
              <img src={brand.logo} alt={brand.name} className="w-32 h-32 sm:w-88 sm:h-44 mb-4 md:mb-0 md:mr-8 object-contain aspect-square rounded" />
              <div className="flex-1 flex flex-col items-center text-center md:items-start md:text-left">
                <h2 className="text-xl sm:text-2xl font-serif text-burgundy mb-2">{brand.name}</h2>
                <p className="mb-4 text-gray-700 text-sm sm:text-base">{brand.description}</p>
                <a href={brand.website} target="_blank" rel="noopener noreferrer" className="inline-block px-4 sm:px-5 py-2 bg-[#ffe19b] text-white font-semibold rounded shadow hover:bg-gold hover:text-burgundy transition text-sm sm:text-base">Visit Website</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
