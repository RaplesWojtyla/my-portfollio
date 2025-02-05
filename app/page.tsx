'use client'
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";

export default function Home() {
	const [darkMode, setDarkMode] = useState<boolean>(false)

	useEffect(() => {
		if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('prefers-color-scheme: dark').matches)) {
			setDarkMode(true)
		} else {
			setDarkMode(false)
		}
	}, [])

	useEffect(() => {
		const root = document.documentElement

		if (darkMode) {
			root.classList.add('dark')
			localStorage.theme = 'dark'
		} else {
			root.classList.remove('dark')
			localStorage.theme = ''
		}
	}, [darkMode])

	const changeTheme = (): void => setDarkMode(prevDarkMode => !prevDarkMode)

	return (
		<>
			<Navbar
				darkMode={darkMode}
				changeTheme={changeTheme} 
			/>
			<Header />
			<About darkMode={darkMode} />
			<Services darkMode={darkMode} />
			<Projects darkMode={darkMode} />
			<Contact />
			<Footer darkMode={darkMode} />
		</>
	);
}
