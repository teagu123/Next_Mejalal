import { SearchBox } from '@/components/Search'
import Image from 'next/image'

export default function Home() {
	const randomInd = Math.floor(Math.random() * 5) + 1
	const backgroundPath = `/images/searchBackGround/search-background${randomInd}.png`

	return (
		<div className="w-screen h-screen">
			<div className="relative w-full h-[500px]">
				<Image
					src={backgroundPath}
					alt="검색 배경 이미지"
					layout="fill"
					objectFit="cover"
					objectPosition="center"
					className="grayscale-25"
				/>
				<div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
					<SearchBox />
				</div>
			</div>
		</div>
	)
}
