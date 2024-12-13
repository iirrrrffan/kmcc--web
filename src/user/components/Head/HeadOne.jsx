import React from 'react';

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
      </div>
    </div>
  );
};

export default HeadOne;
