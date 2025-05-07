import logo from '../assets/images/logoigm.png';

export default function IGM() {
    return (
      <div className="min-h-screen w-full bg-[#051505] py-8 sm:py-12 px-4 sm:px-6 text-[#ffe19b]">
        <div className="container mx-auto space-y-8 sm:space-y-12">
          <h1 className="text-4xl sm:text-5xl font-serif text-center">Istituto Grandi Marchi</h1>
          <p className="text-center text-lg sm:text-xl">At Baydar & Baydar, we embrace the spirit of Istituto Grandi Marchi—united in our devotion to heritage, craftsmanship, and the timeless poetry of Italian wine.</p>
          <div className="flex justify-center">
            <img src={logo} alt="IGM Logo" className="w-64 h-auto" />
          </div>
          <div className="flex justify-center">
            <a href="https://www.istitutograndimarchi.it/" target="_blank" rel="noopener noreferrer" className="text-center text-xl text-[#ffe19b] no-underline">Visit Website</a>
          </div>
        </div>
      </div>
    );
}
