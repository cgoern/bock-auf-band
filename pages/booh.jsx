import Image from 'next/image'
import Box from './components/box'
import styles from './booh.module.css'
import boohImage from '../public/booh.gif'

export default function Index() {
  return (
    <div className={styles.frame}>
      <Box>
        <Image layout="responsive" src={boohImage} alt="Booh..." />
      </Box>
    </div>
  )
}
