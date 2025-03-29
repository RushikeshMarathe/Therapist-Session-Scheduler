import React, { useEffect } from 'react'
import { lazy, Suspense } from "react";
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'

const TherapistCards = lazy(() => import("../components/TherapistCards"));
const Services = lazy(() => import("../components/Services"));
const About = lazy(() => import("../components/About"));
const ContactUs = lazy(() => import("../components/ContactUs"));

import { motion } from "framer-motion";


const LandingPage = () => {

  useEffect(() => {
    window.scrollTo({ top: -1, behavior: "smooth" }); // Scrolls to top on refresh
  }, []);



  return (
    <div className='overflow-x-hidden transition-all duration-75 '>
      <Navbar />
     
      <section id='home' className='scroll-mt-32'>
        <HeroSection />
      </section>

      
    <Suspense fallback={<div className='flex  justify-center items-center font-bold mt-32'>Loading...</div>}>

      <motion.section id='therapist' className='scroll-mt-32'
       initial={{ opacity: 0, y: 50 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.6 }}
       viewport={{ once: false }}
       >
        <TherapistCards />
      </motion.section>

      <motion.section id="services" className='scroll-mt-32 '
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
      >
        <Services />
      </motion.section>

      <motion.section id='about' className='scroll-mt-32'
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: false }}>
        <About />
      </motion.section>

      <motion.section id='contact' className='scroll-mt-32' 
      initial={{ opacity: 0, x:-100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: false }}>
        <ContactUs />
      </motion.section>

      </Suspense>

      <Footer />
    </div>
  )
}

export default LandingPage
