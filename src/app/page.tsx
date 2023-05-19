import { Inter } from 'next/font/google'
import styles from './page.module.scss'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <div className={styles.page}>

            <Head>
                <title>모삼: 모임모두모아</title>
            </Head>
            Home
        </div>
    )
}
