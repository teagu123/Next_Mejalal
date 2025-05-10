import Image from 'next/image'
import { RankListBox } from '../ranking/components/rankListBox'
import { GuildList } from '@/components/GuildList'
import { GuildSearchBox, SearchBox } from '@/components/Search'

const HEADER_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL

export default function Guild() {
	//길드 랭킹
	const getGuildRank = async (title: string, date: string) => {
		const res = await fetch(
			`${BASE_URL}/ranking/guild?date=${date}&ranking_type=2`,
			{
				headers: {
					'Content-Type': 'application/json',
					'x-nxopen-api-key': `${HEADER_KEY}` ?? '',
				},
				cache: 'force-cache',
			},
		)

		if (!res.ok) return res.status

		const list = await res.json()
		const listData = list['ranking']

		return <GuildList title={title} listData={listData} />
	}

	return (
		<div className="w-screen flex justify-center">
			<div className="w-[70vw] mt-20 flex  flex-col mb-1 items-center z-100 ">
				<h1 className="text-center mb-10 text-5xl text-white">길드 랭킹</h1>
				<GuildSearchBox />
				<div className="w-full mt-10 ">
					{getGuildRank('길드 랭킹', '2025-05-04')}
				</div>
			</div>
		</div>
	)
}
