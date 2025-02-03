import { NextRequest, NextResponse } from "next/server"

interface FormData {
	name: string
	email: string
	message: string
}

type Web3FormsResponse = {
	success: boolean
	message: string
}

export const POST = async (req: NextRequest) => {
	const formData: FormData = await req.json()
	const apiKey: string = process.env.WEB3FORMS_API_KEY;

	if (!apiKey) {
		return NextResponse.json(
			{ success: false, message: "Server misconfiguration" },
			{ status: 500 }
		)
	}

	try {
		const res = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				...formData,
				access_key: apiKey
			})
		})

		const data: Web3FormsResponse = await res.json()

		return NextResponse.json(data)
	} catch (err) {
		console.error(`Error: ${err}`);
		return NextResponse.json(
			{ success: false, message: "Server Error" },
			{ status: 500 }
		)
	}
}
