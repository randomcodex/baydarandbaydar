import facebookIcon from '../../assets/images/header/facebooksvgrepo.svg';
import instagramIcon from '../../assets/images/header/instagramsvgrepo.svg';
import twitterIcon from '../../assets/images/header/twittersvgrepo.svg';
import whatsappIcon from '../../assets/images/header/whatsappsvgrepo.svg';
import linkedinIcon from '../../assets/images/header/linkedinsvgrepo.svg';
import emailIcon from '../../assets/images/header/emailsvgrepo.svg';
import logoHome from '../../assets/images/header/logohome.png';

export const NAV_LINKS = [
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/vision', label: 'Vision' },
  { to: '/igm', label: 'IGM' },
];

export const SOCIAL_LINKS = [
  {
    src: facebookIcon,
    alt: 'Facebook Icon',
    link: 'https://www.facebook.com/people/Baydar-Baydar/61565184459208/',
    showOn: 'desktop',
  },
  {
    src: instagramIcon,
    alt: 'Instagram Icon',
    link: 'https://www.instagram.com/baydarandbaydar',
    showOn: 'desktop',
  },
  {
    src: twitterIcon,
    alt: 'Twitter Icon',
    link: 'https://twitter.com/baydarandbaydar',
    showOn: 'desktop',
  },
  {
    src: whatsappIcon,
    alt: 'WhatsApp Icon',
    link: 'https://wa.me/905338692852',
    showOn: 'both',
  },
  {
    src: linkedinIcon,
    alt: 'LinkedIn Icon',
    link: 'https://www.linkedin.com/company/baydarandbaydar',
    showOn: 'both',
  },
  {
    src: emailIcon,
    alt: 'Email Icon',
    link: 'mailto:baydarandbaydar@gmail.com',
    showOn: 'both',
  },
];

export const LOGO = logoHome;
export { default } from './Header';
