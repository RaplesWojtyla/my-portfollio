import { assets, serviceData } from '@/assets/assets'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

type ServiceData = {
	icon: StaticImageData
	title: string
	description: string
	link: string
}

const Services = ({ darkMode } : { darkMode: boolean }) => {
	return (
		<div id='services' className='w-full px-[12%] py-10 scroll-mt-16'>
			<h4 className='text-center mb-2 text-lg font-Ovo'>
				What I Offer
			</h4>
			<h2 className='text-center text-5xl font-Ovo'>
				My Services
			</h2>
			<p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
				I&apos;m a junior full-stack developer from Medan, Indonesia with over 3 years experience in algorithm & data structures, and web development.
			</p>

			<div
				className={`grid grid-cols-auto gap-6 my-10`}
			>
				{serviceData.map(({ icon, title, description, link }: ServiceData, index: number) => (
					<div
						className='border border-gray-400 rounded-lg px-8 py-12 hover:bg-lightHover dark:hover:bg-darkHover hover:shadow-black dark:hover:shadow-white hover:-translate-y-1 duration-150 cursor-pointer'
						key={index}
					>
						<Image className='w-10' src={icon} alt={`${title}-icon`} />
						<h3 className='text-lg my-4 text-gray-700 dark:text-white'>
							{title}
						</h3>
						<p className='text-sm text-gray-600 dark:text-white/80 leading-5'>
							{description}
						</p>
						<a className='flex items-center text-sm gap-3 mt-5' href={link}>
							Read more <Image className='w-4' src={darkMode ? assets.right_arrow_bold_dark : assets.right_arrow} alt='r-arrow-icon' />
						</a>
					</div>
				))}
			</div>
		</div>
	)
}

export default Services