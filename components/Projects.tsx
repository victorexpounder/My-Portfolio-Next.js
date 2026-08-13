import React, { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { fetchProjects } from '../fetchProjects';

interface Project {
    title: string,
    shortDescription: string,
    featuredImageUrl: string,
    demo?: string,
    repo?: string,
}

interface Props {
    darkTheme?: boolean,
}

export const Projects = ({ darkTheme = false }: Props) => {
    const [projectData, setProjectData] = useState<Project[]>([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(1)
    const thumbnailRailRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        fetchProjects()
                    .then((data) => {
                        const normalized = (data as any[]).map((item) => ({
                                title: String(item?.title || 'Untitled Project'),
                                shortDescription: String(item?.shortDescription || 'No description available yet.'),
                                featuredImageUrl: item?.featuredImage?.fields?.file?.url ? `https:${item.featuredImage.fields.file.url}` : '',
                                demo: item?.demo ? String(item.demo) : undefined,
                                repo: item?.repo ? String(item.repo) : undefined,
                        }));

                        setProjectData(normalized.reverse());
                    })
          .catch(console.error); 
      }, []);

    useEffect(() => {
        if (!projectData.length) {
            return;
        }

        if (currentIndex > projectData.length - 1) {
            setCurrentIndex(0);
        }
    }, [projectData, currentIndex]);

    useEffect(() => {
        if (currentIndex === 0 && thumbnailRailRef.current) {
            thumbnailRailRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
    }, [currentIndex]);

    const currentProject = useMemo(() => projectData[currentIndex], [projectData, currentIndex]);

    const goToProject = (index: number) => {
        if (!projectData.length) {
            return;
        }

        const boundedIndex = (index + projectData.length) % projectData.length;
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(boundedIndex);
    };

    const goToNext = () => {
        if (!projectData.length) {
            return;
        }

        setDirection(1);
        setCurrentIndex((prev) => {
            if (prev >= projectData.length - 1) {
                return 0;
            }

            return prev + 1;
        });
    };

    const goToPrev = () => {
        if (!projectData.length) {
            return;
        }

        setDirection(-1);
        setCurrentIndex((prev) => {
            if (prev <= 0) {
                return projectData.length - 1;
            }

            return prev - 1;
        });
    };

    const handleKeyNavigation = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowRight') {
            goToNext();
        }

        if (event.key === 'ArrowLeft') {
            goToPrev();
        }
    };
   
    return (
        <div className='w-full max-w-[1200px] px-4 md:px-10'>
            <div className='mb-8 text-center md:mb-10'>
                <p className='mb-2 text-sm uppercase tracking-[0.3em] text-[#784cb6]'>Recent Work</p>
                <h2 className={`text-3xl font-semibold md:text-5xl ${darkTheme ? 'text-white' : 'text-[#21182f]'}`}>Project Showcase</h2>
                <p className={`mx-auto mt-3 max-w-[680px] text-sm md:text-base ${darkTheme ? 'text-[#d4cee6]' : 'text-[#4f4961]'}`}>
                    From web applications to mobile experiences, discover the innovative solutions I've built to solve real-world problems.
                </p>
            </div>

            {!projectData.length && (
                <div className={`rounded-3xl border p-8 text-center ${darkTheme ? 'border-[#9b7ad4]/30 bg-gradient-to-br from-[#231a37] via-[#2d2143] to-[#1f263b] text-[#ece8f6]' : 'border-[#784cb6]/30 bg-gradient-to-br from-[#f4ecff] via-white to-[#f2f8ff] text-[#261c35]'}`}>
                    <p className='text-lg'>Loading projects...</p>
                </div>
            )}

            {projectData.length > 0 && currentProject && (
                <div className='space-y-5' onKeyDown={handleKeyNavigation} tabIndex={0}>
                    <div className={`rounded-3xl border p-2 shadow-[0_18px_70px_rgba(120,76,182,0.18)] md:p-3 ${darkTheme ? 'border-[#9b7ad4]/30 bg-gradient-to-br from-[#241b38] via-[#2b2240] to-[#1f2638]' : 'border-[#784cb6]/25 bg-gradient-to-br from-[#f8f1ff] via-white to-[#f0f6ff]'}`}>
                        <div className={`relative overflow-hidden rounded-[1.3rem] p-4 backdrop-blur md:p-6 ${darkTheme ? 'bg-[#1b1528]/90' : 'bg-white/90'}`}>
                            <div className='pointer-events-none absolute -top-16 -right-12 h-48 w-48 rounded-full bg-[#784cb6]/15 blur-2xl' />
                            <div className='pointer-events-none absolute -bottom-16 -left-12 h-48 w-48 rounded-full bg-[#3f9df8]/20 blur-2xl' />

                            <div className='relative mb-4 flex items-center justify-between'>
                                <p className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${darkTheme ? 'border-[#a182db]/40 bg-[#2b2140] text-[#ccb9ee]' : 'border-[#784cb6]/30 bg-white/70 text-[#784cb6]'}`}>
                                    Project {currentIndex + 1} / {projectData.length}
                                </p>
                                <div className='hidden items-center gap-2 md:flex'>
                                    <button
                                        aria-label='Previous project'
                                        className={`h-10 w-10 rounded-full border transition hover:-translate-y-0.5 hover:bg-[#784cb6] hover:text-white ${darkTheme ? 'border-[#a182db]/35 bg-[#251c37] text-[#ebddff]' : 'border-[#784cb6]/30 bg-white text-[#472b72]'}`}
                                        onClick={goToPrev}
                                        type='button'
                                    >
                                        ←
                                    </button>
                                    <button
                                        aria-label='Next project'
                                        className={`h-10 w-10 rounded-full border transition hover:-translate-y-0.5 hover:bg-[#784cb6] hover:text-white ${darkTheme ? 'border-[#a182db]/35 bg-[#251c37] text-[#ebddff]' : 'border-[#784cb6]/30 bg-white text-[#472b72]'}`}
                                        onClick={goToNext}
                                        type='button'
                                    >
                                        →
                                    </button>
                                </div>
                            </div>

                            <AnimatePresence mode='wait' initial={false}>
                                <motion.div
                                    key={`${currentProject.title}-${currentIndex}`}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    className='grid gap-6 md:grid-cols-12 md:items-center'
                                    exit={{ opacity: 0, x: -40 * direction, scale: 0.98 }}
                                    initial={{ opacity: 0, x: 40 * direction, scale: 0.98 }}
                                    transition={{ duration: 0.35, ease: 'easeOut' }}
                                >
                                    <div className='md:col-span-7'>
                                        <div className={`relative overflow-hidden rounded-2xl border ${darkTheme ? 'border-white/10 bg-[#2a203d]' : 'border-black/5 bg-[#f8f8f8]'}`}>
                                            {currentProject.featuredImageUrl ? (
                                                <Image
                                                    alt={currentProject.title || 'Project image'}
                                                    className='h-[220px] w-full object-cover object-top md:h-[360px]'
                                                    height={1200}
                                                    src={currentProject.featuredImageUrl}
                                                    width={2048}
                                                />
                                            ) : (
                                                <div className={`flex h-[220px] w-full items-center justify-center md:h-[360px] ${darkTheme ? 'bg-[#35264e]' : 'bg-[#ece6f7]'}`}>
                                                    <p className={`text-sm font-medium ${darkTheme ? 'text-[#e1d2ff]' : 'text-[#5d4a7b]'}`}>Preview image unavailable</p>
                                                </div>
                                            )}
                                            <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 to-transparent' />
                                        </div>
                                    </div>

                                    <div className='md:col-span-5'>
                                        <h3 className={`mb-2 text-2xl font-semibold leading-tight md:text-3xl ${darkTheme ? 'text-white' : 'text-[#1f1630]'}`}>{currentProject.title}</h3>
                                        <p className={`mb-5 text-sm leading-6 md:text-base ${darkTheme ? 'text-[#d3c9e8]' : 'text-[#4c4760]'}`}>{currentProject.shortDescription}</p>

                                        <div className='flex flex-wrap gap-3'>
                                            {currentProject.demo && (
                                                <Link
                                                    className='rounded-xl bg-[#784cb6] px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#6337a4]'
                                                    href={currentProject.demo}
                                                    rel='noreferrer'
                                                    target='_blank'
                                                >
                                                    Live Demo
                                                </Link>
                                            )}
                                            {currentProject.repo && (
                                                <Link
                                                    className={`rounded-xl border px-5 py-3 text-sm font-medium transition hover:-translate-y-0.5 hover:border-[#784cb6] ${darkTheme ? 'border-[#a182db]/45 bg-[#251c37] text-[#ece1ff] hover:bg-[#322547]' : 'border-[#784cb6]/35 bg-white text-[#332649] hover:bg-[#f6f0ff]'}`}
                                                    href={currentProject.repo}
                                                    rel='noreferrer'
                                                    target='_blank'
                                                >
                                                    View Code
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            <div className='mt-5 flex items-center justify-center gap-2 md:hidden'>
                                <button
                                    aria-label='Previous project'
                                    className={`h-10 w-10 rounded-full border ${darkTheme ? 'border-[#a182db]/35 bg-[#251c37] text-[#ebddff]' : 'border-[#784cb6]/30 bg-white text-[#472b72]'}`}
                                    onClick={goToPrev}
                                    type='button'
                                >
                                    ←
                                </button>
                                <button
                                    aria-label='Next project'
                                    className={`h-10 w-10 rounded-full border ${darkTheme ? 'border-[#a182db]/35 bg-[#251c37] text-[#ebddff]' : 'border-[#784cb6]/30 bg-white text-[#472b72]'}`}
                                    onClick={goToNext}
                                    type='button'
                                >
                                    →
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='flex snap-x gap-3 overflow-x-auto pb-2' ref={thumbnailRailRef}>
                        {projectData.map((project, index) => {
                            const selected = index === currentIndex;

                            return (
                                <button
                                    className={`min-w-[170px] snap-start rounded-2xl border p-2 text-left transition ${selected ? darkTheme ? 'border-[#a182db] bg-[#2d2242] text-white shadow-md' : 'border-[#784cb6] bg-[#f8f0ff] text-[#2b1f40] shadow-md' : darkTheme ? 'border-white/10 bg-[#211a31] text-[#e4d9f8] hover:border-[#a182db]/60' : 'border-black/10 bg-white text-[#2b1f40] hover:border-[#784cb6]/50'}`}
                                    key={`${project.title}-${index}`}
                                    onClick={() => goToProject(index)}
                                    type='button'
                                >
                                    <div className='relative mb-2 overflow-hidden rounded-xl'>
                                        {project.featuredImageUrl ? (
                                            <Image
                                                alt={project.title || 'Project thumbnail'}
                                                className='h-[84px] w-full object-cover'
                                                height={350}
                                                src={project.featuredImageUrl}
                                                width={600}
                                            />
                                        ) : (
                                            <div className={`flex h-[84px] w-full items-center justify-center ${darkTheme ? 'bg-[#35264e]' : 'bg-[#ece6f7]'}`}>
                                                <p className={`text-[10px] font-medium ${darkTheme ? 'text-[#e1d2ff]' : 'text-[#5d4a7b]'}`}>No image</p>
                                            </div>
                                        )}
                                    </div>
                                    <p className='line-clamp-2 text-xs font-medium'>{project.title}</p>
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    )
}
