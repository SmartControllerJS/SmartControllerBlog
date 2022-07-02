import styles from './Navbar.module.css'

export default function Navbar({ }) {
  return (
    <>
        <nav className={styles.topnav}>
            <ul>
                <li><a href="dummy">Contact</a></li>
                <li>University of Glasgow</li>
            </ul>
        </nav>
    </>
  )
}
