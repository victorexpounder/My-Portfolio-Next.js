import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

type SkillCategory = 'All' | 'Frontend' | 'Backend' | 'Mobile'
type SkillIconType = 'html' | 'js' | 'react' | 'next' | 'node' | 'express' | 'mongo' | 'firebase'

interface Skill {
    title: string,
    category: Exclude<SkillCategory, 'All'>,
    icon: SkillIconType,
}

const categories: SkillCategory[] = ['All', 'Frontend', 'Backend', 'Mobile']

const skills: Skill[] = [
    { title: 'HTML | CSS | SCSS', category: 'Frontend', icon: 'html' },
    { title: 'JavaScript | TypeScript', category: 'Frontend', icon: 'js' },
    { title: 'React | Redux', category: 'Frontend', icon: 'react' },
    { title: 'React Native', category: 'Mobile', icon: 'react' },
    { title: 'Next.js', category: 'Frontend', icon: 'next' },
    { title: 'Node.js', category: 'Backend', icon: 'node' },
    { title: 'Express', category: 'Backend', icon: 'express' },
    { title: 'MongoDB', category: 'Backend', icon: 'mongo' },
    { title: 'Firebase', category: 'Backend', icon: 'firebase' },
]

const renderSkillIcon = (icon: SkillIconType) => {
    if (icon === 'html') {
        return <i className='fa-brands fa-html5 text-[1.5rem]' aria-hidden='true'></i>
    }

    if (icon === 'js') {
        return <i className='fa-brands fa-square-js text-[1.5rem]' aria-hidden='true'></i>
    }

    if (icon === 'react') {
        return <i className='fa-brands fa-react text-[1.5rem]' aria-hidden='true'></i>
    }

    if (icon === 'next') {
        return <i className='fa-light fa-n text-[1.5rem]' aria-hidden='true'></i>
    }

    if (icon === 'node') {
        return <i className='fa-brands fa-node text-[1.5rem]' aria-hidden='true'></i>
    }

    if (icon === 'express') {
        return (
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50' width='28px' height='28px' aria-hidden='true'>
                <path fill='currentColor' d='M49.729 11h-.85c-1.051 0-2.041.49-2.68 1.324l-8.7 11.377-8.7-11.377C28.162 11.49 27.171 11 26.121 11h-.85l10.971 14.346L25.036 40h.85c1.051 0 2.041-.49 2.679-1.324L37.5 26.992l8.935 11.684C47.073 39.51 48.063 40 49.114 40h.85L38.758 25.346 49.729 11zM21.289 34.242c-2.554 3.881-7.582 5.87-12.389 4.116C4.671 36.815 2 32.611 2 28.109L2 27h12v0h11l0-4.134c0-6.505-4.818-12.2-11.295-12.809C6.273 9.358 0 15.21 0 22.5l0 5.573c0 5.371 3.215 10.364 8.269 12.183 6.603 2.376 13.548-1.17 15.896-7.256 0 0 0 0 0 0h-.638C22.616 33 21.789 33.481 21.289 34.242zM2 22.5C2 16.71 6.71 12 12.5 12S23 16.71 23 22.5V25H2V22.5z' />
            </svg>
        )
    }

    if (icon === 'mongo') {
        return <i className='fa-solid fa-leaf text-[1.5rem]' aria-hidden='true'></i>
    }

    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 24 24' aria-hidden='true'>
            <path fill='currentColor' d='M3.89 15.672L6.255.461A.542.542 0 0 1 7.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 0 0-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 0 0 1.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 0 0-.96 0L3.53 17.984z' />
        </svg>
    )
}

export const Skills = () => {
    const [activeCategory, setActiveCategory] = useState<SkillCategory>('All')

    const filteredSkills = useMemo(() => {
        if (activeCategory === 'All') {
            return skills
        }

        return skills.filter((skill) => skill.category === activeCategory)
    }, [activeCategory])

    return (
        <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className='w-full px-4 pb-6 md:px-8 lg:px-12'
        >
            <div className='mx-auto max-w-[1100px]'>
                <div className='mb-8 text-center'>
                    <p className='mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#784cb6]'>Skills</p>
                    <h2 className='text-3xl font-semibold md:text-5xl'>My Development Toolbox</h2>
                    <p className='mx-auto mt-3 max-w-[700px] text-sm text-[#676b82] md:text-base'>
                        Explore my stack by category.
                    </p>
                </div>

                <div className='mb-5 flex flex-wrap justify-center gap-2'>
                    {categories.map((category) => {
                        const isActive = activeCategory === category

                        return (
                            <button
                                key={category}
                                type='button'
                                onClick={() => setActiveCategory(category)}
                                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${isActive ? 'border-[#784cb6] bg-[#f3e9ff] text-[#5e3697]' : 'border-black/15 bg-white text-[#4f556d] hover:border-[#784cb6]/45 hover:bg-[#faf6ff]'}`}
                                aria-pressed={isActive}
                            >
                                {category}
                            </button>
                        )
                    })}
                </div>

                <div className='rounded-3xl border border-[#784cb6]/20 bg-gradient-to-br from-[#faf4ff] via-white to-[#f2f8ff] p-4 shadow-[0_16px_56px_rgba(120,76,182,0.14)] md:p-6'>
                    <div className='mb-4 flex items-center justify-between'>
                        <p className='text-xs font-semibold uppercase tracking-[0.16em] text-[#7a5ca8]'>
                            {activeCategory} Skills
                        </p>
                        <p className='text-sm text-[#6a6f87]'>{filteredSkills.length} items</p>
                    </div>

                    <div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
                        {filteredSkills.map((skill, index) => (
                            <motion.article
                                key={skill.title}
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.3, delay: index * 0.03 }}
                                className='rounded-2xl border border-black/10 bg-white/90 p-4 transition hover:-translate-y-1 hover:border-[#784cb6]/45 hover:shadow-md'
                            >
                                <div className='mb-3 flex items-center justify-between'>
                                    <div className='rounded-xl border border-[#784cb6]/25 bg-[#f9f4ff] p-2 text-[#61389c]'>
                                        {renderSkillIcon(skill.icon)}
                                    </div>
                                    <span className='rounded-full bg-[#f3e9ff] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#6f43ab]'>
                                        {skill.category}
                                    </span>
                                </div>

                                <h3 className='text-[0.96rem] font-semibold text-[#2f2840]'>{skill.title}</h3>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    )
}
