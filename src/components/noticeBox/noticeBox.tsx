import { NoticeType } from '@/types/notice'
import Link from 'next/link'

export function NoticeBox({
	title,
	list,
}: {
	title: string
	list: NoticeType[]
}) {
	return (
		<div className="w-full bg-[#191919] p-2 rounded-sm text-white">
			<div className="border-b border-b-[#eae7e726] pb-1 mb-1">{title}</div>
			{list.map((el: NoticeType) => (
				<Link key={el.notice_id} href={el.url} target="_blank">
					<div className="text-[13px] pt-1 pb-1 cursor-pointer hover:bg-gray-600 truncate">
						{el.title}
					</div>
				</Link>
			))}
		</div>
	)
}
