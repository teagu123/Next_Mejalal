import {
	getCashCody,
	getCharInfo,
	getOcid,
	getPopularity,
	getStatApi,
	getUserItem,
} from '@/app/api'
import { CashCody } from '@/components/CashCody'
import { UserItem } from '@/components/CashCody/userItem'
import { CharacterInfo } from '@/components/CharacterInfo'
import { CharacterStat } from '@/components/CharacterStat.tsx'
import { Search404 } from '@/components/Error'
import { Delay } from '@/hook/useDelay'
import { Suspense } from 'react'

export default async function SearchUser({ params }: { params: any }) {
	const { device, nickname } = params

	const ocid = await getOcid(decodeURIComponent(nickname))

	if (ocid === 400) return <Search404 nickname={decodeURIComponent(nickname)} />

	const getCharacterInfo = await getCharInfo(ocid)

	if (getCharacterInfo === 400)
		return <Search404 nickname={decodeURIComponent(nickname)} />

	await Delay(1000)

	const [popularity, getStat, cashCody, userItem] = await Promise.all([
		getPopularity(ocid),
		getStatApi(ocid),
		getCashCody(ocid),
		getUserItem(ocid),
	])
	console.log(userItem)

	return (
		<>
			<div className="w-screen flex flex-col items-center">
				<div className="w-[70vw] mt-30 flex justify-start">
					<div>
						<Suspense fallback={<h3>loading</h3>}>
							<UserItem userItem={userItem} />
						</Suspense>
						<Suspense fallback={<h3>loading</h3>}>
							<CashCody cashData={cashCody} />
						</Suspense>
					</div>

					<div className="flex flex-col items-start">
						<div className="p-5 bg-[#29292a] rounded-lg mb-1">
							<div className="text-[#f3cb38] text-xs font-bold mb-2 text-left">
								CHARACTER INFO
							</div>
							<Suspense fallback={<h3>loading</h3>}>
								<CharacterInfo
									getCharacterInfo={getCharacterInfo}
									popularity={popularity}
								/>
							</Suspense>
						</div>

						<div className="w-[70vw] mb-10 flex ">
							<Suspense fallback={<h3>loading</h3>}>
								<CharacterStat getStat={getStat} ocid={ocid} />
							</Suspense>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
