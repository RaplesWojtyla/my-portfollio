import { assets, infoList, toolsData } from '@/assets/assets'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

type InfoList = {
	icon: StaticImageData
	iconDark: StaticImageData
	title: string
	description: string
}

const About = ({ darkMode } : {darkMode: boolean}) => {
  return (
	<motion.div 
		id='about' 
		className='w-full px-[12%] py-10 scroll-mt-16'
		initial={{ opacity: 0 }}
		whileInView={{ opacity: 1 }}
		transition={{ duration: 1 }}
	>
		<motion.h4 
			className='text-center text-lg mb-2 font-Ovo'
			initial={{ opacity: 0, y: -20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: .5, delay: .3 }}
		>
			Introduction
		</motion.h4>
		<motion.h2 
			className='text-center text-5xl font-Ovo'
			initial={{ opacity: 0, y: -20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: .5, delay: .5 }}
		>
			About Me
		</motion.h2>

		<motion.div 
			className='flex w-full flex-col min-[1144px]:flex-row items-center gap-20 my-20'
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: .8 }}
		>
			<motion.div 
				className='w-64 sm:w-80 rounded-3xl max-w-none'
				initial={{ opacity: 0, scale: .9 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ duration: .6 }}
			>
				<Image className='w-full rounded-3xl' src={assets.profile_img} alt='wojtyla-photo' />
			</motion.div>
			<motion.div 
				className='flex-1'
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: .6, delay: .8 }}
			>
				<p  className='mb-10 max-w-2xl text-justify'>
					I&apos;m an IT undergraduate with 3+ years of programming experience, specializing in data-driven solutions. Passionate about Full-Stack Engineering, AI/ML, and Project Management. Skilled in competitive programming, algorithms, and problem-solving with a creative and analytical approach.
				</p>

				<motion.ul 
					className='max-w-2xl grid grid-cols-1 sm:grid-cols-3 gap-6'
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: .8, delay: 1 }}
				>
					{infoList.map(({icon, iconDark, title, description}: InfoList, index: number) => (
						<motion.li
							className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover dark:hover:bg-darkHover hover:shadow-black dark:hover:shadow-white hover:-translate-y-1 duration-150' 
							key={index}
							whileHover={{ scale: 1.05 }}
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
						</motion.li>
					))}
				</motion.ul>

				<motion.h4 
					className='my-4 text-gray-700 dark:text-white/80 font-Ovo'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: .5, delay: 1.3 }}
				>
					Tools I use
				</motion.h4>

				<motion.ul 
					className='flex items-center gap-3 sm:gap-5'
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: .6, delay: 1.5 }}
				>
					{toolsData.map((tool: StaticImageData, index: number) => (
						<motion.li
							className='w-12 sm:w-14 border border-gray-400 flex justify-center items-center rounded-lg aspect-square cursor-pointer hover:bg-lightHover dark:hover:bg-darkHover hover:-translate-y-1 duration-150' 
							key={index}
							whileHover={{ scale: 1.1 }}
						>
							<Image 
								className='w-5 sm:w-7'
								src={tool} 
								alt='tool-icon' 
							/>
						</motion.li>
					))}
				</motion.ul>
			</motion.div>
		</motion.div>
	</motion.div>
  )
}

export default About
