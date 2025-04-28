import Link from 'next/link'

interface SearchBoxProps {
	width?: number
	height?: number
	fontsize?: number
}

export function SearchBox({
	width = 400,
	height = 50,
	fontsize = 14,
}: SearchBoxProps) {
	const propsStyle = {
		width: `${width}px`,
		height: `${height}px`,
		fontSize: `${fontsize}px`,
	}
	return (
		<div className="flex items-center" style={{ ...propsStyle }}>
			<input
				className="bg-[#171b1b] text-white px-5 py-2.5 rounded-l-[12px]"
				style={{ ...propsStyle }}
				type="text"
				placeholder="유저 닉네임 검색"
			/>
			<Link
				href={'/'}
				className="bg-[#171b1b] text-white px-2 py-2.5 flex items-center justify-start rounded-r-[12px]"
				style={{ ...propsStyle, width: '30px' }}
			>
				🔍
			</Link>
		</div>
	)
}
