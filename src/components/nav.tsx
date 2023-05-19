import styles from "./nav.module.scss";
import logo from "../images/logo.png";
import Image from "next/image";

export default function Nav() {
	return (
		<div className={styles.nav}>
			<div className={styles.menuWrapper}>
				<div className={styles.logo}>
					<Image src={logo}
					height={40}
					width={45}
					alt="logo" />
				</div>
			</div>
		</div>
	);
}