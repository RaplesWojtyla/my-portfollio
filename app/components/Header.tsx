import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Header = () => {
	return (
		<div className='w-11/12 max-w-3xl h-screen text-center mx-auto flex flex-col items-center justify-center gap-4'>
			<motion.div
				initial={{ scale:0 }}
				whileInView={{ scale: 1 }}
				transition={{ duration: .8, type: 'spring', stiffness: 100 }}
			>
				<Image
					src={ assets.profile_img }
					alt='my-photo'
					className='rounded-full w-32 h-32 object-cover'
				/>
			</motion.div>
			<motion.h3 
				className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'
				initial={{ y: -20, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: .6, delay: .3 }}
			>
				Hi! I&apos;m Patra Rafles Wostyla Sinaga
				<Image
					src={ assets.hand_icon }
					alt='hand-icon'
					className='w-6'
				/>
			</motion.h3>

			<motion.h1 
				className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'
				initial={{ y: -30, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1}}
				transition={{ duration: .8, delay: .5 }}
			>
				Full-Stack Developer based in Indonesia.
			</motion.h1>

			<motion.p 
				className='max-w-2xl mx-auto font-Ovo'
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: .6, delay: .7 }}
			>
				I&apos;m a junior full-stack developer from Medan, Indonesia with over 3 years experience in algorithm & data structures, and web development
			</motion.p>

			<div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
				<motion.a
					className='flex items-center gap-2 px-10 py-3 border border-white rounded-full bg-black dark:bg-transparent text-white'
					href="#contact"
					initial={{ y: 30, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: .6, delay: 1 }}
				>
					Contact me
					<Image src={ assets.right_arrow_white } className='w-4' alt='right-arrow-icon' />
				</motion.a>
				<motion.a
					className='flex items-center gap-2 px-10 py-3 border rounded-full border-gray-500 bg-white dark:text-black'
					href="/Patra Rafles Wostyla Sinaga_CV.pdf"
					initial={{ y: 30, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: .6, delay: 1.2 }}
					download
				>
					My resume
					<Image src={ assets.download_icon } className='w-4' alt='download-icon' />
				</motion.a>
			</div>
		</div>
	)
}

export default Header
