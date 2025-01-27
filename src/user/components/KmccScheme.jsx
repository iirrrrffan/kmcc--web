import React from "react";
import { FaUserCheck, FaClipboardList } from "react-icons/fa";

const KmccScheme = () => {
  return (
    <div className="min-h-[50vh] bg-gradient-to-b flex items-center justify-center p-6">
      {/* Container: Schemes Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14  w-full max-w-6xl">
        {/* Card: 1 */}
        <div className="relative bg-gradient-to-br from-green-900 to-green-700 rounded-xl shadow-lg p-6 h-[400px] transform transition-transform duration-500 mt-3 hover:shadow-[0px_10px_30px_rgba(72,255,72,0.5)] flex flex-col-reverse md:items-center ">
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
              className="bg-gradient-to-rc w-[70%] max-w-[300px] text-center from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white font-bold py-3 px-10 rounded-xl shadow-md hover:shadow-[0px_4px_15px_rgba(72,255,72,0.7)] transition-transform duration-300 transform hover:scale-105 mt-3"
            >
              Check
            </a>
          </div>
          <FaUserCheck className="text-green-400 text-[320px] mb-4 md:ml-16" />
        </div>

        {/* Card: 2 */}
        <div className="relative bg-gradient-to-r from-[rgba(183,111,31,1)] to-[rgba(223,143,55,1)] rounded-xl shadow-lg p-6 h-[400px] transform transition-transform duration-500 mt-3 hover:shadow-[0px_10px_30px_rgba(223,143,55,0.5)] flex flex-col-reverse items-center">
          {/* Decorative Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(183,111,31,1)] to-[rgba(223,143,55,1)] opacity-10 rounded-xl"></div>
          <div className="relative z-10 flex flex-col items-center flex-grow">
            <h3 className="text-lg font-medium text-orange-200 text-center uppercase tracking-wide">
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
              className="w-[70%] max-w-[300px] bg-gradient-to-r from-[rgba(183,111,31,1)] to-[rgba(223,143,55,1)] hover:from-orange-500 hover:to-orange-700 text-white font-bold  py-3 px-10 rounded-lg shadow-md hover:shadow-[0px_4px_15px_rgba(223,143,55,0.7)] transition-transform duration-300 transform hover:scale-105 text-center block mt-6"
            >
              Check
            </a>
          </div>
          <FaClipboardList className="text-orange-300 text-[250px] mb-4" />
        </div>
      </div>
    </div>
  );
};

export default KmccScheme;
