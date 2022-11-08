import { useState } from 'react'
import { FaBars, FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { Navbar, NavBarProps } from "./Navbar";

export function Header({ setPage }: NavBarProps) {
    const [ toggleMenu, setToggleMenu ] = useState(false)
    return (
        <header>
            <div className='site-title' onClick={() => setPage("home")}>
                <h1>Stephen Trudell</h1>
                <p>Full Stack Web Developer</p>
            </div>
            {toggleMenu && <Navbar setPage={setPage} />}
            <div className='nav-menu' onClick={() => setToggleMenu((prev) => !prev)}>
                {toggleMenu
                    ? (<FaAngleRight />)
                    : (<><FaAngleLeft /><FaBars /></>)
                }
            </div>
        </header>
    )
}