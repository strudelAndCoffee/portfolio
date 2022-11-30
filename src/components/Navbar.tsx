import styles from '../css/header.module.css'

export type NavBarProps = {
    setPage: React.Dispatch<React.SetStateAction<string>>
    menuOpen: boolean
}

export function Navbar({ setPage, menuOpen }: NavBarProps) {
    return (
        <nav className={menuOpen ? `${styles.navbar} ${styles.open}` : styles.navbar}>
            <button className={styles.navlink} onClick={() => setPage("port")}>Portfolio</button>
            <button className={styles.navlink} onClick={() => setPage("about")}>About</button>
            <button className={styles.navlink} onClick={() => setPage("cert")}>Certification</button>
            <button className={styles.navlink} onClick={() => setPage("resume")}>Resume</button>
            <button className={styles.navlink} onClick={() => setPage("comm")}>Community</button>
            <button className={styles.navlink} onClick={() => setPage("cont")}>Contact</button>
        </nav>
    )
}