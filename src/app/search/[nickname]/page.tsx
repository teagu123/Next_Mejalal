import { customFetch } from '@/app/api/customFetch'
import { CharacterCard } from '@/components/CharacterCard'
import { CharacterStat } from '@/components/CharacterStatList.tsx'
import { Search404 } from '@/components/Error'

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
	error: {
		name: string
		message: string
	}
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

	if (getCharacterInfo?.error?.name === 'OPENAPI00003')
		return <Search404 nickname={decodeURIComponent(nickname)} />

	const getPopularity = await customFetch<{ popularity: number }>(
		`/character/popularity?ocid=${ocid}`,
	)

	const { popularity } = getPopularity

	// data fatching 전 컴포넌트 랜더링 issue

	return (
		<>
			{popularity && ocid && (
				<div className="w-screen flex flex-col items-center">
					<div className="w-[70vw] mt-30 flex mb-1 justify-center">
						<div className="p-5 bg-[#29292a] rounded-lg">
							<div className="text-[#f3cb38] text-xs font-bold mb-2 text-left">
								CHARACTER INFO
							</div>
							<CharacterCard
								getCharacterInfo={getCharacterInfo}
								popularity={popularity}
							/>
						</div>
					</div>
					<div className="w-[70vw] mb-10">
						<CharacterStat ocid={ocid} />
					</div>
				</div>
			)}
		</>
	)
}
