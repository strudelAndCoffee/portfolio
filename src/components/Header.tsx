import { Navbar } from "./Navbar";

export function Header() {
    return (
        <header>
            <div className='site-title' onClick={() => window.location.assign('/')}>
                <h1>Stephen Trudell</h1>
                <p>Full Stack Web Developer</p>
            </div>
            <Navbar />
        </header>
    )
}