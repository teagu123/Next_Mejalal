'use client'
import { usePathname, useRouter } from 'next/navigation'
import { worldList } from '../../constants/worldList'
import { KeyboardEvent, useEffect, useState } from 'react'

interface SearchBoxProps {
	width?: number
	height?: number
	fontsize?: number
	border?: boolean
}

export function GuildSearchBox({
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
	const [selectedWorld, setSelectedWorld] = useState<string>('스카니아')
	const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)

	const onSearch = () => {
		if (inputVal.trim() === '') return router.push(`/`)

		router.push(`/guild/${inputVal}/${selectedWorld}`)
	}

	const activeEnter = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			onSearch()
		}
	}

	useEffect(() => {
		const paths = pathname.split('/')
		const guildName = paths[3] ? decodeURIComponent(paths[3]) : ''
		const worldName = paths[2] || '스카니아'

		setInputVal(guildName)
		setSelectedWorld(worldName)
	}, [pathname])

	return (
		<div className="flex items-center space-x-1">
			<div className="relative">
				<button
					onClick={() => setIsDropdownOpen(!isDropdownOpen)}
					className="bg-[#29292a] text-white text-[13px] px-3 py-3.5 rounded-[12px] min-w-[100px] cursor-pointer"
				>
					<span>{selectedWorld}</span>
				</button>
				{isDropdownOpen && (
					<div className="absolute z-10 bg-[#1e1e1f] text-white mt-2 rounded-[12px] shadow-lg w-full max-h-60 overflow-y-auto text-[13px]">
						{worldList.map(world => (
							<div
								key={world.worldName}
								className="px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center space-x-2"
								onClick={() => {
									setSelectedWorld(world.worldName)
									setIsDropdownOpen(false)
								}}
							>
								<span>{world.worldName}</span>
							</div>
						))}
					</div>
				)}
			</div>

			<div className="flex items-center">
				<input
					className="bg-[#29292a] text-white px-5 py-2.5 rounded-l-[12px]"
					style={{ ...propsStyle, borderRight: 'none' }}
					type="text"
					placeholder={'길드명 검색'}
					onChange={e => setInputVal(e.target.value)}
					onKeyDown={activeEnter}
					value={inputVal}
				/>
				<div
					className="bg-[#29292a] text-white px-3 py-2.5 flex items-center justify-center rounded-r-[12px] cursor-pointer"
					style={{ height: `${height}px` }}
					onClick={onSearch}
				>
					🔍
				</div>
			</div>
		</div>
	)
}
