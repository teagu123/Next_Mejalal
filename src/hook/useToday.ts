import { useMemo } from 'react'

export const useToday = () => {
	const today = useMemo(() => {
		const now = new Date()
		const year = now.getFullYear()
		const month = String(now.getMonth() + 1).padStart(2, '0')
		const date = String(now.getDate()).padStart(2, '0')
		return `${year}-${month}-${date}`
	}, [])

	return today
}
