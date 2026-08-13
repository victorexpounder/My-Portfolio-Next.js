import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import victor from '../images/gitpic.png' 
import Image from 'next/image'
import { motion } from "framer-motion"

const Hero = () => {
  const [text] = useTypewriter({
        words: [
            "FullStack MERN Developer",
            "Mobile Developer"
        ],
        loop: true,
        delaySpeed: 2000,

    })
  return (
    <div className='pt-8 md:pt-0'>
      <div className='flex-col items-center justify-center px-6 md:px-8 max-w-screen-lg mx-auto'>
        {/* details */}
        <div className='pt-14 flex flex-col-reverse gap-8 md:flex-row md:pt-0 md:gap-[2.5rem]'>
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
            className='flex-1 rounded-3xl border border-[#784cb6]/20 bg-white/5 p-4 md:p-6'>

            <h1 className='mb-2 text-4xl font-semibold leading-tight md:text-6xl'>Hi, I&apos;m Victor</h1>
            <h3 className='mb-3 text-[1.05rem] font-medium text-[#7b7f95] md:text-[1.25rem]'>
              {text}
              <Cursor/>
            </h3>
            <p className='mb-7 max-w-[62ch] text-[0.95rem] leading-7 text-[#80849a] md:text-[1rem]'>
              I’m Eze Victor, a Full-Stack Engineer and builder focused on creating thoughtful, scalable digital products. I turn complex problems into intuitive experiences across web and mobile, while exploring the intersection of technology, creativity, and storytelling.
            </p>
            <a download target='_blank' rel='noopener noreferrer' href='https://canva.link/z08ql805j9lzd22' className='inline-block rounded-xl bg-[#784cb6] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#573588]'>
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
            className='p-0 m-0 w-full flex-1 items-center justify-center flex'>
            <Image className='rounded-full border-4 border-[#784cb6]/25 shadow-[0_20px_60px_rgba(120,76,182,0.25)] md:w-[320px] md:h-[320px]'
            src={victor}
            alt="Picture Victor Eze"
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
