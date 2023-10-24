"use client"

import styles from "./layout.module.scss";
//

import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";

import { RoomType, getRoomList } from "@/apis/roomApi";
import { jwtState, userState } from "@/consts/atom";
//
//

export default function BLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const user = useRecoilValue(userState);
	const jwt = useRecoilValue(jwtState);

	const [roomList, setRoomList] = useState<RoomType[]>([]);
	//
	useEffect(() => {
		getRoomList(jwt, user.id).then((res) => {
			setRoomList(res);
		})
	}, [])

	return (
		<div className={styles.BLayout}>
			<div className={styles.roomList}>
				<button>+</button>
				{roomList.map(room => (
					<div className={styles.item} key={room.id}>
						{room.name}
					</div>
				))}
			</div>
			{children}
		</div>
	)
}