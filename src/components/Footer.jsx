import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-10 mt-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3 ml-20">About Us</h2>
          <p className="text-gray-300 ml-20">
            We connect talented individuals with exciting job opportunities.
            Join us and discover your next career move!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/jobs" className="hover:text-green-400">
                Browse Jobs
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-green-400">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-green-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info & Socials */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Contact Us</h2>
          <p className="flex items-center">
            <FaEnvelope className="mr-2 text-green-400" />
            ahmedabdulkareem1000@gmail.com
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.instagram.com/alsaqqaf_13/" className="hover:text-green-400 text-xl">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/alsaqqaf_13/" className="hover:text-green-400 text-xl">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/ahmed-alsakkaf/" className="hover:text-green-400 text-xl">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Alsakkaf. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
