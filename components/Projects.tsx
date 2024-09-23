import React, { useEffect, useState } from 'react'
import victor from '../images/victor.jpg';
import yumz from '../images/yumz.png';
import bcbt from '../images/bcbt.png';
import yumzApp from '../images/YumzApp.png';
import portfolio from '../images/portfolio.png';
import chatmu from '../images/chatmu.png';
import deepad from '../images/deepad.png';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import Link from 'next/link';
import { fetchProjects } from '../fetchProjects';
interface Props {
    
}

interface projects{
    title: any,
    shortDescription: any,
    featuredImage: any,
    demo: any,
    repo: any,
}

export const Projects = (props: Props) => {

    const [projectData, setProjectData] = useState<projects[] | null>([])

    useEffect(() => {
        fetchProjects()
          .then((data) => setProjectData(data))
          .catch(console.error); 
      }, []);
   
    return (
        <div className='px-[1rem] md:px-[5rem] flex flex-col gap-[2.5rem] md:gap-[4rem] items-center justify-center'>
            <div className='text-[1.5rem] md:text-[2.25rem]'>
            <h2>Recent Projects</h2>
            <div className='  h-[0.2rem] bg-[#784cb6]'></div>
            </div>

            <Carousel interval={3}  className='w-[320px] md:w-[768px]'>

                {projectData?.map(({title,shortDescription,featuredImage,demo,repo})=>(

                    <div className='flex  flex-col gap-[2rem] items-center justify-center w-[100%] h-full md:flex-row'>
                        <div className='w-[320px] flex-1 '>
                        <Image src={`https:${featuredImage.fields.file.url}`} alt='' width={2048} height={1200}/>
                        </div>
                        <div className='flex-1 text-left' >
                            <h3 className='subtitle'>{title}</h3>
                            <p className='mb-[0.5rem] '>{shortDescription}</p>
                            <div className="previewButtons flex gap-3">
                                
                                <Link target='blank' href={demo} className='p-[1rem] bg-[#784cb6] rounded-md items-center aboutText text-[#fff]' style={{color: '#fff'}}>
                                    <p>Demo</p>
                                </Link>
                                <Link target='blank' href={repo} className='p-[1rem] bg-[#784cb6] rounded-md items-center aboutText text-[#fff]' style={{color: '#fff'}}>
                                    <p>Repo</p>
                                </Link>
                            </div>
                        </div>

                    </div>

                ))}
                

                


                

                
                
                
                
                
            </Carousel>
        </div>
    )
}
