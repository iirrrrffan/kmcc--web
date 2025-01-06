import React from "react";
import image from "../../assets/frds.jpg"; // Replace with your actual image path
import image2 from "../../assets/frds1.jpg"; // Replace with your actual image path
import image3 from "../../assets/weer.jpg"; // Replace with your actual image path
import { Link } from "react-router-dom";

const CheckHimaya = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-green-500 to-green-800 overflow-hidden">
      {/* Sliding Background */}
      <div className="absolute inset-0 flex justify-center overflow-hidden">
        <div className="w-full max-w-5xl flex animate-slide-infinite">
          <img
            src={image}
            alt="Background 1"
            className="w-full h-full object-cover opacity-30"
          />
          <img
            src={image2}
            alt="Background 2"
            className="w-full h-full object-cover opacity-30"
          />
          <img
            src={image3}
            alt="Background 3"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
      </div>

      {/* Foreground Form */}
      <div className="relative flex max-w-3xl w-full bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden backdrop-filter backdrop-blur-lg z-10">
        {/* Left Image Section */}
        <div className="hidden md:flex flex-1 items-center justify-center bg-gray-50 bg-opacity-60 p-6">
          <img
            src={image}
            alt="Himaya Check"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Form Section */}
        <div className="flex-1 p-6">
          <h1 className="text-3xl font-bold text-center text-green-600 mb-4">
            Check Himaya Status
          </h1>
          <p className="text-center text-gray-600 mb-6">
            Enter your Iqama Number below to check your Himaya status.
          </p>

          <form className="space-y-6">
            {/* Iqama Number Input */}
            <div>
              <label
                htmlFor="iqamaNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Iqama Number
              </label>
              <input
                type="text"
                id="iqamaNumber"
                placeholder="Enter your Iqama Number"
                className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-150"
              />
            </div>

            {/* Submit Button */}
            <Link to={"/details"}>
            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-300"
            >
              Check
            </button>
            </Link>
          </form>

          {/* Help Section */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Need assistance?{" "}
              <a href="#" className="text-green-600 hover:underline">
                Contact Support
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckHimaya;
