import React from 'react'
import { motion } from "framer-motion"
import './header.css'

interface Props {
    
}

const BackgroundCircles = (props: Props) => {
    return (
        <div className='flex relative items-center justify-center flex-col'>
            <motion.div 
            initial ={{
                y:-500,
                opacity: 0,
                scale : 0.5
    
            }}
            animate ={{
                y: 0,
                opacity: 1,
                scale: 1
            }}
            className=' border border-[#fff] w-[200px] h-[200px] rounded-full  animate-bounce avatar lg: mt-48'/>
            <div className=' border border-[#ccf381] w-screen    mt-2 '/>
            <motion.div 
                initial ={{
                    x:-500,
                    opacity: 0,
                    scale : 0.5
        
                }}
                animate ={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}

                className="buttons flex  w-full justify-between px-3 py-1 lg:px-52">
                <button className='tracking-widest'>About</button>
                <button className='tracking-widest'>Experience</button>
                <button className='tracking-widest'>Skills</button>
                <button className='tracking-widest'>Projects</button>
            </motion.div>
            <div className=' border border-[#ccf381] w-screen    mt-2 '/>
            
        </div>
    )
}

export default BackgroundCircles
