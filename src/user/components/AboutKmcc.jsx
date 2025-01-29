import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AboutKmcc = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById("about-kmcc");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <>
     
      <section
      style={{ borderRadius: "0 0 50px 50px", backgroundImage:"url(https://i.ytimg.com/vi/bNRi-dr48io/maxresdefault.jpg)",backgroundRepeat:"no-repeat",backgroundSize:'cover'}}
        id="about-kmcc"
        className="relative py-24 bg-gradient-to-b bg-green-800 overflow-hidden"

      >
        <div className="global-container relative z-10 px-6 md:px-12 lg:px-20"
        >
          
         
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-6xl font-serif text-center text-wrap   font-extrabold text-white mb-6 tracking-wider drop-shadow-lg">
            KMCC the largest expatriate organisationin the world
            </h2>
            <p className="text-sm md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light ">
            The Kerala Muslim Cultural Centre (KMCC) is an expatriate charity and volunteer organisation for expatriates from Kerala.
             Formed in 1981 as an official organisation of the All India Muslim League (AIML) under Umar Bafakhy Thangal, KMCC has promoted the welfare of expatriate Indians through relief activities, C.H. centers and social servicesKMCC has been receiving thunderous applause for its sincere efforts for the social, cultural, economical and educative upliftment of malayalees all over the world. Riyadh KMCC has been a strong and persistent activist in promoting the welfare of expatriate Indians and addressing their day-to-day issues. KMCC has a major footprint in Middle Eastern nations.
            </p>
          </motion.div>

          
          <motion.div
            className="text-center space-y-8 mx-auto max-w-4xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
          
            <p className="text-3xl font-semibold text-green-400 drop-shadow-md font-serif">
              "KMCC: The world's largest expat welfare community."
            </p>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              Established in{" "}
              <span className="text-green-400 font-bold">1981</span>, KMCC has
              transformed the lives of countless expatriates by offering
              community, security, and empowerment.
            </p>
            <a
  href="https://kmcccare.com/about"
  target="_blank"
  rel="noopener noreferrer"
>
              <motion.button
                className="relative px-12 py-4 mt-3 text-lg font-bold text-white bg-gradient-to-r from-green-500 to-green-700 rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-110 duration-300 ease-in-out uppercase tracking-wider"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
              </a>
          </motion.div>
        </div>
      </section>
      
    </>
  );
};

export default AboutKmcc;
