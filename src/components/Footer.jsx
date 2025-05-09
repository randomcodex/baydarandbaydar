export default function Footer() {
    return (
      <footer className="bg-[#051905] py-3 sm:py-3 text-center text-sm sm:text-base flex flex-col items-center justify-center px-5 text-[#ffe19b]">
        <div className="w-full flex flex-col items-center">
          <span className="text-xs sm:text-sm">
            Baydar & Baydar Co. Ltd. © Copyright {new Date().getFullYear()} - All Rights Reserved. 
          </span>
          <span className="mt-0">
          </span>
        </div>
        <div className="w-full flex justify-end">
          <span className="text-xs sm:text-sm">
            <a href="https://toyomuhendislik.com/" target="_blank" rel="noopener noreferrer">
              Designed by Toyo Engineering Ltd.
            </a>
          </span>
        </div>
      </footer>
    )
  }
