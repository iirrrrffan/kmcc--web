import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UNav = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white bg-opacity-10 shadow-xl sticky top-0 z-50 text-black backdrop-blur-lg rounded-full py-2 px-6">
      <div className="container mx-auto flex justify-center items-center">

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-lg font-semibold">
          <li>
            <a
              href="#home"
              className="text-black hover:text-green-700 transition-all duration-300"
            >
              Home
            </a>
          </li>
          <li className="relative group">
            <button className="text-black hover:text-green-700 transition-all duration-300 flex items-center">
              About
              <svg
                className="w-5 h-5 ml-1 transform group-hover:rotate-180 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="absolute top-full left-0 bg-green-800 bg-opacity-10 shadow-xl rounded-md mt-3 w-56 opacity-0 group-hover:opacity-80 group-hover:translate-y-2 transform transition-all duration-300 ease-in-out">
              <Link to={"/overview"}>
                <a
                  href="#overview"
                  className="block px-4 py-3 text-black hover:bg-green-600 rounded-t-md"
                >
                  Overview
                </a>
              </Link>
              <a
                href="#thuqba"
                className="block px-4 py-3 text-black hover:bg-green-600 rounded-b-md"
              >
                Thuqba Committee
              </a>
            </div>
          </li>
          <li>
            <a
              href="#scheme-types"
              className="text-black hover:text-green-700 transition-all duration-300"
            >
              Scheme Types
            </a>
          </li>
          <li>
            <a
              href="#objectives"
              className="text-black hover:text-green-700 transition-all duration-300"
            >
              Objectives
            </a>
          </li>
          <li>
            <a
              href="#downloads"
              className="text-black hover:text-green-700 transition-all duration-300"
            >
              Downloads
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-black hover:text-green-700 transition-all duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden" >
          <button
            className="text-green-600 focus:outline-none"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="bg-gradient-to-b from-green-400 to-green-600 bg-opacity-90 text-white md:hidden space-y-3 px-6 py-4 shadow-lg">
          <a
            href="#home"
            className="block hover:bg-green-500 px-4 py-2 rounded-lg transition-all duration-300"
          >
            Home
          </a>
          <a
            href="#overview"
            className="block hover:bg-green-500 px-4 py-2 rounded-lg transition-all duration-300"
          >
            Overview
          </a>
          <a
            href="#thuqba"
            className="block hover:bg-green-500 px-4 py-2 rounded-lg transition-all duration-300"
          >
            Thuqba Committee
          </a>
          <a
            href="#scheme-types"
            className="block hover:bg-green-500 px-4 py-2 rounded-lg transition-all duration-300"
          >
            Scheme Types
          </a>
          <a
            href="#objectives"
            className="block hover:bg-green-500 px-4 py-2 rounded-lg transition-all duration-300"
          >
            Objectives
          </a>
          <a
            href="#downloads"
            className="block hover:bg-green-500 px-4 py-2 rounded-lg transition-all duration-300"
          >
            Downloads
          </a>
          <a
            href="#contact"
            className="block hover:bg-green-500 px-4 py-2 rounded-lg transition-all duration-300"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default UNav;
