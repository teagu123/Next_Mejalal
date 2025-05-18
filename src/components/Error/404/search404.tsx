import { SearchBox } from '@/components/Search'
import Image from 'next/image'

export function Search404({ nickname }: { nickname: string }) {
	return (
		<div className="w-screen h-screen">
			<div className="flex flex-col items-center justify-center w-full h-[90vh]">
				<div className="flex flex-col items-center">
					<h1 className="text-center mb-10 text-2xl text-white">
						{nickname} 이라는 용사의 캐릭터가 없습니다.
					</h1>
					<div className="text-center mb-10 text-xl text-gray-300">
						2023년 12월 21일 이후 접속 이력이 있어야 조회 가능합니다.
					</div>
					<SearchBox />
				</div>
				<Image
					src="/images/error/404.png"
					alt="오류 배경 이미지"
					width={400}
					height={500}
					priority
					className="h-auto grayscale-10 mr-8"
				/>
			</div>
		</div>
	)
}
