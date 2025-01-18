import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import { Link } from "react-router-dom";

const AboutHimaya = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById("about-himaya");
    if (section) observer.observe(section);

    AOS.init({ duration: 1000 });

    return () => section && observer.unobserve(section);
  }, []);

  return (
    <div
      id="about-himaya"
      className="relative py-16 px-6 sm:px-12 bg-gradient-to-b flex justify-center "
    >
      {/* Content Section */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-1 gap-12 items-center relative z-20 w-1/2">
        {/* Content Section */}
        <motion.div
          className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-xl text-center lg:text-left flex flex-col justify-center h-full"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2 }}
          data-aos="fade-up"
        >
          <h1 className="text-4xl font-bold text-black mb-4">
            About Himaya
          </h1>
          <p className="text-lg text-gray-300 mb-4">
            <span className="font-semibold text-green-600">
              "Standing by families, always."
            </span>
          </p>
          <p className="text-sm text-gray-900">
          <strong>Himaya @ Thuqbah</strong> is a vital humanitarian initiative launched by Thuqbah KMCC, dedicated to supporting expatriate families in their time of need. The program's core mission is to provide crucial financial and emotional assistance to families who are dealing with the untimely loss of a loved one. The sudden demise of a breadwinner often leaves families in a state of financial uncertainty, unable to cover basic living expenses such as food, children’s education, and healthcare. In such dire circumstances, the emotional toll on family members is immense, and the fear of not being able to provide for their loved ones exacerbates the pain.

Through "Himaya @ Thuqbah", the initiative aims to lighten the burden of these families by providing immediate relief and long-term support. This includes offering financial aid to cover essential needs, such as food supplies, medical treatment, and education fees. Additionally, Himaya works to offer emotional and community support, ensuring that grieving families do not feel alone during their difficult times. 

The program operates with the belief that no family should have to struggle alone in the face of such profound loss. By standing together and offering a helping hand, "Himaya @ Thuqbah" seeks to ease the suffering of these families and ensure they are able to rebuild their lives with dignity and hope. This initiative is a testament to the power of solidarity and compassion, as the community comes together to support those who need it the most during their times of hardship.

          </p>
          {/* Read More Button */}
          <div className="text-center mt-6">
            <Link to={"himaya"}>
              <button className="inline-block px-6 py-3 bg-green-800 text-white font-medium rounded-lg shadow-md hover:bg-green-700 transition-transform transform duration-300 hover:scale-105">
                Read More
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="w-1/2 bg-red-600">

      </div>
    </div>
  );
};

export default AboutHimaya;
