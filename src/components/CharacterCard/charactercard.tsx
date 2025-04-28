import { CharInfoType } from '@/app/search/[nickname]/page'
import Image from 'next/image'

export function CharacterCard({
	getCharacterInfo,
}: {
	getCharacterInfo: CharInfoType
}) {
	console.log(getCharacterInfo)
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
	return (
		<div className="flex h-70 rounded-md bg-[#272626]">
			<div className="w-[20%] h-[100%] flex items-center justify-center">
				<Image
					src={character_image}
					alt={character_name + '의 캐릭터 이미지'}
					width={200}
					height={200}
				/>
			</div>
			<div className="w-[80%]"></div>
		</div>
	)
}
