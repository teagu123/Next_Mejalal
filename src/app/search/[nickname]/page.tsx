import { customFetch } from '@/app/api/customFetch'
import { CharacterCard } from '@/components/CharacterCard'

export interface CharInfoType {
	access_flag: boolean
	character_class: string
	character_class_level: string
	character_date_create: string
	character_exp: number
	character_exp_rate: string
	character_gender: '남' | '여'
	character_guild_name: string
	character_image: string
	character_level: number
	character_name: string
	date: string | null
	liberation_quest_clear_flag: boolean
	world_name: string
}

export default async function SearchUser({
	params,
}: {
	params: { nickname: string }
}) {
	const { nickname } = await params

	const getOcid = await customFetch<{ ocid: string }>(
		`/id?character_name=${decodeURIComponent(nickname)}`,
	)
	const { ocid } = getOcid

	const getCharacterInfo = await customFetch<CharInfoType>(
		`/character/basic?ocid=${ocid}`,
	)

	return (
		<div className="w-screen flex flex-col items-center">
			<div className="w-[70vw] mt-30">
				<CharacterCard getCharacterInfo={getCharacterInfo} />
			</div>
		</div>
	)
}
