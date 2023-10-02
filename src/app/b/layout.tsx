import styles from "./layout.module.scss";

export default function BLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const items = [{id: 1, name: "room1"},{id: 2, name: "room2 room2 room2"},{id: 3, name: "room3"},{id: 4, name: "room4"},{id: 5, name: "room5"},{id: 6, name: "room6"}]
	
	return (
		<div className={styles.BLayout}>
			<div className={styles.roomList}>
				<button>+</button>
				{items.map(room => (
					<div className={styles.item} key={room.id}>
						{room.name}
					</div>
				))}
			</div>
			{children}
		</div>
	)
}

// 나의 모임(+ 모임만들기) | 모임 찾기
// 