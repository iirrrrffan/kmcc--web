import React, { useState } from "react";
import { Link } from "react-router";

const UNav = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-xl sticky top-0 z-50 text-black">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src="/kmcc-logo.png" // Replace with your logo path
            alt="KMCC Logo"
            className="w-14 h-14 rounded-full border-4 border-white shadow-md"
          />
          <span className="text-black text-3xl font-extrabold tracking-wider">
            KMCC
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-lg font-semibold">
          <li>
            <a
              href="#home"
              className="text-black hover:text-yellow-300 transition-all duration-300"
            >
              Home
            </a>
          </li>
          <li className="relative group">
            <button className="text-black hover:text-yellow-300 transition-all duration-300 flex items-center">
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
            <div className="absolute top-full left-0 bg-green-800 shadow-xl rounded-md mt-3 w-56 opacity-0 group-hover:opacity-80 group-hover:translate-y-2 transform transition-all duration-300 ease-in-out">
              <Link
                to="/about/overview" // Updated path based on your router
                className="block px-4 py-3 text-black bg-white hover:bg-green-600 rounded-t-md"
              >
                Overview
              </Link>
              <Link
                to="/about/thuqba" // Updated path based on your router
                className="block px-4 py-3 text-black bg-white hover:bg-green-600 rounded-b-md"
              >
                Thuqba Committee
              </Link>
            </div>
          </li>

          <li>
            <a
              href="#scheme-types"
              className="text-black hover:text-yellow-300 transition-all duration-300"
            >
              Scheme Types
            </a>
          </li>
          <li>
            <a
              href="#objectives"
              className="text-black hover:text-yellow-300 transition-all duration-300"
            >
              Objectives
            </a>
          </li>
          <li>
            <a
              href="#downloads"
              className="text-black hover:text-yellow-300 transition-all duration-300"
            >
              Downloads
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-black hover:text-yellow-300 transition-all duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
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
