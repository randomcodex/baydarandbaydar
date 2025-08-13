import './SocialMediaIcons.scss'

export interface SocialMediaIconsProps {
  className?: string
  size?: 'small' | 'medium' | 'large'
  variant?: 'default' | 'compact' | 'spacious'
}

export const SocialMediaIcons = ({
  className = '',
  size = 'medium',
  variant = 'default'
}: SocialMediaIconsProps) => {  const baseClass = 'social-media-icons'
  const classes = [
    baseClass,
    variant !== 'default' ? `${baseClass}--${variant}` : '',
    className
  ].filter(Boolean).join(' ')

  const linkSizeClass = size !== 'medium' ? `${baseClass}__link--${size}` : ''
  return (
    <div className={classes}>
      <a
        href="https://facebook.com/people/Baydar-Baydar/61565184459208/" 
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClass}__link ${baseClass}__link--facebook ${linkSizeClass}`.trim()}
        aria-label="Facebook"
      >
        <img src="./assets/images/social/facebooksvgrepo.svg" alt="Facebook" />
      </a>
      <a
        href="https://instagram.com/baydarandbaydar" 
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClass}__link ${baseClass}__link--instagram ${linkSizeClass}`.trim()}
        aria-label="Instagram"
      >
        <img src="./assets/images/social/instagramsvgrepo.svg" alt="Instagram" />
      </a>
      <a
        href="https://twitter.com/baydarandbaydar" 
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClass}__link ${baseClass}__link--twitter ${linkSizeClass}`.trim()}
        aria-label="Twitter"
      >
        <img src="./assets/images/social/twittersvgrepo.svg" alt="Twitter" />
      </a>
      <a
        href="https://wa.me/905338692852" 
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClass}__link ${linkSizeClass}`.trim()}
        aria-label="WhatsApp"
      >
        <img src="./assets/images/social/whatsappsvgrepo.svg" alt="WhatsApp" />
      </a>
      <a
        href="https://linkedin.com/company/baydarandbaydar" 
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClass}__link ${linkSizeClass}`.trim()}
        aria-label="LinkedIn"
      >
        <img src="./assets/images/social/linkedinsvgrepo.svg" alt="LinkedIn" />
      </a>
      <a
        href="mailto:baydarandbaydar@gmail.com"
        className={`${baseClass}__link ${linkSizeClass}`.trim()}
        aria-label="Email"
      >        <img src="./assets/images/social/emailsvgrepo.svg" alt="Email" />
      </a>
    </div>
  )
}

export default SocialMediaIcons
