const HEADER_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL

//캐릭터 식별자(ocid)조회
export const getOcid = async (nickname: string) => {
	const res = await fetch(
		`${BASE_URL}/id?character_name=${decodeURIComponent(nickname)}`,
		{
			headers: {
				'Content-Type': 'application/json',
				'x-nxopen-api-key': `${HEADER_KEY}` ?? '',
			},
		},
	)

	if (!res.ok) return res.status

	const { ocid } = await res.json()

	return ocid
}
