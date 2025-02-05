import { assets, infoList, toolsData } from '@/assets/assets'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

type InfoList = {
	icon: StaticImageData
	iconDark: StaticImageData
	title: string
	description: string
}

const About = ({ darkMode } : {darkMode: boolean}) => {
  return (
	<div id='about' className='w-full px-[12%] py-10 scroll-mt-16'>
		<h4 className='text-center text-lg mb-2 font-Ovo'>Introduction</h4>
		<h2 className='text-center text-5xl font-Ovo'>About Me</h2>

		<div className='flex w-full flex-col min-[1144px]:flex-row items-center gap-20 my-20'>
			<div className='w-64 sm:w-80 rounded-3xl max-w-none'>
				<Image className='w-full rounded-3xl' src={assets.profile_img} alt='wojtyla-photo' />
			</div>
			<div className='flex-1'>
				<p  className='mb-10 max-w-2xl text-justify'>
					I&apos;m an IT undergraduate with 3+ years of programming experience, specializing in data-driven solutions. Passionate about Full-Stack Engineering, AI/ML, and Project Management. Skilled in competitive programming, algorithms, and problem-solving with a creative and analytical approach.
				</p>

				<ul className='max-w-2xl grid grid-cols-1 sm:grid-cols-3 gap-6'>
					{infoList.map(({icon, iconDark, title, description}: InfoList, index: number) => (
						<li
							className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover dark:hover:bg-darkHover hover:-translate-y-1 hover:shadow-black dark:hover:shadow-white duration-150' 
							key={index}
						>
							<Image
								className='w-7 mt-3' 
								src={darkMode ? iconDark : icon} 
								alt={`icon-${title}`} 
							/>
							<h3 className='my-4 font-semibold text-gray-700 dark:text-white' >
								{title}
							</h3>
							<p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
						</li>
					))}
				</ul>

				<h4 className='my-4 text-gray-700 dark:text-white/80 font-Ovo'>Tools I use</h4>

				<ul className='flex items-center gap-3 sm:gap-5'>
					{toolsData.map((tool: StaticImageData, index: number) => (
						<li
							className='w-12 sm:w-14 border border-gray-400 flex justify-center items-center rounded-lg aspect-square cursor-pointer hover:-translate-y-1 hover:bg-lightHover dark:hover:bg-darkHover duration-150' 
							key={index}
						>
							<Image 
								className='w-5 sm:w-7'
								src={tool} 
								alt='tool-icon' 
							/>
						</li>
					))}
				</ul>
			</div>
		</div>
	</div>
  )
}

export default About
