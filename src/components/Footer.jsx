import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope, FaGithub, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-blue-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center">
            <span className="bg-blue-600 w-2 h-6 mr-2 rounded-full"></span>
            React With ME!
          </h2>
          <p className="text-blue-100">
            Connecting top tech talent with the best React opportunities worldwide.
            Empowering developers to build amazing web experiences.
          </p>
          <div className="flex space-x-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
              <FaGithub className="text-xl" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
              <FaFacebook className="text-xl" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
              <FaTwitter className="text-xl" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
              <FaLinkedin className="text-xl" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold border-b border-blue-700 pb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-blue-100 hover:text-white transition-colors flex items-center">
                <span className="w-1 h-1 bg-blue-400 mr-2 rounded-full"></span>
                Home
              </Link>
            </li>
            <li>
              <Link to="/jobs" className="text-blue-100 hover:text-white transition-colors flex items-center">
                <span className="w-1 h-1 bg-blue-400 mr-2 rounded-full"></span>
                Browse Jobs
              </Link>
            </li>
            <li>
              <Link to="/add-job" className="text-blue-100 hover:text-white transition-colors flex items-center">
                <span className="w-1 h-1 bg-blue-400 mr-2 rounded-full"></span>
                Post a Job
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-blue-100 hover:text-white transition-colors flex items-center">
                <span className="w-1 h-1 bg-blue-400 mr-2 rounded-full"></span>
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold border-b border-blue-700 pb-2">Contact Us</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
              <span className="text-blue-100">123 React Street, Developer City, Techland</span>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-blue-400 mr-3" />
              <span className="text-blue-100">+1 (234) 567-8900</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-blue-400 mr-3" />
              <a href="mailto:ahmedabdulkareem1000@gmail.com" className="text-blue-100 hover:text-white transition-colors">
                ahmedabdulkareem1000@gmail.com
              </a>
            </div>
          </div>
          
          {/* Newsletter Subscription */}
          <div className="mt-4">
            <h4 className="text-sm font-medium text-blue-200 mb-2">Subscribe to our newsletter</h4>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 bg-gray-800 text-white rounded-l focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 pt-6 border-t border-blue-800 text-center text-blue-300 text-sm">
        <p>© {new Date().getFullYear()} React With ME! All rights reserved.</p>
        <div className="mt-2 flex justify-center space-x-4">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;