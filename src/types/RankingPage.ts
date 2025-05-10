export interface UnionRankingInfo {
	character_name: string
	class_name: string
	sub_class_name: string
	world_name: string
	ranking: number
	union_level: number
	union_power: number
	date: string
	character_guildname: string
}

export interface DojangRankingInfo {
	character_name: string
	class_name: string
	sub_class_name: string
	world_name: string
	character_level: number
	dojang_floor: number
	dojang_time_record: number
	ranking: number
	date: string
}

export interface GuildRankingInfo {
	date: string
	guild_name: string
	guild_master_name: string
	guild_level: number
	guild_point: number
	guild_mark: string
	world_name: string
	ranking: number
}

export type UnionRankingTotal =
	| UnionRankingInfo
	| DojangRankingInfo
	| GuildRankingInfo
