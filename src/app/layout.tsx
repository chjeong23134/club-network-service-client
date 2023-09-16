import "./globals.scss";
//

import Nav from "@/components/nav";
//
//

export const metadata = {
	title: {
		default: "모삼: 모임모두모아",
		template: '%s | 모삼'
	},
	description: "모임, 동호회, 스터디 모두모아 이곳에",
	icons: {
		icon: '/icon.ico',
	}
}
//
//
//

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="kr">
			<body>
				<div className="app">
					<Nav />

					{children}
				</div>
			</body>
		</html>
	)
}
