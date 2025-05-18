import { UnionRankingInfo } from '@/types/RankingPage'
import { RankListBox } from '@/components/rankListBox'

const HEADER_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL

//유니온 랭킹
export const getUnionRank = async (title: string, date: string) => {
	const res = await fetch(`${BASE_URL}/ranking/union?date=${date}`, {
		headers: {
			'Content-Type': 'application/json',
			'x-nxopen-api-key': HEADER_KEY ?? '',
		},
		cache: 'force-cache',
	})

	if (!res.ok) return res.status

	const list = await res.json()
	const listData: UnionRankingInfo[] = list['ranking'].slice(0, 10)

	return <RankListBox title={title} listData={listData} />
}
