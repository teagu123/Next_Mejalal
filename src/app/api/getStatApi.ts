const HEADER_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL

//캐릭터 종합능력치 정보 조회
export const getStatApi = async (ocid: string) => {
	const res = await fetch(`${BASE_URL}/character/stat?ocid=${ocid}`, {
		headers: {
			'Content-Type': 'application/json',
			'x-nxopen-api-key': `${HEADER_KEY}` ?? '',
		},
		cache: 'force-cache',
	})

	return await res.json()
}
