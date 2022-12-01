import { FaHeart, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

export function Footer() {
    return (
        <footer>
            <div className='footer-left'>
                Built with <FaHeart /> by strudelAndCoffee <small>2022</small>
            </div>
            <div className='footer-right'>
                <a href="https://github.com/strudelAndCoffee" target="_blank" rel="noreferrer" className='ext-link'>
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/stevie-trudell-atx/" target="_blank" rel="noreferrer" className='ext-link'>
                    <FaLinkedin />
                </a>
                <a href="mailto:strudelandcoffee@gmail.com" target="_blank" rel="noreferrer" className='ext-link'>
                    <FaEnvelope />
                </a>
            </div>
        </footer>
    )
}

{/* Photo by <a href="https://unsplash.com/@csfoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Carlos Alfonso</a> on <a href="https://unsplash.com/s/photos/austin-texas?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>  */}