const SocialIcon = ({ src, alt, link, onClick }) => (
  <img
    src={src}
    alt={alt}
    className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
    onClick={() => {
      window.open(link, '_blank');
      if (onClick) onClick();
    }}
  />
);

export default SocialIcon;
