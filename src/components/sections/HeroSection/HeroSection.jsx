import { colors } from '../../../styles/theme';
import Button from '../../../components/ui/Button';

export default function HeroSection({ 
  backgroundImage, 
  heading, 
  subheading, 
  imageLoaded 
}) {
  return (
    <section
      className={`
        relative min-h-screen bg-cover bg-center
        transition-opacity duration-300
        ${imageLoaded ? 'opacity-100' : 'opacity-0'}
      `}      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.15)"
      }}
      aria-label="Baydar & Baydar"
      role="region"
    >      {imageLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center shadow-inner">
          <h1
            className="text-4xl font-bold mb-2 text-center px-4 drop-shadow-lg"
            style={{ 
              color: colors.accent,
              textShadow: "1px 1px 4px rgba(0, 0, 0, 0.35)" 
            }}
            data-aos="fade-down"
            data-aos-delay="300"
          >
            {heading}
          </h1>
          <p
            className="text-xl mb-8 text-center px-4 max-w-md drop-shadow-lg"
            style={{ 
              color: `${colors.accent}E6`,
              textShadow: "1px 1px 4px rgba(0, 0, 0, 0.65)" 
            }}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            {subheading}
          </p>          <div
            data-aos="fade-up"
            data-aos-delay="700"
            className="flex justify-center"
          >
            <Button
              to="/portfolio"
              ariaLabel="Explore our product portfolio"
              variant="outline"
              className="shadow-xl hover:shadow-2xl transition-shadow"
            >
              Visit our Portfolio
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}
