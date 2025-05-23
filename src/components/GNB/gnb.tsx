import Link from 'next/link'
import { SearchBox } from '../Search'

export function GNB() {
	return (
		<div className="bg-[#29292a]">
			<div className="ml-50 mr-50 flex items-center justify-between h-[40px] text-[20px] text-white">
				<Link href={'/'}>LOGO</Link>
				<div className="mt-3">
					<SearchBox width={200} height={30} fontsize={13} border={true} />
				</div>
			</div>
			<div className="ml-50 mr-47 flex items-center justify-between h-[40px] text-white text-[15px]">
				<div>
					<Link href={'/'} className="mr-[20px]">
						캐릭터 검색
					</Link>
					<Link href={'/ranking'} className="mr-[20px]">
						랭킹
					</Link>
					<Link href={'/guild'}>길드</Link>
				</div>
				<div>
					<Link
						href={'https://maplestory.nexon.com/Home/Main'}
						className="text-gray-300"
					>
						메이플 공식 홈페이지 가기
					</Link>
				</div>
			</div>
		</div>
	)
}
