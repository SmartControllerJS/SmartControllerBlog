import styles from './Header.module.css'

export default function Header({ }) {
  return <h1 className={[styles.header, "fade"].join(" ")}>SmartController.js</h1>
}
