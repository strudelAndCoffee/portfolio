import { NavBarProps } from "../App";

export function Navbar({ setPage }: NavBarProps) {
    return (
        <nav>
            <button onClick={() => setPage("port")}>Portfolio</button>
            <button onClick={() => setPage("about")}>About</button>
            <button onClick={() => setPage("cert")}>Certification</button>
            <button onClick={() => setPage("resume")}>Resume</button>
            <button onClick={() => setPage("comm")}>Community</button>
            <button onClick={() => setPage("cont")}>Contact</button>
        </nav>
    )
}