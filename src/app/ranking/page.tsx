import Image from 'next/image'
import { getDojangRank, getGuildRank, getTotalRank, getUnionRank } from '../api'

export default async function RankingPage() {
	const backgroundPath = `/images/ranking/rankingback.png`

	const [totalRank, unionRank, guildRank, dojangRank] = await Promise.all([
		getTotalRank('종합 랭킹', '2025-05-04'),
		getUnionRank('유니온 랭킹', '2025-05-04'),
		getGuildRank('길드 랭킹', '2025-05-04'),
		getDojangRank('무릉도장 랭킹', '2025-05-04'),
	])

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
					{totalRank}
					{unionRank}
					{guildRank}
					{dojangRank}
				</div>
			</div>
		</div>
	)
}
