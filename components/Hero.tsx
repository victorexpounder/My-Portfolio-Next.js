import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import victor from '../images/victor.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"

const Hero = () => {
    const [text, count] = useTypewriter({
        words: [
            
            "FullStack MERN Developer",
            "Mobile Developer"
        ],
        loop: true,
        delaySpeed: 2000,

    })
  return (
    <div className='pt-8 md:pt-0'>
      <div className='flex-col items-center justify-center px-8 max-w-screen-md mx-auto'>
        {/* details */}
        <div className='pt-14 flex flex-col-reverse gap-6 md:flex-row md:pt-0 md:gap-[2rem]'>
          {/* text details */}
          <motion.div
            initial ={{
              y:-500,
              opacity: 0,
              scale : 0.5
             }}
             animate={{
              y: 0,
              opacity:1,
              scale: 1,
             }}
            className='flex-1'>
            <h1 className='headText md:text-6xl'> Hi, I'm Victor</h1>
            <h3 className='subtitle'>
              {text}
              <Cursor/>
            </h3>
            <p className='aboutText'>
            I am Eze Victor, a tech virtuoso, mastering the MERN stack and conquering React Native. I craft digital wonders that leave users awestruck. Explore my world of unparalleled development expertise.
            </p>
            <a download href='https://drive.google.com/file/d/1T79SEfPE3KoYnPPewO3em8Hds1qupsuK/view?usp=sharing' className='button bg-[#784cb6] p-4 rounded-md hover:bg-[#573588] ' style={{color: '#fff'}}>
              Download Resume
            </a>
          </motion.div>
          {/* picture */}
          <motion.div
            initial ={{
              x:-500,
              opacity: 0,
              scale : 0.5
             }}
             animate={{
              x: 0,
              opacity:1,
              scale: 1,
             }}
            className=' p-0 m-0 w-full flex-1 items-center justify-center flex'>
            <Image className='rounded-full md:w-[300px] md:h-[300px]'
            src={victor}
            alt="Picture of the author"
            width="200"
            height="180"
            />
          </motion.div>
        </div>
        
      </div>
      
    </div>
  )
}

export default Hero
