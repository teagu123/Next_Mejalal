const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL
const HEADER_KEY = process.env.NEXT_PUBLIC_API_KEY

export async function customFetch<T>(
	url: string,
	options: RequestInit = {},
): Promise<T> {
	const res = await fetch(`${BASE_URL}${url}`, {
		...options,
		headers: {
			'Content-Type': 'application/json',
			'x-nxopen-api-key': `${HEADER_KEY}` ?? '',
		},
	})

	if (!res.ok) {
		throw new Error(`API 요청 실패: ${res.status}`)
	}

	return res.json() as Promise<T>
}
