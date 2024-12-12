import React from 'react';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeadOne = () => {
  return (
    <div className="bg-[#252525] py-4 hidden lg:block">
      <div className="container w-10/12 mx-auto flex justify-between items-center">
        {/* Email and Contact */}
        <ul className="flex space-x-8 text-white">
          {/* Email */}
          <li className="group">
            <a
              href="mailto:cyberkmcc@gmail.com"
              className="relative inline-block text-sm font-medium group-hover:text-green-300 transition-all duration-300"
            >
              <span className="absolute -z-10 inset-0 bg-green-300 group-hover:scale-110 opacity-20 transform transition-transform duration-300 rounded-md"></span>
              <span className="inline-flex items-center">
                <span className="bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text font-bold">
                  cyberkmcc@gmail.com
                </span>
              </span>
            </a>
          </li>
          {/* Contact Number */}
          <li className="group">
            <a
              href="tel:+20866660112"
              className="relative inline-block text-sm font-medium group-hover:text-green-300 transition-all duration-300"
            >
              <span className="absolute -z-10 inset-0 bg-green-300 group-hover:scale-110 opacity-20 transform transition-transform duration-300 rounded-md"></span>
              <span className="inline-flex items-center">
                <span className="bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text font-bold">
                  +208-6666-0112
                </span>
              </span>
            </a>
          </li>
        </ul>

        {/* Social Icons */}
        <ul className="flex space-x-4">
          <li>
            <a
              href="#0"
              className="text-white hover:text-primary text-center w-9 group relative"
            >
              <FontAwesomeIcon
                icon={faFacebookF}
                className="text-xl transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-blue-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </a>
          </li>
          <li>
            <a
              href="#0"
              className="text-white hover:text-primary text-center w-9 group relative"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-xl transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-pink-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeadOne;
