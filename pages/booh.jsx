import Head from 'next/head'
import Image from 'next/image'
import Box from './components/box'
import styles from './booh.module.css'
import boohImage from '../public/booh.gif'

export default function Index() {
  return (
    <div className={styles.frame}>
      <Head>
        <title>Bock auf Band?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Image layout="responsive" src={boohImage} alt="Booh..." />
      </Box>
    </div>
  )
}
