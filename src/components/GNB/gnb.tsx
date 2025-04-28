import Link from 'next/link'
import { SearchBox } from '../Search'

export function GNB() {
	return (
		<div className="bg-[#171b34]">
			<div className="px-[150px] flex items-center justify-between h-[40px] text-[20px]">
				<Link href={'/'}>LOGO</Link>
				<div className="mt-3">
					<SearchBox width={200} height={30} fontsize={13} border={true} />
				</div>
			</div>
			<div className="px-[150px] flex items-center justify-between h-[40px] text-white text-[15px]">
				<div>
					<Link href={'/'} className="mr-[20px]">
						탭1
					</Link>
					<Link href={'/'} className="mr-[20px]">
						탭2
					</Link>
					<Link href={'/'}>탭3</Link>
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
