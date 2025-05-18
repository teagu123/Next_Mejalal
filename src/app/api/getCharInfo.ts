const HEADER_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL

//캐릭터 기본정보 조회
export const getCharInfo = async (ocid: string) => {
	const res = await fetch(`${BASE_URL}/character/basic?ocid=${ocid}`, {
		headers: {
			'Content-Type': 'application/json',
			'x-nxopen-api-key': HEADER_KEY ?? '',
		},
		cache: 'force-cache',
	})

	if (!res.ok) return res.status

	return await res.json()
}
