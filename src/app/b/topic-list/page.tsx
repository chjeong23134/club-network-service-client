import styles from './page.module.scss'

export const metadata = {
	title: {
		default: "룸"
	},
	description: "모삼: 모임모두모아 모임찾기"
}

export default function TopicList() {
	const items = [{content: "어쩌구저쩌구1"},{content: "어쩌구저쩌구2"},{content: "어쩌구저쩌구3"},{content: "어쩌구저쩌구4"},{content: "어쩌구저쩌구5"}]

	return (
		<div className={styles.topicList}>
			{
				items.map(topic => (
					<div className={styles.item}>
						{topic.content}
					</div>
				))
			}
		</div>
	);
}