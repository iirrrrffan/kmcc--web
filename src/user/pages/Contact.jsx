import React, { useEffect, useRef, useState } from "react";
import UNav from "../components/UNav";
import Footer from "../components/Footer";

function Contact() {
  const footerRef = useRef(null);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      // Determine scroll direction
      if (
        currentScrollPosition > lastScrollPosition &&
        currentScrollPosition > 100
      ) {
        setIsScrollingUp(false); // Scrolling down
      } else {
        setIsScrollingUp(true); // Scrolling up
      }

      setLastScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPosition]);
  return (
    <div className="relative">
      <div
        className={`top-0 w-full z-50 fixed transition-transform duration-300 pt-[54px] ${
          isScrollingUp ? "-translate-y-12" : "-translate-y-full"
        }`}
      >
        <UNav
          scrollToFooter={() =>
            footerRef.current.scrollIntoView({ behavior: "smooth" })
          }
        />
      </div>
      <div className="bg-primary flex justify-center items-center w-full h-60 bg-cover bg-center bg-no-repeat" style={{backgroundImage:'url(https://www.sunergysolar.ae/wp-content/uploads/2022/03/contact-us-banner.jpg)'}}>
        {/* <p className="text-7xl  text-center font-bold">contact</p> */}
      </div>
      <div className=" w-full  flex pl-20 pr-20  ">
        {/* leftImagesetion */}
        <div className="w-2/5 flex justify-center items-center pl-12">
          <div className=" p-2 h-3/4 rounded-lg overflow-hidden">
            <img
              className="h-full w-full object-cover rounded-lg"
              src="https://avatars.mds.yandex.net/i?id=548d95277512ad09f3acb35fee463947_l-5139440-images-thumbs&ref=rim&n=13&w=1698&h=1131"
              alt="Contact Us"
            />
          </div>
        </div>

        {/* rightsectiuon */}
        <div className="w-3/5 flex  p-10 ">
          <div className=" w-full p-10">
            <p className="font-semibold text-7xl text-pretty italic text-center text-primary">
              Contact Us
            </p>
            <div>
              <p className="text-lg mt-1">
                If you like to know more about our services, feel free to
                contact us
              </p>
              <p className="text-sm text-gray-600 mt-1">
                We believe in serving others with best in class services and we
                welcome all your questions and enquiries regarding our services.
              </p>
            </div>
            <div>
              <form className="space-y-6 mt-1">
                {/* First Name and Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Contact Number */}
                <div>
                  <label
                    htmlFor="contact"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    id="contact"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="Enter your contact number"
                    required
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="Enter the subject"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="Enter your message"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-green-500 to-primary rounded-lg shadow-md hover:from-green-600 hover:to-primary focus:outline-none focus:ring-4 focus:ring-green-300"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Contact;
