import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion'; // Ensure you import `motion` from `framer-motion`
import UNav from '../components/UNav';
import Banner from '../components/common/Banner';
import Content from '../components/about/Content';
import MissionVision from '../components/about/MissionVision';
import Footer from '../components/Footer';

const OverView = () => {
   const [isScrollingUp, setIsScrollingUp] = useState(true);
    const [lastScrollPosition, setLastScrollPosition] = useState(0);
    const footerRef = useRef(null);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPosition = window.scrollY;
  
        // Determine scroll direction
        if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 100) {
          setIsScrollingUp(false); // Scrolling down
        } else {
          setIsScrollingUp(true); // Scrolling up
        }
  
        setLastScrollPosition(currentScrollPosition);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [lastScrollPosition]);
  return (
    <div>
      <div
        className={`top-0 w-full z-50 fixed transition-transform duration-300 pt-[54px] ${
          isScrollingUp ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <UNav scrollToFooter={() => footerRef.current.scrollIntoView({ behavior: 'smooth' })} />
      </div>
      <Banner titile="About"  Image='https://blog.se.com/wp-content/uploads/2024/01/generic_life-at-schneider-electric_GettyImages-888343166-2048x1367.jpg'/>
      <section className="md:py-24 py-4 bg-gray-50">
        <div className="global-container">
          {/* Header Section */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Himaya Overview
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the vision, mission, and activities of the Kerala Muslim Cultural Centre (KMCC), the world’s largest organization for expatriates.
            </p> */}
            <Content/>
          </motion.div>
          <MissionVision/>
        </div>
      </section>
          <Footer />
    </div>
  );
};

export default OverView;
