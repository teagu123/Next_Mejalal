import Image from 'next/image'

export function UserItemHover({ item }: { item?: any }) {
	console.log(item)
	if (!item) return <div className="flex-none"></div>

	const {
		item_name,
		item_icon,
		scroll_upgrade,
		potential_option_grade,
		item_base_option,
		item_total_option,
		cuttable_count,
		item_equipment_slot,
		item_description,
	} = item
	return (
		<div className="absolute left-13 invisible group-hover:visible z-1000">
			<div className="w-[300px] bg-[#000000c8] text-white border border-white rounded-md shadow-lg p-4 relative font-[sans-serif]">
				<div
					className="absolute top-0 left-0 w-[40px] h-[40px] bg-gradient-to-br from-white/30 to-transparent z-10 pointer-events-none"
					style={{
						clipPath: 'polygon(0 0, 100% 0, 0 100%)',
					}}
				/>

				<div className="text-center text-sm font-bold border-b border-dashed border-gray-400 pb-2 mb-4">
					{scroll_upgrade !== '0'
						? item_name + ' (+' + scroll_upgrade + ')'
						: item_name}
					{potential_option_grade && (
						<div className="text-[11px] font-medium mt-1">
							({potential_option_grade} 아이템)
						</div>
					)}
				</div>

				<div className="mb-4 flex items-center">
					<Image src={item_icon} alt="상세 이미지" width={35} height={35} />
					<div className="ml-5 text-[10px] text-amber-300">
						REQ LEV : {item_base_option.base_equipment_level}
					</div>
				</div>

				<div className="text-center text-sm font-bold border-b border-dashed border-gray-400 pb-2 mb-4"></div>

				<div className="flex text-[12px] flex-col items-start">
					{item_equipment_slot && <div>장비 분류 : {item_equipment_slot}</div>}
					{item_total_option.str !== '0' && (
						<div>STR : {item_total_option.str}</div>
					)}
					{item_total_option.dex !== '0' && (
						<div>DEX : {item_total_option.dex}</div>
					)}
					{item_total_option.int !== '0' && (
						<div>INT : {item_total_option.int}</div>
					)}
					{item_total_option.luk !== '0' && (
						<div>LUC : {item_total_option.luk}</div>
					)}
					{item_total_option.attack_power !== '0' && (
						<div>공격력 : {item_total_option.attack_power}</div>
					)}
					{item_total_option.magic_power !== '0' && (
						<div>마력 : {item_total_option.magic_power}</div>
					)}
					{item_total_option.armor !== '0' && (
						<div>방어력 : {item_total_option.armor}</div>
					)}
					{item_total_option.ignore_monster_armor !== '0' && (
						<div>점프력 : {item_total_option.ignore_monster_armor}%</div>
					)}
					{item_total_option.all_stat !== '0' && (
						<div>올스탯 : {item_total_option.all_stat}</div>
					)}
					{item_base_option.equipment_level_decrease && (
						<div>
							업그레이드 가능 횟수 : {item_base_option.equipment_level_decrease}
						</div>
					)}
					{cuttable_count !== '255' && (
						<div>가위 사용 가능 횟수 : {cuttable_count}</div>
					)}
				</div>

				<div className="text-center text-sm font-bold border-b border-dashed border-gray-400 pb-2 mb-4"></div>

				<div className="text-left text-[13px] whitespace-pre-wrap">
					{item_description}
				</div>

				{/* 장비 분류 */}
				{/* <p className="text-sm border-t border-dashed border-gray-400 pt-2">
					장비 분류 :
					<span className="text-white">{cash_item_equipment_part}</span>
				</p> */}
			</div>
		</div>
	)
}
