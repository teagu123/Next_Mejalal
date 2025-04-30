'use client'
import { usePathname, useRouter } from 'next/navigation'
import { KeyboardEvent, useEffect, useState } from 'react'

interface SearchBoxProps {
	width?: number
	height?: number
	fontsize?: number
	border?: boolean
}

export function SearchBox({
	width = 400,
	height = 50,
	fontsize = 14,
	border = false,
}: SearchBoxProps) {
	const propsStyle = {
		width: `${width}px`,
		height: `${height}px`,
		fontSize: `${fontsize}px`,
		border: border ? '1px solid gray' : 'none',
	}

	const router = useRouter()
	const pathname = usePathname()

	const [inputVal, setInputVal] = useState<string>('')

	const onSearch = () => {
		const paths = pathname.split('/')[1]

		if (inputVal.trim() === '') {
			if (paths === '') return
			if (paths !== '') return router.push(`/`)
		}

		router.push(`/search/${inputVal}`)
	}
	const activeEnter = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			onSearch()
		}
	}

	useEffect(() => {
		const paths = pathname.split('/')

		const nickname = paths[2] ? decodeURIComponent(paths[2]) : ''

		setInputVal(nickname)
	}, [pathname])

	return (
		<div
			className="flex items-center"
			style={{ ...propsStyle, border: 'none' }}
		>
			<input
				className="bg-[#29292a] text-white px-5 py-2.5 rounded-l-[12px]"
				style={{ ...propsStyle, borderRight: 'none' }}
				type="text"
				placeholder="유저 닉네임 검색"
				onChange={e => setInputVal(e.target.value)}
				onKeyDown={e => activeEnter(e)}
				value={inputVal}
			/>
			<div
				className="bg-[#29292a] text-white px-2 py-2.5 flex items-center justify-start rounded-r-[12px] cursor-pointer
				"
				style={{ ...propsStyle, width: '30px', borderLeft: 'none' }}
				onClick={() => onSearch()}
			>
				🔍
			</div>
		</div>
	)
}
