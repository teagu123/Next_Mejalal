const HEADER_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL

//공지사항 리스트
export const getNotice = async () => {
	const res = await fetch(`${BASE_URL}/notice`, {
		headers: {
			'Content-Type': 'application/json',
			'x-nxopen-api-key': HEADER_KEY ?? '',
		},
		cache: 'force-cache',
	})

	if (!res.ok) return res.status

	const list = await res.json()
	const listData = list['notice'].slice(0, 5)

	return listData
}
