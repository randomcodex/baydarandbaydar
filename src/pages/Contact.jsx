export default function Contact() {
    return (
      <div className="container mx-auto py-8 sm:py-12 px-4 sm:px-6 max-w-lg">
        <h1 className="text-2xl sm:text-3xl font-serif mb-4 sm:mb-6">Contact Us</h1>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-sm sm:text-base">Name</label>
            <input type="text" className="w-full border rounded px-3 py-2 text-sm sm:text-base" placeholder="Your name"/>
          </div>
          <div>
            <label className="block mb-1 font-medium text-sm sm:text-base">Email</label>
            <input type="email" className="w-full border rounded px-3 py-2 text-sm sm:text-base" placeholder="you@example.com"/>
          </div>
          <div>
            <label className="block mb-1 font-medium text-sm sm:text-base">Message</label>
            <textarea className="w-full border rounded px-3 py-2 text-sm sm:text-base" rows="4" placeholder="Your message…"/>
          </div>
          <button type="submit" className="px-4 sm:px-5 py-2 bg-burgundy text-white rounded text-sm sm:text-base">Send Message</button>
        </form>
      </div>
    )
  }
