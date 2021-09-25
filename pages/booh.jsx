import Head from 'next/head'
import Image from 'next/image'
import styles from './booh.module.css'
import boohImage from '../public/booh.gif'

export default function Index() {
  return (
    <div className={styles.frame}>
      <Head>
        <title>Bock auf Band?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.box}>
        <Image layout="responsive" src={boohImage} alt="Booh..." />
      </div>
    </div>
  )
}
