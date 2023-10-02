import styles from './page.module.scss';

export const metadata = {
	title: {
		default: "룸"
	},
	description: "모삼: 모임모두모아 모임찾기"
}

export default function B() {
	return (
		<div className={styles.b}>
			<div>가입된 룸 없음</div>
		</div>
	);
}