"use client";
import React, { useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import "./header.css"
import { motion } from "framer-motion"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import PropTypes from 'prop-types'; // Import PropTypes


const Header = ({darkTheme, handleTheme}) => {

   
    
  return (
    <header className={`sticky top-0 flex items-start justify-between max-w-7xl mx-auto md:items-center p-5 md:px-10  ${darkTheme? "bg-[#191322]" : "bg-[#fff]" }  z-50 md:pt-10 md:pb-0`}>
        <motion.div 
        initial ={{
            x:-500,
            opacity: 0,
            scale : 0.5

        }}
        animate ={{
            x: 0,
            opacity: 1,
            scale: 1,

        }}
        
        className='flex flex-row items-center'>
            <SocialIcon url='https://github.com/victorexpounder' fgColor={darkTheme? 'white' : 'black'} bgColor='transparent' className='icon'/>
            <SocialIcon url='https://www.linkedin.com/in/victor-eze-dev/' fgColor={darkTheme? 'white' : 'black'} bgColor='transparent' className='icon'/>
            <SocialIcon url='https://facebook.com/vickybossman1/'fgColor={darkTheme? 'white' : 'black'} bgColor='transparent' className='icon'/>
            <SocialIcon url='https://www.youtube.com/@techwitheze' fgColor={darkTheme? 'white' : 'black'} bgColor='transparent' className='icon'/>
        </motion.div>

        <motion.div 
        initial={{
            y:-500,
            opacity: 0,
            scale : 0.5
        }}
        animate={{
            y: 0,
            opacity: 1,
            scale : 1
           
        }}
        className='cursor-pointer flex flex-row items-center text-white-300 scale-100 hover:scale-105 duration-500 '>
        <SocialIcon url='mailto:victorexpounder@gmail.com' fgColor={darkTheme? 'white' : 'black'} bgColor='transparent' network='email'/>
        <p className='uppercase hidden text-white-400 md:inline-flex text-sm '>Contact me</p>

        <div className='flex items-center justify-center ml-2 md:ml-7' onClick={handleTheme}>
        {darkTheme?
            <LightModeIcon/>
            :
            <DarkModeIcon />
        }
        </div>
        </motion.div>
    </header>

    
  )
}



export default Header
