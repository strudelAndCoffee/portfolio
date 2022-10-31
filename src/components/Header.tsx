import { NavBarProps } from "../App";
import { Navbar } from "./Navbar";

export function Header({ setPage }: NavBarProps) {
    return (
        <header>
            <div className='site-title' onClick={() => setPage("home")}>
                <h1>Stephen Trudell</h1>
                <p>Full Stack Web Developer</p>
            </div>
            <Navbar setPage={setPage} />
        </header>
    )
}