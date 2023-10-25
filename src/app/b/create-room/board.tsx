"use client"

import styles from "./board.module.scss";
//

import { useState } from "react";
import { useRecoilValue } from "recoil";
import { useRouter } from "next/navigation";

import { createRoom } from "@/apis/roomApi";
import { jwtState, userState } from "@/consts/atom";
//
//

export default function Board() {
	const router = useRouter();

	const user = useRecoilValue(userState);
	const jwt = useRecoilValue(jwtState);

	const [name, setName] = useState<string>("");
	//

	function createRoomHandler() {
		createRoom(jwt, name, user.id).then((res) => {
			router.push("/b/"+res.id);
		})
	}
	//
	//

	return (
		<div className={styles.createRoom}>
			<div className={styles.board}>
				<div className={styles.labelWrapper}>
					<label>룸 이름</label>
					<input onChange={(e) => setName(e.target.value)} placeholder="모임 모두모아" />
				</div>
				
				<button onClick={createRoomHandler}>생성</button>
			</div>
		</div>
	)
}