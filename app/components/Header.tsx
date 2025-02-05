import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = ({ darkMode }: { darkMode: boolean }) => {
	return (
		<div className='w-11/12 max-w-3xl h-screen text-center mx-auto flex flex-col items-center justify-center gap-4'>
			<div>
				<Image
					src={assets.profile_img}
					alt='my-photo'
					className='rounded-full w-32 h-32 object-cover'
				/>
			</div>
			<h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
				Hi! I&apos;m Patra Rafles Wostyla Sinaga
				<Image
					src={assets.hand_icon}
					alt='hand-icon'
					className='w-6'
				/>
			</h3>
			<h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
				Full-Stack Developer based in Indonesia.
			</h1>
			<p className='max-w-2xl mx-auto font-Ovo'>
				I&apos;m a junior full-stack developer from Medan, Indonesia with over 3 years experience in algorithm & data structures, and web development
			</p>
			<div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
				<a
					className='flex items-center gap-2 px-10 py-3 border border-white rounded-full bg-black dark:bg-transparent text-white'
					href="#contact"
				>
					Contact me
					<Image src={assets.right_arrow_white} className='w-4' alt='right-arrow-icon' />
				</a>
				<a
					className='flex items-center gap-2 px-10 py-3 border rounded-full border-gray-500 bg-white dark:text-black'
					href="/Patra Rafles Wostyla Sinaga_CV.pdf"
					download
				>
					My resume
					<Image src={assets.download_icon} className='w-4' alt='download-icon' />
				</a>
			</div>
		</div>
	)
}

export default Header
