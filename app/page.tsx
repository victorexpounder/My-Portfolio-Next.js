"use client";
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';
import { motion } from "framer-motion"




const page = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const handleTheme = () =>{
      setDarkTheme(!darkTheme);
      localStorage.setItem("darkTheme", JSON.stringify(darkTheme))
  }
   
  return (
    <div className={` ${darkTheme? 'text-white' : 'text-black' } ${darkTheme? "bg-[#191322]" : "bg-[#fff]"}  `}>
    {/* Header */}
    
      <Header darkTheme={darkTheme} handleTheme={handleTheme}/>
    

   <section id="hero" className='h-screen  md:flex items-center justify-center md:pb-[3rem]'>
    <Hero  />
   </section>

   <motion.section 
   id='skills' className='pt-[6rem] overflow-x-hidden'>
    <Skills/>
   </motion.section>

   <motion.section
   initial={{ opacity: 0.5, scale: 0}}
   whileInView={{ opacity: 1, scale: 1 }}
   transition={{duration: 0.5, }}
  
   id='projects' className='mt-[6rem] flex items-center justify-center box-border'>
    <Projects/>
   </motion.section>

   <motion.section
   initial={{ opacity: 0.5, y: 400}}
   whileInView={{ opacity: 1, y: 0 }}
   transition={{duration: 0.5, }}
   className='contact  pt-[2rem] md:pt-[6rem]' id='contact'>
    <Contact/>
   </motion.section>

    </div>
  )
}

export default page


