type ItemOption = {
	str: string
	dex: string
	int: string
	luk: string
	max_hp: string
	max_mp?: string
	attack_power?: string
	magic_power?: string
	armor?: string
	speed?: string
	jump?: string
	boss_damage?: string
	ignore_monster_armor?: string
	all_stat?: string
}

export type ItemEquipment = {
	item_equipment_part: string
	item_equipment_slot: string
	item_name: string
	item_icon: string
	item_shape_icon: string
	item_shape_name: string
	item_description: string | null

	potential_option_1?: string | null
	potential_option_2?: string | null
	potential_option_3?: string | null
	potential_option_flag?: string
	potential_option_grade?: string

	additional_potential_option_1?: string | null
	additional_potential_option_2?: string | null
	additional_potential_option_3?: string | null
	additional_potential_option_flag?: string
	additional_potential_option_grade?: string

	item_base_option?: ItemOption
	item_add_option?: ItemOption
	item_etc_option?: ItemOption
	item_starforce_option?: ItemOption
	item_total_option?: ItemOption
	item_exceptional_option?: ItemOption

	scroll_upgrade?: string
	scroll_upgradeable_count?: string
	scroll_resilience_count?: string

	starforce?: string
	starforce_scroll_flag?: string
	golden_hammer_flag?: string
	equipment_level_increase?: number
	cuttable_count?: string
	special_ring_level?: number

	date_expire?: string | null

	soul_name?: string | null
	soul_option?: string | null
	item_gender?: string | null
}

export type CharacterEquipmentData = {
	character_class: string
	character_gender: string
	date: string | null
	preset_no: number

	item_equipment: ItemEquipment[]
	item_equipment_preset_1: ItemEquipment[]
	item_equipment_preset_2: ItemEquipment[]
	item_equipment_preset_3: ItemEquipment[]

	dragon_equipment?: unknown
	mechanic_equipment?: unknown
	title?: unknown
	medal_shape?: string | null
}

export type SelectUserType =
	| { key: 'item_equipment'; selectNum: '기본' }
	| { key: 'item_equipment_preset_1'; selectNum: '1' }
	| { key: 'item_equipment_preset_2'; selectNum: '2' }
	| { key: 'item_equipment_preset_3'; selectNum: '3' }
