export interface TypeStatData {
	final_stat: {
		stat_name: string
		stat_value: string
	}[]
}

export interface TypeCharInfo {
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

export interface TypeHyperStat {
	stat_type: string
	stat_level: number | null
}
