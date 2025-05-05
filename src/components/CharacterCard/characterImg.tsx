'use client'

import Image from 'next/image'
import { useState } from 'react'

export function CharacterImg({
	character_image,
	character_name,
}: {
	character_image: string
	character_name: string
}) {
	const [random, setRandom] = useState<number>(10)

	const onChangePose = () => {
		const randomNum = Math.floor(Math.random() * (25 - 10 + 1)) + 10

		setRandom(randomNum)
	}

	return (
		<>
			<div
				className="absolute top-1 bg-[#2f2f2d89] z-100 text-white text-sm p-1 rounded-md cursor-pointer"
				onClick={onChangePose}
			>
				포즈 변경
			</div>
			<Image
				src={character_image + '?action=A' + random}
				alt={character_name + '의 캐릭터 이미지'}
				width={200}
				height={200}
				className="absolute z-100"
			/>
		</>
	)
}
