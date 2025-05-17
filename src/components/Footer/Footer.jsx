import { COPYRIGHT, DESIGNER } from './index';

export default function Footer() {
    return (
      <footer className="bg-[#051905] py-3 text-center text-xs sm:text-sm flex flex-col items-center justify-center px-4 text-[#ffe19b]">
        <div className="w-full flex flex-col items-center">
          <span className="text-inherit">{COPYRIGHT}</span>
        </div>
        <div className="w-full flex justify-end">
          <span className="text-inherit">
            <a 
              href={DESIGNER.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              Powered by {DESIGNER.name}
            </a>
          </span>
        </div>
      </footer>
    )
}