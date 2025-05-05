import { ReactElement } from 'react'

export function HyperBtn(page: number, children: ReactElement) {
	return (
		<button className="w-8 h-5 flex items-center justify-center rounded-full bg-white text-black text-[10px] font-bold">
			{children}
		</button>
	)
}
