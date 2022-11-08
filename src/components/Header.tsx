import { useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { Navbar, NavBarProps } from "./Navbar";

export function Header({ setPage }: NavBarProps) {
    const [ menuOpen, setMenuOpen ] = useState(false)
    return (
        <header>
            <div className='site-title' onClick={() => setPage("home")}>
                <h1>Stephen Trudell</h1>
            </div>
            {menuOpen
                ?
                    (<div className='nav-menu open' onClick={() => setMenuOpen((prev) => !prev)}>
                        <FaAngleLeft />
                    </div>)
                :
                    (<div className='nav-menu closed' onClick={() => setMenuOpen((prev) => !prev)}>
                        <FaAngleRight />
                    </div>)
            }
            {menuOpen && <Navbar setPage={setPage} />}
        </header>
    )
}