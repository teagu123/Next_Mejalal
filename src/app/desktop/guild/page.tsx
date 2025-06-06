import { GuildList } from '@/components/GuildList'
import { GuildSearchBox } from '@/components/Search'
import { useToday } from '@/hook/useToday'

const HEADER_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL

//길드 랭킹
const getGuildRank = async (title: string, date: string) => {
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
	const listData = list['ranking']

	return <GuildList title={title} listData={listData} />
}

export default function Guild() {
	const today = useToday()

	return (
		<div className="w-screen flex justify-center">
			<div className="w-[70vw] mt-20 flex  flex-col mb-1 items-center z-100 ">
				<h1 className="text-center mb-10 text-5xl text-white">길드 랭킹</h1>
				<GuildSearchBox />
				<div className="w-full mt-10 ">{getGuildRank('길드 랭킹', today)}</div>
			</div>
		</div>
	)
}
