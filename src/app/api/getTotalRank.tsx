import { RankListBox } from '@/components/rankListBox'

//종합 랭킹
const HEADER_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL

export const getTotalRank = async (title: string, date: string) => {
	const res = await fetch(`${BASE_URL}/ranking/overall?date=${date}`, {
		headers: {
			'Content-Type': 'application/json',
			'x-nxopen-api-key': `${HEADER_KEY}` ?? '',
		},
		cache: 'force-cache',
	})

	if (!res.ok) return res.status

	const list = await res.json()
	const listData = list['ranking']?.slice(0, 10)

	return <RankListBox title={title} listData={listData} />
}
