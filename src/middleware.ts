import { NextResponse, userAgent } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
	const { device } = userAgent(request)
	const isMobile = device.type === 'mobile'
	const url = request.nextUrl.clone()
	const pathname = url.pathname

	// ✅ 정적 리소스 및 API 제외
	if (
		pathname.startsWith('/_next') ||
		pathname.startsWith('/api') ||
		/\.(ico|png|jpg|jpeg|svg|js|css|map)$/.test(pathname)
	) {
		return NextResponse.next()
	}

	// ✅ 모바일이면 무조건 /mobile 로
	if (isMobile && pathname !== '/mobile') {
		url.pathname = '/mobile'
		return NextResponse.redirect(url)
	}

	// ✅ 데스크탑인데 /mobile 경로로 접근 시 → /desktop
	if (!isMobile && pathname.startsWith('/mobile')) {
		url.pathname = '/desktop'
		return NextResponse.redirect(url)
	}

	// ✅ 데스크탑인데 /desktop이 아니고 다른 경로면 → /desktop + 원래 경로
	if (!isMobile && !pathname.startsWith('/desktop')) {
		url.pathname = `/desktop${pathname}`
		return NextResponse.redirect(url)
	}

	// ✅ 나머지는 그대로
	return NextResponse.next()
}

export const config = {
	matcher: ['/((?!_next|api|favicon.ico).*)'],
}
