import landingImageWebP from '../../assets/images/home/bghome.webp';

export const homeData = {
  hero: {
    backgroundImage: landingImageWebP,
    heading: "Welcome to Baydar & Baydar",
    subheading: "Sourcing exquisite tastes for the discerning palate.",
    ctaButton: {
      text: "Visit our Portfolio",
      link: "/portfolio",
      ariaLabel: "View our wine portfolio"
    }
  },
  animation: {
    duration: 1000,
    easing: 'ease-in-out',
    once: true
  }
};

export default homeData;