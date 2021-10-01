import styles from './box.module.css'

export default function Paragraph(props) {
  return <div className={styles.frame}>{props.children}</div>
}
