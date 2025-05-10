import Link from 'next/link'

export function GuildList({
	title,
	listData,
}: {
	title: string
	listData: any
}) {
	const sliceData = listData.slice(0, 100)

	return (
		<div className="w-full bg-[#2d2c2cab] p-2 rounded-sm text-white mb-10">
			<div className="border-b border-b-[#eae7e726] pb-1 mb-1">{title}</div>
			{sliceData.map((el: any) => (
				<Link
					href={`/guild/${el.guild_name}/${el.world_name}`}
					key={el.ranking}
				>
					<div
						className={`flex justify-between  bg-gradient-to-r from-transparent ${
							el.ranking === 1 && 'via-[#fff9c20] to-[#fcdf0269]'
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
							<span className="text-[16px]">{el.ranking}. </span>
							<span>
								<span className="text-[16px]">{el.guild_name} 길드</span>

								<span className="text-[13px] text-gray-300 ml-1">
									[{el.world_name}]
								</span>
							</span>
						</div>
						<div>
							<div>
								<span className="text-gray-300 text-[13px] mr-1">
									LV. {el.guild_level}
								</span>
								<span className="text-gray-200 text-[15px]">POINT. </span>
								<span className="text-[14px]">{el.guild_point}</span>
							</div>
						</div>
					</div>
				</Link>
			))}
		</div>
	)
}
