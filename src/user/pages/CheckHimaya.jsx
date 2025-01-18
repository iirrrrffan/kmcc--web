import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import bg from "../../assets/green bg.jfif";

const CheckHimaya = () => {
  const [identifier, setIdentifier] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!identifier) {
      setError("Please enter your Iqama or Adhar Number.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:4000/user/login", {
        iqamaNumber: identifier,
        AdharNumber: identifier,
      });

      if (response.data) {
        const user = response.data.user;
        navigate("/details", { state: { user } });
      }
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred. Please try again.");
    }
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex w-full max-w-5xl bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden">
        <div className="flex-1 hidden md:block bg-gray-200"></div>
        <div className="flex-1 p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-center text-green-600 mb-6">
            Check Himaya Status
          </h1>
          <p className="text-center text-gray-600 mb-6">
            Enter your Iqama or Adhar Number below to check your Himaya status.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="identifier"
                className="block text-sm font-medium text-gray-700"
              >
                Iqama or Adhar Number
              </label>
              <input
                type="text"
                id="identifier"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="Enter your Iqama or Adhar Number"
                className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-150"
              />
            </div>

            {error && <p className="text-red-600 text-center">{error}</p>}

            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-300"
            >
              Check
            </button>
          </form>

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
