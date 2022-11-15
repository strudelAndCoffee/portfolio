import styles from '../css/header.module.css'

export type NavBarProps = {
    setPage: React.Dispatch<React.SetStateAction<string>>
}

export function Navbar({ setPage }: NavBarProps) {
    return (
        <nav className={styles.navbar}>
            <button className={styles.navlink} onClick={() => setPage("port")}>Portfolio</button>
            <button className={styles.navlink} onClick={() => setPage("about")}>About</button>
            <button className={styles.navlink} onClick={() => setPage("cert")}>Certification</button>
            <button className={styles.navlink} onClick={() => setPage("resume")}>Resume</button>
            <button className={styles.navlink} onClick={() => setPage("comm")}>Community</button>
            <button className={styles.navlink} onClick={() => setPage("cont")}>Contact</button>
        </nav>
    )
}