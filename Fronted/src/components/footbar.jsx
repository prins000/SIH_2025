export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          
          {/* About / Contact */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">Jharkhand Tourism</h2>
            <p className="text-sm mb-4">
              Discover the natural beauty, vibrant culture, and heritage of Jharkhand.
              Plan your next journey with us!
            </p>
            <p className="text-sm">📍 Ranchi, Jharkhand</p>
            <p className="text-sm">📞 +91 98765 43210</p>
            <p className="text-sm">✉️ info@jharkhandtourism.com</p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="#places" className="hover:text-white">Popular Places</a></li>
              <li><a href="#festivals" className="hover:text-white">Festivals</a></li>
              <li><a href="#food" className="hover:text-white">Food & Cuisine</a></li>
              <li><a href="#adventure" className="hover:text-white">Adventure Tourism</a></li>
            </ul>
          </div>
  
          {/* Social Media */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">Follow Us</h2>
            <div className="flex space-x-4 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-600">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-sky-500">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-pink-500">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-red-600">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
  
        </div>
  
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Jharkhand Tourism. All Rights Reserved.
        </div>
      </footer>
    );
  }
  