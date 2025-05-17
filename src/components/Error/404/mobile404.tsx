import Image from 'next/image'
import Link from 'next/link'

export function Mobile404() {
	return (
		<div className="w-screen h-screen">
			<div className="flex flex-col items-center justify-center w-full h-[90vh]">
				<div className="flex flex-col items-center">
					<h1 className="text-center mb-10 text-xl text-white">
						메잘알은 모바일 환경은 지원하지않습니다.
					</h1>
					<h1 className="text-center mb-10 text-[17px] text-[#fcceb0]">
						더 많은 컨텐츠를 제공해드리겠습니다.
					</h1>
				</div>
				<Image
					src="/images/error/404.png"
					alt="오류 배경 이미지"
					width={200}
					height={300}
					priority
					className="h-auto grayscale-10 mr-8"
				/>
				<button className="mt-10 bg-[#ffffff87] rounded-sm w-45">
					<Link href={'https://maplestory.nexon.com/Home/Main'}>
						메이플 공식 홈페이지 가기
					</Link>
				</button>
			</div>
		</div>
	)
}
