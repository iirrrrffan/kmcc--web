import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div className="footer-item animate__animated animate__fadeIn animate__delay-0.2s">
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="hover:text-green-500 transition-all duration-300 transform hover:scale-105"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-green-500 transition-all duration-300 transform hover:scale-105"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-green-500 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="hover:text-green-500 transition-all duration-300 transform hover:scale-105"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="footer-item animate__animated animate__fadeIn animate__delay-0.4s">
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <p>Address: 123 Main Street, City, Country</p>
              </li>
              <li>
                <p>Email: support@example.com</p>
              </li>
              <li>
                <p>Phone: +123 456 7890</p>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="footer-item animate__animated animate__fadeIn animate__delay-0.6s">
            <h3 className="text-white text-lg font-semibold mb-4">Connect with Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-600 transition duration-300 transform hover:scale-110"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition duration-300 transform hover:scale-110"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-600 transition duration-300 transform hover:scale-110"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-800 transition duration-300 transform hover:scale-110"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400 animate__animated animate__fadeIn animate__delay-0.8s">
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 