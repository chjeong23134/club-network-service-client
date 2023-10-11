import styles from "./page.module.scss";
//

export const metadata = {
	title: {
		default: "모임만들기"
	},
	description: "모삼: 모임모두모아"
}
//
//
//

export default function CreateRoom() {
	return (
		<div className={styles.createRoom}>
			<div className={styles.board}>
				<div className={styles.labelWrapper}>
					<label>룸 이름</label>
					<input />
				</div>
				
				<button>생성</button>
			</div>
		</div>
	);
}
