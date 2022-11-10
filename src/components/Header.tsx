import { useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
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
        <header>
            <div className='site-title' onClick={() => setPage("home")}>
                <h1>Stephen Trudell</h1>
            </div>
            {page !== 'home'
                ?
                    (<div className='current-page-container'>
                        <FaAngleRight />
                        <span className='current-page'>{pages[page]}</span>
                    </div>)
                :
                    (<></>)
            }
            {menuOpen
                ?
                    (<div className='nav-menu-arrow open' onClick={() => setMenuOpen((prev) => !prev)}>
                        <FaAngleLeft />
                    </div>)
                :
                    (<div className='nav-menu-arrow closed' onClick={() => setMenuOpen((prev) => !prev)}>
                        <FaAngleRight />
                    </div>)
            }
            {menuOpen && <Navbar setPage={setPage} />}
        </header>
    )
}