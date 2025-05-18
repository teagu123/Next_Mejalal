import { RankListBox } from '@/components/rankListBox'
import { GuildRankingInfo } from '@/types/RankingPage'

const HEADER_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL

//길드 랭킹
export const getGuildRank = async (
	title: string,
	date: string,
	sliceNum: number = 10,
	darkMode: boolean = false,
) => {
	const res = await fetch(
		`${BASE_URL}/ranking/guild?date=${date}&ranking_type=2`,
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
	const listData: GuildRankingInfo[] = list['ranking'].slice(0, sliceNum)

	return <RankListBox title={title} listData={listData} darkMode={darkMode} />
}
