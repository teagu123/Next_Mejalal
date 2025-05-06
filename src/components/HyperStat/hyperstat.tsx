'use client'

import { TypeHyperStat } from '@/types/SearchPage'
import { useEffect, useState } from 'react'

const HEADER_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL

//캐릭터 하이퍼스택 조회
const getHyperStatApi = async (ocid: string) => {
	const res = await fetch(`${BASE_URL}/character/hyper-stat?ocid=${ocid}`, {
		headers: {
			'Content-Type': 'application/json',
			'x-nxopen-api-key': `${HEADER_KEY}` ?? '',
		},
		cache: 'force-cache',
	})
	return res.json()
}

export function HyperStat({ ocid }: { ocid: string }) {
	const [page, setPage] = useState<number>(1)
	const [statList, setStatList] = useState<TypeHyperStat[]>([])

	useEffect(() => {
		const loadHyperStat = async () => {
			const data = await getHyperStatApi(ocid)
			const statKey = `hyper_stat_preset_${page}`
			setStatList(data[statKey] ?? [])
		}

		loadHyperStat()
	}, [ocid, page])

	return (
		<div className="bg-[#29292a] text-white rounded-lg p-5 w-70 ml-1">
			<div className="text-[#f3cb38] text-xs font-bold mb-2 text-left">
				HYPER STAT
			</div>
			{statList.map((el: TypeHyperStat) => (
				<div
					key={el.stat_type}
					className="flex justify-between text-xs text-[#d1d5db] font-semibold mb-1"
				>
					<span>{el.stat_type}</span>
					<span>
						<span className="mr-1">Lv.</span>
						{el.stat_level}
					</span>
				</div>
			))}

			<div className="flex items-center justify-around bg-[#5b6474] px-2 py-1 rounded-md text-xs text-white space-x-1 mt-2">
				<span className="opacity-70 mr-1">PRESETS</span>
				{[1, 2, 3].map(num => (
					<button
						key={num}
						onClick={() => setPage(num)}
						className={`w-8 h-5 flex items-center justify-center rounded-full ${
							page === num
								? 'bg-white text-black font-bold'
								: 'border border-white text-white opacity-80 hover:bg-white hover:text-black'
						} text-[10px]`}
					>
						{num}
					</button>
				))}
			</div>
		</div>
	)
}
