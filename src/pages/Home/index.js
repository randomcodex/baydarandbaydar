import { aosDefaults } from '../../styles/animations';
import landingImageWebP from '../../assets/images/home/bghome.webp';

export const homeData = {
  hero: {
    backgroundImage: landingImageWebP,
    heading: "Welcome to Baydar & Baydar",
    subheading: "Sourcing exquisite tastes for the discerning palate.",
    ctaButton: {
      text: "View Selection",
      link: "/portfolio",
      ariaLabel: "View Selection"
    }
  },
  animation: aosDefaults
};

export default homeData;