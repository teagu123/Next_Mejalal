const HEADER_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL
//길드 ocid 조회
export const getGuildOcid = async (guild_name: string, world_name: string) => {
	const res = await fetch(
		`${BASE_URL}/guild/id?guild_name=${guild_name}&world_name=${world_name}`,
		{
			headers: {
				'Content-Type': 'application/json',
				'x-nxopen-api-key': HEADER_KEY ?? '',
			},
		},
	)

	if (!res.ok) return res.status

	const { oguild_id } = await res.json()

	return oguild_id
}
