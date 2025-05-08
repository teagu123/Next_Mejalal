import Image from 'next/image'

export function CashCody({ cashData }: { cashData: any }) {
	const findCashItem = (engItem: string, korItem: string) => {
		const findItem = cashData.find(
			(el: any) => el.cash_item_equipment_slot === korItem,
		)

		return findItem ? (
			<Image
				src={findItem.cash_item_icon}
				width={35}
				height={35}
				alt="캐시 아이템 사진"
			/>
		) : (
			engItem
		)
	}

	const commonStyle =
		'aspect-square rounded border border-gray-400 bg-[conic-gradient(at_top_left,_#d3d3d3,_#a9a9a9)] shadow-inner text-[8px] text-gray-200 flex items-center justify-center text-center'
	return (
		<div className="p-4 bg-[#e0e0e4] max-w-sm mx-auto rounded-lg shadow-lg w-100 mr-1 h-85">
			<h2 className="text-[#070707] text-xs font-bold mb-2 text-left w-60">
				캐시 장비 슬롯
			</h2>
			<div className="grid grid-cols-5 gap-1">
				{/* 첫 번째 줄 */}
				<div className={commonStyle}>{findCashItem('RING', '반지1')}</div>
				<div className="col-span-1 row-span-1 " />
				<div className={commonStyle}>{findCashItem('HAT', '모자')}</div>
				<div className="col-span-2 row-span-2 " />

				{/* 두 번째 줄 */}
				<div className={commonStyle}>{findCashItem('RING', '반지2')}</div>
				<div className={commonStyle}>{findCashItem('FACE', '얼굴장식')}</div>
				<div className="col-span-1 row-span-1 " />

				{/* 세 번째 줄 */}
				<div className={commonStyle}>{findCashItem('RING', '반지3')}</div>
				<div className={commonStyle}>{findCashItem('FACE', '눈장식')}</div>
				<div className="col-span-1 row-span-1 " />
				<div className={commonStyle}>{findCashItem('EAR ACC', '귀고리')}</div>
				<div className="col-span-1 row-span-1 " />

				{/* 네 번째 줄 */}
				<div className={commonStyle}>{findCashItem('RING', '반지4')}</div>
				<div className={commonStyle}>{findCashItem('WEAPON', '무기')}</div>
				<div className={commonStyle}>{findCashItem('TOP', '상의')}</div>
				<div className="col-span-1 row-span-1 " />
				<div className={commonStyle}>
					{findCashItem('SUB WEAPON', '보조무기')}
				</div>

				{/* 다섯 번째 줄 */}
				<div className="col-span-2 row-span-1" />
				<div className={commonStyle}>{findCashItem('PANTS', '하의')}</div>
				<div className={commonStyle}>{findCashItem('GLOVES', '장갑')}</div>
				<div className={commonStyle}>{findCashItem('CAPE', '망토')}</div>

				{/* 여섯 번째 줄 */}
				<div className="col-span-2 row-span-1" />
				<div className={commonStyle}>{findCashItem('SHOES', '신발')}</div>
			</div>
		</div>
	)
}
