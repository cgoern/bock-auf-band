import styles from './button.module.css'
import Icon from './icon'

export default function Button({ href, label, title, theme, icon, blank }) {
  const target = blank ? '_blank' : '_self'

  return (
    <a
      className={`${styles.frame} ${styles[theme]} ${
        icon ? styles['has-icon'] : ''
      }`}
      href={href}
      title={title}
      target={target}
    >
      {icon && <Icon name={icon} />}
      {label}
    </a>
  )
}
