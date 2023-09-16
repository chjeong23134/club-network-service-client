import styles from './page.module.scss';
//

import Image from 'next/image';

import logo from '@/images/logo.png';
//
//

export const metadata = {
	title: {
		default: "로그인"
	},
	description: "모삼: 모임모두모아 로그인"
}
//
//
//

export default function SignIn() {
	return (
		<div className={styles.page}>
			<div className={styles.board}>
				<div className={styles.infoWrapper}>
					<div className={styles.logo}>
						<Image src={logo}
							height={150}
							width={200}
							alt="logo" />
					</div>

					<h2>모임모두모아에 오신것을 환영합니다.</h2>
					<p>원하는 모임을 찾아 함께 공유하는 플랫폼입니다.</p>
				</div>

				<div className={styles.labelWrapper}>
					<label>이메일</label>
					<input />
				</div>

				<div className={styles.labelWrapper}>
					<label>비밀번호</label>
					<input />
				</div>

				<div className={styles.buttonWrapper}>
					<button className={styles.signButton}>로그인</button>
				</div>

				<div className={styles.buttonWrapper}>
					<p>아직 회원이 아니신가요?</p>
					<a href="signup">회원가입</a>
				</div>
			</div>
		</div>
	)
}