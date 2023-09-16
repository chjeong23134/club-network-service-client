import styles from './page.module.scss';
//

import Image from 'next/image';

import logo from '@/images/logo.png';
//
//

export const metadata = {
    title: {
        default: "회원가입"
    },
    description: "모삼: 모임모두모아 회원가입"
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
					<label>닉네임</label>
					<input placeholder="한글, 알파벳, 숫자를 조합하여 2~20자 사이로 입력해주세요." />
				</div>

				<div className={styles.labelWrapper}>
					<label>이메일</label>
					<input placeholder="moim@modumoa.com" />
				</div>

				<div className={styles.labelWrapper}>
					<label>비밀번호</label>
					<input placeholder="알파벳, 숫자를 조합하여 6자리 이상을 입력해주세요." />
				</div>

				<div className={styles.labelWrapper}>
					<label>비밀번호 확인</label>
					<input placeholder="알파벳, 숫자를 조합하여 6자리 이상을 입력해주세요." />
				</div>

				<div className={styles.buttonWrapper}>
					<button className={styles.signButton}>회원가입</button>
				</div>

				<div className={styles.buttonWrapper}>
					<p>이미 회원이 이신가요?</p>
					<a href="signin">로그인</a>
				</div>
			</div>
		</div>
	)
}