import { SearchBox } from '@/components/Search'
import Image from 'next/image'
import { getGuildRank, getNotice, getTotalRank, getUpdateNotice } from '../api'
import { NoticeBox } from '@/components/noticeBox'
import { useToday } from '@/hook/useToday'

export default async function Home() {
	const backgroundPath = '/images/searchBackGround/search-background.png'

	const today = useToday()

	const [totalRank, guildRank, noticeList, updateList] = await Promise.all([
		getTotalRank('종합 랭킹', today, 5, true),
		getGuildRank('길드 랭킹', today, 5, true),
		getNotice(),
		getUpdateNotice(),
	])

	return (
		<div className="relative w-full h-screen overflow-hidden ">
			{/* 배경 이미지 */}
			<div className="relative w-full h-[400px]">
				<Image
					src={backgroundPath}
					alt="검색 배경 이미지"
					fill
					className="object-cover z-0 opacity-90"
				/>
			</div>
			{/* 콘텐츠 영역 */}
			<div className="absolute top-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
				<h1 className="text-center mb-10 text-5xl text-[#ffffff]">
					메 잘 알
					<span className="text-[#ffffff] text-xl">
						을 통해 알아보는 메이플
					</span>
				</h1>
				<SearchBox />
			</div>

			<div className="w-screen flex flex-col items-center">
				<div className="w-[70vw] mt-30 grid grid-cols-3 gap-10">
					<NoticeBox title="메이플스토리 공지사항" list={noticeList} />
					{totalRank}
					{guildRank}
					<NoticeBox title="메이플스토리 업데이트" list={updateList} />
				</div>
			</div>
		</div>
	)
}
