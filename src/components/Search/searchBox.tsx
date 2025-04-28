import Link from 'next/link'
import style from './search.module.css'

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
		<div className={style.container}>
			<input
				className={style.userInput}
				style={{ ...propsStyle }}
				type="text"
				placeholder="유저 닉네임 검색"
			/>
			<Link
				href={'/'}
				className={style.searchBtn}
				style={{ ...propsStyle, width: '30px' }}
			>
				검색
			</Link>
		</div>
	)
}
