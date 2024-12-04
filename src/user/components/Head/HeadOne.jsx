import React from 'react';

const HeadOne = () => {
  return (
    <div className="bg-heading-color py-4 hidden lg:block">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-8 text-white">
          <li className="flex items-center space-x-2">
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.8748 8.50453C13.8748 9.85566 12.7757 10.953 11.4263 10.953H3.39325C2.04384 10.953 0.94475 9.85563 0.94475 8.50453V3.39322C0.944449 2.95776 1.06111 2.53021 1.28253 2.15525L5.20216 6.07488C5.78856 6.663 6.57384 6.98706 7.41059 6.98706C8.24563 6.98706 9.03091 6.663 9.61731 6.07488L13.5369 2.15525C13.7584 2.5302 13.875 2.95776 13.8747 3.39322V8.50453H13.8748ZM11.4263 0.94475H3.39325C2.836 0.94475 2.32159 1.13334 1.91009 1.44712L5.86916 5.40791C6.27897 5.81597 6.82591 6.04231 7.41059 6.04231C7.99356 6.04231 8.54053 5.81597 8.95031 5.40791L12.9094 1.44712C12.4979 1.13334 11.9835 0.94475 11.4263 0.94475ZM11.4263 0H3.39325C1.52259 0 0 1.52259 0 3.39325V8.50456C0 10.3769 1.52259 11.8978 3.39325 11.8978H11.4263C13.2969 11.8978 14.8195 10.3769 14.8195 8.50456V3.39322C14.8195 1.52256 13.2969 0 11.4263 0Z"
                fill="white"
              />
            </svg>
            <a href="#0" className="hover:text-primary text-sm">
              info@example.com
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Add your SVG content here */}
            </svg>
            <a href="#0" className="hover:text-primary text-sm">
              +208-6666-0112
            </a>
          </li>
        </ul>
        <ul className="flex space-x-4">
          <li>
            <a
              href="#0"
              className="text-white hover:text-primary text-center w-9"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a
              href="#0"
              className="text-white hover:text-primary text-center w-9"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="#0"
              className="text-white hover:text-primary text-center w-9"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a
              href="#0"
              className="text-white hover:text-primary text-center w-9"
            >
              <i className="fa-brands fa-pinterest-p"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeadOne;
