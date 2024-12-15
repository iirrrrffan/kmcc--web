import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-green-600 shadow-md">
      <div className="elementor-widget-wrap elementor-element-populated max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-white text-2xl font-bold">
              Himaya
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a
              href="#home"
              className="text-white hover:text-green-300 px-3 py-2 rounded-md text-lg font-medium"
            >
              Home
            </a>
            <a
              href="#schemes"
              className="text-white hover:text-green-300 px-3 py-2 rounded-md text-lg font-medium"
            >
              Scheme Types
            </a>
            <a
              href="#objectives"
              className="text-white hover:text-green-300 px-3 py-2 rounded-md text-lg font-medium"
            >
              Objectives
            </a>
            <a
              href="#downloads"
              className="text-white hover:text-green-300 px-3 py-2 rounded-md text-lg font-medium"
            >
              Downloads
            </a>
            <a
              href="#contact"
              className="text-white hover:text-green-300 px-3 py-2 rounded-md text-lg font-medium"
            >
              Contact
            </a>
            {/* About Dropdown */}
            <div className="relative group">
              <a
                href="#about"
                className="text-white hover:text-green-300 px-3 py-2 rounded-md text-lg font-medium"
              >
                About
              </a>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2">
                <a
                  href="#overview"
                  className="block px-4 py-2 text-gray-700 hover:bg-green-100"
                >
                  Overview
                </a>
                <a
                  href="#committee"
                  className="block px-4 py-2 text-gray-700 hover:bg-green-100"
                >
                  Thuqba Committee
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-green-700 text-white px-4 py-2 space-y-2">
            <a href="#home" className="block hover:text-green-300">
              Home
            </a>
            <a href="#schemes" className="block hover:text-green-300">
              Scheme Types
            </a>
            <a href="#objectives" className="block hover:text-green-300">
              Objectives
            </a>
            <a href="#downloads" className="block hover:text-green-300">
              Downloads
            </a>
            <a href="#contact" className="block hover:text-green-300">
              Contact
            </a>
            <a href="#about" className="block hover:text-green-300">
              About
            </a>
            <a href="#overview" className="block pl-4 text-sm hover:text-green-300">
              Overview
            </a>
            <a href="#committee" className="block pl-4 text-sm hover:text-green-300">
              Thuqba Committee
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
