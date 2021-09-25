import styles from './icon.module.css'

export default function Icon({ name }) {
  return (
    <svg className={styles.frame}>
      <use href={`#glyph-${name}`}></use>
    </svg>
  )
}
