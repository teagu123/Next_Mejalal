import { TypeStat } from '@/app/search/[nickname]/page'
import { HyperStat } from '../HyperStatList'

export function CharacterStat({
	getStat,
	ocid,
}: {
	getStat: TypeStat
	ocid: string
}) {
	const getStatVal = (key: string): string => {
		const index = getStat?.final_stat?.find(
			(el: { stat_name: string }) => el.stat_name === key,
		)
		return index ? index.stat_value : '-'
	}

	return (
		<div className="flex justify-end">
			<div className="bg-[#29292a] text-white rounded-lg p-5 w-160">
				<div className="text-[#f3cb38] text-xs font-bold mb-2 text-left">
					CHARACTER STAT
				</div>
				<div className="flex justify-between items-center mb-1 bg-[#333d57] p-2 rounded-lg text-[#d1d5db]">
					<div className="text-lg font-bold">전투력</div>
					<div className="text-md mr-10 font-bold text-[#f3c343]">
						{getStatVal('전투력')}
					</div>
					<div></div>
				</div>

				<div className="grid grid-cols-2 gap-2 mb-1 bg-[#424242] p-3 rounded-md text-sm text-[#d1d5db]">
					<div className="flex justify-between">
						<span className="font-semibold ">HP</span>
						<span>{getStatVal('HP')}</span>
					</div>
					<div className="flex justify-between">
						<span className="font-semibold">MP</span>
						<span>{getStatVal('MP')}</span>
					</div>
					<div className="flex justify-between">
						<span className="font-semibold">STR</span>
						<span>{getStatVal('STR')}</span>
					</div>
					<div className="flex justify-between">
						<span className="font-semibold">DEX</span>
						<span>{getStatVal('DEX')}</span>
					</div>
					<div className="flex justify-between">
						<span className="font-semibold">INT</span>
						<span>{getStatVal('INT')}</span>
					</div>
					<div className="flex justify-between">
						<span className="font-semibold">LUK</span>
						<span>{getStatVal('LUK')}</span>
					</div>
				</div>

				<div className="grid grid-cols-2 gap-2 mb-1 bg-[#424242] p-3 rounded-md text-sm text-[#d1d5db]">
					<div className="flex justify-between">
						<span className="font-semibold">스텟 공격력</span>
						<span>{getStatVal('최대 스탯공격력')}</span>
					</div>
					<div className="flex justify-between">
						<span className="font-semibold">데미지</span>
						<span>{getStatVal('데미지')}</span>
					</div>
					<div className="flex justify-between">
						<span className="font-semibold">최종 데미지</span>
						<span>{getStatVal('최종 데미지')}</span>
					</div>
					<div className="flex justify-between">
						<span className="font-semibold">보스 몬스터 데미지</span>
						<span>{getStatVal('보스 몬스터 데미지')}</span>
					</div>
					<div className="flex justify-between">
						<span className="font-semibold">방어율 무시</span>
						<span>{getStatVal('방어율 무시')}</span>
					</div>
					<div className="flex justify-between">
						<span className="font-semibold">일반 몬스터 데미지</span>
						<span>{getStatVal('일반 몬스터 데미지')}</span>
					</div>
					<div className="flex justify-between">
						<span className="font-semibold">공격력</span>
						<span>{getStatVal('공격력')}</span>
					</div>
					<div className="flex justify-between">
						<span className="font-semibold">크리티컬 확률</span>
						<span>{getStatVal('크리티컬 확률')}</span>
					</div>
					<div className="flex justify-between">
						<span className="font-semibold">마력</span>
						<span>{getStatVal('마력')}</span>
					</div>
					<div className="flex justify-between">
						<span className="font-semibold">크리티컬 데미지</span>
						<span>{getStatVal('크리티컬 데미지')}</span>
					</div>
					<div className="flex justify-between">
						<span className="font-semibold">재사용 대기시간 감소</span>
						<span>
							{getStatVal('재사용 대기시간 감소 (초)')}/
							{getStatVal('재사용 대기시간 감소 (%)')}
						</span>
					</div>
					<div className="flex justify-between">
						<span className="font-semibold">버프 지속시간</span>
						<span>{getStatVal('버프 지속시간')}</span>
					</div>
					<div className="flex justify-between">
						<span className="font-semibold">재사용 대기시간 미적용</span>
						<span>{getStatVal('재사용 대기시간 미적용')}</span>
					</div>
					<div className="flex justify-between">
						<span className="font-semibold">속성 내성 무시</span>
						<span>{getStatVal('속성 내성 무시')}</span>
					</div>
					<div className="flex justify-between">
						<span className="font-semibold">상태이상 추가 데미지</span>
						<span>{getStatVal('상태이상 추가 데미지')}</span>
					</div>
					<div className="flex justify-between">
						<span className="font-semibold">무기 숙련도</span>
						<span>{getStatVal('무기 숙련도')}</span>
					</div>
				</div>

				<div className="grid grid-cols-2 gap-2 mb-1 bg-[#424242] p-3 rounded-md text-sm text-[#d1d5db]">
					<div className="flex justify-between">
						<span className="font-semibold">메소 획득량</span>
						<span>{getStatVal('메소 획득량')}</span>
					</div>
					<div className="flex justify-between">
						<span className="font-semibold">스타포스</span>
						<span>{getStatVal('스타포스')}</span>
					</div>
					<div className="flex justify-between">
						<span className="font-semibold">아이템 드롭률</span>
						<span>{getStatVal('아이템 드롭률')}</span>
					</div>
					<div className="flex justify-between">
						<span className="font-semibold">아케인포스</span>
						<span>{getStatVal('아케인포스')}</span>
					</div>
					<div className="flex justify-between">
						<span className="font-semibold">추가 경험치 획득</span>
						<span>{getStatVal('추가 경험치 획득')}</span>
					</div>
					<div className="flex justify-between">
						<span className="font-semibold">어센틱포스</span>
						<span>{getStatVal('어센틱포스')}</span>
					</div>
				</div>
			</div>
			<div>
				<HyperStat ocid={ocid} />
			</div>
		</div>
	)
}
