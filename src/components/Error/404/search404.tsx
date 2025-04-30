import { SearchBox } from '@/components/Search'
import Image from 'next/image'

export function Search404({ nickname }: { nickname: string }) {
	return (
		<div className="w-screen h-screen">
			<div className="flex flex-col items-center justify-center w-full h-[90vh]">
				<div className="flex flex-col items-center">
					<h1 className="text-center mb-10 text-2xl text-white">
						' {nickname} ' 이라는 용사의 캐릭터가 없습니다.
					</h1>
					<SearchBox />
				</div>
				<Image
					src={'/images/error/404.png'}
					alt="오류 배경 이미지"
					width={400} // 이미지의 원본 너비
					height={400} // 이미지의 원본 높이
					className="grayscale-10 mr-8"
				/>
			</div>
		</div>
	)
}
