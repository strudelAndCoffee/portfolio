import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export function Footer() {
    return (
        <footer>
            <div className="footer-left">
                2022 Built with  by strudelAndCoffee
                <br />
                {/* Photo by <a href="https://unsplash.com/@csfoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Carlos Alfonso</a> on <a href="https://unsplash.com/s/photos/austin-texas?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>  */}
            </div>
            <div className="footer-right">
                <a href="https://github.com/strudelAndCoffee" target="_blank" rel="noreferrer" className="footer-link">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/stevie-trudell-atx/" target="_blank" rel="noreferrer" className="footer-link">
                    <FaLinkedin />
                </a>
                <a href="mailto:strudelandcoffee@gmail.com" target="_blank" rel="noreferrer" className="footer-link">
                    <FaEnvelope />
                </a>
            </div>
        </footer>
    )
}