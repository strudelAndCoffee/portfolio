import { useState } from 'react'
import { FaBars, FaAngleDown } from 'react-icons/fa'
import styles from '../css/header.module.css'

import { Navbar } from "./Navbar";

type HeaderProps = {
    page: string
    setPage: React.Dispatch<React.SetStateAction<string>>
}
type PagesType = {
    [str: string]: string
}
const pages: PagesType = {
    port: 'PORTFOLIO',
    about: 'ABOUT',
    cert: 'CERTIFICATION',
    resume: 'RESUME',
    comm: 'COMMUNITY',
    cont: 'CONTACT'
}

export function Header({ page, setPage }: HeaderProps) {
    const [ menuOpen, setMenuOpen ] = useState(false)

    return (
        <header className={styles.header}>
            <div className={`${styles['header-row']} ${styles['left']}`}>
                <h1 className={styles['site-title']} onClick={() => setPage("home")}>Stephen Trudell</h1>
                {page !== 'home'
                    ? (
                        <div className={styles['current-page']}>{pages[page]}</div>
                    ) : (
                        <></>
                    )
                }
            </div>
            <div className={`${styles['header-row']} ${styles['right']}`}>
                <Navbar setPage={setPage} menuOpen={menuOpen} />
                {menuOpen
                    ? (
                        <div
                            className={`${styles['nav-menu']} ${styles.open}`}
                            onClick={() => setMenuOpen((prev) => !prev)}
                        ><FaAngleDown />
                        </div>
                    ) : (
                        <div
                            className={`${styles['nav-menu']} ${styles.closed}`}
                            onClick={() => setMenuOpen((prev) => !prev)}
                        ><FaBars />
                        </div>
                    )
                }
            </div>
        </header>
    )
}