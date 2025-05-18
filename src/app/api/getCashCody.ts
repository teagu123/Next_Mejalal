const HEADER_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL

//캐릭터 캐시 아이템 조회
export const getCashCody = async (ocid: string) => {
	const res = await fetch(
		`${BASE_URL}/character/cashitem-equipment?ocid=${ocid}`,
		{
			headers: {
				'Content-Type': 'application/json',
				'x-nxopen-api-key': HEADER_KEY ?? '',
			},
			cache: 'force-cache',
		},
	)

	return await res.json()
}
