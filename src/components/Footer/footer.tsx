import style from './footer.module.css'

export function Footer() {
	return (
		// <div className={style.container}>
		<div className={'bg-black'}>
			<div className={style.box}>
				<div>
					개선사항 / 오류사항 / 서비스 기획 등 문의는 언제나 환영합니다. 모든
					데이터는 NEXON OPEN API를 통한 데이터 입니다.
				</div>
			</div>
		</div>
	)
}
