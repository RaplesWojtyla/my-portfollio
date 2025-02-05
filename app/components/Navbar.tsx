import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { MouseEventHandler, useEffect, useRef, useState } from 'react'


interface NavbarProps {
	darkMode: boolean
	changeTheme: MouseEventHandler<HTMLButtonElement>
}

const Navbar = ({ darkMode, changeTheme }: NavbarProps) => {
	const [isScroll, setIsScroll] = useState<boolean>(false)
	const menuRef = useRef<HTMLUListElement>(null)

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (scrollY > 50) {
				setIsScroll(true)
			} else {
				setIsScroll(false)
			}
		})
	}, [])

	const openMenu = () => {
		if (menuRef.current) {
			menuRef.current.style.transform = 'translateX(-16rem)'
		}
	}

	const closeMenu = () => {
		if (menuRef.current) {
			menuRef.current.style.transform = 'translateX(16rem)'
		}
	}

	return (
		<>
			<div className='fixed top-0 right-0 w-10/12 -z-10 translate-y-[-80%] dark:hidden'>
				<Image src={assets.header_bg_color} alt='header-bg-color' className='w-full' />
			</div>
			<nav 
				className={
					`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? 'bg-white dark:bg-darkTheme bg-opacity-50 backdrop-blur-lg shadow-[0_1px_5px_rgba(0,0,0,.1)] dark:shadow-white/20' : ''}`
				}
			>
				<a 
					className='w-28 cursor-pointer mr-14 text-3xl font-bold after:content-["."] after:text-blue-400 after:text-4xl'
					href="#top" 
				>
					Wojtyla
				</a>

				<ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? '' : 'bg-white shadow-[0_0_2px_rgba(0,0,0,.2)] bg-opacity-35 dark:border dark:border-white/50 dark:bg-transparent'}`}>
					<li><a className='font-Ovo' href="#top">Home</a></li>
					<li><a className='font-Ovo' href="#about">About me</a></li>
					<li><a className='font-Ovo' href="#services">Services</a></li>
					<li><a className='font-Ovo' href="#projects">My Projects</a></li>
					<li><a className='font-Ovo' href="#contact">Contact me</a></li>
				</ul>

				<div className='flex items-center gap-4'>
					<button onClick={changeTheme}>
						<Image src={darkMode ? assets.sun_icon : assets.moon_icon} alt='moon-icon' className='w-6' />
					</button>

					<a
						href="#contact"
						className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'
					>
						Contact
						<Image
							src={darkMode ? assets.arrow_icon_dark : assets.arrow_icon}
							className='w-3'
							alt='arrow-icon'
						/>
					</a>

					<button
						onClick={openMenu} 
						className='block md:hidden ml-3'
					>
						<Image src={darkMode ? assets.menu_white : assets.menu_black} alt='menu-icon' className='w-6' />
					</button>

					{/* ------------- Mobile Menu ------------- */}

					<ul
						ref={menuRef}
						className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 dark:bg-darkHover transition duration-500'
					>
						<div className='absolute right-6 top-6' onClick={closeMenu}>
							<Image src={darkMode ? assets.close_white : assets.close_black} alt='close-icon' className='w-5 cursor-pointer' />
						</div>
						<li><a className='font-Ovo' href="#top" onClick={closeMenu}>Home</a></li>
						<li><a className='font-Ovo' href="#about" onClick={closeMenu}>About me</a></li>
						<li><a className='font-Ovo' href="#services" onClick={closeMenu}>Services</a></li>
						<li><a className='font-Ovo' href="#projects" onClick={closeMenu}>My Projects</a></li>
						<li><a className='font-Ovo' href="#contact" onClick={closeMenu}>Contact me</a></li>
					</ul>
				</div>
			</nav>
		</>
	)
}

export default Navbar