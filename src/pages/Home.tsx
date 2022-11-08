import styles from '../css/home.module.css'

type HomeProps = {
    setPage: React.Dispatch<React.SetStateAction<string>>
}

export default function Home({ setPage }: HomeProps) {
    return (
        <section className={styles.container}>
            <article className={styles.card} onClick={() => setPage('port')}>
                Browse my portfolio
            </article>
            <article className={styles.card} onClick={() => setPage('resume')}>
                View my resume
            </article>
            <article className={styles.card} onClick={() => setPage('cont')}>
                Contact me
            </article>
        </section>
    )
}