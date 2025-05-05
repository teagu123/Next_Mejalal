import { CharacterCard } from '@/components/CharacterCard'
import { CharacterStat } from '@/components/CharacterStatList.tsx'
import { Search404 } from '@/components/Error'
import { delay } from '@/hook/useDelay'

const HEADER_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL

export interface TypeStat {
	final_stat: {
		stat_name: string
		stat_value: string
	}[]
}

//ocid
const getOcid = async (nickname: string) => {
	const res = await fetch(
		`${BASE_URL}/id?character_name=${decodeURIComponent(nickname)}`,
		{
			headers: {
				'Content-Type': 'application/json',
				'x-nxopen-api-key': `${HEADER_KEY}` ?? '',
			},
		},
	)

	if (!res.ok) return res.status

	const { ocid } = await res.json()

	return ocid
}

//character info
const getCharInfo = async (ocid: string) => {
	const res = await fetch(`${BASE_URL}/character/basic?ocid=${ocid}`, {
		headers: {
			'Content-Type': 'application/json',
			'x-nxopen-api-key': `${HEADER_KEY}` ?? '',
		},
		cache: 'force-cache',
	})

	return await res.json()
}

//character getPopularity
const getPopularity = async (ocid: string) => {
	const res = await fetch(`${BASE_URL}/character/popularity?ocid=${ocid}`, {
		headers: {
			'Content-Type': 'application/json',
			'x-nxopen-api-key': `${HEADER_KEY}` ?? '',
		},
		cache: 'force-cache',
	})

	const { popularity } = await res.json()

	return popularity
}

//character Stat
const getStatApi = async (ocid: string) => {
	const res3 = await fetch(`${BASE_URL}/character/stat?ocid=${ocid}`, {
		headers: {
			'Content-Type': 'application/json',
			'x-nxopen-api-key': `${HEADER_KEY}` ?? '',
		},
		cache: 'force-cache',
	})

	return await res3.json()
}

export default async function SearchUser({
	params,
}: {
	params: { nickname: string }
}) {
	const { nickname } = await params

	const ocid = await getOcid(decodeURIComponent(nickname))

	if (ocid === 400) return <Search404 nickname={decodeURIComponent(nickname)} />

	const getCharacterInfo = await getCharInfo(ocid)

	const popularity = await getPopularity(ocid)

	await delay(1000)

	const getStat = await getStatApi(ocid)

	console.log(getStat)

	return (
		<>
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
					<CharacterStat getStat={getStat} ocid={ocid} />
				</div>
			</div>
		</>
	)
}
