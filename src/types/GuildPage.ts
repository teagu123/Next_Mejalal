export interface GuildSkillInfo {
	skill_name: string
	skill_description: string
	skill_effect: string
	skill_icon: string
	skill_level: number
}

export interface GuildInfo {
	guild_name: string
	guild_level: number
	guild_fame: number
	guild_point: number
	guild_master_name: string
	world_name: string
	guild_member: string[]
	guild_member_count: number
	guild_skill: GuildSkillInfo[]
	guild_noblesse_skill: GuildSkillInfo[]
	date: string | null
}
