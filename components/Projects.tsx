import React from 'react'
import victor from '../images/victor.jpg';
import yumz from '../images/yumz.png';
import bcbt from '../images/bcbt.png';
import yumzApp from '../images/YumzApp.png';
import portfolio from '../images/portfolio.png';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import Link from 'next/link';
interface Props {
    
}

export const Projects = (props: Props) => {
   
    return (
        <div className='px-[1rem] md:px-[5rem] flex flex-col gap-[2.5rem] md:gap-[4rem] items-center justify-center'>
            <div className='text-[1.5rem] md:text-[2.25rem]'>
            <h2>Recent Projects</h2>
            <div className='  h-[0.2rem] bg-[#784cb6]'></div>
            </div>

            <Carousel interval={3}  className='w-[320px] md:w-[768px]'>
                <div className='flex  flex-col gap-[2rem] items-center justify-center w-[100%] h-full md:flex-row'>
                    <div className='w-[320px] flex-1 '>
                    <Image src={yumzApp} alt='' className='w-full'/>
                    </div>
                    <div className='flex-1 text-left' >
                        <h3 className='subtitle'>Fullstack Food Recipe Sharing App</h3>
                        <p className='mb-[0.5rem] '>Fullstack social food recipe sharing app that allows users share recipes, connect with one another and build awesome social presence by showing off their cognitive kitchen skills. Built with React, Redux, MongoDB, Node.js and  Express</p>
                        <div className="previewButtons flex gap-3">
                            
                            <Link href={'https://yumz-frontend.vercel.app/feed'} className='p-[1rem] bg-[#784cb6] rounded-md items-center aboutText text-[#fff]' style={{color: '#fff'}}>
                                <p>Demo</p>
                            </Link>
                            <Link href={'https://github.com/victorexpounder/YUMZ-FullStack-Recipe-App'} className='p-[1rem] bg-[#784cb6] rounded-md items-center aboutText text-[#fff]' style={{color: '#fff'}}>
                                <p>Repo</p>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className='flex  flex-col gap-[2rem] items-center justify-center w-[100%] h-full md:flex-row'>
                    <div className='w-[320px] flex-1 '>
                    <Image src={yumz} alt='' className='w-full'/>
                    </div>
                    <div className='flex-1 text-left' >
                        <h3 className='subtitle'>Yumz Landing Page</h3>
                        <p className='mb-[0.5rem] ' >This is a beautiful Landing page for a food delivery service, built with react, sass for styling, react router for routing</p>
                        <div className="previewButtons flex gap-3">
                            <Link href={'https://yumz-landing-page.vercel.app/'} className='py-[0.75rem] px-[1rem] bg-[#784cb6] rounded-md items-center aboutText text-[#fff]' style={{color: '#fff'}}>
                                <p>Demo</p>
                            </Link>
                            <Link href={'https://github.com/victorexpounder/YUMZ-Landing-Pages'} className='p-[1rem] bg-[#784cb6] rounded-md items-center aboutText text-[#fff]' style={{color: '#fff'}}>
                                <p>Repo</p>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className='flex  flex-col gap-[2rem] items-center justify-center w-[100%] h-full md:flex-row'>
                    <div className='w-[320px] flex-1 '>
                    <Image src={bcbt} alt='' className='w-full'/>
                    </div>
                    <div className='flex-1 text-left' >
                        <h3 className='subtitle'>FullStack Examination Management App</h3>
                        <p className='mb-[0.5rem]'>An advanced full-stack web app, with a computer-based environment, conducts tests, uploads results, and includes a secure admin dashboard. Directors, teachers, and principals sign in, manage questions, and access student results. Security features ensure director approval for dashboard access📚📈. Built with React, sass, MUI, context API and Firebase</p>
                        <div className="previewButtons flex gap-3">
                            <Link href={'https://react-cbt-system.vercel.app/'} className='py-[0.75rem] px-[1rem] bg-[#784cb6] rounded-md items-center aboutText text-[#fff]' style={{color: '#fff'}}>
                                <p>Demo</p>
                            </Link>
                            <Link href={'https://github.com/victorexpounder/React-CBT-System'} className='p-[1rem] bg-[#784cb6] rounded-md items-center aboutText text-[#fff]' style={{color: '#fff'}}>
                                <p>Repo</p>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className='flex  flex-col gap-[2rem] items-center justify-center w-[100%] h-full md:flex-row'>
                    <div className='w-[320px] flex-1 '>
                    <Image src={portfolio} alt='' className='w-full'/>
                    </div>
                    <div className='flex-1 text-left' >
                        <h3 className='subtitle'>My Portfolio</h3>
                        <p className='mb-[0.5rem]'>My beautiful looking aesthetic portfolio website, built to showcase my projects and express my skills created with Next.js, tailwindCSS </p>
                        <div className="previewButtons flex gap-3">
                            <Link href={'/'} className='py-[0.75rem] px-[1rem] bg-[#784cb6] rounded-md items-center aboutText text-[#fff]' style={{color: '#fff'}}>
                                <p>Demo</p>
                            </Link>
                            <Link href={'https://github.com/victorexpounder/My-Portfolio-Next.js'} className='p-[1rem] bg-[#784cb6] rounded-md items-center aboutText text-[#fff]' style={{color: '#fff'}}>
                                <p>Repo</p>
                            </Link>
                        </div>
                    </div>

                </div>
                
                
            </Carousel>
        </div>
    )
}
