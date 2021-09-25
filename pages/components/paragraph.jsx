import styles from './paragraph.module.css'

export default function Paragraph(props) {
  return <p className={styles.frame}>{props.children}</p>
}
