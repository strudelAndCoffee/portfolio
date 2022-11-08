export type NavBarProps = {
    setPage: React.Dispatch<React.SetStateAction<string>>
}

export function Navbar({ setPage }: NavBarProps) {
    return (
        <nav>
            <button className='navlink' onClick={() => setPage("port")}>Portfolio</button>
            <button className='navlink' onClick={() => setPage("about")}>About</button>
            <button className='navlink' onClick={() => setPage("cert")}>Certification</button>
            <button className='navlink' onClick={() => setPage("resume")}>Resume</button>
            <button className='navlink' onClick={() => setPage("comm")}>Community</button>
            <button className='navlink' onClick={() => setPage("cont")}>Contact</button>
        </nav>
    )
}