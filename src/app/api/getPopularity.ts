const HEADER_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL

//캐릭터 인기도 조회
export const getPopularity = async (ocid: string) => {
	const res = await fetch(`${BASE_URL}/character/popularity?ocid=${ocid}`, {
		headers: {
			'Content-Type': 'application/json',
			'x-nxopen-api-key': HEADER_KEY ?? '',
		},
		cache: 'force-cache',
	})

	const { popularity } = await res.json()

	return popularity
}
