import { assets, projectData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

type ProjectData = {
	title: string
	description: string
	bgImage: string
}

const Projects = ({ darkMode } : { darkMode: boolean }) => {
  return (
	<div id='projects' className='w-full px-[12%] py-10 scroll-mt-16'>
		<h4 className='text-center text-lg mb-2 font-Ovo'>
			My Projects
		</h4>
		<h2 className='text-center text-5xl mb-5 font-Ovo'>
			My Latest Projects
		</h2>
		<p className='text-center max-w-2xl mx-auto mb-12 font-Ovo'>
			Welcome to my projects! Explore a collection of projects showcasing my expertise in full-stack development.
		</p>

		<div className='grid grid-cols-projects-auto gap-6 dark:text-black'>
			{projectData.map(({ title, description, bgImage }: ProjectData, index: number) => (
				<div
					className='aspect-video bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer shadow-md group'
					style={{ backgroundImage: `url(${bgImage})` }}
					key={ index }
				>
					<div className='bg-gray-100 bg-opacity-90 shadow-md w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between group-hover:bottom-7 duration-300'>
						<div>
							<h2 className='font-semibold'>{ title }</h2>
							<p className='text-sm text-gray-700'>{ description }</p>
						</div>
						<div className='border border-black w-10 aspect-square rounded-full flex items-center justify-center shadow-[-1px_1px_0_rgba(0,0,0,1)] group-hover:shadow-[0_2px_0_rgba(0,0,0,1)] group-hover:bg-[#68fcf7] transition duration-300'>
							<Image
								className='w-5'
								src={ assets.send_icon }
								alt='send-icon' 
							/>
						</div>
					</div>
				</div>
			))}
		</div>

		<a className='w-max flex items-center justify-center gap-2 text-gray-700 dark:text-white border-[.5px] border-gray-700 dark:border-white rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover dark:hover:bg-darkHover duration-200' href="">
			Show more <Image className='w-4' src={darkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='right-arrow-icon' />
		</a>
	</div>
  )
}

export default Projects