import { CashCody } from '@/components/CashCody'
import { CharacterInfo } from '@/components/CharacterInfo'
import { CharacterStat } from '@/components/CharacterStat.tsx'
import { Search404 } from '@/components/Error'
import { useDelay } from '@/hook/useDelay'

const HEADER_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL

//캐릭터 식별자(ocid)조회
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

//캐릭터 기본정보 조회
const getCharInfo = async (ocid: string) => {
	const res = await fetch(`${BASE_URL}/character/basic?ocid=${ocid}`, {
		headers: {
			'Content-Type': 'application/json',
			'x-nxopen-api-key': `${HEADER_KEY}` ?? '',
		},
		cache: 'force-cache',
	})

	if (!res.ok) return res.status

	return await res.json()
}

//캐릭터 인기도 조회
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

//캐릭터 종합능력치 정보 조회
const getStatApi = async (ocid: string) => {
	const res = await fetch(`${BASE_URL}/character/stat?ocid=${ocid}`, {
		headers: {
			'Content-Type': 'application/json',
			'x-nxopen-api-key': `${HEADER_KEY}` ?? '',
		},
		cache: 'force-cache',
	})

	return await res.json()
}

//캐릭터 캐시 아이템 조회
const getCashCody = async (ocid: string) => {
	const res = await fetch(
		`${BASE_URL}/character/cashitem-equipment?ocid=${ocid}`,
		{
			headers: {
				'Content-Type': 'application/json',
				'x-nxopen-api-key': `${HEADER_KEY}` ?? '',
			},
			cache: 'force-cache',
		},
	)

	return await res.json()
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

	if (getCharacterInfo === 400)
		return <Search404 nickname={decodeURIComponent(nickname)} />

	const popularity = await getPopularity(ocid)

	await useDelay(1000)

	const getStat = await getStatApi(ocid)

	const cashCody = await getCashCody(ocid)

	return (
		<>
			<div className="w-screen flex flex-col items-center">
				<div className="w-[70vw] mt-30 flex justify-start">
					<CashCody cashData={cashCody} />
					<div className="flex flex-col items-start">
						<div className="p-5 bg-[#29292a] rounded-lg mb-1">
							<div className="text-[#f3cb38] text-xs font-bold mb-2 text-left">
								CHARACTER INFO
							</div>
							<CharacterInfo
								getCharacterInfo={getCharacterInfo}
								popularity={popularity}
							/>
						</div>

						<div className="w-[70vw] mb-10 flex ">
							<CharacterStat getStat={getStat} ocid={ocid} />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
