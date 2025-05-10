export interface CashItem {
	cash_item_equipment_part: string
	cash_item_equipment_slot: string
	cash_item_name: string
	cash_item_icon: string
	cash_item_label?: string | null
	cash_item_description?: string | null
	cash_item_option?: string[]
	cash_item_coloring_prism?: string | null
	date_expire?: string | null
	date_option_expire?: string | null
	item_gender?: string | null
}

export interface CharacterLook {
	date: string | null
	character_gender: '남' | '여'
	character_class: string
	character_look_mode: string
	preset_no: number

	cash_item_equipment_base: CashItem[]
	cash_item_equipment_preset_1: CashItem[]
	cash_item_equipment_preset_2: CashItem[]
	cash_item_equipment_preset_3: CashItem[]
	additional_cash_item_equipment_base: CashItem[]
	additional_cash_item_equipment_preset_1: CashItem[]
	additional_cash_item_equipment_preset_2: CashItem[]
	additional_cash_item_equipment_preset_3: CashItem[]
}

export type SelectType =
	| { key: 'cash_item_equipment_base'; selectNum: '기본' }
	| { key: 'cash_item_equipment_preset_1'; selectNum: '1' }
	| { key: 'cash_item_equipment_preset_2'; selectNum: '2' }
	| { key: 'cash_item_equipment_preset_3'; selectNum: '3' }
