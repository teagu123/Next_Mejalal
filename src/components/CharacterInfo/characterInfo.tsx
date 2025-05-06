import Image from 'next/image'
import { CharacterImg } from '.'
import { TypeCharInfo } from '@/types/SearchPage'

export function CharacterInfo({
	getCharacterInfo,
	popularity,
}: {
	getCharacterInfo: TypeCharInfo
	popularity: number
}) {
	const {
		character_name,
		world_name,
		character_gender,
		character_class,
		character_class_level,
		character_level,
		character_exp,
		character_exp_rate,
		character_guild_name,
		character_image,
	} = getCharacterInfo

	const infoListData = [
		[0, 'LV.', character_level],
		[1, '직업', character_class],
		[2, '성별', character_gender],
		[3, '월드', world_name],
		[4, '길드', character_guild_name],
		[5, '인기도', popularity],
	]

	return (
		<div className="flex rounded-lg bg-[#ede9e9]">
			<div className="relative h-[100%] flex flex-col items-center justify-center">
				<CharacterImg
					character_image={character_image}
					character_name={character_name}
				/>
				<Image
					src={'/images/characterBackGround/background1.png'}
					alt={'캐릭터 배경 이미지'}
					width={350}
					height={350}
					className="grayscale-40 rounded-l-lg"
				/>
				<div className="absolute bottom-1 bg-[#2e2e2eb1] text-white px-2 py-1 rounded text-sm font-semibold">
					{character_name}
				</div>
			</div>
			<div className="w-[250px]">
				<div className="bg-[#d0d1d3ac] rounded-r-lg h-full text-white  p-3 text-sm ">
					{infoListData.map(user => (
						<div key={user[0]} className="flex justify-between ">
							<span className="w-2/5  text-[#201f1f]  text-base font-semibold ">
								{user[1]}
							</span>
							<span className="w-3/5 text-base text-start font-semibold text-[#0e0d0d]">
								{user[2] ?? '-'}
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
