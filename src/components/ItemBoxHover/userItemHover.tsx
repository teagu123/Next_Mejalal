import { CashItem } from '@/types/CashCody'
import Image from 'next/image'

export function UserItemHover({ item }: { item?: CashItem }) {
	if (!item) return <div className="flex-none"></div>

	const { cash_item_name, cash_item_equipment_part, cash_item_icon } = item
	return (
		<div className="absolute left-13 invisible group-hover:visible z-1000">
			<div className="w-[200px] bg-[#000000c8] text-white border border-white rounded-md shadow-lg p-4 relative font-[sans-serif]">
				<div
					className="absolute top-0 left-0 w-[40px] h-[40px] bg-gradient-to-br from-white/30 to-transparent z-10 pointer-events-none"
					style={{
						clipPath: 'polygon(0 0, 100% 0, 0 100%)',
					}}
				/>

				<h2 className="text-center text-lg font-bold border-b border-dashed border-gray-400 pb-2 mb-4">
					{cash_item_name}
				</h2>

				<div className="flex justify-center mb-4">
					<Image
						src={cash_item_icon}
						alt="상세 이미지"
						width={50}
						height={50}
					/>
				</div>

				{/* 장비 분류 */}
				<p className="text-sm border-t border-dashed border-gray-400 pt-2">
					장비 분류 :
					<span className="text-white">{cash_item_equipment_part}</span>
				</p>
			</div>
		</div>
	)
}
