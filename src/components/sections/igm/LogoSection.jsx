export default function LogoSection({ 
  logo, 
  logoAlt, 
  externalLink 
}) {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 relative">
      <div 
        className="absolute inset-0 rounded-full opacity-30 sm:opacity-0 sm:group-hover:opacity-30 transition-opacity duration-700 blur-xl"
        style={{ background: 'radial-gradient(circle, rgba(255,225,155,0.3) 0%, rgba(5,21,5,0) 70%)' }}
      />
      <a
        href={externalLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative"
      >
        <img 
          src={logo} 
          alt={logoAlt} 
          className="w-80 h-auto transition-all duration-300 group-hover:scale-105"
        />
      </a>
    </div>
  );
}
