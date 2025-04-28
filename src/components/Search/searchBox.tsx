import Link from 'next/link'

interface SearchBoxProps {
	width?: number
	height?: number
	fontsize?: number
}

export function SearchBox({
	width = 300,
	height = 25,
	fontsize = 14,
}: SearchBoxProps) {
	const propsStyle = {
		width: `${width}px`,
		height: `${height}px`,
		fontSize: `${fontsize}px`,
	}
	return (
		<div className="bg-red-500 flex items-center">
			<input
				className="bg-black text-white px-5 py-2.5 rounded-l-[12px]"
				style={{ ...propsStyle }}
				type="text"
				placeholder="유저 닉네임 검색"
			/>
			<Link
				href={'/'}
				className="bg-orange-500 text-white px-5 py-2.5 flex items-center justify-start rounded-r-[12px]"
				style={{ ...propsStyle, width: '30px' }}
			>
				검색
			</Link>
		</div>
	)
}
