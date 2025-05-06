export default function Footer() {
    return (
      <footer className="bg-[#051905] py-4 sm:py-6 text-center text-sm sm:text-base flex flex-col items-center justify-center px-4 text-[#ffe19b]">
        <div className="w-full flex justify-center">
          <span>
            © {new Date().getFullYear()} Baydar & Baydar Co. Ltd. All rights reserved.
          </span>
        </div>
        <div className="w-full flex justify-end">
          <span>
            <a href="https://toyomuhendislik.com/" target="_blank" rel="noopener noreferrer">
              Designed by Toyo Engineering Ltd.
            </a>
          </span>
        </div>
      </footer>
    )
  }
