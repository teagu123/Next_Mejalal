import Image from 'next/image'
import { skillMap } from '../../constants/guildSkillList'
import { GuildSkillInfo } from '@/types/GuildPage'

export function GuildSkill({ guild_skill }: { guild_skill: GuildSkillInfo[] }) {
	const skillLevel: string[] = [
		'Lv 1',
		'Lv 5',
		'Lv 10',
		'Lv 15',
		'Lv 20',
		'Lv 25',
	]

	return (
		<div className="p-4 bg-[#b0acac30] text-white mb-30">
			<div className="grid grid-cols-6 gap-4 mb-4 text-center text-sm font-bold">
				{skillLevel.map(el => (
					<div key={el}>{el}</div>
				))}
			</div>

			<div className="grid grid-cols-6 gap-4">
				{skillMap.map((arr, rowIdx) =>
					arr.map((el, colIdx) => {
						if (el === '화살표') {
							return (
								<div
									key={`arrow-${rowIdx}-${colIdx}`}
									className="w-full h-2 rounded-full bg-gradient-to-r from-white to-[#FFFACD] shadow-md relative top-10"
								>
									<div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 border-t-4 border-r-4 border-[#FFFACD] rotate-45"></div>
								</div>
							)
						}

						if (el === '') {
							return <div key={`empty-${rowIdx}-${colIdx}`}></div>
						}

						const skill = guild_skill.find(
							(skill: GuildSkillInfo) => skill.skill_name === el,
						)

						return (
							<div key={`skill-${rowIdx}-${colIdx}`}>
								{skill ? (
									<div className="flex flex-col items-center ">
										<div className="bg-gray-700 rounded-lg shadow-md w-12 h-12 flex items-center justify-center mt-2">
											<Image
												src={skill?.skill_icon || '/default.png'}
												alt={el}
												width={45}
												height={45}
												className="object-contain"
											/>
										</div>
										<div className="text-xs mt-2">{el}</div>
										<div className="text-xs text-yellow-200">
											{skill?.skill_level}/
											{skill?.skill_description.match(
												/마스터 레벨\s*:\s*(\d+)/,
											)?.[1] || '?'}
										</div>
									</div>
								) : (
									<div className="w-12 h-12"></div>
								)}
							</div>
						)
					}),
				)}
			</div>
		</div>
	)
}
