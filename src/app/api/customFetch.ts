const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL
const HEADER_KEY = process.env.NEXT_PUBLIC_API_KEY

export async function customFetch<T>(
	url: string,
	options: RequestInit = {},
): Promise<T> {
	try {
		const res = await fetch(`${BASE_URL}${url}`, {
			...options,
			headers: {
				'Content-Type': 'application/json',
				'x-nxopen-api-key': `${HEADER_KEY}` ?? '',
			},
		})

		return res.json() as Promise<T>
	} catch (error) {
		throw error.message
	}
}
