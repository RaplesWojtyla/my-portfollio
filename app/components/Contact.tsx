import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { FormEvent, useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'


interface FormData {
	name: string
	email: string
	message: string
}

interface ContactFormElements extends HTMLFormControlsCollection {
	name: HTMLInputElement
	email: HTMLInputElement
	message: HTMLTextAreaElement
}

interface ContactFormElement extends HTMLFormElement {
	readonly elements: ContactFormElements
}

type ApiResponse = {
	success: boolean
	message: string
}

const Contact = () => {
	const [ status, setStatus ] = useState<string>("")
	const [ isLoading, setIsLoading ] = useState<boolean>(false)
	const notifRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (notifRef.current && status.length) {
			notifRef.current.scrollIntoView({ behavior: 'smooth' })
		}
	}, [status])

	const handleSubmit = async (eve: FormEvent<HTMLFormElement>) => {
		eve.preventDefault()
		setIsLoading(true)

		const formElements: ContactFormElements = (eve.currentTarget as ContactFormElement).elements

		const formData: FormData = {
			name: formElements.name.value,
			email: formElements.email.value,
			message: formElements.message.value
		}

		try {
			const res = await fetch('api/submit', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			})

			const data: ApiResponse = await res.json()

			if (data.success) {
				setStatus(data.message)
				;(eve.target as HTMLFormElement).reset()
			} else {
				console.error(`Error: ${data}`)
				setStatus(data.message)
			}
		} catch (err: unknown) {
			console.error(`Error: ${err}`);
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<motion.div
			id='contact'
			className='w-full px-[12%] py-10 scroll-mt-16 bg-[url(/footer-bg-color.png)] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'
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
				Connect With Me
			</motion.h4>
			<motion.h2 
				className='text-center text-5xl mb-5 font-Ovo'
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: .5, delay: .5 }}
			>
				Get In Touch
			</motion.h2>
			<motion.p 
				className='text-center max-w-2xl mx-auto mb-12 font-Ovo'
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: .6, delay: .7 }}
			>
				I&apos;d love to hear from you! If you have any questions, comments or feedback, please use the form below.
			</motion.p>

			<motion.form 
				className='max-w-2xl mx-auto' onSubmit={handleSubmit}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: .6, delay: .9 }}
			>
				<div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
					<motion.input
						className='flex-1 border-[.5px] border-[#A4A4A4] dark:border-white/90 p-3 rounded-lg outline-none bg-white dark:bg-darkHover/30'
						name='name'
						type="text"
						placeholder='Enter your name'
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: .6, delay: 1.1 }}
						required
					/>
					<motion.input
						className='flex-1 border-[.5px] border-[#A4A4A4] dark:border-white/90 p-3 rounded-lg outline-none bg-white dark:bg-darkHover/30'
						name='email'
						type="email"
						placeholder='Enter your email'
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: .6, delay: 1.2 }}
						required
					/>
				</div>
				<motion.textarea
					name="message"
					className='w-full p-4 outline-none border-[.5px] border-gray-400 dark:border-white/90 rounded-lg bg-white dark:bg-darkHover/30 mb-6'
					rows={6}
					placeholder='Enter your message'
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: .6, delay: 1.3 }}
					required
				></motion.textarea>
				<motion.button
					type='submit'
					disabled={ isLoading }
					className='py-3 px-8 w-max flex items-center justify-between mx-auto gap-2 bg-black/80 dark:bg-transparent text-white rounded-full hover:bg-black dark:hover:bg-darkHover duration-200 dark:border-[.5px]'
					initial={{ opacity: 0, x: -40 }}
					animate={{ 
						opacity: 1,
						x: 0 ,
						transition: {
							duration: .6,
							delay: 1.4
						}
					}}
					whileHover={{
						scale: 1.05, 
						transition: { duration: .3 } 
					}}
				>
					{ isLoading ? 'Sending...' : (
						<>
							Send Now
							<Image src={assets.right_arrow_white} alt='right-arrow-icon' className='w-5' />
						</>
					)}
				</motion.button>
				{status.length > 0 && (
					<motion.div
						className='bg-green-500 mt-5 flex items-center gap-4 rounded-lg p-4 text-white shadow-lg'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: .5 }}
						ref={notifRef}
					>
						<span className='text-xl'>✔</span>
						<p className='text-sm'>{status}</p>
					</motion.div>
				)}

			</motion.form>
		</motion.div>
	)
}

export default Contact