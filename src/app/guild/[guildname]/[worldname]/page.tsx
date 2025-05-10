import { getCharInfo, getOcid } from '@/app/search/[nickname]/page'
import Image from 'next/image'
import Link from 'next/link'

const HEADER_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL

//길드 ocid 조회
const getGuildOcid = async (guild_name: string, world_name: string) => {
	const res = await fetch(
		`${BASE_URL}/guild/id?guild_name=${guild_name}&world_name=${world_name}`,
		{
			headers: {
				'Content-Type': 'application/json',
				'x-nxopen-api-key': `${HEADER_KEY}` ?? '',
			},
		},
	)

	if (!res.ok) return res.status

	const { oguild_id } = await res.json()

	return oguild_id
}

//길드 정보 조회
const getGuildInfo = async (guildOcid: string) => {
	const res = await fetch(`${BASE_URL}/guild/basic?oguild_id=${guildOcid}`, {
		headers: {
			'Content-Type': 'application/json',
			'x-nxopen-api-key': `${HEADER_KEY}` ?? '',
		},
		cache: 'force-cache',
	})

	if (!res.ok) return res.status

	return await res.json()
}
export default async function GuildSearch({
	params,
}: {
	params: { guildname: string; worldname: string }
}) {
	const { guildname, worldname } = await params

	const guildOcid = await getGuildOcid(guildname, worldname)

	const guildInfo = await getGuildInfo(guildOcid)

	const {
		guild_name,
		guild_level,
		guild_fame,
		guild_point,
		guild_master_name,
		world_name,
		guild_member,
		guild_member_count,
	} = guildInfo

	const ocid = await getOcid(guild_master_name)

	const masterInfo = await getCharInfo(ocid)

	const { character_image, character_name, character_class, character_level } =
		masterInfo

	console.log(guildInfo, masterInfo)

	const backgroundPath = `/images/guild/guildBack3.png`

	return (
		<div className="w-screen flex justify-center">
			<div className="w-[70vw] flex flex-col justify-start mt-30">
				<div className="p-2 bg-[#29292a] rounded-lg  w-full text-white mb-20">
					<div className="text-[#f3cb38] text-xm font-bold  text-left">
						{guild_name} 길드 정보
					</div>
				</div>
				<div className="flex mb-1 relative justify-center items-center">
					<Image
						src={backgroundPath}
						alt="배경"
						width={1500}
						height={200}
						className="opacity-70 rounded-sm absolute z-0"
					/>
					<div className="p-5 bg-[#29292aee] rounded-lg w-80 text-white mr-5 z-10">
						<div className="text-[#f3cb38] text-xm font-bold mb-2 text-left">
							길드 정보
						</div>
						<div className="text-[22px] ">
							{guild_name}
							<span className="text-[18px] ml-3 text-[#feffbcea]">
								LV. {guild_level}
							</span>
						</div>
						<div className="mt-2">
							<span className="text-gray-300 mr-2">명성치 :</span>
							{guild_fame}
						</div>
						<div className="mt-2">
							<span className="text-gray-300 mr-2">포인트 :</span>
							{guild_point}
						</div>
					</div>
					<div className="p-5 bg-[#29292aee] rounded-lg  w-80 text-white z-10">
						<Link href={`/search/${character_name}`}>
							<div className="text-[#f3cb38] text-xm font-bold mb-2 text-left">
								길드장
							</div>
							<div className="flex">
								<Image
									src={character_image}
									alt="캐릭터 이미지"
									width={100}
									height={100}
								/>
								<div className="ml-3 text-[14px] mt-2 border-s-1 pl-4 border-gray-400">
									<div className="grid grid-cols-2">
										<span className="text-gray-300">닉네임 :</span>
										<span>{character_name}</span>
									</div>
									<div className="grid grid-cols-2 ">
										<span className="text-gray-300">직업 :</span>
										<span>{character_class}</span>
									</div>
									<div className="grid grid-cols-2">
										<span className="text-gray-300">레벨 :</span>
										<span>{character_level}</span>
									</div>
									<div className="grid grid-cols-2">
										<span className="text-gray-300">서버 :</span>
										<span>{world_name}</span>
									</div>
								</div>
							</div>
						</Link>
					</div>
				</div>
				<div className="p-2 bg-[#29292a] rounded-lg  w-full text-white mt-30">
					<div className="text-[#f3cb38] text-xm font-bold  text-left">
						길드원 [ 총 {guild_member_count}명 ]
					</div>
				</div>
				<div className="flex flex-wrap text-white pt-3">
					{guild_member.map((el: string) => (
						<Link href={`/search/${el}`} key={el}>
							<div className="bg-[#ffffff1c] m-1 p-1 rounded-md text-[14px]">
								{el}
							</div>
						</Link>
					))}
				</div>
				<div className="p-2 bg-[#29292a] rounded-lg  w-full text-white mt-10">
					<div className="text-[#f3cb38] text-xm font-bold  text-left">
						길드 스킬
					</div>
				</div>
			</div>
		</div>
	)
}
