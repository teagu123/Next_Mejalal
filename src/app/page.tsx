import { SearchBox } from '@/components/Search'
import Image from 'next/image'

export default function Home() {
	// const randomInd = Math.floor(Math.random() * 5) + 1

	const backgroundPath = `/images/searchBackGround/search-background1.png`

	return (
		<div className="w-screen h-screen">
			<div className="relative w-full h-screen ">
				<Image
					src={backgroundPath}
					alt="검색 배경 이미지"
					fill
					style={{ objectFit: 'cover' }}
					className="grayscale-10"
					priority
				/>
				<div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
					<h1 className="text-center mb-10 text-5xl text-white">
						메 잘 알
						<span className="text-white text-xl"> 을 통해 알아보는 메이플</span>
					</h1>
					<SearchBox />
				</div>
			</div>
		</div>
	)
}
