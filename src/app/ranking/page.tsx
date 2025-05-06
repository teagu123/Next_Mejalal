import Image from 'next/image'
import { RankListBox } from './components/rankListBox'

const HEADER_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL

//종합 랭킹
const getTotalRank = async (title: string, date: string) => {
	const res = await fetch(`${BASE_URL}/ranking/overall?date=${date}`, {
		headers: {
			'Content-Type': 'application/json',
			'x-nxopen-api-key': `${HEADER_KEY}` ?? '',
		},
		cache: 'force-cache',
	})

	if (!res.ok) return res.status

	const list = await res.json()
	const listData = list['ranking'].slice(0, 10)

	return <RankListBox title={title} listData={listData} />
}
//유니온 랭킹
const getUnionRank = async (title: string, date: string) => {
	const res = await fetch(`${BASE_URL}/ranking/union?date=${date}`, {
		headers: {
			'Content-Type': 'application/json',
			'x-nxopen-api-key': `${HEADER_KEY}` ?? '',
		},
		cache: 'force-cache',
	})

	if (!res.ok) return res.status

	const list = await res.json()
	const listData = list['ranking'].slice(0, 10)

	return <RankListBox title={title} listData={listData} />
}
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
	const listData = list['ranking'].slice(0, 10)

	return <RankListBox title={title} listData={listData} />
}

//무릉도장 랭킹 /ranking/dojang?date=2025-05-06&difficulty=1
const getDojangRank = async (title: string, date: string) => {
	const res = await fetch(
		`${BASE_URL}/ranking/dojang?date=${date}&difficulty=1`,
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
	const listData = list['ranking'].slice(0, 10)

	return <RankListBox title={title} listData={listData} />
}

export default async function RankingPage() {
	const backgroundPath = `/images/ranking/rankingback.png`

	return (
		<div className="w-screen h-screen flex justify-center relative">
			<Image
				src={backgroundPath}
				alt="검색 배경 이미지"
				fill
				style={{ objectFit: 'cover', opacity: 0.7 }}
				className="z-0"
				priority
			/>
			<div className="w-[70vw] mt-20 flex  flex-col mb-1 items-center z-100">
				<h1 className="text-center mb-10 text-5xl text-white">랭킹</h1>
				<div className="w-full grid grid-cols-3 gap-10">
					{getTotalRank('종합 랭킹', '2025-05-04')}
					{getUnionRank('유니온 랭킹', '2025-05-04')}
					{getGuildRank('길드 랭킹', '2025-05-04')}
					{getDojangRank('무릉도장 랭킹', '2025-05-04')}
				</div>
			</div>
		</div>
	)
}
