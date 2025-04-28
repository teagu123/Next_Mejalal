import Link from 'next/link'

export function GNB() {
	return (
		<div className="bg-[#171b1b]">
			<div className="px-[150px] flex items-center justify-between h-[40px] text-white text-[20px]">
				<Link href={'/'}>LOGO</Link>
				<div></div>
			</div>
			<div className="px-[150px] flex items-center h-[40px] text-white text-[15px]">
				<Link href={'/'} className="mr-[20px]">
					탭1
				</Link>
				<Link href={'/'} className="mr-[20px]">
					탭2
				</Link>
				<Link href={'/'}>탭3</Link>
			</div>
		</div>
	)
}
