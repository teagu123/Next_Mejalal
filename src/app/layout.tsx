import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: '메잘알 - 메이플스토리 전적 검색 서비스',
	description:
		'메이플스토리 캐릭터 검색은 메잘알을 통해서 가능합니다. Nexon Open Api 사용하여 캐릭터 검색, 길드 검색과 같은 메이플스토리에 커뮤니티 활성화를 지원하는 서비스입니다.',
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="ko">
			<body className="bg-[#3e3e3e]">{children}</body>
		</html>
	)
}
