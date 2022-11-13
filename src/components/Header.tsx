import { useState } from 'react'
import { FaAngleLeft, FaAngleRight, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
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
            <div className={styles['site-title']} onClick={() => setPage("home")}>
                <h1>Stephen Trudell</h1>
            </div>
            {page !== 'home'
                ? (
                    <div className={styles['current-page-container']}>
                        <span className={styles['current-page']}>{pages[page]}</span>
                    </div>
                ) : (
                    <></>
                )
            }
            <div className={styles['navbar-container']}>
                {menuOpen
                    ? (
                        <div className={`${styles['nav-menu-arrow']} ${styles.open}`} onClick={() => setMenuOpen((prev) => !prev)}>
                            <FaAngleLeft />
                        </div>
                    ) : (
                        <div className={`${styles['nav-menu-arrow']} ${styles.closed}`} onClick={() => setMenuOpen((prev) => !prev)}>
                            <FaAngleRight />
                        </div>
                    )
                }
                {menuOpen && <Navbar setPage={setPage} />}
            </div>
            <div className={styles['ext-links-container']}>
                <a href="https://github.com/strudelAndCoffee" target="_blank" rel="noreferrer" className={styles['ext-link']}>
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/stevie-trudell-atx/" target="_blank" rel="noreferrer" className={styles['ext-link']}>
                    <FaLinkedin />
                </a>
                <a href="mailto:strudelandcoffee@gmail.com" target="_blank" rel="noreferrer" className={styles['ext-link']}>
                    <FaEnvelope />
                </a>
            </div>
        </header>
    )
}