import style from './page.module.css'
import { SearchBox } from '@/components/Search'

export default function Home() {
	return (
		<div className={style.container}>
			<SearchBox />
		</div>
	)
}
