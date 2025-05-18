const HEADER_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL

//업데이트 공지사항
export const getUpdateNotice = async () => {
	const res = await fetch(`${BASE_URL}/notice-update`, {
		headers: {
			'Content-Type': 'application/json',
			'x-nxopen-api-key': HEADER_KEY ?? '',
		},
		cache: 'force-cache',
	})

	if (!res.ok) return res.status

	const list = await res.json()
	const listData = list['update_notice'].slice(0, 5)

	return listData
}
