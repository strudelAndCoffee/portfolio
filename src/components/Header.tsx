import Navbar from "./Navbar";

export default function Header() {
    return (
        <header>
            <div className='main-title' onClick={() => window.location.assign('/')}>
                <h1>Stephen Trudell</h1>
                <p>Full Stack Web Developer</p>
            </div>
            <Navbar />
        </header>
    )
}