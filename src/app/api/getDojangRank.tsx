import { RankListBox } from '@/components/rankListBox'
import { DojangRankingInfo } from '@/types/RankingPage'

const HEADER_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL

//무릉도장 랭킹
export const getDojangRank = async (title: string, date: string) => {
	const res = await fetch(
		`${BASE_URL}/ranking/dojang?date=${date}&difficulty=1`,
		{
			headers: {
				'Content-Type': 'application/json',
				'x-nxopen-api-key': HEADER_KEY ?? '',
			},
			cache: 'force-cache',
		},
	)

	if (!res.ok) return res.status

	const list = await res.json()
	const listData: DojangRankingInfo[] = list['ranking'].slice(0, 10)

	return <RankListBox title={title} listData={listData} />
}
