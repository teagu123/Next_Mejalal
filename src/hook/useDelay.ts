export function useDelay(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms))
}
