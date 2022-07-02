import styles from './SubHeader.module.css'

export default function SubHeader({title}) {
  return <h2 className={[styles.header, "fade"].join(" ")}>{title}</h2>
}
