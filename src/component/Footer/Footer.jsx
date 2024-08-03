import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Company Info */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <Link 
            to="/" 
            className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-400 transition-all duration-500"
          >
            Re<span className="text-green-400">A</span>l E<span className="text-green-400">s</span>ta<span className="text-green-400">T</span>e
          </Link>
          <p className="font-semibold text-xl mt-4 mb-2">ACME Industries Ltd.</p>
          <p className="text-md mb-4">Innovating tech solutions since 1992</p>
          <p className="text-sm">© 2024 All rights reserved</p>
        </div>

        {/* Social Media Links */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h3 className="font-semibold text-xl mb-4">Connect with Us</h3>
          <div className="flex space-x-6 justify-center md:justify-start">
            <a 
              href="https://www.linkedin.com/in/israt-jahan-undefined-2277b7294/" 
              className="text-gray-400 hover:text-blue-600 transition duration-300 ease-in-out" 
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" className="fill-current">
                <path d="M4.98 3.5c0-1.378 1.12-2.5 2.5-2.5s2.5 1.122 2.5 2.5-1.12 2.5-2.5 2.5-2.5-1.122-2.5-2.5zM4.5 8h5v11h-5v-11zm10.5 0h-5v11h-5v-6.7c0-.64.3-1.22.82-1.6.84-.6 1.9-.7 2.75-.7.9 0 1.8.3 2.5.9 1.03.76 1.73 1.85 1.73 3.1v4.4z"></path>
              </svg>
            </a>
            <a 
              href="https://github.com/Israt-js" 
              className="text-gray-400 hover:text-gray-400 transition duration-300 ease-in-out" 
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" className="fill-current">
                <path d="M12 2c-5.52 0-10 4.48-10 10 0 4.42 2.85 8.16 6.84 9.46.5.09.68-.22.68-.49v-1.74c-2.77.61-3.36-1.34-3.36-1.34-.45-1.14-1.1-1.45-1.1-1.45-.9-.62.07-.61.07-.61 1 .07 1.54 1.02 1.54 1.02.89 1.52 2.33 1.08 2.9.83.09-.64.35-1.08.64-1.32-2.22-.25-4.56-1.12-4.56-4.99 0-1.1.39-2 1.03-2.71-.1-.25-.45-1.27.1-2.63 0 0 .85-.27 2.77 1.03.8-.22 1.66-.33 2.51-.33s1.71.11 2.51.33c1.92-1.3 2.77-1.03 2.77-1.03.56 1.36.2 2.38.1 2.63.64.71 1.03 1.61 1.03 2.71 0 3.89-2.35 4.74-4.6 4.99.36.31.68.92.68 1.85v2.72c0 .27.18.59.68.49 4-1.3 6.84-5.04 6.84-9.46 0-5.52-4.48-10-10-10z"></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="text-center md:text-left">
          <h3 className="font-semibold text-xl mb-4">Stay Updated</h3>
          <form className="flex flex-col md:flex-row items-center">
            <input
              type="email"
              placeholder="Your email address"
              className="p-2 mb-4 md:mb-0 md:mr-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
