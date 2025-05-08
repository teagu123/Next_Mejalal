export function CashCody() {
	const commonStyle =
		'aspect-square rounded border border-gray-400 bg-[conic-gradient(at_top_left,_#d3d3d3,_#a9a9a9)] shadow-inner text-[8px] text-gray-200 flex items-center justify-center text-center'
	return (
		<div className="p-4 bg-[#e0e0e4] max-w-sm mx-auto rounded-lg shadow-lg w-100 mr-1 h-125">
			<h2 className="text-[#070707] text-xs font-bold mb-2 text-left w-60">
				캐시 장비 슬롯
			</h2>
			<div className="grid grid-cols-5 gap-1">
				{/* 첫 번째 줄 */}
				<div className={commonStyle}>RING</div>
				<div className={commonStyle}>HEIR</div>
				<div className={commonStyle}>HAT</div>
				<div className="col-span-2 row-span-2 " />

				{/* 두 번째 줄 */}
				<div className={commonStyle}>RING</div>
				<div className={commonStyle}>FACE</div>
				<div className={commonStyle}>FORE HEAD</div>

				{/* 세 번째 줄 */}
				<div className={commonStyle}>RING</div>
				<div className={commonStyle}>FACE</div>
				<div className={commonStyle}>EYE ACC</div>
				<div className={commonStyle}>EAR ACC</div>
				<div className="col-span-1 row-span-1 " />

				{/* 네 번째 줄 */}
				<div className={commonStyle}>RING</div>
				<div className={commonStyle}>WEAPON</div>
				<div className={commonStyle}>TOP</div>
				<div className="col-span-1 row-span-1 " />
				<div className={commonStyle}>SUB WEAPON</div>

				{/* 다섯 번째 줄 */}
				<div className="col-span-2 row-span-1" />
				<div className={commonStyle}>PANTS</div>
				<div className={commonStyle}>GLOUES</div>
				<div className={commonStyle}>RING</div>

				{/* 여섯 번째 줄 */}
				<div className="col-span-2 row-span-1" />
				<div className={commonStyle}>SHOES</div>
			</div>
		</div>
	)
}
