const HEADER_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL

//길드 정보 조회
export const getGuildInfo = async (guildOcid: string) => {
	const res = await fetch(`${BASE_URL}/guild/basic?oguild_id=${guildOcid}`, {
		headers: {
			'Content-Type': 'application/json',
			'x-nxopen-api-key': HEADER_KEY ?? '',
		},
		cache: 'force-cache',
	})

	if (!res.ok) return res.status

	return await res.json()
}
