import {
	getCashCody,
	getCharInfo,
	getOcid,
	getPopularity,
	getStatApi,
} from '@/app/api'
import { CashCody } from '@/components/CashCody'
import { CharacterInfo } from '@/components/CharacterInfo'
import { CharacterStat } from '@/components/CharacterStat.tsx'
import { Search404 } from '@/components/Error'
import { useDelay } from '@/hook/useDelay'
import { CharacterLook } from '@/types/CashCody'

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

	const cashCody: CharacterLook = await getCashCody(ocid)

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
