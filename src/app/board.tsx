"use client"

import styles from './board.module.scss';
//

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';

import logo from '@/images/logo.png';
import { signin } from '@/apis/userApi';
import { jwtState, userState } from '@/consts/atom';
//
//

export default function Board() {
	const router = useRouter();

	const setUser = useSetRecoilState(userState);
    const setJwt = useSetRecoilState(jwtState);

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	//

	function signinHandler() {
		signin(email, password).then((res) => {
			localStorage.setItem("user", JSON.stringify(res.user));
			localStorage.setItem("jwt", res.accessJwt);

			setUser(res.user);
			setJwt(res.accessJwt);
			
			router.push("/b");
		});


	}
	//
	//

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
					<input onChange={(e) => setEmail(e.target.value)} placeholder="moim@modumoa.com" />
				</div>

				<div className={styles.labelWrapper}>
					<label>비밀번호</label>
					<input onChange={(e) => setPassword(e.target.value)} type='password' placeholder="********" />
				</div>

				<div className={styles.buttonWrapper}>
					<button className={styles.signButton} onClick={signinHandler}>로그인</button>
				</div>

				<div className={styles.buttonWrapper}>
					<p>아직 회원이 아니신가요?</p>
					<a href="signup">회원가입</a>
				</div>
			</div>
		</div>
	)
}