import { igmContent } from './index';
import logo from '../../assets/images/igm/logoigm.png';

export default function IGM() {
  return (
    <div className={"min-h-screen w-full py-8 sm:py-12 px-4 sm:px-6"}
         style={{ backgroundColor: '#051505', color: '#ffe19b' }}>
      <div className="container mx-auto space-y-8 sm:space-y-12 group">
        <GradientLine />
        <h1 className="text-4xl sm:text-5xl font-serif text-center">
          {igmContent.title}
        </h1>
        <p className="text-center text-lg sm:text-xl max-w-3xl mx-auto">
          {igmContent.description}
        </p>
        <LogoSection />
        <GradientLine />
      </div>
    </div>
  );
}

function GradientLine() {
  return (
    <div 
      className="w-full h-0.5 animate-pulse transition-all duration-300 group-hover:h-0.5"
      style={{
        backgroundImage: `linear-gradient(to right, #ffe19b, #ffffff, #ffe19b)`,
        boxShadow: `0 0 8px 1px rgba(255,225,155,0.4)`
      }}
    />
  );
}

function LogoSection() {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 relative">
      <div 
        className="absolute inset-0 rounded-full opacity-30 sm:opacity-0 sm:group-hover:opacity-30 transition-opacity duration-700 blur-xl"
        style={{ background: 'radial-gradient(circle, rgba(255,225,155,0.3) 0%, rgba(5,21,5,0) 70%)' }}
      />
      <a
        href={igmContent.externalLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative"
      >
        <img 
          src={logo} 
          alt={igmContent.logoAlt} 
          className="w-80 h-auto transition-all duration-300 group-hover:scale-105"
        />
      </a>
    </div>
  );
}