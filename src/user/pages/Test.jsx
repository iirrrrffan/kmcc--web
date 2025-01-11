import React from 'react'
import { FaUserCheck } from 'react-icons/fa'

const Test = () => {
  return (
    <div>
  {/* Main Content */}
  <div className="relative z-10 flex flex-col items-center justify-center p-6 rounded-xl shadow-lg">
    <FaUserCheck className="text-green-400 text-[320px] mb-4" />
    <h3 className="text-lg font-medium text-green-300 text-center uppercase tracking-wide">
      KMCC
    </h3>
    <h2 className="text-2xl font-bold text-white text-center mt-2">
      Check Your Scheme Status
    </h2>
    <p className="text-gray-300 text-center mt-3 text-sm">
      Verify your KMCC membership status instantly with just a click.
    </p>
    <a
      href="https://www.mykmcc.org/security-scheme-status"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-6 w-full"
    >
      <button className="w-full bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-[0px_4px_15px_rgba(72,255,72,0.7)] transition-transform duration-300 transform hover:scale-105">
        Check
      </button>
    </a>
  </div>
</div>

  )
}

export default Test