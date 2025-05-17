import { UnionRankingTotal } from '@/types/RankingPage'
import Link from 'next/link'

export function RankListBox({
	title,
	listData,
	darkMode = false,
}: {
	title: string
	listData: UnionRankingTotal[]
	darkMode: boolean
}) {
	//bg-[#2d2c2cab]
	return (
		<div
			className={`w-full bg-[#1b1a1a] p-2 rounded-sm text-white ${
				darkMode ? 'bg-[#1b1a1a]' : 'bg-[#2d2c2cab]'
			}`}
		>
			<div className="border-b border-b-[#eae7e726] pb-1 mb-1">{title}</div>
			{listData.map((el: any) => (
				<div
					key={el.ranking}
					className={`flex justify-between  bg-gradient-to-r from-transparent 
                                    ${
																			el.ranking === 1 &&
																			'via-[#fff9c20] to-[#fcdf0269]'
																		}
                                ${
																	el.ranking === 2 &&
																	'via-[#e3e3e30] to-[#c0c0c064]'
																}
                                ${
																	el.ranking === 3 &&
																	'via-[#ffd6b01] to-[#cc772258]'
																}
                                                            hover:opacity-60 transition-opacity duration-200
                                                                `}
				>
					<div>
						<span className="text-[14px]">{el.ranking}. </span>

						{(title === '종합 랭킹' || title === '유니온 랭킹') && (
							<>
								<Link href={`/search/${el.character_name}`}>
									<span className="text-[14px] cursor-pointer border-b border-transparent hover:border-gray-100">
										{el.character_name}
									</span>
								</Link>
								<span className="text-[11px] text-gray-300 ml-1">
									[{el.world_name} / {el.character_guildname ?? '길드 미가입'}]
								</span>
							</>
						)}

						{title === '무릉도장 랭킹' && (
							<>
								<Link href={`/search/${el.character_name}`}>
									<span className="text-[14px] cursor-pointer border-b border-transparent hover:border-gray-100">
										{el.character_name}
									</span>
								</Link>
								<span className="text-[11px] text-gray-300 ml-1">
									[{el.world_name} /{' '}
									{el.sub_class_name === '' ? '-' : el.sub_class_name}]
								</span>
							</>
						)}

						{title === '길드 랭킹' && (
							<>
								<span className="text-[14px]">{el.guild_name} 길드</span>
								<span className="text-[11px] text-gray-300 ml-1">
									[{el.world_name}]
								</span>
							</>
						)}
					</div>
					<div>
						{title === '종합 랭킹' && (
							<>
								<span className="text-gray-300 text-[11px] mr-1">
									{el.class_name}
								</span>
								<span className="text-gray-200 text-[13px]">LV. </span>
								<span className="text-[14px]">{el.character_level}</span>
							</>
						)}
						{title === '유니온 랭킹' && (
							<>
								<span className="text-gray-300 text-[11px] mr-1">
									{el.class_name}
								</span>
								<span className="text-gray-200 text-[13px]">LV. </span>
								<span className="text-[14px]">{el.union_level}</span>
							</>
						)}

						{title === '길드 랭킹' && (
							<>
								<span className="text-gray-300 text-[11px] mr-1">
									LV. {el.guild_level}
								</span>
								<span className="text-gray-200 text-[13px]">POINT. </span>
								<span className="text-[14px]">{el.guild_point}</span>
							</>
						)}
						{title === '무릉도장 랭킹' && (
							<>
								<span className="text-gray-300 text-[11px] mr-1">
									{el.dojang_time_record}
								</span>

								<span className="text-[14px]">{el.dojang_floor} 층</span>
							</>
						)}
					</div>
				</div>
			))}
		</div>
	)
}
