import Link from 'next/link'
import style from './gnb.module.css'

export function GNB() {
	return (
		<div className={style.container}>
			<div className={style.box}>
				<Link href={'/'}>LOGO</Link>
				<div></div>
			</div>
			<div className={style.box2}>
				<Link href={'/'}>탭1</Link>
				<Link href={'/'}>탭2</Link>
				<Link href={'/'}>탭3</Link>
			</div>
		</div>
	)
}
