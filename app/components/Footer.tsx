import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
	<div className='mt-20 mb-5 px-[12%]'>
		<div className='text-center mb-20'>
			<a
				className='w-36 text-4xl font-bold  cursor-pointer mx-auto after:content-["."] after:text-blue-400 after:text-5xl after:ml-1' 
				href="#top"
			>
				Wojtyla
			</a>

			<div className='w-max flex items-center mx-auto gap-2'>
				<Image className='w-6' src={assets.mail_icon} alt='mail-icon' />
				rapleswojtyla@gmail.com
			</div>
		</div>

		<div className='text-center sm:flex justify-between	items-center border-t border-gray-400 mx-[10%] mt-12 py-6'>
			<p>
				© 2025 Wojtyla. All rights reserved.
			</p>
			<ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
				<li>
					<a href="https://www.linkedin.com/in/wojtylakarma" target='_blank'>LinkedIn</a>
				</li>
				<li>
					<a href="https://github.com/RaplesWojtyla" target='_blank'>Github</a>
				</li>
				<li>
					<a href="https://leetcode.com/u/WojtylaKarma/" target='_blank'>Leetcode</a>
				</li>
			</ul>
		</div>
	</div>
  )
}

export default Footer