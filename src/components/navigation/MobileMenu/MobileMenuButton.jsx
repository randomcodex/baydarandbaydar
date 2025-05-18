const MobileMenuButton = ({ isOpen, handleToggle }) => {
  return (
    <button
      className="flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
      onClick={(e) => handleToggle('hamburgerOpen', e)}
      aria-label="Toggle menu"
    >
      <span className={`block w-6 h-0.5 bg-[#ffe19b] mb-1 transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
      <span className={`block w-6 h-0.5 bg-[#ffe19b] mb-1 transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
      <span className={`block w-6 h-0.5 bg-[#ffe19b] transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
    </button>
  );
};

export default MobileMenuButton;
