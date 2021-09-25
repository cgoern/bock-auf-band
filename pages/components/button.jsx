import React from 'react'
import styles from './button.module.css'
import Icon from './icon'

export default React.forwardRef(
  ({ onClick, href, label, title, theme, icon, blank }, ref) => {
    const target = blank ? '_blank' : '_self'

    return (
      <a
        className={`${styles.frame} ${styles[theme]} ${
          icon ? styles['has-icon'] : ''
        }`}
        href={href}
        title={title}
        onClick={onClick}
        ref={ref}
        target={target}
      >
        {icon && <Icon name={icon} />}
        {label}
      </a>
    )
  }
)
