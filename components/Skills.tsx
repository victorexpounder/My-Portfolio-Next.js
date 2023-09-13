import React from 'react'
import { motion, Variants } from "framer-motion";
interface Props {
    
}

export const Skills = (props: Props) => {
    return (
        <motion.div 
        initial={{ y: 300, rotate: -10,}}
        whileInView={{ y: 50,
            rotate: 0
            }}
        transition={{type: "spring",
        bounce: 0.4,
        duration: 1}}
        
        className='headText flex items-center justify-center flex-col gap-[2.5rem] w-[100%] md:gap-[4rem]'>
            <div className='text-[1.5rem] md:text-[2.25rem]'>
            <h2>SKILLS</h2>
            <div className='  h-[0.2rem] bg-[#784cb6]'></div>
            </div>

            <div className='w-[100%] flex flex-col items-center justify-center text-[0.938rem] px-[1.5rem] gap-[1.5rem] lg:px-[4.5rem]'>
                <div className='flex justify-between w-[100%] border-b-2 border-[#784cb697] pb-[0.5rem]'>
                    <h3>HTML | CSS | SCSS</h3>
                    <i className="fa-brands fa-html5 text-[1.25rem]"></i>

                </div>
                <div className='flex justify-between w-[100%] border-b-2 border-[#784cb697] pb-[0.5rem]'>
                    <h3>JavaScript | TypeScript</h3>
                    <i className="fa-brands fa-square-js text-[1.25rem]"></i>

                </div>
                <div className='flex justify-between w-[100%]  border-b-2 border-[#784cb697] pb-[0.5rem]'>
                    <h3>React|Redux</h3>
                    <i className="fa-brands fa-react text-[1.25rem]"></i>

                </div>
                <div className='flex justify-between w-[100%]  border-b-2 border-[#784cb697] pb-[0.5rem]'>
                    <h3>React Native</h3>
                    <i className="fa-brands fa-react text-[1.25rem]"></i>

                </div>
                <div className='flex justify-between w-[100%]  border-b-2 border-[#784cb697] pb-[0.5rem]'>
                    <h3>Next.js</h3>
                    <i className="fa-light fa-n text-[1.25rem]"></i>

                </div>
                <div className='flex justify-between w-[100%] border-b-2 border-[#784cb697] pb-[0.5rem]'>
                    <h3>Node.js</h3>
                    <i className="fa-brands fa-node text-[1.25rem]"></i>

                </div>
                <div className='flex justify-between w-[100%] border-b-2 border-[#784cb697] pb-[0.5rem]'>
                    <h3>Express</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="25px" height="24px">
                        <path fill="currentColor" d="M49.729 11h-.85c-1.051 0-2.041.49-2.68 1.324l-8.7 11.377-8.7-11.377C28.162 11.49 27.171 11 26.121 11h-.85l10.971 14.346L25.036 40h.85c1.051 0 2.041-.49 2.679-1.324L37.5 26.992l8.935 11.684C47.073 39.51 48.063 40 49.114 40h.85L38.758 25.346 49.729 11zM21.289 34.242c-2.554 3.881-7.582 5.87-12.389 4.116C4.671 36.815 2 32.611 2 28.109L2 27h12v0h11l0-4.134c0-6.505-4.818-12.2-11.295-12.809C6.273 9.358 0 15.21 0 22.5l0 5.573c0 5.371 3.215 10.364 8.269 12.183 6.603 2.376 13.548-1.17 15.896-7.256 0 0 0 0 0 0h-.638C22.616 33 21.789 33.481 21.289 34.242zM2 22.5C2 16.71 6.71 12 12.5 12S23 16.71 23 22.5V25H2V22.5z"/>
                    </svg>
                </div>
                <div className='flex justify-between w-[100%] border-b-2 border-[#784cb697] pb-[0.5rem]'>
                    <h3>MongoDB</h3>
                    <i className="fa-solid fa-leaf text-[1.25rem]"></i>
                </div>
                <div className='flex justify-between w-[100%] border-b-2 border-[#784cb697] pb-[0.5rem]'>
                    <h3>Firebase</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3.89 15.672L6.255.461A.542.542 0 0 1 7.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 0 0-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 0 0 1.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 0 0-.96 0L3.53 17.984z"/></svg>
                </div>
                
            </div>
        </motion.div>
    )
}
