import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { FormEvent, useState } from 'react'


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
		<div
			id='contact'
			className='w-full px-[12%] py-10 scroll-mt-16 bg-[url(/footer-bg-color.png)] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'
		>
			<h4 className='text-center text-lg mb-2 font-Ovo'>Connect With Me</h4>
			<h2 className='text-center text-5xl mb-5 font-Ovo'>Get In Touch</h2>
			<p className='text-center max-w-2xl mx-auto mb-12 font-Ovo'>
				I&apos;d love to hear from you! If you have any questions, comments or feedback, please use the form below.
			</p>

			<form className='max-w-2xl mx-auto' onSubmit={handleSubmit}>
				<div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
					<input
						className='flex-1 border-[.5px] border-[#A4A4A4] dark:border-white/90 p-3 rounded-lg outline-none bg-white dark:bg-darkHover/30'
						name='name'
						type="text"
						placeholder='Enter your name'
						required
					/>
					<input
						className='flex-1 border-[.5px] border-[#A4A4A4] dark:border-white/90 p-3 rounded-lg outline-none bg-white dark:bg-darkHover/30'
						name='email'
						type="email"
						placeholder='Enter your email'
						required
					/>
				</div>
				<textarea
					name="message"
					className='w-full p-4 outline-none border-[.5px] border-gray-400 dark:border-white/90 rounded-lg bg-white dark:bg-darkHover/30 mb-6'
					rows={6}
					placeholder='Enter your message'
					required
				></textarea>
				<button
					type='submit'
					className='py-3 px-8 w-max flex items-center justify-between mx-auto gap-2 bg-black/80 dark:bg-transparent text-white rounded-full hover:bg-black dark:hover:bg-darkHover duration-200 dark:border-[.5px]'
				>
					{ isLoading ? 'Sending...' : (
						<>
							Send Now
							<Image src={assets.right_arrow_white} alt='right-arrow-icon' className='w-5' />
						</>
					)}
				</button>
				{status.length > 0 && (
					<p className='mt-4'>{status}</p>
				)}
			</form>
		</div>
	)
}

export default Contact