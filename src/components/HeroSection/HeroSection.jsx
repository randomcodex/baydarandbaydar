import { colors } from '../../styles/theme';
import Button from '../ui/Button';

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
      `}
      style={{ 
        backgroundImage: `url(${backgroundImage})`
      }}
      aria-label="Baydar & Baydar"
      role="region"
    >
      {imageLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1
            className={`text-4xl font-bold mb-2 text-center px-4 drop-shadow-lg`}
            style={{ color: colors.accent }}
            data-aos="fade-down"
            data-aos-delay="300"
          >
            {heading}
          </h1>
          <p
            className={`text-xl mb-8 text-center px-4 max-w-md drop-shadow-md`}
            style={{ color: `${colors.accent}E6` }}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            {subheading}
          </p>
          <div
            data-aos="fade-up"
            data-aos-delay="700"
            className="flex justify-center"
          >
            <Button
              to="/portfolio"
              ariaLabel="Explore our product portfolio"
              variant="outline"
            >
              Visit Our Portfolio
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}
