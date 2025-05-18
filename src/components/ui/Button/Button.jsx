import { Link } from 'react-router-dom';

export default function Button({ children, to, ariaLabel, className, ...props }) {
  return (    <Link 
      to={to}
      aria-label={ariaLabel}
      className={`px-5 py-2 bg-[#ffe19b] text-[#051905] rounded-lg hover:bg-[#ffe19b]/85 transition-colors duration-300 font-medium drop-shadow ${className || ''}`}
      {...props}
    >
      {children}
    </Link>
  );
}
