import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Footer = ({ darkMode } : {darkMode: boolean}) => {
  return (
	<motion.div 
		className='mt-20 mb-5 px-[12%]'
		initial={{ opacity: 0 }}
		whileInView={{ opacity: 1 }}
		transition={{ duration: 1 }}
	>
		<div 
			className='text-center mb-20'
		>
			<motion.a
				className='w-36 text-4xl font-bold  cursor-pointer mx-auto after:content-["."] after:text-blue-400 after:text-5xl after:ml-1' 
				href="#top"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: .7, delay: .3 }}
			>
				Wojtyla
			</motion.a>

			<motion.div
				className='w-max flex items-center mx-auto gap-2'
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: .5, delay: .5 }}
			>
				<Image className='w-6' src={darkMode ? assets.mail_icon_dark : assets.mail_icon} alt='mail-icon' />
				rapleswojtyla@gmail.com
			</motion.div>
		</div>

		<motion.div 
			className='text-center sm:flex justify-between	items-center border-t border-gray-400 mx-[10%] mt-12 py-6'
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: .5, delay: .7 }}
		>
			<motion.p
				initial={{ opacity: 0, x: -20 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: .5, delay: .7 }}
			>
				© 2025 Wojtyla. All rights reserved.
			</motion.p>
			<motion.ul 
				className='flex items-center gap-10 justify-center mt-4 sm:mt-0'
				initial={{ opacity: 0, x: 20 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: .5, delay: .8 }}
			>
				<li>
					<a href="https://www.linkedin.com/in/wojtylakarma" target='_blank'>LinkedIn</a>
				</li>
				<li>
					<a href="https://github.com/RaplesWojtyla" target='_blank'>Github</a>
				</li>
				<li>
					<a href="https://leetcode.com/u/WojtylaKarma/" target='_blank'>Leetcode</a>
				</li>
			</motion.ul>
		</motion.div>
	</motion.div>
  )
}

export default Footer