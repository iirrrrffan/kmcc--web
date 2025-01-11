import React from "react";
import { FaUserCheck, FaClipboardList } from "react-icons/fa";

const KmccScheme = () => {
  return (
    <div className="min-h-[50vh] bg-gradient-to-b flex items-center justify-center p-6">
      {/* Container: Schemes Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Card: 1 */}
        <div className="relative bg-gradient-to-br from-green-900 to-green-700 rounded-xl shadow-lg p-6 h-[400px] transform transition-transform duration-500 hover:scale-105 hover:shadow-[0px_10px_30px_rgba(72,255,72,0.5)] flex flex-col-reverse">
          {/* Decorative Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-800 opacity-10 rounded-xl"></div>
          <div className="relative z-10 flex flex-col items-center flex-grow">
            <h3 className="text-lg font-medium text-green-300 text-center uppercase tracking-wide">
              KMCC
            </h3>
            <h2 className="text-2xl font-bold text-white text-center">
              Check Your Scheme Status
            </h2>
            <p className="text-gray-300 text-center mt-3 text-sm">
              Verify your KMCC membership status instantly with just a click.
            </p>
            <a
              href="https://www.mykmcc.org/security-scheme-status"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4"
            >
              <button className="w-full bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-[0px_4px_15px_rgba(72,255,72,0.7)] transition-transform duration-300 transform hover:scale-105">
                Check
              </button>
            </a>
          </div>
          <FaUserCheck className="text-green-400 text-[320px] mb-4" />
        </div>

      {/* Card: 2 */}
<div className="relative bg-gradient-to-br from-[rgba(183,111,31,1)] to-orange-700 rounded-xl shadow-lg p-6 h-[400px] transform transition-transform duration-500 hover:scale-105 hover:shadow-[0px_10px_30px_rgba(253,126,20,0.5)] flex flex-col-reverse">
  {/* Decorative Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[rgba(183,111,31,1)] to-[rgba(223,143,55,1)] opacity-10 rounded-xl"></div>
  <div className="relative z-10 flex flex-col items-center flex-grow">
    <h3 className="text-lg font-medium text-orange-300 text-center uppercase tracking-wide">
      KMCC
    </h3>
    <h2 className="text-2xl font-bold text-white text-center">
      Membership Status
    </h2>
    <p className="text-gray-300 text-center mt-3 text-sm">
      Check the current status of your application.
    </p>
    <a
      href="https://www.mykmcc.in/search"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4"
    >
      <button className="w-full bg-gradient-to-r from-[rgba(183,111,31,1)] to-orange-800 hover:from-orange-600 hover:to-orange-900 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-[0px_4px_15px_rgba(253,126,20,0.7)] transition-transform duration-300 transform hover:scale-105">
        Check
      </button>
    </a>
  </div>
  <FaClipboardList className="text-orange-400 text-[320px] mb-4" />
</div>

      </div>
    </div>
  );
};

export default KmccScheme;
