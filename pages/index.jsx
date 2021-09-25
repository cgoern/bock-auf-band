import Head from 'next/head'
import styles from '../styles/index.module.css'

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bock auf Band?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Bock auf Band?</h1>
    </div>
  )
}
