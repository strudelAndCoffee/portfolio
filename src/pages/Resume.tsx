import doc from '../assets/lib/resume.json';
import styles from '../css/resume.module.css';

export default function Resume() {
    return (
        <section className={styles.resume}>
            <div className={styles.container}>
                <article className={styles.card}>
                    {doc['Languages'].map(ln => (
                        <p>{ln}</p>
                    ))}
                </article>
                <article className={styles.card}>
                    {doc['Frameworks'].map(fw => (
                        <p>{fw}</p>
                    ))}
                </article>
                <article className={styles.card}>
                    {doc['Front End'].map(ss => (
                        <p>{ss}</p>
                    ))}
                </article>
                <article className={styles.card}>
                    {doc['Server Side'].map(ss => (
                        <p>{ss}</p>
                    ))}
                </article>
                <article className={styles.card}>
                    {doc['Databases'].map(ss => (
                        <p>{ss}</p>
                    ))}
                </article>
                <article className={styles.card}>
                    {doc['Deployment'].map(ss => (
                        <p>{ss}</p>
                    ))}
                </article>
                <article className={styles.card}>
                    {doc['DevOps'].map(ss => (
                        <p>{ss}</p>
                    ))}
                </article>
                <article className={styles.card}>
                    {doc['Acronym Soup'].map(ss => (
                        <p>{ss}</p>
                    ))}
                </article>
            </div>
        </section>
    )
}